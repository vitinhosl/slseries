// import { seriesAll } from './episodes/index.js';
// const seriesData = seriesAll;

const seriesData = [
  {
    group_name: "Filmes",
    visible: true,
    group: [
        //HARRY POTTER
        {
            name: "Harry Potter",
            card_buttons: [
                //HARRY POTTER E A PEDRA FILOSOFAL
                {
                    name: "Harry Potter",
                    title: "E a Pedra Filosofal",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/4b990c5d-38ab-4daf-8092-2617cbc6d062/e1d06a4d-6659-11f0-b80d-02a07e508a33?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/wdXyskp.png",
                            "https://i.imgur.com/8xGK1SM.png",
                        ],
                    },
                },

                //HARRY POTTER E A CÂMARA SECRETA
                {
                    name: "Harry Potter 2",
                    title: "E a Câmara Secreta",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/48674b82-9076-4080-a40c-379efad5eb89/76cfaf1b-6659-11f0-85e1-12d03b70fa8b?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/SJYo00O.png",
                            "https://i.imgur.com/C76mOFX.png",
                        ],
                    },
                },

                //HARRY POTTER E O PRISIONEIRO DE AZKABAN
                {
                    name: "Harry Potter 3",
                    title: "E o Prisioneiro de Azkaban",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/73553a76-1658-45f6-9e26-1b9c4443b0d6/e05e56a8-689b-49ea-a4be-ea5548656204?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/zmMRzon.png",
                            "https://i.imgur.com/SzZpgyk.png",
                        ],
                    },
                },

                //HARRY POTTER E O CÁLICE DE FOGO
                {
                    name: "Harry Potter 4",
                    title: "E o Cálice de Fogo",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                          "https://i.imgur.com/lsaypId.jpeg", //DOURADO
                          "https://i.imgur.com/sD8nMUV.jpeg", //PRATA
                          "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d2e9ff29-e71d-4eae-9a4b-7cd0e00236ea/b46623fc-5a7f-4019-b2e5-714909ce0319?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                          "https://i.pinimg.com/736x/f9/cd/e5/f9cde56c8400175b8a8ddb90832cc7de.jpg",
                          "https://i.imgur.com/DjZGIYV.jpeg",
                        ],
                    },
                },

                //HARRY POTTER E A ORDEM DA FÊNIX
                {
                    name: "Harry Potter 5",
                    title: "E a Ordem da Fênix",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/25768909-39b8-4cb2-a39f-e059460f7add/bf042df5-6659-11f0-be5e-0afff99ad1ad?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/IdOkjj3.png",
                            "https://i.imgur.com/ClbbCiS.png",
                        ],
                    },
                },

                //HARRY POTTER E O ENIGMA DO PRÍNCIPE
                {
                    name: "Harry Potter 6",
                    title: "E o Enigma do Príncipe",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/cba1d85a-5ef4-4ba3-b537-1d24554fe85c/e1abf244-6659-11f0-85e1-12d03b70fa8b?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/RWt83mC.png",
                            "https://i.imgur.com/JVYBDl1.png",
                        ],
                    },
                },

                //HARRY POTTER E AS RELÍQUIAS DA MORTE - PARTE 1
                {
                    name: "Harry Potter 7)",
                    title: "E as Relíquias da Morte (PT 1)",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/2c394a2d-7d1d-481d-a420-76ee1bee01a7/d9c2c446-00b6-4e1e-a489-9495abcbe27c?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/csXAXhz.png",
                            "https://i.imgur.com/df4o6Du.png",
                        ],
                    },
                },

                //HARRY POTTER E AS RELÍQUIAS DA MORTE - PARTE 2
                {
                    name: "Harry Potter 7",
                    title: "E as Relíquias da Morte (PT 2)",
                    enabled: true,
                    visible: true,
                    acumulative: true,
                    info: true,
                    badge: "",
                    thumb_buttons: {
                        url: [
                            "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/1890c8c5-2f40-4140-a363-064428201826/be267855-6659-11f0-85e1-12d03b70fa8b?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320",
                            "https://i.imgur.com/N6aK9dg.png",
                            "https://i.imgur.com/4vclUJV.png",
                        ],
                    },
                },
            ],

            carrousel: {
                visible: true,
                homepage: true,
                favorite: true,
                logo: { title: "HARRY POTTER", enabled: true, minimalist: false, grayscale: false, url: "https://i.imgur.com/cTgUkQ2.png" },
                thumb: ["https://i.imgur.com/UPY13oJ.png"],
                text: "",
                description: `
                  Harry Potter e a Pedra Filosofal: Ao completar 11 anos, Harry Potter descobre que é um bruxo e que é esperado como aluno da Escola de Magia e Bruxaria de Hogwarts.
                `,
                info: { enabled: false, text: "", season: false, episodes: false, finalized: false}
            },

            description: {
                visible: true,
                logo: { title: "HARRY POTTER", enabled: true, minimalist: false, grayscale: false, url: "https://i.imgur.com/cTgUkQ2.png" },
                thumb: [
                  "https://i.imgur.com/UPY13oJ.png",
                ],

                effect: [
                  {
                    hover: false,
                    fade: 2,
                    duration: 21,
                    opacity: 1.0,
                    mixBlend: 'screen',
                    background: { description: [0.0, 0.0, 0.0, 0.0], overlay: [0.0, 0.0, 0.0, 0.4]},
                    links: [
                      "https://i.imgur.com/fcdnsXS.mp4" //21 sec
                    ],
                  },
                ],

                sinopse:  `
                  Harry Potter e a Pedra Filosofal: Ao completar 11 anos, Harry Potter descobre que é um bruxo e que é esperado como aluno da Escola de Magia e Bruxaria de Hogwarts.
                `
            },

            season: [
                {
                  name: "Harry Potter",
                  thumb_season: "https://i.imgur.com/NtKyrG6.jpeg", //https://i.imgur.com/wNJxHZO.jpeg //https://i.imgur.com/adBo3xd.jpeg  //https://i.imgur.com/NtKyrG6.jpeg  //https://i.pinimg.com/1200x/f9/85/3f/f9853f646b1d4352eabfe1470602d2e3.jpg
                  have_season: false,
                  episodes: [
                    { title: "Harry Potter e a Pedra Filosofal",                subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e a amara Secreta",                  subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Prisioneiro de Azkaban",         subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Cálice de Fogo",                 subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e a Ordem da Fênix",                 subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Enigma do Príncipe",             subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e as Relíquias da Morte (Parte I)",  subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e as Relíquias da Morte (Parte II)", subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                  ]
                },

                {
                  name: "Harry Potter",
                  thumb_season: "https://i.imgur.com/NtKyrG6.jpeg", //https://i.imgur.com/wNJxHZO.jpeg //https://i.imgur.com/adBo3xd.jpeg  //https://i.imgur.com/NtKyrG6.jpeg  //https://i.pinimg.com/1200x/f9/85/3f/f9853f646b1d4352eabfe1470602d2e3.jpg
                  have_season: false,
                  episodes: [
                    { title: "Harry Potter e a Pedra Filosofal",                subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e a amara Secreta",                  subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Prisioneiro de Azkaban",         subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Cálice de Fogo",                 subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e a Ordem da Fênix",                 subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e o Enigma do Príncipe",             subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e as Relíquias da Morte (Parte I)",  subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                    { title: "Harry Potter e as Relíquias da Morte (Parte II)", subtitle: "", duration: "2:30:10", thumb: "", url: [""], legend: [""] },
                  ]
                },
            ],
        },
    ],
  },
];

//=======================================================================
//CONFIGURAÇÕES
//=======================================================================
let groupSeriesButtonInfo   = true;  //ATIVA AS INFORMAÇÕES DOS BUTTONS
let iconsAnimated           = false; //ATIVA AS ANIMAÇÕES DOS ICONES
let randomImagesCards       = false; //AS IMAGENS ALEATÓRIAS DOS BOTÕES
let randomImagesCarrousel   = false; //AS IMAGENS ALEATÓRIAS DO CARROUSEL
let speedCarrouselBar       = 5;     //VELOCIDADE DAS ANIMAÇÕES DO CARROUSEL

// localStorage.clear();

//=======================================================================
//ICONES
//=======================================================================
const iconHome        = `https://img.icons8.com/material-rounded/96/home.png`;
const iconHistory     = `https://img.icons8.com/deco-glyph/96/time-machine.png`;
const iconFavorite    = `https://img.icons8.com/material-rounded/96/star--v1.png`;
const iconAnimes      = `https://img.icons8.com/fluency-systems-filled/96/tv-show.png`;
const iconChannel     = `https://img.icons8.com/ios-filled/100/online--v1.png`;
const iconMovies      = `https://img.icons8.com/ios-glyphs/90/cinema---v1.png`;
const iconNovels      = `https://img.icons8.com/ios-filled/100/literature--v1.png`;
const iconMinecraft   = `https://img.icons8.com/fluency-systems-regular/48/minecraft-grass-cube.png`; //https://img.icons8.com/external-those-icons-fill-those-icons/96/external-Minecraft-video-games-those-icons-fill-those-icons.png
const iconSeries      = `<svg role="img" viewBox="20 20 216 216" xmlns="http://www.w3.org/2000/svg" class="custom-icon"><path d="M200,88V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V88A16,16,0,0,1,40,72H184A16,16,0,0,1,200,88Zm16-48H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" fill="#000000"></path></svg>`; //`https://img.icons8.com/ios-filled/100/bursts.png`;
const iconBiblical    = `https://img.icons8.com/ios-filled/100/holy-bible.png`;
const iconTwitch      = `https://img.icons8.com/ios-filled/100/twitch.png`;
const iconYoutube     = `https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-youtube-is-an-american-video-sharing-and-now-googles-subsidiaries-logo-bold-tal-revivo.png`;
const iconKick        = `<svg role="img" viewBox="-5 0 30 30" xmlns="http://www.w3.org/2000/svg" id="Kick--Streamline-Simple-Icons" class="custom-icon"><path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" fill="#000000" stroke-width="1"></path></svg>`;
const iconContinue    = `https://img.icons8.com/fluency-systems-filled/48/pause.png`;
const iconSearch      = `https://img.icons8.com/sf-regular/96/search.png`;

const iconHomeGif      = 'https://i.imgur.com/xS20AuN.png';
const iconHistoryGif   = 'https://i.imgur.com/MShsVT9.png'; //'https://i.imgur.com/nxaxTS3.png';
const iconFavoriteGif  = 'https://i.imgur.com/LAcxXkU.png'; //'https://i.imgur.com/UmEAJ1G.png';
const iconContinueGif  = `https://i.imgur.com/cJSsnd3.png`;
const iconSearchGif    = `https://i.imgur.com/PcIRA4C.png`;

function getIcon(groupName) {
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

function setupStreamIcons(link) {
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

//=======================================================================
//FAVORITOS
//=======================================================================
function getFavorites() {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(cardName) {
  const favorites = getFavorites();
  return favorites.some(fav => fav.card_name === cardName);
}

function toggleFavorite(cardData) {
  const favorites = getFavorites();
  const index = favorites.findIndex(fav => fav.card_name === cardData.name);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ ...cardData, card_name: cardData.name });
  }
  saveFavorites(favorites);
  return index === -1;
}

