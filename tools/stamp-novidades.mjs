/* =====================================================================
   stamp-novidades.mjs — carimba a data de entrada de séries e episódios.

   Roda no GitHub Actions a cada push que mexe nos dados. Compara o catálogo
   atual com o retrato da última execução (tools/.novidades-snapshot.json) e
   escreve o que é novo em resources/episodes/added.js, que o site importa.

   Nunca toca nos arquivos de dados — só nesses dois.

   Uso local (opcional): node tools/stamp-novidades.mjs
   ===================================================================== */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const SNAPSHOT_FILE = join(here, '.novidades-snapshot.json');
const OUTPUT_FILE = join(root, 'resources', 'episodes', 'added.js');

// Entradas mais velhas que isso saem do arquivo: nenhum badge ou notificação
// olha tão para trás, e assim o arquivo que o navegador baixa não cresce.
const MAX_KEEP_DAYS = 60;

const { seriesAll } = await import('../resources/episodes/index.js');

const pad = n => String(n).padStart(2, '0');
const today = (() => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
})();

const daysBetween = (isoDate) => {
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) return Infinity;
  return Math.floor((Date.now() - new Date(y, m - 1, d).getTime()) / 86400000);
};

// ---------------------------------------------------------------------
// Chaves — precisam bater exatamente com as do site (resources/scripts.js).
// O título entra na chave em vez do índice para inserir episódio no meio da
// temporada não marcar todos os seguintes como novos.
// ---------------------------------------------------------------------
const episodeKey = (subgroupName, seasonIndex, episode) =>
  `${subgroupName}|${seasonIndex}|${episode?.title || ''}`;

const getMoviesEpisodes = (subgroup) => {
  if (!subgroup?.movies) return [];
  if (Array.isArray(subgroup.movies.episodes)) return subgroup.movies.episodes;
  if (Array.isArray(subgroup.movies.move_list)) {
    return subgroup.movies.move_list.map(m => ({
      title: `${m?.title || ''} ${m?.subtitle || ''}`.trim(),
    }));
  }
  return [];
};

const currentSeries = new Set();
const currentEpisodes = new Set();

for (const groupItem of seriesAll) {
  for (const subgroup of groupItem.group || []) {
    if (!subgroup?.name) continue;
    currentSeries.add(subgroup.name);

    (Array.isArray(subgroup.season) ? subgroup.season : []).forEach((season, seasonIndex) => {
      (Array.isArray(season?.episodes) ? season.episodes : []).forEach(episode => {
        currentEpisodes.add(episodeKey(subgroup.name, seasonIndex, episode));
      });
    });

    getMoviesEpisodes(subgroup).forEach(episode => {
      currentEpisodes.add(episodeKey(subgroup.name, -1, episode));
    });
  }
}

// ---------------------------------------------------------------------
// Retrato anterior
// ---------------------------------------------------------------------
const firstRun = !existsSync(SNAPSHOT_FILE);
const snapshot = firstRun
  ? { series: [], episodes: [] }
  : JSON.parse(readFileSync(SNAPSHOT_FILE, 'utf8'));

const knownSeries = new Set(snapshot.series || []);
const knownEpisodes = new Set(snapshot.episodes || []);

// added.js anterior (se existir), para preservar as datas já carimbadas
let previous = { series: {}, episodes: {} };
if (existsSync(OUTPUT_FILE)) {
  try {
    const mod = await import(`${OUTPUT_FILE.replace(/\\/g, '/')}?t=${Date.now()}`);
    if (mod.addedIndex) previous = mod.addedIndex;
  } catch { /* arquivo quebrado: recomeça vazio */ }
}

const series = {};
const episodes = {};

// mantém o que já estava carimbado, desde que ainda exista e não seja antigo
for (const [key, date] of Object.entries(previous.series || {})) {
  if (currentSeries.has(key) && daysBetween(date) <= MAX_KEEP_DAYS) series[key] = date;
}
for (const [key, date] of Object.entries(previous.episodes || {})) {
  if (currentEpisodes.has(key) && daysBetween(date) <= MAX_KEEP_DAYS) episodes[key] = date;
}

// carimba o que apareceu desde a última execução
let newSeries = 0;
let newEpisodes = 0;

if (!firstRun) {
  for (const key of currentSeries) {
    if (!knownSeries.has(key) && !series[key]) { series[key] = today; newSeries += 1; }
  }
  for (const key of currentEpisodes) {
    if (!knownEpisodes.has(key) && !episodes[key]) { episodes[key] = today; newEpisodes += 1; }
  }
}

// ---------------------------------------------------------------------
// Escrita
// ---------------------------------------------------------------------
const sortEntries = obj => Object.fromEntries(Object.entries(obj).sort(([a], [b]) => a.localeCompare(b)));

const output = `// Gerado automaticamente por tools/stamp-novidades.mjs — não editar à mão.
// Datas de entrada de séries e episódios, usadas pelos badges NOVIDADE /
// NOVOS EPISÓDIOS e pelo sino de novidades.
export const addedIndex = ${JSON.stringify({ series: sortEntries(series), episodes: sortEntries(episodes) }, null, 2)};
`;

const previousOutput = existsSync(OUTPUT_FILE) ? readFileSync(OUTPUT_FILE, 'utf8') : '';
if (previousOutput !== output) writeFileSync(OUTPUT_FILE, output, 'utf8');

mkdirSync(here, { recursive: true });
writeFileSync(SNAPSHOT_FILE, JSON.stringify({
  series: [...currentSeries].sort(),
  episodes: [...currentEpisodes].sort(),
}, null, 0), 'utf8');

if (firstRun) {
  console.log(`primeira execução: ${currentSeries.size} séries e ${currentEpisodes.size} episódios registrados como já existentes (nada marcado como novo)`);
} else {
  console.log(`novidades carimbadas: ${newSeries} série(s), ${newEpisodes} episódio(s) — ${Object.keys(episodes).length} entradas ativas`);
}
