/* =====================================================================
   painel.js — controlador do painel.

   Fluxo curto:
     • lê o catálogo direto de resources/episodes/index.js;
     • descobre as categorias pelos imports do index.js, então categoria
       criada aqui aparece sozinha depois de recarregar;
     • ao procurar uma série na fonte, avisa se ela já está no catálogo e
       oferece completar em vez de duplicar;
     • completar só preenche campo vazio, e nunca toca em url.
   ===================================================================== */
import { FONTES } from './fontes.js';
import * as Arq from './arquivo.js';

const $ = (sel) => document.querySelector(sel);
const criar = (tag, props = {}) => Object.assign(document.createElement(tag), props);
const numero = (n) => Number(n || 0).toLocaleString('pt-BR');

const CAMINHO_DADOS = '../resources/episodes/all/';
const CAMINHO_INDICE = '../resources/episodes/index.js';

const estado = {
  local: false,
  categorias: [],
  series: [],
  fonte: 'tvmaze',
  intencao: null,   // { tipo: 'completar', entrada } enquanto vem do catálogo
  escolhido: null,  // detalhes da série na fonte
};

/* =====================================================================
   Enfeites de casca: tema, abas, modal
   ===================================================================== */
const tema = $('#tema');
tema.value = document.documentElement.dataset.theme || 'default';
tema.addEventListener('change', () => {
  document.documentElement.dataset.theme = tema.value;
  try { localStorage.setItem('theme', tema.value); } catch { /* modo anônimo */ }
});

document.querySelectorAll('.aba').forEach((aba) => {
  aba.addEventListener('click', () => trocarAba(aba.dataset.painel));
});

function trocarAba(qual) {
  document.querySelectorAll('.aba').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.painel === qual)));
  $('#painel-catalogo').hidden = qual !== 'catalogo';
  $('#painel-adicionar').hidden = qual !== 'adicionar';
}

const modal = {
  abrir(titulo, corpo, rodape = []) {
    $('#modal-titulo').textContent = titulo;
    $('#modal-corpo').replaceChildren(...(Array.isArray(corpo) ? corpo : [corpo]));
    $('#modal-rodape').replaceChildren(...rodape);
    $('#fundo-modal').classList.add('aberto');
  },
  fechar() { $('#fundo-modal').classList.remove('aberto'); },
  recado(texto, erro = false) {
    const span = criar('span', { className: 'recado' + (erro ? ' recado-erro' : ''), textContent: texto });
    const atual = $('#modal-rodape').querySelector('.recado');
    if (atual) atual.replaceWith(span); else $('#modal-rodape').prepend(span);
  },
};

$('#modal-fechar').addEventListener('click', () => modal.fechar());
$('#fundo-modal').addEventListener('click', (e) => { if (e.target === $('#fundo-modal')) modal.fechar(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.fechar(); });

const botao = (texto, aoClicar, forte = false) => {
  const b = criar('button', { className: 'acao' + (forte ? ' forte' : ''), textContent: texto });
  b.addEventListener('click', aoClicar);
  return b;
};

/* =====================================================================
   Modo de gravação
   ===================================================================== */
async function descobrirModo() {
  try {
    const r = await fetch('/api/status');
    estado.local = r.ok;
  } catch { estado.local = false; }

  const selo = $('#selo-modo');
  selo.textContent = estado.local ? 'gravação liberada' : 'modo consulta';
  selo.classList.toggle('ligado', estado.local);
  selo.title = estado.local
    ? 'Servidor local no ar: o painel grava nos arquivos e guarda cópia em tools/.backups/'
    : 'Sem servidor local: o painel mostra o bloco pronto e deixa baixar o arquivo alterado. Rode node tools/painel.mjs para gravar direto.';
}

async function gravar(arquivo, conteudo) {
  const r = await fetch('/api/salvar', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ arquivo, conteudo }),
  });
  const resposta = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(resposta.erro || `falha ao gravar (${r.status})`);
  return resposta;
}