function updateCarouselFavorites() {
  const carouselButtons = document.querySelectorAll('#carousel .favorite-button-s2');
  
  carouselButtons.forEach(button => {
    const subgroupData = button.getAttribute('data-subgroup');
    if (subgroupData) {
      const subgroup = JSON.parse(subgroupData);
      const allFavorite = isAllCardsFavorite(subgroup);
      button.classList.toggle('active', allFavorite);
      
      const tooltip = button.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = allFavorite ? 'Remover todos dos favoritos' : 'Adicionar todos aos favoritos';
      }
    } else if (button.getAttribute('data-card')) {
      const cardData = JSON.parse(button.getAttribute('data-card'));
      const isNowFavorite = isFavorite(cardData.name);
      
      button.classList.toggle('active', isNowFavorite);
      
      const tooltip = button.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = isNowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      }
    }
  });
}

function attachFavoriteListeners(container = document) {
  const existingButtons = container.querySelectorAll('.favorite-button, .favorite-button-s2');
  existingButtons.forEach(btn => {
    btn.removeEventListener('click', btn._favoriteHandler);
  });

  const favoriteButtons = container.querySelectorAll('.favorite-button, .favorite-button-s2');
  
  favoriteButtons.forEach(button => {
    const handler = function(e) {
      e.preventDefault();
      e.stopPropagation();

      const subgroupData = this.getAttribute('data-subgroup');
      if (subgroupData) {
        const subgroup = JSON.parse(subgroupData);
        const allManualFavorites = areAllFavoritesManual(subgroup);
        const newState = toggleAllCardsFavorite(subgroup);
        const currentAllFavorite = isAllCardsFavorite(subgroup);

        this.classList.toggle('active', currentAllFavorite);

        updateAllCardButtonsState(subgroup);

        this.classList.add('heart-pulse');
        this.addEventListener('animationend', () => {
          this.classList.remove('heart-pulse');
        }, { once: true });
        const tooltip = this.querySelector('.tooltip-text');
        if (tooltip) {
          if (currentAllFavorite && allManualFavorites) {
            tooltip.textContent = 'Remover todos dos favoritos';
          } else if (currentAllFavorite) {
            tooltip.textContent = 'Remover favoritos automáticos';
          } else {
            tooltip.textContent = 'Adicionar todos aos favoritos';
          }
        }

      } else {
        const cardData = JSON.parse(this.getAttribute('data-card'));
        const nowFavorite = toggleFavoriteIndividual(cardData);

        this.classList.toggle('favorited', nowFavorite);

        const star = this.querySelector('.rating__star');
        if (star) {
          const ring = star.querySelector('.rating__star-ring');
          const stroke = star.querySelector('.rating__star-stroke');
          const fill = star.querySelector('.rating__star-fill');
          const lines = star.querySelectorAll('.rating__star-line');

          [ring, stroke, fill, ...lines].forEach(el => {
            if (el) el.style.animation = 'none';
          });
          this.offsetHeight;

          if (nowFavorite) {
            if (ring) ring.style.animation = 'starRing 1s ease-in-out forwards';
            if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out forwards';
            if (fill) fill.style.animation = 'starFill 1s ease-in-out forwards';
            lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out forwards');
          } else {
            if (ring) ring.style.animation = 'starRing 1s ease-in-out reverse forwards';
            if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out reverse forwards';
            if (fill) fill.style.animation = 'starFill 1s ease-in-out reverse forwards';
            lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out reverse forwards');
          }
        }

        const tooltip = this.querySelector('.tooltip-text');
        if (tooltip) {
          tooltip.textContent = nowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
        }

        updateCarouselButtonState(cardData);
      }

      this.classList.add('pulse');
      setTimeout(() => { this.classList.remove('pulse'); }, 600);

      const currentPath = getCurrentPath();
      if (currentPath === generateSlug('Início') || currentPath === generateSlug('Favoritos')) {
        if (!this._lastClick || Date.now() - this._lastClick > 300) {
          this._lastClick = Date.now();
          setTimeout(() => loadPageContent(currentPath), 0);
        }
      }
    };

    button._favoriteHandler = handler;
    button.addEventListener('click', handler);
  });
}

function updateAllCardButtonsState(subgroup) {
  if (!subgroup.card_buttons) return;
  
  const favorites = getFavorites();
  
  subgroup.card_buttons.forEach(card => {
    const isCardFavorite = favorites.some(fav => fav.card_name === card.name);
    const cardButtons = document.querySelectorAll(`.favorite-button[data-card*="${card.name}"]`);
    
    cardButtons.forEach(button => {
      button.classList.toggle('favorited', isCardFavorite);

      const star = button.querySelector('.rating__star');
      if (star) {
        const ring = star.querySelector('.rating__star-ring');
        const stroke = star.querySelector('.rating__star-stroke');
        const fill = star.querySelector('.rating__star-fill');
        const lines = star.querySelectorAll('.rating__star-line');

        [ring, stroke, fill, ...lines].forEach(el => {
          if (el) el.style.animation = 'none';
        });
        button.offsetHeight;

        if (isCardFavorite) {
          if (ring) ring.style.animation = 'starRing 1s ease-in-out forwards';
          if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out forwards';
          if (fill) fill.style.animation = 'starFill 1s ease-in-out forwards';
          lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out forwards');
        } else {
          if (ring) ring.style.animation = 'starRing 1s ease-in-out reverse forwards';
          if (stroke) stroke.style.animation = 'starStroke 1s ease-in-out reverse forwards';
          if (fill) fill.style.animation = 'starFill 1s ease-in-out reverse forwards';
          lines.forEach(line => line.style.animation = 'starLine 1s ease-in-out reverse forwards');
        }
      }

      const tooltip = button.querySelector('.tooltip-text');
      if (tooltip) {
        tooltip.textContent = isCardFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
      }
    });
  });
}

function updateCarouselButtonState(cardData) {
  const subgroup = findSubgroupByName(cardData.subgroup_name || cardData.group_name);
  if (!subgroup) return;
  
  const allFavorite = isAllCardsFavorite(subgroup);
  const allManual = areAllFavoritesManual(subgroup);
  const carouselButtons = document.querySelectorAll(`.favorite-button-s2[data-subgroup*="${subgroup.name}"]`);
  
  carouselButtons.forEach(button => {
    button.classList.toggle('active', allFavorite);
    
    const tooltip = button.querySelector('.tooltip-text');
    if (tooltip) {
      if (allFavorite && allManual) {
        tooltip.textContent = 'Remover todos dos favoritos';
      } else if (allFavorite) {
        tooltip.textContent = 'Remover favoritos automáticos';
      } else {
        tooltip.textContent = 'Adicionar todos aos favoritos';
      }
    }
  });
}

function areAllFavoritesManual(subgroup) {
  if (!subgroup.card_buttons || subgroup.card_buttons.length === 0) return false;
  const favorites = getFavorites();
  
  return subgroup.card_buttons.every(card => {
    const favoriteData = favorites.find(fav => fav.card_name === card.name);
    return favoriteData && !favoriteData.auto_favorited;
  });
}

function isAllCardsFavorite(subgroup) {
  if (!subgroup.card_buttons || subgroup.card_buttons.length === 0) return false;
  const favorites = getFavorites();
  return subgroup.card_buttons.every(card => 
    favorites.some(fav => fav.card_name === card.name)
  );
}

function toggleAllCardsFavorite(subgroup) {
  if (!subgroup.card_buttons || subgroup.card_buttons.length === 0) return false;

  const favorites = getFavorites();
  const allCardsFavorite = isAllCardsFavorite(subgroup);
  const allManualFavorites = areAllFavoritesManual(subgroup);
  
  if (allCardsFavorite && allManualFavorites) {
    for (let i = favorites.length - 1; i >= 0; i--) {
      const fav = favorites[i];
      const isFromThisSubgroup = subgroup.card_buttons.some(card => card.name === fav.card_name);
      
      if (isFromThisSubgroup) {
        favorites.splice(i, 1);
      }
    }
    saveFavorites(favorites);
    return false;
  }
  
  if (!allCardsFavorite) {
    subgroup.card_buttons.forEach(card => {
      const isAlreadyFavorite = favorites.some(fav => fav.card_name === card.name);
      if (!isAlreadyFavorite) {
        favorites.push({ ...card, card_name: card.name, auto_favorited: true });
      }
    });
    saveFavorites(favorites);
    return true;
    
  } else {
    let anyRemoved = false;
    for (let i = favorites.length - 1; i >= 0; i--) {
      const fav = favorites[i];
      const isFromThisSubgroup = subgroup.card_buttons.some(card => card.name === fav.card_name);
      
      if (isFromThisSubgroup && fav.auto_favorited) {
        favorites.splice(i, 1);
        anyRemoved = true;
      }
    }
    
    saveFavorites(favorites);
    return !anyRemoved;
  }
}

function toggleFavoriteIndividual(cardData) {
  const favorites = getFavorites();
  const index = favorites.findIndex(fav => fav.card_name === cardData.name);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ ...cardData, card_name: cardData.name });
  }
  
  saveFavorites(favorites);
  return index === -1;
}

//=======================================================================
// FILTRO DE SÉRIES/GRUPOS
//=======================================================================
function getFilteredItems(path) {
  const segments = path.split('/').filter(s => s);

  if (segments.length === 2) {
    const [groupSlug, subgroupSlug] = segments;
    const subgroup = findSubgroupByGroupAndSlug(groupSlug, subgroupSlug);
    if (subgroup) {
      return [{ type: 'subgroup', data: subgroup }];
    }
  }

  if (segments.length === 1) {
    const singlePath = segments[0];

    if (singlePath === generateSlug('Favoritos')) {
      const allFavorites = [];
      seriesData.forEach(groupItem => {
        if (groupItem.group) {
          groupItem.group.forEach(subgroup => {
            if (subgroup.card_buttons) {
              subgroup.card_buttons.forEach(card => {
                if (isFavorite(card.name)) {
                  allFavorites.push({ ...subgroup, card: card, original_group: groupItem.group_name });
                }
              });
            }
          });
        }
      });

      const groupedFavorites = {};
      allFavorites.forEach(item => {
        const key = `${item.original_group}-${item.name}`;
        if (!groupedFavorites[key]) {
          groupedFavorites[key] = { ...item, card_buttons: [] };
        }
        if (!groupedFavorites[key].card_buttons.includes(item.card)) {
          groupedFavorites[key].card_buttons.push(item.card);
        }
      });

      const favoritesGroup = {
        group_name: "Favoritos",
        group_slug: "favoritos",
        visible: true,
        group: Object.values(groupedFavorites)
      };
      return [favoritesGroup];

    } else if (singlePath === generateSlug('Início')) {
      const allFavorites = [];
      seriesData.forEach(groupItem => {
          if (groupItem.group) {
              groupItem.group.forEach(subgroup => {
                if (subgroup.card_buttons) {
                  subgroup.card_buttons.forEach(card => {
                    if (isFavorite(card.name)) {
                      allFavorites.push({ ...subgroup, card: card, original_group: groupItem.group_name });
                    }
                  });
                }
              });
          }
      });

      const homepageGroups = seriesData
          .filter(groupItem => groupItem.visible && groupItem.group && groupItem.group.length > 0)
          .map(groupItem => ({
              ...groupItem,
              group: groupItem.group.filter(subgroup => subgroup.card_buttons && subgroup.card_buttons.some(card => card.visible !== false))
          }));

      if (allFavorites.length > 0) {
          const groupedFavorites = {};
          allFavorites.forEach(item => {
            const key = `${item.original_group}-${item.name}`;
            if (!groupedFavorites[key]) {
              groupedFavorites[key] = { ...item, card_buttons: [] };
            }
            if (!groupedFavorites[key].card_buttons.includes(item.card)) {
              groupedFavorites[key].card_buttons.push(item.card);
            }
          });
          const favoritesGroup = {
              group_name: "Favoritos",
              group_slug: "favoritos",
              visible: true,
              group: Object.values(groupedFavorites)
          };
          return [favoritesGroup, ...homepageGroups];
      }
      return homepageGroups;
    } else {
        const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === singlePath && groupItem.visible);
        return matchingGroup ? [matchingGroup] : [];
    }
  }
  return [];
}

