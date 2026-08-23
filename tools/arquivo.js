/* =====================================================================
   arquivo.js — leitura e edição cirúrgica dos arquivos de dados.

   Os arquivos de resources/episodes/all/ são escritos à mão: têm
   comentários (//NOME DA SÉRIE), alinhamento de colunas e uma ordem
   pensada. Reserializar o objeto com JSON.stringify destruiria tudo
   isso. Então aqui nada é reserializado: o arquivo é tratado como
   TEXTO e só os pedaços necessários são trocados.

   Duas garantias que o resto do painel depende:
     • completar() só troca campo que está vazio ("") — nunca sobrescreve
       valor que já existe;
     • o campo url jamais é tocado, em nenhuma situação.
   ===================================================================== */

const FECHAMENTO = { '[': ']', '{': '}' };

/* ---------------------------------------------------------------------
   Varredura — precisa pular strings e comentários, senão um "]" dentro
   de uma sinopse fecharia o bloco errado.
   --------------------------------------------------------------------- */

function fimDaString(texto, inicio) {
  const aspa = texto[inicio];
  for (let i = inicio + 1; i < texto.length; i++) {
    if (texto[i] === '\\') { i++; continue; }
    if (texto[i] === aspa) return i;
  }
  return texto.length - 1;
}

/** Recebe o índice de um "[" ou "{" e devolve o índice do fechamento dele. */
export function fimDoBloco(texto, inicio) {
  const abre = texto[inicio];
  const fecha = FECHAMENTO[abre];
  if (!fecha) throw new Error(`esperava [ ou { na posição ${inicio}, achei ${texto[inicio]}`);

  let profundidade = 0;
  for (let i = inicio; i < texto.length; i++) {
    const c = texto[i];
    if (c === '/' && texto[i + 1] === '/') {
      const quebra = texto.indexOf('\n', i);
      if (quebra === -1) break;
      i = quebra;
      continue;
    }
    if (c === '/' && texto[i + 1] === '*') {
      const fim = texto.indexOf('*/', i + 2);
      i = fim === -1 ? texto.length : fim + 1;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { i = fimDaString(texto, i); continue; }
    if (c === abre) profundidade++;
    else if (c === fecha && --profundidade === 0) return i;
  }
  throw new Error(`bloco aberto na posição ${inicio} não fecha`);
}

/** Objetos "{...}" no primeiro nível de uma lista, ignorando comentários. */
function objetosDaLista(texto, abre, fecha) {
  const achados = [];
  let i = abre + 1;
  while (i < fecha) {
    const c = texto[i];
    if (c === '/' && texto[i + 1] === '/') {
      const quebra = texto.indexOf('\n', i);
      i = quebra === -1 ? fecha : quebra + 1;
      continue;
    }
    if (c === '/' && texto[i + 1] === '*') {
      const fim = texto.indexOf('*/', i + 2);
      i = fim === -1 ? fecha : fim + 2;
      continue;
    }
    if (c === '{') {
      const fimObjeto = fimDoBloco(texto, i);
      achados.push({ inicio: i, fim: fimObjeto });
      i = fimObjeto + 1;
      continue;
    }
    i++;
  }
  return achados;
}

const textoDe = (bloco, campo) => {
  const achado = bloco.match(new RegExp(`\\b${campo}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
  return achado ? achado[1].replace(/\\(["\\])/g, '$1') : null;
};

/* ---------------------------------------------------------------------
   Leitura da estrutura
   --------------------------------------------------------------------- */

/** Grupos de um arquivo: [{ nome, abre, fecha }] — posições da lista group. */
export function lerGrupos(texto) {
  const grupos = [];
  const marcador = /\bgroup_name:\s*"((?:[^"\\]|\\.)*)"/g;
  let achado;
  while ((achado = marcador.exec(texto))) {
    const posGroup = texto.indexOf('group:', achado.index);
    if (posGroup === -1) continue;
    const abre = texto.indexOf('[', posGroup);
    if (abre === -1) continue;
    try {
      grupos.push({ nome: achado[1], abre, fecha: fimDoBloco(texto, abre) });
    } catch { /* grupo malformado: ignora em vez de derrubar o painel */ }
  }
  return grupos;
}

/** Séries de um grupo: [{ nome, inicio, fim }] — posições no texto inteiro. */
export function lerSeries(texto, grupo) {
  return objetosDaLista(texto, grupo.abre, grupo.fecha).map((pos) => ({
    nome: textoDe(texto.slice(pos.inicio, pos.fim + 1), 'name') || '(sem nome)',
    inicio: pos.inicio,
    fim: pos.fim,
  }));
}

const ehLinhaDeEpisodio = (linha) => /^\s*\{\s*title:\s*"/.test(linha) && /\},?\s*$/.test(linha);

/**
 * Temporadas de uma série, com a posição exata de cada linha de episódio.
 * As linhas de episódio são de uma linha só nos arquivos, o que permite
 * trocar uma sem tocar em nenhuma outra.
 */
export function lerTemporadas(texto, serie) {
  const bloco = texto.slice(serie.inicio, serie.fim + 1);
  const marcador = bloco.search(/\bseason:\s*\[/);
  if (marcador === -1) return [];

  const abre = bloco.indexOf('[', marcador);
  const fecha = fimDoBloco(bloco, abre);

  return objetosDaLista(bloco, abre, fecha).map((pos) => {
    const blocoTemporada = bloco.slice(pos.inicio, pos.fim + 1);
    const episodios = [];

    let deslocamento = pos.inicio;
    for (const linha of blocoTemporada.split('\n')) {
      if (ehLinhaDeEpisodio(linha)) {
        episodios.push({
          // Posições absolutas no arquivo, prontas para a troca.
          inicio: serie.inicio + deslocamento,
          fim: serie.inicio + deslocamento + linha.length,
          linha,
          title: textoDe(linha, 'title') || '',
          subtitle: textoDe(linha, 'subtitle'),
          duration: textoDe(linha, 'duration'),
          thumb: textoDe(linha, 'thumb'),
        });
      }
      deslocamento += linha.length + 1;
    }

    return {
      nome: textoDe(blocoTemporada, 'name') || 'Temporada',
      thumb_season: textoDe(blocoTemporada, 'thumb_season'),
      episodios,
    };
  });
}

/* ---------------------------------------------------------------------
   Comparação com a fonte externa
   --------------------------------------------------------------------- */

const CAMPOS = ['subtitle', 'duration', 'thumb'];

/**
 * Compara os episódios do catálogo com os da fonte e devolve só o que
 * dá para preencher. Campo que já tem valor, ou que não existe na linha,
 * fica de fora. O url nunca entra aqui.
 */
export function planejarPreenchimento(temporadas, episodiosDaFonte) {
  const porNumero = new Map();
  for (const ep of episodiosDaFonte) porNumero.set(`${ep.temporada}-${ep.numero}`, ep);

  const trocas = [];
  const contagem = { subtitle: 0, duration: 0, thumb: 0, semFonte: 0, jaPreenchido: 0 };

  temporadas.forEach((temporada, indiceTemporada) => {
    temporada.episodios.forEach((episodio, indiceEpisodio) => {
      // O número no título manda; sem ele, cai para a posição na lista.
      const doTitulo = (episodio.title.match(/(\d+)\s*$/) || [])[1];
      const numero = doTitulo ? Number(doTitulo) : indiceEpisodio + 1;
      const daFonte = porNumero.get(`${indiceTemporada + 1}-${numero}`);

      if (!daFonte) { contagem.semFonte++; return; }

      const valores = {};
      for (const campo of CAMPOS) {
        const atual = episodio[campo];
        if (atual === null) continue;                 // campo não existe nessa linha
        if (atual !== '') { contagem.jaPreenchido++; continue; }  // já preenchido: não mexe
        const novo = daFonte[campo];
        if (novo) { valores[campo] = novo; contagem[campo]++; }
      }

      if (Object.keys(valores).length) {
        trocas.push({
          inicio: episodio.inicio,
          fim: episodio.fim,
          antes: episodio.linha,
          depois: aplicarNaLinha(episodio.linha, valores),
          titulo: episodio.title,
          temporada: temporada.nome,
          valores,
        });
      }
    });
  });

  return { trocas, contagem };
}

const escaparAspas = (txt) => String(txt).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

/** Troca só os campos que estão como "" na linha. */
export function aplicarNaLinha(linha, valores) {
  let nova = linha;
  for (const [campo, valor] of Object.entries(valores)) {
    if (!valor) continue;
    nova = nova.replace(new RegExp(`(\\b${campo}:\\s*)""`), `$1"${escaparAspas(valor)}"`);
  }
  return nova;
}

/* ---------------------------------------------------------------------
   Escrita
   --------------------------------------------------------------------- */

/** Aplica as trocas de trás para frente, senão as posições saem do lugar. */
export function aplicarTrocas(texto, trocas) {
  return [...trocas]
    .sort((a, b) => b.inicio - a.inicio)
    .reduce((acc, t) => acc.slice(0, t.inicio) + t.depois + acc.slice(t.fim), texto);
}

/** Insere uma série nova no fim do grupo, mantendo o recuo do arquivo. */
export function inserirSerie(texto, grupo, bloco) {
  const fecha = grupo.fecha;
  const inicioDaLinha = texto.lastIndexOf('\n', fecha) + 1;
  const recuo = texto.slice(inicioDaLinha, fecha).match(/^\s*/)[0];
  const anterior = texto.slice(0, fecha).replace(/\s*$/, '');
  const separador = anterior.endsWith(',') ? '\n\n' : ',\n\n';
  return anterior + separador + bloco + '\n' + recuo + texto.slice(fecha);
}

/** Insere temporadas no fim do season: [ ... ] de uma série já existente. */
export function inserirTemporadas(texto, serie, bloco) {
  const relativo = texto.slice(serie.inicio, serie.fim + 1);
  const marcador = relativo.search(/\bseason:\s*\[/);
  if (marcador === -1) throw new Error('essa série não tem season: [ ... ]');

  const abre = relativo.indexOf('[', marcador);
  const fecha = serie.inicio + fimDoBloco(relativo, abre);
  const inicioDaLinha = texto.lastIndexOf('\n', fecha) + 1;
  const recuo = texto.slice(inicioDaLinha, fecha).match(/^\s*/)[0];
  const anterior = texto.slice(0, fecha).replace(/\s*$/, '');
  const separador = anterior.endsWith(',') ? '\n\n' : ',\n\n';
  return anterior + separador + bloco + '\n' + recuo + texto.slice(fecha);
}
