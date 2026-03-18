const iconAnimes      = `https://img.icons8.com/fluency-systems-filled/96/tv-show.png`;
const iconChannel     = `https://img.icons8.com/ios-filled/100/online--v1.png`;
const iconMovies      = `https://img.icons8.com/ios-glyphs/90/cinema---v1.png`;
const iconNovels      = `https://img.icons8.com/ios-filled/100/literature--v1.png`;
const iconMinecraft   = `https://img.icons8.com/fluency-systems-regular/48/minecraft-grass-cube.png`;
const iconSeries      = `<svg role="img" viewBox="20 20 216 216" xmlns="http://www.w3.org/2000/svg" class="custom-icon"><path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" fill="#000000"></path></svg>`;
const iconBiblical    = `https://img.icons8.com/ios-filled/100/holy-bible.png`;
const iconTwitch      = `https://img.icons8.com/ios-filled/100/twitch.png`;
const iconYoutube     = `https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-youtube-is-an-american-video-sharing-and-now-googles-subsidiaries-logo-bold-tal-revivo.png`;
const iconKick        = `<svg role="img" viewBox="-5 0 30 30" xmlns="http://www.w3.org/2000/svg" id="Kick--Streamline-Simple-Icons" class="custom-icon"><path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" fill="#000000" stroke-width="1"></path></svg>`;
const iconSearch      = `https://img.icons8.com/sf-regular/96/search.png`;

export function getIcon(groupName) {
  const name = groupName.toLowerCase();
  if (name.includes('resultados') || name.includes('search') || name.includes('pesquisa')) return { type: 'img', value: iconSearch, alt: 'search' };
  if (name.includes('animes'))    return { type: 'img', value: iconAnimes,    alt: 'animes' };
  if (name.includes('canais'))    return { type: 'img', value: iconChannel,   alt: 'canais' };
  if (name.includes('filmes'))    return { type: 'img', value: iconMovies,    alt: 'filmes' };
  if (name.includes('novelas'))   return { type: 'img', value: iconNovels,    alt: 'novelas' };
  if (name.includes('minecraft')) return { type: 'img', value: iconMinecraft, alt: 'minecraft' };
  if (name.includes('bíblicas'))  return { type: 'img', value: iconBiblical,  alt: 'séries bíblicas' };
  if (name.includes('séries'))    return { type: 'svg', value: iconSeries,    alt: 'séries' };
  if (name.includes('streams'))   return { type: 'img', value: iconTwitch,    alt: 'streams' };
  return { type: 'fa', value: 'fas fa-layer-group' };
}

export function setupStreamIcons(link) {
  const text = "Streams";
  const icons = [
    { type: 'img', value: iconTwitch,  alt: 'twitch'  },
    { type: 'svg', value: iconKick,    alt: 'kick'    },
    { type: 'img', value: iconYoutube, alt: 'youtube' },
  ];
  let currentIndex = 0;
  function updateIcon() {
    const iconData = icons[currentIndex];
    let newIconHTML = '';
    if (iconData.type === 'svg') newIconHTML = iconData.value;
    else if (iconData.type === 'img') newIconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt}">`;
    link.innerHTML = `${newIconHTML} ${text}`;
    currentIndex = (currentIndex + 1) % icons.length;
  }
  updateIcon();
  setInterval(updateIcon, 3000);
}