function findSubgroupByGroupAndSlug(groupSlug, subgroupSlug) {
  const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === groupSlug);
  if (matchingGroup && matchingGroup.group) {
    const subgroup = matchingGroup.group.find(item => generateSlug(item.name) === subgroupSlug);
    if (subgroup) {
      return { ...subgroup, group_name: matchingGroup.group_name };
    }
  }
  return null;
}

function attachSeriesNavigationListeners(container = document) {
  const seriesButtons = container.querySelectorAll('#group-series-button[data-subgroup-slug][data-group-slug]');
  
  seriesButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (e.target.closest('.favorite-button') || e.target.closest('.watch-button')) {
        return;
      }
      
      if (this.closest('.card-container.disabled')) {
        return;
      }
      
      e.preventDefault();
      const groupSlug = this.getAttribute('data-group-slug');
      const subgroupSlug = this.getAttribute('data-subgroup-slug');
      window.location.hash = `#${groupSlug}/${subgroupSlug}`;
    });
  });
}

function findSubgroupByName(subgroupName) {
  for (const groupItem of seriesData) {
    if (groupItem.group) {
      const subgroup = groupItem.group.find(item => item.name === subgroupName);
      if (subgroup) {
        return { ...subgroup, group_name: groupItem.group_name };
      }
    }
  }
  return null;
}

//=======================================================================
// PAGINA INICIAL
//=======================================================================
function loadPageContent(path) {
  const contentContainer = document.getElementById('page-content');
  let html = '';
  const segments = path.split('/').filter(s => s);
  const isFavoritesPage = segments.length === 1 && segments[0] === generateSlug('Favoritos');
  const isHomePage = segments.length === 1 && segments[0] === generateSlug('Início');
  const isHistoryPage = segments.length === 1 && segments[0] === generateSlug('Histórico');
  const filteredItems = getFilteredItems(path);
  const isSubgroupPage = filteredItems.length > 0 && filteredItems[0].type === 'subgroup';
  const isCategoryPage = !isHomePage && !isFavoritesPage && !isHistoryPage && !isSubgroupPage && segments.length === 1;

  if (isHomePage || isFavoritesPage || isHistoryPage) {
    const navbar = document.querySelector('header.navbar');
    const existingBackButton = navbar ? navbar.querySelector('.back-button') : null;
    if (existingBackButton) {
      existingBackButton.remove();
    }
  }

  if (isHomePage) {
    const globalContinueHtml = renderGlobalContinueWatching();
    if (globalContinueHtml) {
      html += `${globalContinueHtml}`;
    }

    const allFavorites = [];
    seriesData.forEach(groupItem => {
      if (groupItem.group) {
        groupItem.group.forEach(subgroup => {
          if (subgroup.card_buttons) {
            subgroup.card_buttons.forEach(card => {
              if (isFavorite(card.name)) {
                allFavorites.push({ ...subgroup, card: card, original_group: groupItem.group_name });
              }
            });
          }
        });
      }
    });

    if (allFavorites.length > 0) {
      const groupedFavorites = {};
      allFavorites.forEach(item => {
        const key = `${item.original_group}-${item.name}`;
        if (!groupedFavorites[key]) {
          groupedFavorites[key] = { ...item, card_buttons: [] };
        }
        if (!groupedFavorites[key].card_buttons.includes(item.card)) {
          groupedFavorites[key].card_buttons.push(item.card);
        }
      });
      const favoritesGroup = {
        group_name: "Favoritos",
        group_slug: "favoritos",
        visible: true,
        group: Object.values(groupedFavorites)
      };
      
      html += renderGroupSection(favoritesGroup, true);
    }

    const homepageGroups = seriesData
      .filter(groupItem => groupItem.visible && groupItem.group && groupItem.group.length > 0)
      .map(groupItem => ({
        ...groupItem,
        group: groupItem.group.filter(subgroup => subgroup.card_buttons && subgroup.card_buttons.some(card => card.visible !== false))
      }));

    homepageGroups.forEach(groupItem => {
      if (groupItem.group_name === "Favoritos") return;
      
      html += renderGroupSection(groupItem, true);
    });

  } else if (isFavoritesPage) {
    
    if (filteredItems.length > 0) {
      filteredItems.forEach(groupItem => {
        html += renderGroupSection(groupItem, false);
      });
    } else {
      html += '<p>Você ainda não adicionou nenhum item aos favoritos.</p>';
    }

  } else if (isSubgroupPage) {
    const subgroup = filteredItems[0].data;
    html += renderSubgroupDescription(subgroup);

    const navbar = document.querySelector('header.navbar');
    if (navbar && !navbar.querySelector('.back-button')) {
      const backButton = document.createElement('button');
      backButton.className = 'back-button';
      backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Voltar';
      backButton.onclick = function() { history.back(); };

      const searchBar = navbar.querySelector('.search-bar');
      if (searchBar) {
        navbar.insertBefore(backButton, searchBar);
      } else {
        navbar.insertBefore(backButton, navbar.firstChild);
      }
    }

    html += `<section id="subgroup-header"></section>`;

    html += `
      <section id="subgroup-episodes">
    `;

    subgroup.season.forEach((season, seasonIndex) => {
      const seasonEpisodeCount = season.episodes.length;
      const seasonHeaderText = subgroup.season.length > 1 
        ? `T${seasonIndex + 1} - Episódios disponíveis: ${seasonEpisodeCount}` 
        : `Episódios disponíveis: ${seasonEpisodeCount}`;

      html += `
        <div class="season-section">
          <header class="group-title-header">
            <h2>${seasonHeaderText}</h2>
          </header>
          <div class="episodes-container">
      `;

      season.episodes.forEach((episode, episodeIndex) => {
        const firstUrl = episode.url && episode.url.length > 0 ? episode.url[0] : '#';
        const watchedData = getWatchedEpisode(subgroup.name, seasonIndex, episodeIndex);
        const isWatched = watchedData && watchedData.watched;
        const isActive = watchedData && watchedData.active;
        
        let buttonClasses = '';
        if (isActive) buttonClasses += 'active ';
        if (isWatched) buttonClasses += 'watched ';
        buttonClasses = buttonClasses.trim();
        
        const episodeThumb = episode.thumb || '';
        const hasEpisodeThumb = !!episodeThumb;

        html += `
          <div class="episodes-container-card slide-in-right" style="opacity: 1;"
              data-subgroup-name="${subgroup.name}"
              data-urls='${JSON.stringify(episode.url || [])}'
              data-season-index="${seasonIndex}"
              data-episode-index="${episodeIndex}"
              onclick="playEpisode(this)">
            <div id="episode-button" 
                class="${buttonClasses}" 
                style="background-image: url('${season.thumb_season}');">
              ${hasEpisodeThumb ? `
              <img class="episode-thumb" 
                  data-src="${episodeThumb}" 
                  data-fallback="${season.thumb_season}" 
                  alt="${episode.title}" 
                  loading="lazy"
                  src=""
                  style="opacity: 0; transition: opacity 0.3s ease-in;">
              ` : ''}
              <span class="icon-btn"></span>
              ${isWatched ? '<span class="badge-watched">▶ ASSISTIDO</span>' : ''}
              <span class="badge-duration">${episode.duration}</span>
            </div>
            <p class="episode-title">${episode.title}</p>
            <p class="episode-subtitle">${episode.subtitle || ''}</p>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
      </section>
    `;

    setTimeout(() => {
      updateSubgroupContinueWatching(subgroup.name);
    }, 100);

  } else if (isHistoryPage) {
     html += renderHistoryPage();
  } else if (isCategoryPage) {
    const navbar = document.querySelector('header.navbar');
    if (navbar && !navbar.querySelector('.back-button')) {
      const backButton = document.createElement('button');
      backButton.className = 'back-button';
      backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Voltar';
      backButton.onclick = function() { 
        window.location.hash = `#${generateSlug('Início')}`;
      };

      const searchBar = navbar.querySelector('.search-bar');
      if (searchBar) {
        navbar.insertBefore(backButton, searchBar);
      } else {
        navbar.insertBefore(backButton, navbar.firstChild);
      }
    }

    if (filteredItems.length > 0) {
      filteredItems.forEach(groupItem => {
        html += renderGroupSection(groupItem, false);
      });
    } else {
      html += '<p>Nenhum item encontrado.</p>';
    }
  } else {
    if (filteredItems.length > 0) {
      filteredItems.forEach(groupItem => {
        html += renderGroupSection(groupItem, false);
      });
    } else {
      html += '<p>Nenhum item encontrado.</p>';
    }
  }

  contentContainer.innerHTML = html;

  if (isSubgroupPage) {
    const removeBtns = contentContainer.querySelectorAll('.remove-button');
    removeBtns.forEach(removeBtn => {
      removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const subgroupName = this.getAttribute('data-subgroup-name');
        const seasonIdx = parseInt(this.getAttribute('data-season-index'));
        const epIdx = parseInt(this.getAttribute('data-episode-index'));
        removeContinueWatching(subgroupName, seasonIdx, epIdx);
      });
    });
    loadEpisodeImages();
    updateEpisodeUI();
    updateSubgroupContinueWatching();
  }

  if (isHistoryPage) {
    const removeBtns = contentContainer.querySelectorAll('.remove-log-button');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const historyItem = this.closest('.history-log-item');
        const onclickAttr = this.getAttribute('onclick');
        const match = onclickAttr ? onclickAttr.match(/removeHistoryLog\(([^)]+)\)/) : null;
        
        if (match) {
          const logId = parseFloat(match[1]);
          removeHistoryLog(logId);
          loadPageContent(generateSlug('Histórico'));
        }
      });
    });
  }

  if (isHomePage) {
      const globalRemoveBtns = contentContainer.querySelectorAll('#global-continue-watching .remove-button');
      globalRemoveBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const subgroupName = this.getAttribute('data-subgroup-name');
          const seasonIdx = parseInt(this.getAttribute('data-season-index'));
          const epIdx = parseInt(this.getAttribute('data-episode-index'));
          removeContinueWatching(subgroupName, seasonIdx, epIdx);
          loadPageContent(getCurrentPath());
        });
    });

    attachSeriesNavigationListeners(contentContainer);
    initializeHomePageFeatures();
  }
  
  if (!isSubgroupPage) {
    attachSeriesNavigationListeners(contentContainer);
  }
  
  attachFavoriteListeners(contentContainer);
  updateCarouselFavorites();
}

