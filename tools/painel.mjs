/* =====================================================================
   painel.mjs — servidor local do painel.

   Faz duas coisas:

     1. serve a pasta do projeto em localhost, porque o painel lê os
        dados com import() e o navegador bloqueia módulo aberto por
        file://;

     2. expõe uma API mínima para o painel gravar os arquivos de dados.
        Só responde em localhost, e só escreve dentro de
        resources/episodes/all/ (mais o index.js, ao criar categoria).

   Toda escrita gera uma cópia do arquivo original em tools/.backups/
   antes de tocar no original.

   Uso: node tools/painel.mjs   →  http://localhost:4123/tools/painel.html
        node tools/painel.mjs --porta 8080

   Aberto pelo GitHub Pages, o painel funciona igual, menos o gravar:
   lá ele mostra o bloco pronto para copiar.
   ===================================================================== */
import { createServer } from 'node:http';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, normalize, sep } from 'node:path';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');
const PASTA_DADOS = join(raiz, 'resources', 'episodes', 'all');
const INDICE = join(raiz, 'resources', 'episodes', 'index.js');
const BACKUPS = join(aqui, '.backups');

const argPorta = process.argv.indexOf('--porta');
const PORTA = Number(argPorta > -1 ? process.argv[argPorta + 1] : process.env.PORT) || 4123;

const TIPOS = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.mjs':  'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.ico':  'image/x-icon',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const responder = (res, status, corpo, tipo = 'text/plain; charset=utf-8') => {
  res.writeHead(status, { 'content-type': tipo, 'cache-control': 'no-store' });
  res.end(corpo);
};

const responderJson = (res, status, objeto) =>
  responder(res, status, JSON.stringify(objeto), 'application/json; charset=utf-8');

/* ---------------------------------------------------------------------
   Guardas — o painel é uma ferramenta local, mas nada custa fechar as
   portas óbvias.
   --------------------------------------------------------------------- */
const NOME_VALIDO = /^[a-z0-9_-]+\.js$/i;
const EXPORT_VALIDO = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

const ehLocal = (req) => {
  const endereco = req.socket.remoteAddress || '';
  return endereco === '127.0.0.1' || endereco === '::1' || endereco === '::ffff:127.0.0.1';
};

async function lerCorpo(req, limite = 20 * 1024 * 1024) {
  const pedacos = [];
  let tamanho = 0;
  for await (const pedaco of req) {
    tamanho += pedaco.length;
    if (tamanho > limite) throw new Error('corpo grande demais');
    pedacos.push(pedaco);
  }
  return JSON.parse(Buffer.concat(pedacos).toString('utf8'));
}

const existe = (caminho) => stat(caminho).then(() => true, () => false);

async function guardarCopia(caminho, nome) {
  if (!(await existe(caminho))) return null;
  await mkdir(BACKUPS, { recursive: true });
  const carimbo = new Date().toISOString().replace(/[:.]/g, '-');
  const destino = join(BACKUPS, `${nome}.${carimbo}.bak`);
  await writeFile(destino, await readFile(caminho));
  return destino;
}

/* ---------------------------------------------------------------------
   API
   --------------------------------------------------------------------- */
async function salvarDados(req, res) {
  const { arquivo, conteudo } = await lerCorpo(req);

  if (!NOME_VALIDO.test(arquivo || '')) return responderJson(res, 400, { erro: 'nome de arquivo inválido' });
  if (typeof conteudo !== 'string' || !conteudo.trim()) return responderJson(res, 400, { erro: 'conteúdo vazio' });

  const destino = join(PASTA_DADOS, arquivo);
  if (!(await existe(destino))) return responderJson(res, 404, { erro: `${arquivo} não existe` });

  const copia = await guardarCopia(destino, arquivo);
  await writeFile(destino, conteudo, 'utf8');
  console.log(`  gravado: resources/episodes/all/${arquivo}  (cópia em tools/.backups/)`);
  responderJson(res, 200, { ok: true, backup: copia ? copia.replace(raiz + sep, '') : null });
}

