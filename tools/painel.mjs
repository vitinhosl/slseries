/* =====================================================================
   painel.mjs — servidor local do painel de catálogo.

   O painel lê os dados reais de resources/episodes/ com import(), e módulo
   ES não carrega por file:// — o navegador bloqueia. Por isso o painel
   precisa ser aberto por http, e é só isso que este arquivo faz: serve a
   pasta do projeto em localhost. Nada é escrito em disco por aqui.

   Uso: node tools/painel.mjs   →  http://localhost:4123/tools/painel.html
        node tools/painel.mjs --porta 8080

   Se você já abre o site por outro servidor (Live Server do VS Code, por
   exemplo), não precisa deste arquivo: abra /tools/painel.html por lá.
   ===================================================================== */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, normalize, sep } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

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
  '.woff2':'font/woff2',
};

const responder = (res, status, corpo, tipo = 'text/plain; charset=utf-8') => {
  res.writeHead(status, { 'content-type': tipo, 'cache-control': 'no-store' });
  res.end(corpo);
};

const servidor = createServer(async (req, res) => {
  let caminhoUrl;
  try {
    caminhoUrl = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return responder(res, 400, '400 — endereço inválido');
  }

  if (caminhoUrl === '/') caminhoUrl = '/tools/painel.html';

  // Impede que ".." saia da pasta do projeto.
  const alvo = normalize(join(root, caminhoUrl));
  if (alvo !== root && !alvo.startsWith(root + sep)) {
    return responder(res, 403, '403 — fora da pasta do projeto');
  }

  try {
    const info = await stat(alvo);
    const arquivo = info.isDirectory() ? join(alvo, 'index.html') : alvo;
    const corpo = await readFile(arquivo);
    responder(res, 200, corpo, TIPOS[extname(arquivo).toLowerCase()] || 'application/octet-stream');
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

servidor.listen(PORTA, () => {
  console.log(`\n  Painel:  http://localhost:${PORTA}/tools/painel.html`);
  console.log(`  Site:    http://localhost:${PORTA}/index.html`);
  console.log(`\n  Ctrl+C para parar.\n`);
});