function initializeHomePageFeatures() {
  const exploreButtons = document.querySelectorAll('.explore-button');
  exploreButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const groupSlug = this.getAttribute('data-group');
      
      if (groupSlug === generateSlug('Favoritos')) {
        const favoritesLink = document.querySelector(`a[data-path="${generateSlug('Favoritos')}"]`);
        if (favoritesLink) {
          favoritesLink.click();
        }
      } else {
        const targetLink = document.querySelector(`a[data-group="${groupSlug}"]`);
        if (targetLink) {
          targetLink.click();
        }
      }
    });
  });

  const groupCardsHeaders = document.querySelectorAll('.group-cards-header.home-layout');
  groupCardsHeaders.forEach(header => {
    const container = header.querySelector('.group-cards-container');
    const prevBtn = header.querySelector('.nav-arrow.prev');
    const nextBtn = header.querySelector('.nav-arrow.next');
    
    if (!container || !prevBtn || !nextBtn) return;

    const cardWidth = 240;
    const scrollAmount = cardWidth * 2;

    const updateArrowVisibility = () => {
      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
      
      prevBtn.classList.toggle('hidden', !canScrollLeft);
      nextBtn.classList.toggle('hidden', !canScrollRight);
    };

    nextBtn.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    container.addEventListener('scroll', updateArrowVisibility);
    setTimeout(updateArrowVisibility, 100);
  });
}

function calculateTotalCards(groupItem) {
  let totalCards = 0;
  groupItem.group.forEach(subgroup => {
    if (!subgroup.card_buttons || subgroup.card_buttons.length === 0) return;

    const enabledCards = subgroup.card_buttons.filter(card => card.visible !== false && card.enabled !== false);
    if (enabledCards.length === 0) return;

    const hasNonAcumulative = enabledCards.some(card => card.acumulative !== true);
    let subgroupCount = 0;

    if (!hasNonAcumulative) {
      subgroupCount = enabledCards.length;
    } else {
      subgroupCount = 1;
    }

    totalCards += subgroupCount;
  });
  return totalCards;
}

function renderGroupSection(groupItem, isHomePage, skipHeader = false) {
  const sortedSubgroups = [...groupItem.group].sort((a, b) => {
    const aHasEnabled = a.card_buttons && a.card_buttons.some(card => card.enabled !== false);
    const bHasEnabled = b.card_buttons && b.card_buttons.some(card => card.enabled !== false);
    
    if (aHasEnabled !== bHasEnabled) {
      return aHasEnabled ? -1 : 1;
    }
    
    return a.name.localeCompare(b.name);
  });

  sortedSubgroups.forEach(subgroup => {
    if (subgroup.card_buttons) {
      subgroup.card_buttons.sort((a, b) => {
        const enabledOrder = (a.enabled === false ? 1 : 0) - (b.enabled === false ? 1 : 0);
        
        if (enabledOrder === 0) {
          return a.name.localeCompare(b.name);
        }
        
        return enabledOrder;
      });
    }
  });

  const groupSlug = groupItem.group_slug || generateSlug(groupItem.group_name);
  let html = '';
  
  if (!skipHeader) {
    html += `<section id="group-${groupSlug}-header">`;
    html += `<header class="group-title-header">`;
    
    let displayGroupName = groupItem.group_name;
    let iconHTML = '';
    
    if (groupItem.group_name.includes('favoritos') || groupItem.group_name.includes('Favoritos')) {
      iconHTML = `<img src="${iconFavorite}" class="custom-icon" alt="Favoritos Icon">`;
      let totalCards = 0;
      sortedSubgroups.forEach(subgroup => {
        if (subgroup.card_buttons) {
          totalCards += subgroup.card_buttons.filter(card => card.visible !== false && isFavorite(card.name)).length;
        }
      });
      displayGroupName = `Conteúdos favoritos (${totalCards})`;

      if (totalCards === 0) {
        return `
          <section id="group-favoritos-header">
            <header class="group-title-header">
              <h2 class="favorites-header">${iconHTML} ${displayGroupName}</h2>
            </header>
            <div class="no-favorites-container">
              <p>Você ainda não adicionou nenhum item aos favoritos.</p>
            </div>
          </section>
        `;
      }
    } 
    else {
      const iconData = getIcon(groupItem.group_name);
      if (iconData.type === 'fa') {
        iconHTML = `<i class="${iconData.value}"></i>`;
      } else if (iconData.type === 'img') {
        iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt || groupItem.group_name + ' Icon'}">`;
      } else if (iconData.type === 'svg') {
        iconHTML = iconData.value;
      }

      const totalCards = calculateTotalCards({ ...groupItem, group: sortedSubgroups });
      displayGroupName += ` (${totalCards} disponíveis)`;
    }
    
    const favoritesClass = groupItem.group_name === 'Favoritos' ? 'favorites-header' : '';
    html += `<h2 class="${favoritesClass}">${iconHTML} ${displayGroupName}</h2>`;
    
    if (isHomePage && !groupItem.group_name.includes('favoritos')) {
      html += `
      <button class="explore-button" data-group="${groupSlug}">
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">Explorar</span>
        <span class="circle"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
      </button>
      `;
    }
    html += `</header>`;
  }
      
  const layoutClass = isHomePage ? 'home-layout' : 'category-layout';
  html += `<div class="group-cards-header ${layoutClass}">`;

  if (isHomePage) {
    html += `<button class="nav-arrow prev hidden" aria-label="Cartões anteriores"><i class="fas fa-chevron-left"></i></button>`;
  }

  html += `<div class="group-cards-container ${layoutClass}">`;

  sortedSubgroups.forEach(subgroup => {
    if (subgroup.card_buttons) {
      subgroup.card_buttons.forEach(card => {
        if (card.visible === false || !card.name) return;

        const urls = card.thumb_buttons.url;
        const selectedThumb = randomImagesCards 
          ? urls[Math.floor(Math.random() * urls.length)] 
          : urls[0];
        const subgroupSlug = generateSlug(subgroup.name);
        const actualGroupSlug = subgroup.original_group ? generateSlug(subgroup.original_group) : groupSlug;
        const currentIsFavorite = isFavorite(card.name);
        const containerClass = card.enabled === false ? 'disabled' : '';
        const watchButtonClass = card.enabled === false ? 'watch-button disabled' : 'watch-button';
        const watchButtonText = card.enabled === false ? 'INDISPONÍVEL' : 'ASSISTIR';
        const shouldShowInfo = groupSeriesButtonInfo && card.info;
        const infoClass = shouldShowInfo ? 'info' : '';
        const hasInfoClass = shouldShowInfo ? 'has-info' : '';

        html += `
          <div class="card-container ${containerClass} ${hasInfoClass}" data-subgroup-slug="${subgroupSlug}">
            <div class="inner-container">
                <div class="border-outer"></div> 
                <div class="main-card" style="background-image: url('${selectedThumb}')"></div>
                <div class="glow-layer-1"></div>
                <div class="glow-layer-2"></div>
            </div>

            <div class="overlay-1"></div>
            <div class="overlay-2"></div>
            <div class="background-glow"></div>

            <div id="group-series-button" class="${infoClass}" data-subgroup-slug="${subgroupSlug}" data-group-slug="${actualGroupSlug}">
              <div class="info">
                <h2>${card.name}</h2>
                <p>TEST</p>
                <button class="${watchButtonClass}">${watchButtonText}</button>
              </div>
              <button class="favorite-button ${currentIsFavorite ? 'favorited' : ''}" data-card='${JSON.stringify(card)}'>
                <svg class="rating__star" width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
                  <g transform="translate(16,16)">
                    <circle class="rating__star-ring" fill="none" stroke="#000" stroke-width="16" r="8" transform="scale(0)" />
                  </g>
                  <g stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <g transform="translate(16,16) rotate(180)">
                      <polygon class="rating__star-stroke" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="none" />
                      <polygon class="rating__star-fill" points="0,15 4.41,6.07 14.27,4.64 7.13,-2.32 8.82,-12.14 0,-7.5 -8.82,-12.14 -7.13,-2.32 -14.27,4.64 -4.41,6.07" fill="#000" />
                    </g>
                    <g transform="translate(16,16)" stroke-dasharray="12 12" stroke-dashoffset="12">
                      <polyline class="rating__star-line" transform="rotate(0)" points="0 4,0 16" />
                      <polyline class="rating__star-line" transform="rotate(72)" points="0 4,0 16" />
                      <polyline class="rating__star-line" transform="rotate(144)" points="0 4,0 16" />
                      <polyline class="rating__star-line" transform="rotate(216)" points="0 4,0 16" />
                      <polyline class="rating__star-line" transform="rotate(288)" points="0 4,0 16" />
                    </g>
                  </g>
                </svg>
                <span class="tooltip-text black tooltip-top">${currentIsFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</span>
              </button>
            </div>
          </div>
        `;
      });
    }
  });
  
  html += `</div>`;

  if (isHomePage) {
    html += `<button class="nav-arrow next" aria-label="Próximos cartões"><i class="fas fa-chevron-right"></i></button>`;
  }
  html += `</div>`;

  if (!skipHeader) {
    html += '</section>';
  }
  
  return html;
}

//=======================================================================
// HISTÓRICO
//=======================================================================
function getHistoryLogs() {
  const history = localStorage.getItem('historyLogs');
  return history ? JSON.parse(history) : [];
}

function saveHistoryLogs(logs) {
  localStorage.setItem('historyLogs', JSON.stringify(logs));
}

function addHistoryLog(subgroupName, seasonIndex, episodeIndex, episodeTitle, thumb) {
  const logs = getHistoryLogs();
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

  const log = {
    id: Date.now() + Math.random(),
    subgroupName,
    seasonIndex,
    episodeIndex,
    episodeTitle,
    thumb,
    timestamp,
    date: formattedDate,
    time: formattedTime
  };

  const filteredLogs = logs.filter(logEntry => 
    !(logEntry.subgroupName === subgroupName && 
      logEntry.seasonIndex === seasonIndex && 
      logEntry.episodeIndex === episodeIndex)
  );

  filteredLogs.unshift(log);
  saveHistoryLogs(filteredLogs);
}

function removeHistoryLog(logId) {
  const logs = getHistoryLogs();
  const logToRemove = logs.find(log => log.id === logId);
  
  if (logToRemove) {
    const watched = getWatchedEpisodes();
    const key = `${logToRemove.subgroupName}-${logToRemove.seasonIndex}-${logToRemove.episodeIndex}`;
    
    if (watched[key]) {
      watched[key].watched = false;
      watched[key].active = false;
      saveWatchedEpisodes(watched);
    }
  }
  
  const filteredLogs = logs.filter(log => log.id !== logId);
  saveHistoryLogs(filteredLogs);
  updateEpisodeUI();
  
  const currentPath = getCurrentPath();
  if (currentPath.includes('/')) {
    const segments = currentPath.split('/');
    if (segments.length === 2) {
      const subgroupName = findSubgroupByGroupAndSlug(segments[0], segments[1])?.name;
      if (subgroupName) {
        updateSubgroupContinueWatching(subgroupName);
      }
    }
  }
}

function clearAllHistoryLogs() {
  const logs = getHistoryLogs();
  
  const watched = getWatchedEpisodes();
  
  logs.forEach(log => {
    const key = `${log.subgroupName}-${log.seasonIndex}-${log.episodeIndex}`;
    if (watched[key]) {
      watched[key].watched = false;
      watched[key].active = false;
    }
  });
  
  saveWatchedEpisodes(watched);
  saveHistoryLogs([]);
  updateEpisodeUI();
}

