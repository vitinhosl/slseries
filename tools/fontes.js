/* =====================================================================
   fontes.js — de onde vêm os dados das séries.

   Duas fontes, mesma interface:

     TVmaze — sem cadastro, sem chave, sem e-mail. Cobre bem série
              internacional e anime (nome do episódio, imagem, duração).
              Nas novelas e bíblicas traz a estrutura e a duração certas,
              mas o nome vem como "Capítulo 1" e não tem imagem.

     TMDB   — precisa de chave gratuita (themoviedb.org). É o único que
              dá nome, sinopse e imagem em português.

   Toda fonte devolve os campos já no formato dos arquivos de dados:
   duração como "1:10:00", thumb como URL pronta, e nome de episódio
   genérico ("Capítulo 12") vira string vazia, porque não acrescenta
   nada ao "Episódio 012" que o título já diz.
   ===================================================================== */

const zero = (n, casas) => String(n).padStart(casas, '0');

/** O TMDB e o TVmaze só informam minutos, então os segundos saem zerados. */
function duracao(minutos) {
  if (!minutos) return '';
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  return h ? `${h}:${zero(m, 2)}:00` : `${m}:00`;
}

const GENERICO = /^(epis[oó]dio|episode|cap[ií]tulo|chapter|ep)\s*\.?\s*\d+$/i;
const nomeUtil = (nome) => (!nome || GENERICO.test(nome.trim()) ? '' : nome.trim());