function baixar(nome, conteudo) {
  const url = URL.createObjectURL(new Blob([conteudo], { type: 'text/javascript' }));
  const link = criar('a', { href: url, download: nome });
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function copiar(texto) {
  try { await navigator.clipboard.writeText(texto); return true; } catch { return false; }
}

/* =====================================================================
   Catálogo
   ===================================================================== */
function medir(serie) {
  const temporadas = Array.isArray(serie.season) ? serie.season : [];
  const conta = { temporadas: temporadas.length, episodios: 0, semNome: 0, semThumb: 0, semDuracao: 0, semLink: 0 };

  for (const t of temporadas) {
    for (const ep of (Array.isArray(t.episodes) ? t.episodes : [])) {
      conta.episodios++;
      if (!String(ep.subtitle || '').trim()) conta.semNome++;
      if (!String(ep.thumb || '').trim()) conta.semThumb++;
      if (!String(ep.duration || '').trim()) conta.semDuracao++;
      const u = ep.url;
      const tem = Array.isArray(u) ? u.some((x) => typeof x === 'string' && x.trim()) : typeof u === 'string' && u.trim();
      if (!tem) conta.semLink++;
    }
  }

  const botoes = Array.isArray(serie.card_buttons) ? serie.card_buttons : [];
  conta.desativada = botoes.length > 0 && botoes.every((b) => b.enabled === false);
  conta.capa = botoes[0]?.thumb_buttons?.url?.[0] || serie.thumb_buttons?.url?.[0]
    || serie.description?.thumb?.[0] || serie.carrousel?.thumb?.[0] || '';
  conta.pendencias = conta.semNome + conta.semThumb + conta.semDuracao;
  return conta;
}

const simplificar = (txt) => String(txt || '')
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]/g, '');