function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} - ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function getGroupForSubgroup(subgroupName) {
  for (const groupItem of seriesData) {
    if (groupItem.group) {
      const subgroup = groupItem.group.find(item => item.name === subgroupName);
      if (subgroup) {
        return groupItem.group_name;
      }
    }
  }
  return 'Desconhecido';
}

function renderHistoryPage() {
  const logs = getHistoryLogs();
  const totalLogs = logs.length;
  
  let iconHTML = '';
  if (iconsAnimated) {
    iconHTML = `<img src="${iconHistoryGif}" class="custom-icon" alt="Histórico Icon">`;
  } else {
    iconHTML = `<img src="${iconHistory}" class="custom-icon" alt="Histórico Icon">`;
  }
  
  let html = `
    <section id="history-header">
      <header class="group-title-header">
        <h2 class="history-header">${iconHTML} Histórico (${totalLogs} registros)</h2>
        ${totalLogs > 0 ? `
          <button class="explore-button clear-all-button" onclick="showClearAllModal()">
            <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="-6 -6 36 36">
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
      
            <span class="text">Limpar todos</span>
            <span class="circle"></span>

            <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="-6 -6 36 36">
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z"></path>
            </svg>
          </button>

        ` : ''}
      </header>
    </section>
  `;

  if (totalLogs === 0) {
    html += `
      <div class="no-history-container">
        <p>Você ainda não assistiu nenhum episódio.</p>
      </div>
    `;
    return html;
  }

  const groupedLogs = {};
  logs.forEach(log => {
    const groupName = getGroupForSubgroup(log.subgroupName);
    if (!groupedLogs[groupName]) {
      groupedLogs[groupName] = [];
    }
    groupedLogs[groupName].push(log);
  });

  Object.keys(groupedLogs).forEach(groupName => {
    html += `
      <section id="group-${generateSlug(groupName)}-history">
        <header class="group-title-header">
          <h3>${groupName} (${groupedLogs[groupName].length} itens)</h3>
        </header>
        <div class="history-group-container">
    `;

    groupedLogs[groupName].forEach(log => {
      const subgroup = findSubgroupByName(log.subgroupName);
      const seasonNum = log.seasonIndex + 1;
      const epNum = log.episodeIndex + 1;
      const paddedEp = epNum.toString().padStart(3, '0');
      const thumb = log.thumb || (subgroup && subgroup.season && subgroup.season[log.seasonIndex] ? subgroup.season[log.seasonIndex].thumb_season : '');

      html += `
        <div class="history-log-item">
          <div class="history-log-thumb" style="background-image: url('${thumb}');"></div>
          <div class="history-log-info">
            <h4>${log.subgroupName}</h4>
            <p class="episode-details">Temporada ${seasonNum} - ${log.episodeTitle}</p>
            <p class="log-date">Data: ${formatDateTime(log.timestamp)}</p>
          </div>
          <button class="remove-log-button" onclick="removeHistoryLog(${log.id})">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 69 14" class="svgIcon bin-top">
              <g clip-path="url(#clip0_35_24)"> <path fill="black" d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"></path></g><defs> <clipPath id="clip0_35_24"><rect fill="white" height="14" width="69"></rect></clipPath></defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 69 57" class="svgIcon bin-bottom">
              <g clip-path="url(#clip0_35_22)"> <path fill="black" d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"></path></g><defs><clipPath id="clip0_35_22"><rect fill="white" height="57" width="69"></rect></clipPath></defs>
            </svg>
          </button>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;
  });

  return html;
}

function showClearAllModal() {
  const modalHtml = `
    <div id="clear-all-modal" class="modal-overlay">
      <div class="modal-content-custom modal-group">
        <button class="modal-close-btn" onclick="hideClearAllModal()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="modal-icon-container">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            class="modal-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              fill-rule="evenodd"
            ></path>
          </svg>
          <h2 class="modal-title">Deseja continuar?</h2>
          <p class="modal-description">
            Tem certeza que deseja limpar todo o histórico? Esta ação não pode ser desfeita.
          </p>
        </div>
        <div class="modal-buttons-custom">
          <button class="modal-btn modal-btn-cancel" onclick="hideClearAllModal()">
            Cancelar
          </button>
          <button class="modal-btn modal-btn-confirm" onclick="confirmClearAll()">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function hideClearAllModal() {
  const modal = document.getElementById('clear-all-modal');
  if (modal) modal.remove();
}

function confirmClearAll() {
  clearAllHistoryLogs();
  hideClearAllModal();
  loadPageContent(generateSlug('Histórico'));
}

//=======================================================================
// SISTEMA DE EPISÓDIOS
//=======================================================================
function getWatchedEpisodes() {
  const watched = localStorage.getItem('watchedEpisodes');
  return watched ? JSON.parse(watched) : {};
}

function saveWatchedEpisodes(watched) {
  localStorage.setItem('watchedEpisodes', JSON.stringify(watched));
}

function getWatchedEpisode(subgroupName, seasonIndex, episodeIndex) {
  const watched = getWatchedEpisodes();
  const key = `${subgroupName}-${seasonIndex}-${episodeIndex}`;
  return watched[key] || null;
}

function markEpisodeAsWatched(subgroupName, seasonIndex, episodeIndex) {
  const watched = getWatchedEpisodes();
  const currentKey = `${subgroupName}-${seasonIndex}-${episodeIndex}`;

  Object.keys(watched).forEach(key => {
    const [sName, sIndex, eIndex] = key.split('-');
    if (sName === subgroupName && parseInt(sIndex) === seasonIndex && key !== currentKey) {
      if (watched[key]) {
        watched[key].active = false;
        console.log(`Desativado active em: ${key}`);
      }
    }
  });

  watched[currentKey] = {
    watched: true,
    active: true,
    timestamp: Date.now(),
    subgroup: subgroupName,
    season: seasonIndex,
    episode: episodeIndex
  };

  saveWatchedEpisodes(watched);
  updateEpisodeUI();
  console.log(`Marcado em ${subgroupName}: Ep ${episodeIndex + 1}`);
}

function getActiveEpisodesBySubgroup() {
  const watched = getWatchedEpisodes();
  const activeBySubgroup = {};
  
  Object.keys(watched).forEach(key => {
    const data = watched[key];
    if (data && data.active) {
      const [subgroupName, seasonIndex, episodeIndex] = key.split('-');
      
      if (!activeBySubgroup[subgroupName]) {
        activeBySubgroup[subgroupName] = [];
      }
      
      const existingSeasonIndex = activeBySubgroup[subgroupName].findIndex(
        item => item.seasonIndex === parseInt(seasonIndex)
      );
      
      if (existingSeasonIndex === -1) {
        activeBySubgroup[subgroupName].push({
          seasonIndex: parseInt(seasonIndex),
          episodeIndex: parseInt(episodeIndex),
          data: data
        });
      }
    }
  });
  
  return activeBySubgroup;
}

function updateEpisodeUI() {
  const subgroupTitle = document.querySelector('.subgroup-title')?.textContent || '';
  if (!subgroupTitle) return;

  const watched = getWatchedEpisodes();
  const historyLogs = getHistoryLogs();
  const episodeCards = document.querySelectorAll('.episodes-container-card[data-subgroup-name="' + subgroupTitle + '"]');
  
  episodeCards.forEach(card => {
    const button = card.querySelector('#episode-button');
    button.classList.remove('watched', 'active');
    
    const existingBadge = button.querySelector('.badge-watched');
    if (existingBadge) {
      existingBadge.remove();
    }
  });

  episodeCards.forEach(card => {
    const seasonIndex = parseInt(card.getAttribute('data-season-index'));
    const episodeIndex = parseInt(card.getAttribute('data-episode-index'));
    const button = card.querySelector('#episode-button');
    
    const isInHistory = historyLogs.some(log => 
      log.subgroupName === subgroupTitle && 
      log.seasonIndex === seasonIndex && 
      log.episodeIndex === episodeIndex
    );
    
    const key = `${subgroupTitle}-${seasonIndex}-${episodeIndex}`;
    const watchedData = watched[key];
    
    if (isInHistory && watchedData && watchedData.watched) {
      button.classList.add('watched');
      
      if (!button.querySelector('.badge-watched')) {
        const badge = document.createElement('span');
        badge.className = 'badge-watched';
        badge.textContent = '▶ ASSISTIDO';
        button.appendChild(badge);
      }
      
      if (watchedData.active) {
        button.classList.add('active');
      }
    }
  });
}

function playEpisode(containerElement) {
  const urlsStr = containerElement.getAttribute('data-urls') || '[]';
  const urls = JSON.parse(urlsStr);
  const firstUrl = urls.length > 0 ? urls[0] : '#';
  const seasonIndex = parseInt(containerElement.getAttribute('data-season-index'));
  const episodeIndex = parseInt(containerElement.getAttribute('data-episode-index'));
  const subgroupTitle = document.querySelector('.subgroup-title').textContent;
  const episodeTitle = containerElement.querySelector('.episode-title').textContent;
  const episodeThumb = containerElement.querySelector('.episode-thumb') ? containerElement.querySelector('.episode-thumb').dataset.src : '';

  markEpisodeAsWatched(subgroupTitle, seasonIndex, episodeIndex);
  addHistoryLog(subgroupTitle, seasonIndex, episodeIndex, episodeTitle, episodeThumb);
  
  const button = containerElement.querySelector('#episode-button');
  button.classList.add('watched', 'active');

  if (!button.querySelector('.badge-watched')) {
    const badge = document.createElement('span');
    badge.className = 'badge-watched';
    badge.textContent = '▶ ASSISTIDO';
    button.appendChild(badge);
  }
  
  const allEpisodeButtons = document.querySelectorAll('.episodes-container-card[data-subgroup-name="' + subgroupTitle + '"] #episode-button');
  allEpisodeButtons.forEach(epButton => {
    if (epButton !== button) {
      epButton.classList.remove('active');
    }
  });

  updateSubgroupContinueWatching(subgroupTitle);

  if (firstUrl && firstUrl !== '#') {
    window.open(firstUrl, '_blank');
  }
}

const thumbnailCache = {};

function loadEpisodeImages() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                const fallback = img.dataset.fallback;

                if (!src) {
                    observer.unobserve(img);
                    return;
                }

                if (thumbnailCache[src]) {
                    img.closest('#episode-button').style.backgroundImage = `url('${thumbnailCache[src]}')`;
                    observer.unobserve(img);
                    return;
                }

                img.src = src;
                img.style.opacity = '0';

                img.onload = () => {
                    thumbnailCache[src] = src;
                    img.closest('#episode-button').style.backgroundImage = `url('${src}')`;
                    observer.unobserve(img);
                };

                img.onerror = () => {
                    if (!thumbnailCache[fallback]) {
                        thumbnailCache[fallback] = fallback;
                    }
                    img.src = '';
                    observer.unobserve(img);
                };
            }
        });
    }, { rootMargin: '200px' });

    document.querySelectorAll('.episode-thumb[data-src]').forEach(img => {
        const src = img.dataset.src;
        if (thumbnailCache[src]) {
            img.closest('#episode-button').style.backgroundImage = `url('${thumbnailCache[src]}')`;
        } else {
            observer.observe(img);
        }
    });
}