/** O TVmaze devolve sinopse em HTML. */
const semHtml = (txt) => String(txt || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

async function json(url, erroDe404) {
  const resposta = await fetch(url);
  if (resposta.status === 404 && erroDe404) throw new Error(erroDe404);
  if (resposta.status === 401) throw new Error('A chave do TMDB foi recusada (401). Confira se é a chave da API v3.');
  if (resposta.status === 429) throw new Error('Muitas consultas seguidas. Espere alguns segundos e tente de novo.');
  if (!resposta.ok) throw new Error(`A fonte respondeu ${resposta.status}.`);
  return resposta.json();
}

/* =====================================================================
   TVmaze
   ===================================================================== */
const TVMAZE = 'https://api.tvmaze.com';

const tvmaze = {
  chave: 'tvmaze',
  rotulo: 'TVmaze',
  precisaChave: false,
  observacao: 'Sem cadastro. Nome do episódio e imagem só nas séries internacionais.',

  async buscar(termo) {
    const achados = await json(`${TVMAZE}/search/shows?q=${encodeURIComponent(termo)}`);
    return achados.slice(0, 10).map(({ show }) => ({
      id: show.id,
      nome: show.name,
      ano: (show.premiered || '').slice(0, 4),
      poster: show.image?.medium || '',
      sinopse: semHtml(show.summary),
      extra: [show.language, show.network?.name || show.webChannel?.name].filter(Boolean).join(' · '),
    }));
  },

  async detalhes(id) {
    const [serie, episodios, imagens] = await Promise.all([
      json(`${TVMAZE}/shows/${id}`),
      json(`${TVMAZE}/shows/${id}/episodes`),
      json(`${TVMAZE}/shows/${id}/images`).catch(() => []),
    ]);

    const porTemporada = new Map();
    for (const ep of episodios) {
      if (!porTemporada.has(ep.season)) porTemporada.set(ep.season, []);
      porTemporada.get(ep.season).push(ep);
    }

    const daLista = (tipo) => imagens
      .filter((i) => i.type === tipo)
      .map((i) => i.resolutions?.original?.url)
      .filter(Boolean);

    return {
      id,
      fonte: 'tvmaze',
      nome: serie.name,
      sinopse: semHtml(serie.summary),
      poster: serie.image?.original || '',
      fundos: [...daLista('background'), ...daLista('banner')].slice(0, 3),
      logo: '',
      temporadas: [...porTemporada.entries()]
        .sort((a, b) => a[0] - b[0])
        .map(([numero, eps]) => ({
          numero,
          nome: `Temporada ${zero(numero, 2)}`,
          episodios: eps.length,
          poster: '',
        })),
      // Guardado para não precisar consultar de novo na hora de gerar.
      _episodios: episodios,
    };
  },

  async episodios(detalhes, numeros) {
    const desejadas = new Set(numeros);
    return detalhes._episodios
      .filter((ep) => desejadas.has(ep.season))
      .map((ep) => ({
        temporada: ep.season,
        numero: ep.number,
        subtitle: nomeUtil(ep.name),
        duration: duracao(ep.runtime),
        thumb: ep.image?.original || '',
        sinopse: semHtml(ep.summary),
      }));
  },
};

/* =====================================================================
   TMDB
   ===================================================================== */
const TMDB = 'https://api.themoviedb.org/3';
const imagemTmdb = (caminho, tamanho = 'original') => (caminho ? `https://image.tmdb.org/t/p/${tamanho}${caminho}` : '');

function urlTmdb(caminho, chave, params = {}) {
  if (!chave) throw new Error('Cole a chave do TMDB no topo do painel, ou troque a fonte para TVmaze.');
  const url = new URL(TMDB + caminho);
  url.searchParams.set('api_key', chave);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  return url;
}

const tmdb = {
  chave: 'tmdb',
  rotulo: 'TMDB',
  precisaChave: true,
  observacao: 'Precisa de chave gratuita. Único com nome, sinopse e imagem em português.',

  async buscar(termo, chave) {
    const dados = await json(urlTmdb('/search/tv', chave, { query: termo, language: 'pt-BR', include_adult: 'false' }));
    return dados.results.slice(0, 10).map((s) => ({
      id: s.id,
      nome: s.name,
      ano: (s.first_air_date || '').slice(0, 4),
      poster: imagemTmdb(s.poster_path, 'w154'),
      sinopse: s.overview || '',
      extra: `TMDB ${s.id}`,
    }));
  },

  async detalhes(id, chave) {
    const serie = await json(urlTmdb(`/tv/${id}`, chave, { language: 'pt-BR' }));

    // A ficha costuma existir em pt-BR com a sinopse vazia; cai para o inglês.
    if (!serie.overview) {
      const ingles = await json(urlTmdb(`/tv/${id}`, chave, { language: 'en-US' }));
      serie.overview = ingles.overview || '';
    }
    const imagens = await json(urlTmdb(`/tv/${id}/images`, chave, { include_image_language: 'pt,en,null' }));

    return {
      id,
      fonte: 'tmdb',
      nome: serie.name,
      sinopse: serie.overview,
      poster: imagemTmdb(serie.poster_path),
      fundos: (imagens.backdrops || []).slice(0, 3).map((b) => imagemTmdb(b.file_path)),
      logo: imagemTmdb((imagens.logos || [])[0]?.file_path),
      temporadas: (serie.seasons || []).map((t) => ({
        numero: t.season_number,
        nome: t.season_number === 0 ? 'Especiais' : `Temporada ${zero(t.season_number, 2)}`,
        episodios: t.episode_count,
        poster: imagemTmdb(t.poster_path, 'w500'),
      })),
    };
  },

  async episodios(detalhes, numeros, chave) {
    const todos = [];
    for (const numero of numeros) {
      const temporada = await json(urlTmdb(`/tv/${detalhes.id}/season/${numero}`, chave, { language: 'pt-BR' }));
      for (const ep of (temporada.episodes || [])) {
        todos.push({
          temporada: numero,
          numero: ep.episode_number,
          subtitle: nomeUtil(ep.name),
          duration: duracao(ep.runtime),
          thumb: imagemTmdb(ep.still_path, 'w500'),
          sinopse: ep.overview || '',
        });
      }
    }
    return todos;
  },
};

export const FONTES = { tvmaze, tmdb };