async function carregarCatalogo() {
  const dados = await import(CAMINHO_INDICE);
  const indice = await (await fetch(CAMINHO_INDICE)).text();

  // As categorias saem dos próprios imports do index.js.
  const importados = [...indice.matchAll(/import\s*\{\s*(\w+)\s*\}\s*from\s*['"]\.\/all\/([\w.-]+)['"]/g)];

  estado.categorias = importados
    .map(([, exportado, arquivo]) => {
      const grupos = dados[exportado];
      if (!Array.isArray(grupos)) return null;
      return {
        exportado,
        arquivo,
        rotulo: grupos[0]?.group_name || arquivo.replace('.js', ''),
        grupos,
      };
    })
    .filter(Boolean);

  estado.series = [];
  for (const categoria of estado.categorias) {
    for (const grupo of categoria.grupos) {
      for (const serie of (grupo.group || [])) {
        estado.series.push({
          nome: serie.name || '(sem nome)',
          simples: simplificar(serie.name),
          categoria: categoria.rotulo,
          arquivo: categoria.arquivo,
          grupo: grupo.group_name || categoria.rotulo,
          grupoVisivel: grupo.visible !== false,
          bruto: serie,
          ...medir(serie),
        });
      }
    }
  }
}

function montarSelects() {
  const filtro = $('#filtro-categoria');
  filtro.replaceChildren(criar('option', { value: '', textContent: 'Todas as categorias' }));
  // Lista todas, inclusive a recém-criada que ainda está vazia — senão a
  // categoria some do painel logo depois de ser criada.
  for (const c of estado.categorias) {
    const quantas = estado.series.filter((s) => s.categoria === c.rotulo).length;
    filtro.append(criar('option', {
      value: c.rotulo,
      textContent: quantas ? c.rotulo : `${c.rotulo} (vazia)`,
    }));
  }
}

function desenharResumo() {
  const soma = (f) => estado.series.reduce((acc, s) => acc + f(s), 0);
  const metricas = [
    ['Séries', estado.series.length, false],
    ['Temporadas', soma((s) => s.temporadas), false],
    ['Episódios', soma((s) => s.episodios), false],
    ['Sem nome', soma((s) => s.semNome), true],
    ['Sem thumb', soma((s) => s.semThumb), true],
    ['Sem duração', soma((s) => s.semDuracao), true],
    ['Sem link', soma((s) => s.semLink), true],
  ];
  $('#resumo').replaceChildren(...metricas.map(([rotulo, valor, alerta]) => {
    const caixa = criar('div', { className: 'metrica' + (alerta && valor ? ' alerta' : '') });
    caixa.append(criar('b', { textContent: numero(valor) }), criar('span', { textContent: rotulo }));
    return caixa;
  }));
}

function desenharGrade() {
  const termo = simplificar($('#busca-catalogo').value);
  const categoria = $('#filtro-categoria').value;
  const pendencia = $('#filtro-pendencia').value;
  const ordem = $('#ordem').value;

  let itens = estado.series.filter((s) =>
    (!categoria || s.categoria === categoria)
    && (!termo || s.simples.includes(termo))
    && (pendencia !== 'falta' || s.pendencias > 0)
    && (pendencia !== 'ok' || s.pendencias === 0));

  const porNome = (a, b) => a.nome.localeCompare(b.nome, 'pt-BR');
  const criterios = {
    az: porNome,
    za: (a, b) => porNome(b, a),
    eps: (a, b) => b.episodios - a.episodios || porNome(a, b),
    'eps-menos': (a, b) => a.episodios - b.episodios || porNome(a, b),
    temps: (a, b) => b.temporadas - a.temporadas || porNome(a, b),
    pendentes: (a, b) => b.pendencias - a.pendencias || porNome(a, b),
  };
  itens = [...itens].sort(criterios[ordem]);

  const grade = $('#grade');
  grade.replaceChildren();

  if (!itens.length) {
    const categoriaVazia = categoria && !estado.series.some((s) => s.categoria === categoria);
    grade.append(criar('p', {
      className: 'vazio',
      textContent: categoriaVazia
        ? `A categoria ${categoria} ainda não tem nenhuma série. Use a aba Adicionar para colocar a primeira.`
        : 'Nada encontrado com esse filtro.',
    }));
    return;
  }

  for (const categoriaAtual of estado.categorias) {
    const doGrupo = itens.filter((s) => s.categoria === categoriaAtual.rotulo);
    if (!doGrupo.length) continue;

    const cabecalho = criar('div', { className: 'titulo-grupo' });
    cabecalho.append(
      criar('h2', { textContent: categoriaAtual.rotulo }),
      criar('small', {
        textContent: `${doGrupo.length} ${doGrupo.length === 1 ? 'série' : 'séries'} · `
          + `${numero(doGrupo.reduce((a, s) => a + s.episodios, 0))} episódios · ${categoriaAtual.arquivo}`,
      }),
    );
    grade.append(cabecalho);

    const caixa = criar('div', { className: 'grade' });
    for (const serie of doGrupo) caixa.append(cartao(serie));
    grade.append(caixa);
  }
}

function cartao(serie) {
  const alvo = criar('button', { className: 'cartao', type: 'button' });

  const capa = criar('div', { className: 'capa' });
  if (serie.capa) capa.style.backgroundImage = `url("${serie.capa}")`;

  const selos = criar('div', { className: 'selos' });
  if (serie.desativada) selos.append(criar('span', { className: 'etiqueta off', textContent: 'desativada' }));
  if (serie.semNome) selos.append(criar('span', { className: 'etiqueta falta', textContent: `${serie.semNome} sem nome` }));
  else if (serie.semThumb) selos.append(criar('span', { className: 'etiqueta falta', textContent: `${serie.semThumb} sem thumb` }));
  else if (serie.semDuracao) selos.append(criar('span', { className: 'etiqueta falta', textContent: `${serie.semDuracao} sem duração` }));
  capa.append(selos);

  alvo.append(
    capa,
    criar('div', { className: 'nome', textContent: serie.nome }),
    criar('div', { className: 'sub', textContent: `${serie.temporadas} temp. · ${numero(serie.episodios)} ep.` }),
  );
  alvo.addEventListener('click', () => abrirDetalhe(serie));
  return alvo;
}

function abrirDetalhe(serie) {
  const corpo = criar('div');

  const pendencias = criar('div', { className: 'pendencias' });
  for (const [rotulo, valor] of [
    ['Sem nome', serie.semNome], ['Sem thumb', serie.semThumb],
    ['Sem duração', serie.semDuracao], ['Sem link', serie.semLink],
  ]) {
    const caixa = criar('div', { className: 'pendencia' + (valor ? '' : ' zerado') });
    caixa.append(criar('b', { textContent: numero(valor) }), criar('span', { textContent: `episódios ${rotulo.toLowerCase()}` }));
    pendencias.append(caixa);
  }

  corpo.append(
    criar('p', { className: 'sub', style: 'color: var(--sl-muted); font-size: 13px;',
      textContent: `${serie.categoria} · ${serie.arquivo} · grupo "${serie.grupo}"` }),
    pendencias,
  );

  const temporadas = Array.isArray(serie.bruto.season) ? serie.bruto.season : [];
  for (const t of temporadas) {
    const eps = Array.isArray(t.episodes) ? t.episodes : [];
    const semNome = eps.filter((e) => !String(e.subtitle || '').trim()).length;
    const linha = criar('div', { className: 'linha-temporada' });
    linha.append(
      criar('span', { textContent: t.name || 'Temporada' }),
      criar('span', { className: 'conta',
        textContent: `${eps.length} ep.${semNome ? ` · ${semNome} sem nome` : ''}` }),
    );
    corpo.append(linha);
  }

  modal.abrir(serie.nome, corpo, [
    criar('span', { className: 'recado',
      textContent: serie.semLink ? `${serie.semLink} episódios sem link — isso o painel não preenche.` : '' }),
    botao('Completar pela fonte', () => {
      modal.fechar();
      estado.intencao = { tipo: 'completar', entrada: serie };
      trocarAba('adicionar');
      $('#busca-fonte').value = serie.nome;
      buscar();
    }, true),
  ]);
}

['#busca-catalogo', '#filtro-categoria', '#filtro-pendencia', '#ordem'].forEach((sel) =>
  $(sel).addEventListener('input', () => { if (estado.series.length) desenharGrade(); }));

/* =====================================================================
   Nova categoria
   ===================================================================== */
$('#botao-nova-categoria').addEventListener('click', () => {
  if (!estado.local) {
    modal.abrir('Nova categoria', criar('div', { className: 'aviso',
      innerHTML: 'Criar categoria mexe em dois arquivos (o novo em <code>resources/episodes/all/</code> '
        + 'e o <code>index.js</code>), então precisa do servidor local.<br><br>Rode <code>node tools/painel.mjs</code> e abra o painel por ele.' }), []);
    return;
  }

  const corpo = criar('div');
  const campo = (rotulo, id, dica) => {
    const bloco = criar('div', { className: 'campo' });
    bloco.append(criar('label', { textContent: rotulo, htmlFor: id }), criar('input', { type: 'text', id, placeholder: dica }));
    return bloco;
  };
  corpo.append(
    campo('Nome que aparece no site', 'cat-rotulo', 'Doramas'),
    campo('Arquivo em resources/episodes/all/', 'cat-arquivo', 'doramas.js'),
    campo('Nome do export', 'cat-export', 'doramasData'),
    criar('p', { style: 'color: var(--sl-muted); font-size: 12px;',
      textContent: 'O arquivo é criado vazio e registrado no index.js. Depois recarregue o painel para a categoria aparecer.' }),
  );

  // Preenche arquivo e export a partir do nome, enquanto não forem tocados.
  const rotulo = corpo.querySelector('#cat-rotulo');
  rotulo.addEventListener('input', () => {
    const base = simplificar(rotulo.value) || 'nova';
    const arquivo = corpo.querySelector('#cat-arquivo');
    const exportado = corpo.querySelector('#cat-export');
    if (!arquivo.dataset.tocado) arquivo.value = `${base}.js`;
    if (!exportado.dataset.tocado) exportado.value = `${base}Data`;
  });
  for (const id of ['#cat-arquivo', '#cat-export']) {
    corpo.querySelector(id).addEventListener('input', (e) => { e.target.dataset.tocado = '1'; });
  }

  modal.abrir('Nova categoria', corpo, [
    criar('span', { className: 'recado' }),
    botao('Criar', async () => {
      const dados = {
        rotulo: corpo.querySelector('#cat-rotulo').value.trim(),
        arquivo: corpo.querySelector('#cat-arquivo').value.trim(),
        exportName: corpo.querySelector('#cat-export').value.trim(),
      };
      if (!dados.rotulo || !dados.arquivo || !dados.exportName) return modal.recado('Preencha os três campos.', true);

      modal.recado('Criando…');
      try {
        const r = await fetch('/api/categoria', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(dados),
        });
        const resposta = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(resposta.erro || `falha (${r.status})`);
        modal.recado('Criada. Recarregando…');
        setTimeout(() => location.reload(), 800);
      } catch (erro) {
        modal.recado(erro.message, true);
      }
    }, true),
  ]);
});

/* =====================================================================
   Aba adicionar
   ===================================================================== */
const seletorFonte = $('#fonte');
for (const fonte of Object.values(FONTES)) {
  seletorFonte.append(criar('option', { value: fonte.chave, textContent: fonte.rotulo }));
}

const chaveTmdb = $('#chave-tmdb');
chaveTmdb.value = localStorage.getItem('tmdb_key') || '';
chaveTmdb.addEventListener('change', () => localStorage.setItem('tmdb_key', chaveTmdb.value.trim()));

function ajustarFonte() {
  estado.fonte = seletorFonte.value;
  const fonte = FONTES[estado.fonte];
  chaveTmdb.hidden = !fonte.precisaChave;
  $('#obs-fonte').textContent = fonte.observacao;
}
seletorFonte.addEventListener('change', ajustarFonte);
seletorFonte.value = estado.fonte;
ajustarFonte();

$('#botao-buscar').addEventListener('click', () => buscar());
$('#busca-fonte').addEventListener('keydown', (e) => { if (e.key === 'Enter') buscar(); });

const avisar = (onde, texto) => {
  $(onde).replaceChildren(texto ? criar('div', { className: 'aviso recado-erro', textContent: texto }) : '');
};

async function buscar() {
  const termo = $('#busca-fonte').value.trim();
  avisar('#busca-aviso', '');
  if (!termo) return;

  const caixa = $('#resultados');
  caixa.replaceChildren(criar('p', { className: 'vazio', textContent: 'Procurando…' }));

  try {
    const achados = await FONTES[estado.fonte].buscar(termo, chaveTmdb.value.trim());
    caixa.replaceChildren();
    if (!achados.length) {
      caixa.append(criar('p', { className: 'vazio', textContent: 'Nada encontrado nessa fonte.' }));
      return;
    }
    for (const achado of achados) caixa.append(resultado(achado));
  } catch (erro) {
    caixa.replaceChildren();
    avisar('#busca-aviso', erro.message);
  }
}

function resultado(achado) {
  const jaTem = estado.series.find((s) => s.simples === simplificar(achado.nome));

  const alvo = criar('button', { className: 'achado', type: 'button' });
  alvo.setAttribute('aria-pressed', 'false');

  const capa = criar('img', { alt: '', src: achado.poster || '' });
  capa.addEventListener('error', () => { capa.style.visibility = 'hidden'; });

  const meio = criar('div');
  meio.append(
    criar('div', { className: 'nome', textContent: achado.nome }),
    criar('div', { className: 'meta', textContent: [achado.ano, achado.extra].filter(Boolean).join(' · ') }),
    criar('div', { className: 'sinopse', textContent: achado.sinopse || 'Sem sinopse nessa fonte.' }),
  );

  alvo.append(capa, meio);
  if (jaTem) alvo.append(criar('span', { className: 'ja-existe', textContent: `já existe em ${jaTem.categoria}` }));

  alvo.addEventListener('click', async () => {
    document.querySelectorAll('.achado').forEach((c) => c.setAttribute('aria-pressed', 'false'));
    alvo.setAttribute('aria-pressed', 'true');
    await escolher(achado, jaTem);
  });
  return alvo;
}

async function escolher(achado, jaTem) {
  modal.abrir(achado.nome, criar('p', { className: 'vazio', textContent: 'Carregando temporadas…' }), []);
  try {
    estado.escolhido = await FONTES[estado.fonte].detalhes(achado.id, chaveTmdb.value.trim());
  } catch (erro) {
    return modal.abrir(achado.nome, criar('div', { className: 'aviso recado-erro', textContent: erro.message }), []);
  }

  const alvoDoCatalogo = estado.intencao?.tipo === 'completar' ? estado.intencao.entrada : jaTem;
  estado.intencao = null;

  if (alvoDoCatalogo) return telaCompletar(alvoDoCatalogo);
  telaSerieNova();
}

/* ---------------------------------------------------------------------
   Caminho 1 — série nova
   --------------------------------------------------------------------- */
function seletorTemporadas(marcarTodas = true) {
  const caixa = criar('div', { className: 'temporadas' });
  for (const t of estado.escolhido.temporadas) {
    const rotulo = criar('label');
    const marca = criar('input', { type: 'checkbox', value: String(t.numero) });
    marca.checked = marcarTodas && t.numero !== 0;
    rotulo.append(marca, criar('span', { textContent: t.nome }), criar('small', { textContent: `${t.episodios} episódios` }));
    caixa.append(rotulo);
  }
  return caixa;
}

const marcadas = (caixa) => [...caixa.querySelectorAll('input:checked')].map((i) => Number(i.value));

function telaSerieNova() {
  const corpo = criar('div');
  const temporadas = seletorTemporadas();

  const destino = criar('select');
  for (const c of estado.categorias) destino.append(criar('option', { value: c.arquivo, textContent: c.rotulo }));

  const escolhas = criar('div', { className: 'escolhas' });
  escolhas.append(criar('label', { textContent: 'Categoria:', style: 'align-self: center; color: var(--sl-muted); font-size: 13px;' }), destino);

  corpo.append(
    criar('p', { style: 'color: var(--sl-muted); font-size: 13px;', textContent: 'Série nova. Escolha as temporadas e onde ela entra.' }),
    temporadas,
    escolhas,
  );

  modal.abrir(estado.escolhido.nome, corpo, [
    criar('span', { className: 'recado' }),
    botao('Gerar bloco', async () => {
      const numeros = marcadas(temporadas);
      if (!numeros.length) return modal.recado('Marque pelo menos uma temporada.', true);

      modal.recado('Buscando episódios…');
      try {
        const episodios = await FONTES[estado.fonte].episodios(estado.escolhido, numeros, chaveTmdb.value.trim());
        const bloco = blocoSerie(estado.escolhido, numeros, episodios);
        telaBloco(bloco, destino.value, episodios.length);
      } catch (erro) { modal.recado(erro.message, true); }
    }, true),
  ]);
}

function telaBloco(bloco, arquivo, quantos) {
  const corpo = criar('div');
  corpo.append(
    criar('p', { style: 'color: var(--sl-muted); font-size: 13px; margin-bottom: 12px;',
      textContent: `${quantos} episódios. O campo url fica vazio de propósito — o painel não busca vídeo.` }),
    criar('div', { className: 'saida', textContent: bloco }),
  );

  const rodape = [criar('span', { className: 'recado' })];

  rodape.push(botao('Copiar', async () => {
    modal.recado(await copiar(bloco) ? 'Copiado.' : 'Não consegui copiar — selecione o texto.');
  }));

  if (estado.local) {
    rodape.push(botao('Inserir e salvar', async () => {
      modal.recado('Gravando…');
      try {
        const texto = await (await fetch(CAMINHO_DADOS + arquivo, { cache: 'no-store' })).text();
        const grupos = Arq.lerGrupos(texto);
        if (!grupos.length) throw new Error(`não achei nenhum group_name em ${arquivo}`);
        const novo = Arq.inserirSerie(texto, grupos[grupos.length - 1], bloco);
        await gravar(arquivo, novo);
        modal.recado('Salvo. Recarregando…');
        setTimeout(() => location.reload(), 900);
      } catch (erro) { modal.recado(erro.message, true); }
    }, true));
  }

  modal.abrir(estado.escolhido.nome, corpo, rodape);
  if (!estado.local) modal.recado(`Cole dentro de group: [ … ] em ${arquivo}.`);
}

/* ---------------------------------------------------------------------
   Caminho 2 — completar série existente
   --------------------------------------------------------------------- */
function telaCompletar(entrada) {
  const corpo = criar('div');
  const temporadas = seletorTemporadas();

  corpo.append(
    criar('div', { className: 'aviso',
      innerHTML: `Essa série já existe em <b>${entrada.categoria}</b> (${entrada.arquivo}), com `
        + `${entrada.temporadas} temporada(s) e ${numero(entrada.episodios)} episódios.<br>`
        + 'Completar preenche só o que está vazio: nome, thumb e duração do episódio. '
        + 'Nada que você já digitou é alterado, e o <code>url</code> nunca é tocado.' }),
    criar('p', { style: 'color: var(--sl-muted); font-size: 13px;', textContent: 'Temporadas da fonte a usar:' }),
    temporadas,
  );

  modal.abrir(entrada.nome, corpo, [
    criar('span', { className: 'recado' }),
    botao('Adicionar como série nova', () => telaSerieNova()),
    botao('Comparar', async () => {
      const numeros = marcadas(temporadas);
      if (!numeros.length) return modal.recado('Marque pelo menos uma temporada.', true);

      modal.recado('Comparando…');
      try {
        const episodios = await FONTES[estado.fonte].episodios(estado.escolhido, numeros, chaveTmdb.value.trim());
        const texto = await (await fetch(CAMINHO_DADOS + entrada.arquivo, { cache: 'no-store' })).text();

        const local = acharNoArquivo(texto, entrada.nome);
        if (!local) throw new Error(`não achei "${entrada.nome}" dentro de ${entrada.arquivo}`);

        const doArquivo = Arq.lerTemporadas(texto, local);
        const plano = Arq.planejarPreenchimento(doArquivo, episodios);
        telaPrevia(entrada, texto, plano);
      } catch (erro) { modal.recado(erro.message, true); }
    }, true),
  ]);
}

function acharNoArquivo(texto, nome) {
  for (const grupo of Arq.lerGrupos(texto)) {
    const achada = Arq.lerSeries(texto, grupo).find((s) => simplificar(s.nome) === simplificar(nome));
    if (achada) return achada;
  }
  return null;
}

function telaPrevia(entrada, texto, plano) {
  const corpo = criar('div');

  const contagem = criar('div', { className: 'pendencias' });
  for (const [rotulo, valor] of [
    ['nomes', plano.contagem.subtitle], ['durações', plano.contagem.duration],
    ['thumbs', plano.contagem.thumb], ['sem par na fonte', plano.contagem.semFonte],
  ]) {
    const caixa = criar('div', { className: 'pendencia' + (valor ? '' : ' zerado') });
    caixa.append(criar('b', { textContent: numero(valor) }), criar('span', { textContent: rotulo }));
    contagem.append(caixa);
  }
  corpo.append(contagem);

  if (!plano.trocas.length) {
    corpo.append(criar('p', { className: 'vazio', style: 'text-align: left;',
      textContent: 'Nada a preencher: ou já está tudo completo, ou a fonte não tem esses dados.' }));
    return modal.abrir(entrada.nome, corpo, [criar('span', { className: 'recado' })]);
  }

  const previa = criar('div', { className: 'previa' });
  for (const troca of plano.trocas.slice(0, 25)) {
    previa.append(
      criar('div', { className: 'antes', textContent: troca.antes.trim() }),
      criar('div', { className: 'depois', textContent: troca.depois.trim() }),
      criar('div', { textContent: ' ' }),
    );
  }
  corpo.append(
    criar('p', { style: 'color: var(--sl-muted); font-size: 13px; margin: 16px 0 8px;',
      textContent: `${plano.trocas.length} linhas mudam.`
        + (plano.trocas.length > 25 ? ' Mostrando as 25 primeiras.' : '') }),
    previa,
  );

  const novoTexto = Arq.aplicarTrocas(texto, plano.trocas);
  const rodape = [criar('span', { className: 'recado' })];

  rodape.push(botao('Baixar arquivo alterado', () => {
    baixar(entrada.arquivo, novoTexto);
    modal.recado(`Baixado. Substitua resources/episodes/all/${entrada.arquivo}.`);
  }));

  if (estado.local) {
    rodape.push(botao('Aplicar e salvar', async () => {
      modal.recado('Gravando…');
      try {
        await gravar(entrada.arquivo, novoTexto);
        modal.recado('Salvo, com cópia em tools/.backups/. Recarregando…');
        setTimeout(() => location.reload(), 1100);
      } catch (erro) { modal.recado(erro.message, true); }
    }, true));
  }

  modal.abrir(entrada.nome, corpo, rodape);
}

/* =====================================================================
   Geração do bloco no formato dos arquivos de dados
   ===================================================================== */
const emAspas = (txt) => String(txt ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const emCrase = (txt) => String(txt ?? '').replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const zero = (n, casas) => String(n).padStart(casas, '0');

function linhasEpisodios(episodios, recuo) {
  return episodios.map((ep) =>
    `${recuo}{ title: "Episódio ${zero(ep.numero, 3)}", subtitle: "${emAspas(ep.subtitle)}", `
    + `duration: "${ep.duration}", thumb: "${ep.thumb}", url: [""] },`).join('\n');
}

export function blocoTemporada(temporada, episodios, recuo = '                ') {
  const r = recuo + '  ';
  return [
    `${recuo}{`,
    `${r}name: "Temporada ${zero(temporada.numero, 2)}",`,
    `${r}thumb_season: "${temporada.poster || ''}",`,
    `${r}movies: false,`,
    `${r}episodes: [`,
    linhasEpisodios(episodios, r + '  '),
    `${r}]`,
    `${recuo}},`,
  ].join('\n');
}

function blocoSerie(detalhes, numeros, episodios) {
  const nome = detalhes.nome;
  const caixaAlta = nome.toUpperCase();
  const fundos = detalhes.fundos.length ? detalhes.fundos : [''];

  const temporadas = numeros.map((n) => {
    const dados = detalhes.temporadas.find((t) => t.numero === n) || { numero: n, poster: '' };
    return blocoTemporada(dados, episodios.filter((e) => e.temporada === n));
  });

  return [
    `        //${caixaAlta}`,
    `        {`,
    `            name: "${emAspas(nome)}",`,
    `            card_buttons: [`,
    `              {`,
    `                name: "${emAspas(nome)}",`,
    `                enabled: true,`,
    `                visible: true,`,
    `                acumulative: false,`,
    `                info: true,`,
    `                badge: "",`,
    `                thumb_buttons: {`,
    `                  url: [`,
    ...fundos.map((u) => `                    "${u}",`),
    `                  ],`,
    `                },`,
    `              },`,
    `            ],`,
    ``,
    `            carrousel: {`,
    `                enabled: false,`,
    `                homepage: false,`,
    `                favorite: true,`,
    `                title: "${emAspas(caixaAlta)}",`,
    `                logo: {`,
    `                  enabled: false,`,
    `                  url: "${detalhes.logo || ''}",`,
    `                  minimalist: false,`,
    `                },`,
    `                thumb: [""],`,
    `                text: "",`,
    `                description: \``,
    `                    `,
    `                \`,`,
    `                info: { enabled: false, text: "", season: true, episodes: true, finalized: true }`,
    `            },`,
    ``,
    `            description: {`,
    `                visible: true,`,
    `                logo: { title: "${emAspas(caixaAlta)}", enabled: false, minimalist: false, grayscale: false, url: "${detalhes.logo || ''}" },`,
    `                thumb: [`,
    ...fundos.map((u) => `                  "${u}",`),
    `                ],`,
    `                effect: [`,
    `                    {`,
    `                        hover: false,`,
    `                        fade: 2,`,
    `                        subtitle: "", duration: 60,`,
    `                        opacity: 0.5,`,
    `                        mixBlend: 'soft-light',`,
    `                        background: { description: [0.0, 0.0, 0.0, 0.0], overlay: [0.0, 0.0, 0.0, 1.4]},`,
    `                        links: [`,
    `                            ""`,
    `                        ],`,
    `                    },`,
    `                ],`,
    `                sinopse:  \``,
    `                ${emCrase(detalhes.sinopse).trim()}`,
    `                \``,
    `            },`,
    ``,
    `            season: [`,
    temporadas.join('\n\n'),
    `            ]`,
    `        },`,
  ].join('\n');
}

/* =====================================================================
   Início
   ===================================================================== */
(async function iniciar() {
  await descobrirModo();
  try {
    await carregarCatalogo();
    montarSelects();
    desenharResumo();
    desenharGrade();
  } catch (erro) {
    $('#grade').replaceChildren();
    $('#catalogo-aviso').replaceChildren(criar('div', {
      className: 'aviso',
      innerHTML: '<b>Não consegui ler o catálogo.</b><br>Acontece quando o painel é aberto por '
        + '<code>file://</code> — o navegador bloqueia módulo assim. Rode <code>node tools/painel.mjs</code> '
        + `e abra por <code>http://localhost:4123/tools/painel.html</code>.<br><br><span class="recado-erro">${erro.message}</span>`,
    }));
  }
})();