//=======================================================================
// DESCRIÇÃO DO VÍDEO
//=======================================================================
function injectVideoFadeKeyframes(fadeTime, videoDuration, opacity) {
  const styleId = 'video-fade-keyframes-style';
  
  const fadeInStopPct = (fadeTime / videoDuration) * 100;
  const fadeOutStartPct = ((videoDuration - fadeTime) / videoDuration) * 100;

  const keyframes = `
    @keyframes video-fade-loop {
      0% { 
        opacity: 0; 
      }
      
      ${fadeInStopPct}% {
        opacity: ${opacity}; 
      }

      ${fadeOutStartPct}% {
        opacity: ${opacity}; 
      }
      
      100% { 
        opacity: 0; 
      }
    }
  `;

  let styleTag = document.getElementById(styleId);
  if (styleTag) {
      styleTag.textContent = keyframes;
  } else {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      styleTag.textContent = keyframes;
      document.head.appendChild(styleTag);
  }
}

function renderSubgroupDescription(subgroup) {
  const desc = subgroup.description;
  if (!desc || !desc.visible) return '';

  const thumbs = desc.thumb || [];
  const selectedThumb = randomImagesCarrousel && thumbs.length > 1
    ? thumbs[Math.floor(Math.random() * thumbs.length)]
    : thumbs[0] || '';

  if (!selectedThumb) return '';

  let logoHtml = '';
  if (desc.logo.enabled && desc.logo.url) {
    let logoClasses = 'subgroup-logo';
    if (desc.logo.grayscale) {
      logoClasses += ' grayscale-logo';
    }
    if (desc.logo.minimalist) {
      logoClasses += ' minimalist-logo';
    }
    logoHtml = `<img class="${logoClasses}" src="${desc.logo.url}" alt="${desc.logo.title}">`;
  } else {
    logoHtml = `<h1>${desc.logo.title}</h1>`;
  }

  const sinopse = desc.sinopse || '';

  let effectHtml = '';
  const effect = desc.effect && desc.effect.length > 0 ? desc.effect[0] : null;
  let sectionClasses = 'subgroup-description';
  let videoStyle = '';
  let customStyles = '';

  if (effect && effect.links && effect.links.length > 0) {
    const videoUrl = effect.links[0];
    const videoOpacity = effect.opacity || 1.0;
    const videoMixBlend = effect.mixBlend || 'normal';
    const isHoverEffect = effect.hover === true;

    const fadeTime = effect.fade || 0;
    const videoDuration = effect.duration || 30;

    if (isHoverEffect) {
      sectionClasses += ' hover-effect-enabled';
      videoStyle += `mix-blend-mode: ${videoMixBlend}; --video-final-opacity: ${videoOpacity};`;
    } else {
      if (fadeTime > 0) {
        injectVideoFadeKeyframes(fadeTime, videoDuration, videoOpacity);
        videoStyle += `
          mix-blend-mode: ${videoMixBlend};
          animation: video-fade-loop ${videoDuration}s linear infinite;
        `;
      } else {
        videoStyle += `opacity: ${videoOpacity}; mix-blend-mode: ${videoMixBlend};`;
      }
    }
    
    effectHtml = `
      <video class="subgroup-effect-video" autoplay muted loop playsinline style="${videoStyle}">
        <source src="${videoUrl}" type="video/mp4">
      </video>
    `;

    if (effect.background && effect.background.description && effect.background.overlay) {
      const formatRgba = (colorArray) => {
        const r = Math.round(colorArray[0] * 255); 
        const g = Math.round(colorArray[1] * 255);
        const b = Math.round(colorArray[2] * 255);
        const a = colorArray[3];
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      };

      const descriptionColor = formatRgba(effect.background.description);
      const overlayColor = formatRgba(effect.background.overlay);

      customStyles = `
        --desc-bg-color: ${descriptionColor};
        --overlay-top-color: ${overlayColor};
      `;
    }
  }

  const allFavorite = isAllCardsFavorite(subgroup); 
  const subgroupDataJson = JSON.stringify(subgroup);
  const favoriteBtnHtml = `
    <button class="favorite-button-s2 ${allFavorite ? 'active' : ''}" data-subgroup='${subgroupDataJson}'>
      <span class="tooltip-text black tooltip-side">${allFavorite ? 'Remover todos dos favoritos' : 'Adicionar todos aos favoritos'}</span>
    </button>
  `;

  return `
    <section id="subgroup-description" class="${sectionClasses}" style="background-image: url('${selectedThumb}'); ${customStyles}">
      ${effectHtml}
      <div class="description-overlay"></div>
      <div class="subgroup-caption">
        <div class="subgroup-content">
          <div class="subgroup-info">
            ${logoHtml}
            ${sinopse ? `<p class="subgroup-sinopse">${sinopse}</p>` : ''}
          </div>
          <div class="subgroup-actions">
            ${favoriteBtnHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}

//=======================================================================
// CONTINUE ASSISTINDO
//=======================================================================
function updateSubgroupContinueWatching(subgroupName) {
  if (!document.querySelector('#subgroup-header')) return;

  const watched = getWatchedEpisodes();
  let activeInThisSubgroup = [];

  Object.keys(watched).forEach(key => {
    const [storedSubgroupName, seasonIdx, epIdx] = key.split('-');
    if (storedSubgroupName === subgroupName && watched[key] && watched[key].active) {
      activeInThisSubgroup.push({ seasonIdx: parseInt(seasonIdx), epIdx: parseInt(epIdx) });
    }
  });

  let continueSection = document.getElementById('continue-watching');
  const subgroupHeader = document.getElementById('subgroup-header');
  const subgroupEpisodes = document.getElementById('subgroup-episodes');

  let html = '';
  if (activeInThisSubgroup.length > 0) {
    html += `
      <section id="continue-watching">
        <header class="group-title-header">
          <h2>Continue Assistindo</h2>
        </header>
        <div class="continue-episodes-container">
    `;

    activeInThisSubgroup.forEach((seasonActive) => {
      const subgroup = findSubgroupByName(subgroupName);
      if (!subgroup || !subgroup.season[seasonActive.seasonIdx]) return;

      const season = subgroup.season[seasonActive.seasonIdx];
      const episode = season.episodes[seasonActive.epIdx];
      const thumb = episode.thumb || season.thumb_season;
      const urls = episode.url || [];
      const seasonNum = seasonActive.seasonIdx + 1;
      const epNum = seasonActive.epIdx + 1;
      const paddedEp = epNum.toString().padStart(3, '0');

      html += `
        <div class="continue-episode-container">
          <div id="continue-episode-button" 
              style="background-image: url('${thumb}');" 
              data-urls='${JSON.stringify(urls)}' 
              data-subgroup-name="${subgroupName}" 
              data-season-index="${seasonActive.seasonIdx}" 
              data-episode-index="${seasonActive.epIdx}" 
              onclick="playContinueEpisode(this)">
            <span class="icon-btn">
              <span class="trash-lid"></span>
              <span class="trash-handle"></span>
              <span class="trash-bar bar1"></span>
              <span class="trash-bar bar2"></span>
              <span class="trash-bar bar3"></span>
            </span>
            <span class="badge-duration">${episode.duration}</span>
            <p>T${seasonNum} - EP ${paddedEp}</p>
            <div class="remove-button" 
                data-subgroup-name="${subgroupName}" 
                data-season-index="${seasonActive.seasonIdx}" 
                data-episode-index="${seasonActive.epIdx}">✕</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </section>
    `;
  }

  if (activeInThisSubgroup.length === 0) {
    if (continueSection) {
      continueSection.remove();
    }
    return;
  }

  if (!continueSection) {
    continueSection = document.createElement('section');
    continueSection.id = 'continue-watching';
    if (subgroupHeader) {
      subgroupHeader.parentNode.insertBefore(continueSection, subgroupHeader);
    } else if (subgroupEpisodes) {
      subgroupEpisodes.parentNode.insertBefore(continueSection, subgroupEpisodes);
    } else {
      document.getElementById('page-content').insertAdjacentElement('afterbegin', continueSection);
    }
  }

  continueSection.innerHTML = html;

  const removeBtns = continueSection.querySelectorAll('.remove-button');
  removeBtns.forEach(removeBtn => {
    removeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const rmSubgroupName = this.getAttribute('data-subgroup-name');
      const rmSeasonIdx = parseInt(this.getAttribute('data-season-index'));
      const rmEpIdx = parseInt(this.getAttribute('data-episode-index'));
      removeContinueWatching(rmSubgroupName, rmSeasonIdx, rmEpIdx);
      updateSubgroupContinueWatching(rmSubgroupName);
    });
  });

  const continueButtons = continueSection.querySelectorAll('#continue-episode-button');
  continueButtons.forEach(btn => {
    btn.removeAttribute('onclick');
    btn.onclick = function() {
      playContinueEpisode(this);
    };
  });
}

function renderGlobalContinueWatching() {
  const activeBySubgroup = getActiveEpisodesBySubgroup();
  let html = '';
  let totalEpisodes = 0;

  Object.keys(activeBySubgroup).forEach(subgroupName => {
    totalEpisodes += activeBySubgroup[subgroupName].length;
  });

  if (totalEpisodes === 0) return '';

  html += `
    <section id="global-continue-watching">
      <header class="group-title-header">
        <h2>Continue Assistindo (${totalEpisodes} episódio${totalEpisodes > 1 ? 's' : ''})</h2>
      </header>
      <div class="global-continue-container">
  `;

  Object.keys(activeBySubgroup).forEach(subgroupName => {
    const subgroupData = findSubgroupByName(subgroupName);
    if (!subgroupData) return;

    const activeEpisodes = activeBySubgroup[subgroupName];
    
    activeEpisodes.forEach(active => {
      const season = subgroupData.season[active.seasonIndex];
      const episode = season.episodes[active.episodeIndex];
      const thumb = episode.thumb || season.thumb_season;
      const urls = episode.url || [];
      const seasonNum = active.seasonIndex + 1;
      const epNum = active.episodeIndex + 1;
      const paddedEp = epNum.toString().padStart(3, '0');

      html += `
        <div class="continue-episode-card">
          <div id="continue-episode-button" 
              style="background-image: url('${thumb}');" 
              data-urls='${JSON.stringify(urls)}' 
              data-subgroup-name="${subgroupName}" 
              data-season-index="${active.seasonIndex}" 
              data-episode-index="${active.episodeIndex}" 
              onclick="playContinueEpisode(this)">
            <span class="icon-btn">
              <span class="trash-lid"></span>
              <span class="trash-handle"></span>
              <span class="trash-bar bar1"></span>
              <span class="trash-bar bar2"></span>
              <span class="trash-bar bar3"></span>
            </span>
            <span class="badge-duration">${episode.duration}</span>
            <h1 class="series-name">${subgroupName}</h1>
            <h3 class="episode-info">T${seasonNum} - EP ${paddedEp}</h3>
            <div class="remove-button" 
                data-subgroup-name="${subgroupName}" 
                data-season-index="${active.seasonIndex}" 
                data-episode-index="${active.episodeIndex}">✕</div>
          </div>
        </div>
      `;
    });
  });

  html += `
      </div>
    </section>
  `;

  return html;
}

function playContinueEpisode(element) {
  const urlsStr = element.getAttribute('data-urls');
  const urls = urlsStr ? JSON.parse(urlsStr) : [];
  const firstUrl = urls.length > 0 ? urls[0] : '#';
  const subgroupName = element.getAttribute('data-subgroup-name');
  const seasonIdx = parseInt(element.getAttribute('data-season-index'));
  const epIdx = parseInt(element.getAttribute('data-episode-index'));

  markEpisodeAsWatched(subgroupName, seasonIdx, epIdx);

  const subgroupTitleElement = document.querySelector('.subgroup-title');
  if (subgroupTitleElement && subgroupTitleElement.textContent.trim() === subgroupName) {
    updateSubgroupContinueWatching(subgroupName);
  } else {
    const currentPath = getCurrentPath();
    if (currentPath === generateSlug('Início')) {
      loadPageContent(currentPath);
    }
  }

  if (firstUrl && firstUrl !== '#') {
    window.open(firstUrl, '_blank');
  }
}

function removeContinueWatching(subgroupName, seasonIdx, epIdx) {
  const watched = getWatchedEpisodes();
  const key = `${subgroupName}-${seasonIdx}-${epIdx}`;
  if (watched[key]) {
    watched[key].active = false;
    saveWatchedEpisodes(watched);
    updateEpisodeUI();

    if (document.querySelector('#subgroup-header')) {
      updateSubgroupContinueWatching(subgroupName);
    }

    const currentPath = getCurrentPath();
    if (currentPath === generateSlug('Início')) {
      loadPageContent(currentPath);
    }
  }
}

//=======================================================================
// INÍCIO
//=======================================================================
function generateSlug(name) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
}

function activateByPath(path) {
  const firstSegment = path.split('/')[0];
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  const targetLink = document.querySelector(`a[data-path="${firstSegment}"], a[data-group="${firstSegment}"]`);
  if (targetLink) targetLink.closest('li').classList.add('active');
  else if (firstSegment === generateSlug('Início') || firstSegment === 'inicio')
    document.querySelector('#main-menu-list li:first-child').classList.add('active');
}

function getCurrentPath() {
  let hash = window.location.hash;

  if (hash && hash.length > 1) {
    return hash.substring(1);
  }
    
  return generateSlug('Início');
}

function getCarouselData(path) {
  const segments = path.split('/').filter(s => s);
  if (segments.length === 2) {
    return [];
  }
  
  const isHomePage = segments.length === 1 && segments[0] === generateSlug('Início');
  let data = [];

  if (isHomePage) {
    seriesData.forEach(groupItem => {
      if (groupItem.group) {
        const homepageSubgroups = groupItem.group.filter(subgroup => 
          subgroup.carrousel && 
          subgroup.carrousel.visible && 
          subgroup.carrousel.homepage
        );
        data.push(...homepageSubgroups);
      }
    });
  } else {
    const groupSlug = segments.length >= 1 ? segments[0] : '';
    const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === groupSlug && groupItem.visible);
    if (matchingGroup && matchingGroup.group) {
      data = matchingGroup.group.filter(subgroup => 
        subgroup.carrousel && 
        subgroup.carrousel.visible
      );
    }
  }

  return data;
}

function renderCarrousel(path) {
  let currentSlide = 0;
  let totalSlides = 0;
  let isTransitioning = false;

  const slideDuration = speedCarrouselBar * 1000;
  const transitionDuration = 500;
  const transitionTime = slideDuration;

  const carousel = document.getElementById('carousel');
  const slidesContainer = document.getElementById('slides');
  const progress = document.getElementById('progress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!carousel) return;

  let autoPlayTimer = null;
  let isDragging = false;
  let startX = 0;
  let movedBy = 0;

  const handleTransitionEnd = () => {
    if (isTransitioning) {
      isTransitioning = false;
    }
  };

  slidesContainer.addEventListener('transitionend', handleTransitionEnd);

  function createSlides() {
    const data = getCarouselData(path);
    const originalSlides = [];

    data.forEach(subgroup => {
      const carrousel = subgroup.carrousel;
      const slide = document.createElement('div');
      slide.classList.add('carousel-slide');
      let thumbUrl;
      if (randomImagesCarrousel && carrousel.thumb && carrousel.thumb.length > 1) {
        const randomIndex = Math.floor(Math.random() * carrousel.thumb.length);
        thumbUrl = carrousel.thumb[randomIndex];
      } else {
        thumbUrl = carrousel.thumb[0];
      }
      slide.style.backgroundImage = `url(${thumbUrl})`;

      const content = document.createElement('div');
      content.classList.add('carousel-caption');

      let logoHtml = '';
      if (carrousel.logo.enabled && carrousel.logo.url) {
        let logoClasses = 'carousel-logo';
        if (carrousel.logo.grayscale) {
          logoClasses += ' grayscale-logo';
        }
        if (carrousel.logo.minimalist) {
          logoClasses += ' minimalist-logo';
        }
        logoHtml = `<img class="${logoClasses}" src="${carrousel.logo.url}" alt="${carrousel.logo.title}">`;
      } else {
        logoHtml = `<h1>${carrousel.logo.title}</h1>`;
      }

      let infoHtml = '';
      if (carrousel.info && carrousel.info.enabled) {
        const numSeasons = subgroup.season ? subgroup.season.length : 0;
        let totalEpisodes = 0;
        if (subgroup.season) {
          subgroup.season.forEach(season => {
            if (season.episodes) totalEpisodes += season.episodes.length;
          });
        }
        const seasonText = numSeasons === 1 ? 'Temporada: 1' : `Temporadas: ${numSeasons}`;
        const episodeText = totalEpisodes === 1 ? 'Episódio: 1' : `Episódios: ${totalEpisodes}`;

        const infoBadges = [];
        if (carrousel.info.text && carrousel.info.text.trim()) {
          infoBadges.push(`<span class="info-badge-text">${carrousel.info.text}</span>`);
        }
        if (carrousel.info.season) {
          infoBadges.push(`<span class="info-badge">${seasonText}</span>`);
        }
        if (carrousel.info.episodes) {
          infoBadges.push(`<span class="info-badge">${episodeText}</span>`);
        }
        if (carrousel.info.finalized) {
          infoBadges.push(`<span class="info-badge">Finalizada</span>`);
        }
        if (infoBadges.length > 0) {
          infoHtml = `<div class="carousel-info-badges">${infoBadges.join(' ')}</div>`;
        }
      }

      let favoriteBtnHtml = '';
      if (carrousel.favorite !== false) {
        const allFavorite = isAllCardsFavorite(subgroup);
        const subgroupDataJson = JSON.stringify(subgroup);
        favoriteBtnHtml = `
          <button class="favorite-button-s2 ${allFavorite ? 'active' : ''}" data-subgroup='${subgroupDataJson}'>
            <span class="tooltip-text black tooltip-side">${allFavorite ? 'Remover todos dos favoritos' : 'Adicionar todos aos favoritos'}</span>
          </button>
        `;
      }

      content.innerHTML = `
        ${logoHtml}
        ${infoHtml}
        <p>${carrousel.description.trim()}</p>
        <div class="carousel-actions">
          <button class="btn btn-primary"><i class="fas fa-play"></i>Assistir Agora</button>
          ${favoriteBtnHtml}
        </div>
      `;

      slide.appendChild(content);
      slidesContainer.appendChild(slide);
      originalSlides.push(slide);
    });

    totalSlides = originalSlides.length;

    if (totalSlides > 1) {
      const lastClone = originalSlides[totalSlides - 1].cloneNode(true);
      slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);
      const firstClone = originalSlides[0].cloneNode(true);
      slidesContainer.appendChild(firstClone);
      currentSlide = 1;
    } else {
      currentSlide = 0;
    }

    if (totalSlides > 0) {
      carousel.style.display = 'block';
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
      if (totalSlides > 1) {
        createDots();
        startAutoPlay();
      } else {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (progress) progress.style.display = 'none';
        const dotsContainer = document.getElementById('dots');
        if (dotsContainer) dotsContainer.style.display = 'none';
        carousel.style.cursor = 'default';
      }
    } else {
      carousel.style.display = 'none';
      slidesContainer.innerHTML = '';
    }
  }

  function createDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === getLogicalIndex()) dot.classList.add('active');
      dot.onclick = () => {
        if (!isTransitioning) {
          goToSlide(i);
          pauseAutoPlay();
        }
      };
      dotsContainer.appendChild(dot);
    }

    if (totalSlides > 9) {
      dotsContainer.classList.add('compact-dots');
    } else {
      dotsContainer.classList.remove('compact-dots');
    }
  }

  function getLogicalIndex() {
    if (totalSlides <= 1) return currentSlide;
    return (currentSlide - 1 + totalSlides) % totalSlides;
  }

  function updateDots() {
    const logicalIndex = getLogicalIndex();
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === logicalIndex);
    });
  }

  function goToSlide(logicalIndex) {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    const targetPhysical = 1 + logicalIndex;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${targetPhysical * 100}%)`;
    currentSlide = targetPhysical;
    updateDots();
    startAutoPlay();
  }

  function nextSlide() {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentSlide++;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    let logicalIndex = getLogicalIndex();
    if (currentSlide === totalSlides + 1) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            currentSlide = 1;
            slidesContainer.style.transform = `translateX(-100%)`;
            setTimeout(() => slidesContainer.style.transition = 'transform 0.5s ease-in-out', 20);
        }, transitionDuration);
        logicalIndex = 0;
    }
    updateDots();
    startAutoPlay();
    pauseAutoPlay();
  }

  function prevSlide() {
    if (totalSlides <= 1 || isTransitioning) return;
    isTransitioning = true;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    currentSlide--;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (currentSlide === 0) {
      setTimeout(() => {
        slidesContainer.style.transition = 'none';
        currentSlide = totalSlides;
        slidesContainer.style.transform = `translateX(-${totalSlides * 100}%)`;
        setTimeout(() => {
          slidesContainer.style.transition = 'transform 0.5s ease-in-out';
          isTransitioning = false;
        }, 50);
      }, transitionDuration);
    } else {
      setTimeout(() => {
        isTransitioning = false;
      }, transitionDuration);
    }
    
    updateDots();
    pauseAutoPlay();
  }

  function startAutoPlay() {
    if (totalSlides <= 1) return;
    
    clearTimeout(autoPlayTimer);
    
    if (progress) {
      progress.style.animation = 'none';
      void progress.offsetWidth;
      progress.style.animation = `carouselProgress ${transitionTime}ms linear forwards`;
      progress.style.animationPlayState = 'running';
    }
    
    autoPlayTimer = setTimeout(() => {
      nextSlide();
    }, transitionTime);
  }

  function pauseAutoPlay() {
    if (totalSlides <= 1) return;
    
    clearTimeout(autoPlayTimer);
    
    if (progress) {
      progress.style.animationPlayState = 'paused';
    }
  }

  function resumeAutoPlay() {
    if (totalSlides <= 1) return;
    
    if (progress) {
      const computedStyle = getComputedStyle(progress);
      const barWidth = parseFloat(computedStyle.width) || 0;
      
      const parentElement = progress.parentElement;
      const parentStyle = getComputedStyle(parentElement);
      const parentWidth = parseFloat(parentStyle.width) || 1;
      
      const progressFraction = barWidth / parentWidth;
      const elapsedTime = progressFraction * transitionTime;
      let remainingTime = transitionTime - elapsedTime;
      
      if (remainingTime < 0) {
        remainingTime = 0;
      }
      
      progress.style.animationPlayState = 'running';
      
      autoPlayTimer = setTimeout(() => {
        nextSlide();
      }, remainingTime);
    }
  }

  slidesContainer.addEventListener('mousedown', dragStart);
  slidesContainer.addEventListener('touchstart', dragStart);
  document.addEventListener('mousemove', dragMove);
  document.addEventListener('touchmove', dragMove, { passive: false });
  document.addEventListener('mouseup', dragEnd);
  document.addEventListener('touchend', dragEnd);

  function dragStart(e) {
    if (totalSlides <= 1) return;
    isTransitioning = false;
    isDragging = true;
    startX = getPositionX(e);
    slidesContainer.style.transition = 'none';
    e.preventDefault();
    pauseAutoPlay()
  }

  function dragMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    movedBy = currentX - startX;
    const translateValue = -currentSlide * carousel.offsetWidth + movedBy;
    slidesContainer.style.transform = `translateX(${translateValue}px)`;
    e.preventDefault();
    pauseAutoPlay();
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    const threshold = carousel.offsetWidth * 0.3;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';

    if (movedBy < -threshold) {
      nextSlide();
    } else if (movedBy > threshold) {
      prevSlide();
    } else {
      slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    movedBy = 0;
    pauseAutoPlay();
  }

  function getPositionX(e) {
    return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isTransitioning) {
        prevSlide();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isTransitioning) {
        nextSlide();
      }
    });
  }

  carousel.addEventListener('mouseenter', pauseAutoPlay);
  carousel.addEventListener('mouseleave', resumeAutoPlay);
  slidesContainer.innerHTML = '';

  createSlides();
}