/** Cria o arquivo da categoria nova e registra em index.js. */
async function criarCategoria(req, res) {
  const { arquivo, exportName, rotulo } = await lerCorpo(req);

  if (!NOME_VALIDO.test(arquivo || '')) return responderJson(res, 400, { erro: 'nome de arquivo inválido' });
  if (!EXPORT_VALIDO.test(exportName || '')) return responderJson(res, 400, { erro: 'nome de export inválido' });
  if (!String(rotulo || '').trim()) return responderJson(res, 400, { erro: 'informe o nome da categoria' });

  const destino = join(PASTA_DADOS, arquivo);
  if (await existe(destino)) return responderJson(res, 409, { erro: `${arquivo} já existe` });

  const indice = await readFile(INDICE, 'utf8');
  if (indice.includes(exportName)) return responderJson(res, 409, { erro: `${exportName} já está no index.js` });

  const modelo = `export const ${exportName} = [\n`
    + `    {\n`
    + `        group_name: "${rotulo.replace(/"/g, '\\"')}",\n`
    + `        visible: true,\n`
    + `        group: [\n`
    + `        ]\n`
    + `    }\n`
    + `]\n`;

  // index.js: import novo depois do último, nome na lista de export e no seriesAll.
  const imports = [...indice.matchAll(/^import .+$/gm)];
  if (!imports.length) return responderJson(res, 500, { erro: 'não achei os imports no index.js' });
  const ultimo = imports[imports.length - 1];
  const posicao = ultimo.index + ultimo[0].length;

  let novoIndice = indice.slice(0, posicao)
    + `\nimport { ${exportName} } from './all/${arquivo}';`
    + indice.slice(posicao);

  novoIndice = novoIndice.replace(/export \{([^}]*)\}/, (_, lista) => `export {${lista.replace(/\s*$/, '')}, ${exportName}}`);
  novoIndice = novoIndice.replace(/(export const seriesAll = \[[\s\S]*?)\n\]/, `$1\n  ...${exportName},\n]`);

  await guardarCopia(INDICE, 'index.js');
  await writeFile(destino, modelo, 'utf8');
  await writeFile(INDICE, novoIndice, 'utf8');
  console.log(`  categoria criada: ${arquivo} (${exportName}) e registrada no index.js`);
  responderJson(res, 200, { ok: true });
}

/* ---------------------------------------------------------------------
   Servidor
   --------------------------------------------------------------------- */
const servidor = createServer(async (req, res) => {
  let caminhoUrl;
  try {
    caminhoUrl = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return responder(res, 400, '400 — endereço inválido');
  }

  if (caminhoUrl.startsWith('/api/')) {
    if (!ehLocal(req)) return responderJson(res, 403, { erro: 'a API só responde no seu computador' });
    try {
      if (caminhoUrl === '/api/status') return responderJson(res, 200, { local: true, porta: PORTA });
      if (caminhoUrl === '/api/salvar' && req.method === 'POST') return await salvarDados(req, res);
      if (caminhoUrl === '/api/categoria' && req.method === 'POST') return await criarCategoria(req, res);
      return responderJson(res, 404, { erro: 'rota desconhecida' });
    } catch (erro) {
      console.error('  erro na API:', erro.message);
      return responderJson(res, 500, { erro: erro.message });
    }
  }

  // Redireciona em vez de servir o painel aqui: em "/" os caminhos
  // relativos do painel (painel.js, painel.css) apontariam para a raiz.
  if (caminhoUrl === '/') {
    res.writeHead(302, { location: '/tools/painel.html' });
    return res.end();
  }

  const alvo = normalize(join(raiz, caminhoUrl));
  if (alvo !== raiz && !alvo.startsWith(raiz + sep)) {
    return responder(res, 403, '403 — fora da pasta do projeto');
  }

  try {
    const info = await stat(alvo);
    const arquivo = info.isDirectory() ? join(alvo, 'index.html') : alvo;
    responder(res, 200, await readFile(arquivo), TIPOS[extname(arquivo).toLowerCase()] || 'application/octet-stream');
  } catch {
    responder(res, 404, `404 — não achei ${caminhoUrl}`);
  }
});

servidor.on('error', (erro) => {
  if (erro.code === 'EADDRINUSE') {
    console.error(`\n  A porta ${PORTA} já está ocupada.`);
    console.error(`  Tente outra: node tools/painel.mjs --porta ${PORTA + 1}\n`);
    process.exit(1);
  }
  throw erro;
});

servidor.listen(PORTA, '127.0.0.1', () => {
  console.log(`\n  Painel:  http://localhost:${PORTA}/tools/painel.html`);
  console.log(`  Site:    http://localhost:${PORTA}/index.html`);
  console.log(`\n  Gravação liberada. Cópias de segurança em tools/.backups/`);
  console.log(`  Ctrl+C para parar.\n`);
});