//=======================================================================
// INICIALIZAÇÃO
//=======================================================================
function hideLoader(startTime) {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    const loadTime = Date.now() - startTime; 
    const minDisplayTime = 500; 
    const delay = Math.max(0, minDisplayTime - loadTime); 

    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove(); 
        }, 500); 
    }, delay);
}

function searchInput() {
  const searchInputEl = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  const searchMenuItemLi = document.getElementById('search-menu-item');

  function deactivateSidebar() {
    document.querySelectorAll('.sidebar nav ul li').forEach(li => {
      li.classList.remove('active');
    });
  }

  function activateSearchIcon() {
    if (searchMenuItemLi) {
      searchMenuItemLi.classList.add('active');
    }
  }

  function performSearch(query) {
    window.removeHistoryLog = removeHistoryLog;
    window.showClearAllModal = showClearAllModal;
    window.hideClearAllModal = hideClearAllModal;
    window.confirmClearAll = confirmClearAll;

    if (!query || query.trim() === '') return;

    const lowerQuery = query.toLowerCase().trim();
    const allMatchingItems = [];

    seriesData.forEach(groupItem => {
      if (!groupItem.visible || !groupItem.group) return;

      groupItem.group.forEach(subgroup => {
        if (!subgroup.card_buttons) return;

        subgroup.card_buttons.forEach(card => {
          if (card.visible !== false && 
              card.enabled !== false && 
              card.name.toLowerCase().includes(lowerQuery)) {
            allMatchingItems.push({ 
              ...subgroup, 
              card: card, 
              original_group: groupItem.group_name 
            });
          }
        });
      });
    });

    deactivateSidebar();
    activateSearchIcon();

    window.location.hash = `#search/${encodeURIComponent(query)}`;

    const contentContainer = document.getElementById('page-content');
    let html = `<section id="search-results">`;

    const iconData = getIcon('search');
    let iconHTML = '';
    if (iconData.type === 'img') {
      iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt}">`;
    } else if (iconData.type === 'fa') {
      iconHTML = `<i class="${iconData.value}"></i>`;
    } else if (iconData.type === 'svg') {
      iconHTML = iconData.value;
    }

    let titleText = `Resultados da Pesquisa para "${query}"`;
    if (allMatchingItems.length > 0) {
      titleText += ` (${allMatchingItems.length} itens)`;
    }

    html += `
      <header class="group-title-header">
        <h2>${iconHTML} ${titleText}</h2>
        <button class="explore-button back-button" onclick="goToHome()">
          <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
            <path d="M7.8284 13L13.1924 18.3641L11.7782 19.7783L4 12L11.7782 4.22168L13.1924 5.63589L7.8284 11H20V13H7.8284Z"></path>
          </svg>
          <span class="text">Voltar ao Início</span>
          <span class="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
            <path d="M7.8284 13L13.1924 18.3641L11.7782 19.7783L4 12L11.7782 4.22168L13.1924 5.63589L7.8284 11H20V13H7.8284Z"></path>
          </svg>
        </button>
      </header>
    `;

    if (allMatchingItems.length === 0) {
      html += `
        <div class="no-results-container">
          <p>Nenhum resultado encontrado para "${query}". Tente outra busca.</p>
        </div>
      `;
    } else {
      const groupedSearchResults = {};
      allMatchingItems.forEach(item => {
        const key = `${item.original_group}-${item.name}`;
        if (!groupedSearchResults[key]) {
          groupedSearchResults[key] = { ...item, card_buttons: [] };
        }

        const cardExists = groupedSearchResults[key].card_buttons.some(existingCard => 
          existingCard.name === item.card.name
        );
        if (!cardExists) {
          groupedSearchResults[key].card_buttons.push(item.card);
        }
      });

      const searchGroup = {
        group_name: `Resultados para "${query}"`,
        group_slug: "search-results",
        visible: true,
        group: Object.values(groupedSearchResults)
      };

      html += renderGroupSection(searchGroup, false, true);
    }

    html += '</section>';

    contentContainer.innerHTML = html;

    attachSeriesNavigationListeners(contentContainer);
    attachFavoriteListeners(contentContainer);
    updateCarouselFavorites();

    const carousel = document.getElementById('carousel');
    if (carousel) carousel.style.display = 'none';

    window.goToHome = function() {
      window.location.hash = `#${generateSlug('Início')}`;
      if (searchMenuItemLi) searchMenuItemLi.classList.remove('active');
    };
  }

  if (searchInputEl) {
    searchInputEl.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        const query = this.value;
        performSearch(query);
      }
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', function() {
      const query = searchInputEl.value;
      performSearch(query);
    });
  }

  function handleSearchFromURL() {
    const hash = window.location.hash;
    if (hash.startsWith('#search/')) {
      const encodedQuery = hash.substring(8);
      const query = decodeURIComponent(encodedQuery);
      if (query) {
        performSearch(query);
      }
    }
  }

  window.addEventListener('hashchange', function(e) {
    const path = getCurrentPath();
    if (path.startsWith('search/')) {
      const encodedQuery = path.substring(7);
      const query = decodeURIComponent(encodedQuery);
      if (query) {
        performSearch(query);
        e.preventDefault();
        return false;
      }
    }
  });

  handleSearchFromURL();
}

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('dynamic-content-menu');
  const mainMenuList = document.getElementById('main-menu-list');
  let seriesHtml = '';
  const initialActiveGroup = null;

  let mainMenuItems;
  if (iconsAnimated) {
    mainMenuItems = [
      { name: 'Início',    icon: iconHomeGif, path: generateSlug('Início'), active: true },
      { name: 'Histórico', icon: iconHistoryGif, path: generateSlug('Histórico') },
      { name: 'Favoritos', icon: iconFavoriteGif, path: generateSlug('Favoritos') }
    ];
  } else {
    mainMenuItems = [
      { name: 'Início',    icon: iconHome, path: generateSlug('Início'), active: true },
      { name: 'Histórico', icon: iconHistory, path: generateSlug('Histórico') },
      { name: 'Favoritos', icon: iconFavorite, path: generateSlug('Favoritos') }
    ];
  }

  let mainMenuHtml = '';
  mainMenuItems.forEach((item, index) => {
    let iconHTML = '';
    if (item.icon) {
      iconHTML = `<img src="${item.icon}" class="custom-icon" alt="${item.name} Icon">`;
    } else {
      const faIcons = {
        'Início': 'fas fa-home',
        'Histórico': 'fas fa-history',
        'Favoritos': 'fas fa-star'
      };
      iconHTML = `<i class="${faIcons[item.name] || 'fas fa-layer-group'}"></i>`;
    }

    const activeClass = index === 0 ? 'active' : '';
    mainMenuHtml += `
      <li class="${activeClass}">
        <a href="#" data-path="${item.path}">${iconHTML} ${item.name}</a>
      </li>
    `;
  });

  if (mainMenuList) {
    mainMenuList.innerHTML = mainMenuHtml;
  }

  seriesData.forEach(item => {
    if (item.visible) {
      const iconData = getIcon(item.group_name);
      let iconHTML = '';
      const isActive = (initialActiveGroup && item.group_name === initialActiveGroup) ? 'active' : '';

      if (iconData.type === 'fa') {
        iconHTML = `<i class="${iconData.value}"></i>`;
      } else if (iconData.type === 'img') {
        iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt || item.group_name + ' Icon'}">`;
      } else if (iconData.type === 'svg') {
        iconHTML = iconData.value;
      }

      const slug = generateSlug(item.group_name);
      seriesHtml += `
        <li class="${isActive}">
          <a href="#" data-group="${slug}">
            ${iconHTML} ${item.group_name}
          </a>
        </li>
      `;
    }
  });

  if (menuContainer) menuContainer.innerHTML = seriesHtml;

  const allMenuLinks = document.querySelectorAll('.sidebar nav ul li a');
    allMenuLinks.forEach(link => {
        link.addEventListener('click', async function (e) {
            e.preventDefault();
            let path = this.getAttribute('data-path') || this.getAttribute('data-group');
            if (!path) return;

            const newHash = `#${path}`;

            window.location.hash = newHash;
            activateByPath(path);
            await loadPageContent(path);
            renderCarrousel(path);
            attachFavoriteListeners();
            updateCarouselFavorites();
        });
    });

    window.addEventListener('hashchange', () => {
      const path = getCurrentPath();
      activateByPath(path);
      loadPageContent(path);
      renderCarrousel(path);
      attachFavoriteListeners();
      updateCarouselFavorites();

      const contentContainer = document.getElementById('page-content');
      const filteredItems = getFilteredItems(path);
      const isSubgroupPage = filteredItems.length > 0 && filteredItems[0].type === 'subgroup';
      if (isSubgroupPage) {
        const subgroup = filteredItems[0].data;
        setTimeout(() => {
          updateSubgroupContinueWatching(subgroup.name);
        }, 0);
      }
      if (!isSubgroupPage) {
        attachSeriesNavigationListeners(contentContainer);
      }
    });

    const currentPath = getCurrentPath();
    activateByPath(currentPath);
    loadPageContent(currentPath);
    renderCarrousel(currentPath);
    searchInput();

    const streamsLink = document.querySelector('a[data-group="' + generateSlug('Streams') + '"]');
    if (streamsLink) setupStreamIcons(streamsLink);

    setTimeout(() => {
      hideLoader(Date.now());
      attachFavoriteListeners();
      updateCarouselFavorites();
      
      const filteredItems = getFilteredItems(currentPath);
      const isSubgroupPage = filteredItems.length > 0 && filteredItems[0].type === 'subgroup';
      if (!isSubgroupPage) {
        attachSeriesNavigationListeners();
      }
    }, 100);
});