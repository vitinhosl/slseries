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
            enabled: true,
            thumb_page: "",
            thumb_buttons: {
                url: [
                "https://i.imgur.com/wdXyskp.png", //HARRY POTTER 1: EA PEDRA FILOSOFAL
                "https://i.imgur.com/SJYo00O.png", //HARRY POTTER 2: EA CÂMARA SECRETA
                "https://i.imgur.com/zmMRzon.png", //HARRY POTTER 3: EO CÁLICE DE FOGO
                "https://i.imgur.com/bqh8keV.png", //HARRY POTTER 4: EO PRISIONEIRO DE AZKABAN
                "https://i.imgur.com/IdOkjj3.png", //HARRY POTTER 5: EA ORDEM DA FÊNIX
                "https://i.imgur.com/RWt83mC.png", //HARRY POTTER 6: EO ENIGMA DO PRÍNCIPE
                "https://i.imgur.com/csXAXhz.png", //HARRY POTTER 7: EAS RELIQUIAS DA MORTE PT 1
                "https://i.imgur.com/N6aK9dg.png", //HARRY POTTER 8: EAS RELIQUIAS DA MORTE PT 2

                "https://i.imgur.com/8xGK1SM.png", //HARRY POTTER 1: EA PEDRA FILOSOFAL
                "https://i.imgur.com/C76mOFX.png", //HARRY POTTER 2: EA CÂMARA SECRETA
                "https://i.imgur.com/SzZpgyk.png", //HARRY POTTER 3: EO CÁLICE DE FOGO
                "https://i.imgur.com/E4sncKt.png", //HARRY POTTER 4: EO PRISIONEIRO DE AZKABAN
                "https://i.imgur.com/ClbbCiS.png", //HARRY POTTER 5: EA ORDEM DA FÊNIX
                "https://i.imgur.com/JVYBDl1.png", //HARRY POTTER 6: EO ENIGMA DO PRÍNCIPE
                "https://i.imgur.com/df4o6Du.png", //HARRY POTTER 7: EAS RELIQUIAS DA MORTE PT 1
                "https://i.imgur.com/4vclUJV.png", //HARRY POTTER 8: EAS RELIQUIAS DA MORTE PT 2
                ],
            },
          },
       ],
    }
];

//=======================================================================
//CONFIGURAÇÕES
//=======================================================================
let randomImagesCards           = false;       //AS IMAGENS ALEATÓRIAS DOS BOTÕES

const animesIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVR4nO3Vv0kEQRTA4U/BxPAywfwKsAEbMDS1BVs4LMGLTK1BbMC7XHMDU8HE6AKRkQ0WLGD+7AzvBy/deR8MO0RRFEWNSoOM1gsEREAserReICACYtEj9wef8DUC5BgrbPHTM+R/azyPAJm7wvsIkKkT3OK7d8jcGR7w2ztk7gL7ESBTR3jrHbLCfcYrpjZkemdu8Jn73FQRconXAmemWpBzPBYCpBqQU2xwKIxIpSDT3+gaHxUAqRTkLvP7kFpBWo3WCwREQCx6tF4gIEaFRL22b3BddiUguwaQlxKQKIqiSK7+AIURFUL7hB/5AAAAAElFTkSuQmCC';
const channelsIconBase64  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKUlEQVR4nO1ZSWsUQRT+BJ0Bo3FFnfGgouAG4sHlbDy5RjBq1PgPkqC44yEeE8EkLr9BvbnicjVq4sZEFFzvRpGAk1zcMvKgWsrnV3b1TE9PDv1BwTD91dfv1fLeq2ogRYoUKVKkqB52AGhB7XHA2FIWNgP4CaAEoBO1w2ljwy8AjVE7rwAwYgSC1oHk0aFsEJuW+XbOAHiuBII2D8kh77DhKYBJPgKnHAI3kDxuOmw54TMKeklJew2gHsmjHsBbYk8xbHVcJJ1+AFijeBOM03Ejb7RtrDM2aLt6XSIzAYx6duitQgAINjZ733lil6ycGUzoECF/NQ7a2A5gzOJIeIwrxJaM9lb1fLZZTtq+dib2mBC7FWcqgM+E11yBE3uJ3icAUxyrwG6PtNh8NcpB0zH7mCOKNFXgSJND8wjJbZozpjd9MyENKqEsgCHCu0qMy5ppHzD7btT8bjPPNK4R3Y8mp9l4SXi7bMI5QjirRDYSzncAC8jsDjpGWVrBcGwsNFol1RoUr4dw5L8/uOexXM4QziUyE/9zwnZGz8xlwutSnN2Ec8cmfCCEVUrkAeHsU5x2DyeC1qr67iecPsVZTTjvbMIwIeiwy5xd7BH5XK1f9RUtzZF32phFOF9sAlufujBjyXKy4rDyxtWEa6OOcOSdNjKE8y0OR+oqcESSrQ3JG5pTjOrIeFhaSwjnfdSl5bPZ+zw2e1vMm/1+1M1+1yP8dhGOhEwbWRNaw5wokGR3hfA6PcLv7agJsSFCQixETIiLHKX6Bo9666+EuIcQXiiRjCkbfEqUjFk6/SYAjJgCr5XMhOC6Z4nyKqxEyXsWjUcdo7wT8ReNhxVvJeGIzXO14EDYtCVYxg+R0M6W/0MmeNARxyXk2diWwMFqCzlYsRwlUdL7qCsjkeRRt4c8u+AY5OkuMXY2lmiyVvHkgiCH+JEjlw/rHRGtO0yITeGbGl0HTTMJj5U3c8I6n3REEbksSxq3HLbIkTsUUiw+cwj8E+qqiJzDhicAJvqKLB+nl9hFAEujimyyPivUwokAx63PCnKnVhYax8mHnpZyvo2kSJEiRYoU8MRvmE9/FfKn/30AAAAASUVORK5CYII';
const moviesIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVR4nO2aO04DMRRFT0E2EKUiSUUxBdvIWlgLLQWLAEVKg5BoYBGwCj4Rky6iMBrJQSjCGmd+ecb3SLebzNyjxB7bCgghhBDCGnNgCWwAl1iqziugOET2w0Dxtll7l1qWBsp2ldsY4RR/xqGUMcL7H4q9bui07f+DhANIGAkjYRIQdomnlmMXTFb4DpgCZ8A18PXfhWd79z0HHlIQDtH0QQvgpUcRc8IVI+ACeM1FeMcYuAS2uQjvKPwkl43w7/H9nJNwxUnk+O5N2HU8qcQyAR6H6OGMCFec5iY8zUl4AjwdQzhEX8Kxi5LYXqaFs3ktFbksPMbAVcOtY1LCIz9O3xpOREkJL6xvD11uBwCuYe69dDZHPM5IanG5C4ewKiLhOiQcQMJImCSENwZkuspnjPDKQNGuchO7N10bKNs273+s54PM/Z+6SgPFD03pv9loWSGEEEIwCN9pId6v9CL0IgAAAABJRU5ErkJggg==';
const novelsIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8UlEQVR4nO3aMWoCURSF4b8ICCFVsBDcQbICt5DWfUznItyUtemSLkVKd6CVzRHhFcPtMgm57w7ng1sK54cBixmwehbAAByBC6Dkm2QNfHQwXr8JWXQYoSkhQwej9Rch73MJOc8lRJ3ej2UPlkOC7MFySJA9WA4JsgfLIUH2YDkkyB4shwTZg+WQIHuwHBJkD5ZDguzBckiQPVgOCbIHyyFB9mA5JMgeLIcE2YPlkGD84/tLnzdgSUFqdwAeKEztXiju2kLub3dL+24hG4rbt5BP4JHCnoFTi/kCtsCKol5Hj1gvN9kTsGv/JWU/qjH+2Q0wMsm2YlkwMAAAAABJRU5ErkJggg==';
const minecraftIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6ElEQVR4nO2ZMQ7CMBAEt4KGJ5CaP6DwMXgRKFI+BojkA0tzFSLBPsuxgR1pu9xpx3IRyYAQQtRMA6ADMALgwhkB9AB2KeVvBYrzJXfrEk1XQXlaLh6BEteGExk8Aqws0ZQuTAngRwX2MzNtQBHvfDTeRaknSQkYEoAEIAG+SZtR4LCEQK4TZuJeCVACKCMw92/zibYGgVQogQkkEAglMMFfCnChmSBCF6/s+3XmmWhCFx8BbACcMs9Ew8oSzdcLjBWUpuXhEegrKE7L2SOws8eF0uWvALZw0tjjwlCg+GAn7y4vhBDIzhOzgN/txYqywwAAAABJRU5ErkJggg==';
const seriesIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxElEQVR4nO3ZP2sUQRzG8Q+xiNhIILYRLWMj2tolrZ0aX4EivgC72Nqazhegha2VKZQY25SWkoBWitFGzpA7VhZ+B8uR3Ca53bvZMF+YZu/f893hubuZIZPJZDInZwnr+IoPOsY81vAeAxQxOiOyjBf4UQn/D29xFxckzGU8wudK+HJ8wTMsSpg5rOA1epXwv7CBm6n3ZikC7FbCD6ILa9GNZHszj/t4h8NKgG/Rh2up92Z5ggAz780CnmJnJMBOXC8fb6M3C3iCBykU97S9mcMq3lQ+92ASka0Gi7sbUqXccVzFc+yNzPpwnJnhG9QFELOzEbM1fF0vZnMl7vJRXMRDbI6ItyLSRnFvxBfGz5rwRVsi5Z29g1f4W3nO77h26wziMxHZaqC4RQoixQl7U1fcZETqfun7DQoU0xK5gpfYbyF8MU2Ram86LdI/LyJFFpFFTkUWkUVkkXFkEc2P/nkR+dh1kf34Q7rYRZFBrCLL1eQlDbCNT1MU2YvFWLkoa52mRWZ2tFA0JDLzo4ViApE/sdNyWwJsj+nNccXdjE24cjMuaYojxvfYgLuuQxxE+F7sX62O2SJNmnt4XHO0kMlkzI7/Dl4A1TYi2ZUAAAAASUVORK5CYII=';
const biblicalIconBase64  = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO3UOw7CMBBF0VuSImwBVgQsBYVNImgJGyH9oEgurBQo5IM95l1p2niOIhuUSloFNMAN6ABLNLPaA23C5W0JSJURwuZALhksb0tA7qVAulIgltlMbo3DBUEQBDFByAOy9jmTE+TLBBnb3152EwRBRiUIgiDIpwRBELKFLDmTS724CTIo9eImyKDUi5sgg+KPPIADUOMwixBbHGdh+j9BCZAa571KgdwC5IjzmgBpvV/2KrxYPeYJnDyDdhEm9cxuA5yBa/QAuIQoftQbj1q63jmvEcwAAAAASUVORK5CYII=';
const twitchIconBase64    = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8ElEQVR4nO3RsQ3CMBBG4UdNj4COURiFTcwmrMIMSCQFEkPQc4gBcOzjkjine5JLy/8ng+NWwAOQhZyfHRsYJxaQiwfIGnh5gJwaGCYWkKvm0oRJyaYD8PYAOWu/ccKkZNPTC0QCMl0SEOohpXc1b0hACAgByRQQCQgByRUQCQgByRUQUUDGTDxAkgdIqtnUKiRl9nRLgaTMlh7YLwGSNIjWIGkAsctdLoFooLlRtacfQowFsUR0JYgxILMgrCGzISwhsyIwetgScQM2KLIaYPUTWw0CLwgaAHzP/V9Ebc0PLM0FAi8IvCDwgsALghb7APBVkMnu8/RMAAAAAElFTkSuQmCC';
const kickIconSvg         = `<svg role="img" viewBox="-5 0 30 30" xmlns="http://www.w3.org/2000/svg" id="Kick--Streamline-Simple-Icons" class="custom-icon"><path d="M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z" fill="#000000" stroke-width="1"></path></svg>`;
const youtubeIconBase64   = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVR4nO2ZT0hUQRzHP5qBN0OxY+hJ6xJ0yIvgRQovXrrrkmB4CjoFeSgQ9iwdPQpCGwQdPKl0CILFP0gaIcIi4h6KWBMjdXWZeDAPtljfb7Y3szvCfOB7Wtjf78PO7Jv3GwgEAoFAIGDMdeA2MApMAa+AOeAdsAysAbvAN6Ck8xtQVTmu+qwIfAXywBLwBngNTAMZ4AFwC0v0ADPAZ6D8T1ONyhHwAXgCtP+PxGPgV5OaV5dkG7hTj0S0fCoeNK5qZA/oNpG4Bux70LBKSNZE5K4HjSohBRORRx40qgzSIYk886BJZZD7ksisB00qg4xLIu9TFhgGtnzY8J9SFohoAyaB7w5FFiSRTQsiMZ16qZ47EFmSRHYtisT0AYuWRTYlkaIDkZhhfcywIVKURH46FIlP0U+Bw5R1zoCWpEJpT7mmxPvnwtVDsdwgkS4LIjeSCqT9yU2XVtolXAFakwodON7sX1J+v9KJ3jIT2XEg0u/g77cgiWxckQfiuiTy0YJIvA9KDgSUzook8jZlgRE9HVGOMy+JZBvQhI28lEQmPGhSGWRMEhnyoEllkEFJpNvjUZDSqZiOhJY9aFYlJOrPiHs15ra+5BQYoA4e6oG08ig/9BS0bqJ1+BxYBU6a1PyJrv8CuIkFopNmrx73Z/T4P7oGyOn357x+EBarrg6O67hWyNW4VuiVTriBQCAQCAT4mz8yJp3ulSURNAAAAABJRU5ErkJggg==';

function generateSlug(name) {
  return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
}

function getIcon(groupName) {
  const name = groupName.toLowerCase();
  
  if (name.includes('animes'))    return { type: 'base64', value: animesIconBase64,    alt: 'animes' };
  if (name.includes('canais'))    return { type: 'base64', value: channelsIconBase64,  alt: 'canais' };
  if (name.includes('filmes'))    return { type: 'base64', value: moviesIconBase64,    alt: 'filmes' };
  if (name.includes('novelas'))   return { type: 'base64', value: novelsIconBase64,    alt: 'novelas' };
  if (name.includes('minecraft')) return { type: 'base64', value: minecraftIconBase64, alt: 'minecraft' };
  if (name.includes('bíblicas'))  return { type: 'base64', value: biblicalIconBase64,  alt: 'séries bíblicas' };
  if (name.includes('séries'))    return { type: 'base64', value: seriesIconBase64,    alt: 'séries' };
  if (name.includes('stream'))    return { type: 'base64', value: twitchIconBase64,    alt: 'streams' };

  return { type: 'fa', value: 'fas fa-layer-group' }; 
}

function setupStreamIcons(link) {
  const text = "Streams";
  const icons = [
    { type: 'base64', value: twitchIconBase64, alt: 'twitch' },
    { type: 'svg', value: kickIconSvg, alt: 'kick' },
    { type: 'base64', value: youtubeIconBase64, alt: 'youtube' }
  ];
  let currentIndex = 0;

  function updateIcon() {
    const iconData = icons[currentIndex];
    let newIconHTML = '';
    if (iconData.type === 'svg') newIconHTML = iconData.value;
    else if (iconData.type === 'base64') newIconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt}">`;
    link.innerHTML = `${newIconHTML} ${text}`;
    currentIndex = (currentIndex + 1) % icons.length;
  }

  updateIcon();
  setInterval(updateIcon, 3000);
}

function getFavorites() {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(serieName) {
  const favorites = getFavorites();
  return favorites.some(fav => fav.name === serieName);
}

function toggleFavorite(serie) {
  const favorites = getFavorites();
  const index = favorites.findIndex(fav => fav.name === serie.name);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(serie);
  }
  saveFavorites(favorites);
  return index === -1;
}

function getFilteredItems(path) {
  if (path === generateSlug('Favoritos')) {
    return seriesData.map(groupItem => ({
        ...groupItem,
        group: groupItem.group ? groupItem.group.filter(item => isFavorite(item.name)) : []
    })).filter(groupItem => groupItem.group.length > 0);

  } else if (path === generateSlug('Início')) {
    const allFavorites = [];
    seriesData.forEach(groupItem => {
        if (groupItem.group) {
            const favoritesInGroup = groupItem.group.filter(item => isFavorite(item.name));
            allFavorites.push(...favoritesInGroup);
        }
    });

    const homepageGroups = seriesData
        .filter(groupItem => groupItem.visible && groupItem.group && groupItem.group.length > 0)
        .map(groupItem => ({
            ...groupItem,
            group: [...groupItem.group]
        }));

    if (allFavorites.length > 0) {
        const favoritesGroup = {
            group_name: "Favoritos",
            visible: true,
            group: allFavorites
        };
        return [favoritesGroup, ...homepageGroups];
    }
    return homepageGroups;
  } else {
      const matchingGroup = seriesData.find(groupItem => generateSlug(groupItem.group_name) === path && groupItem.visible);
      return matchingGroup ? [matchingGroup] : [];
  }
}

async function loadPageContent(path) {
  const contentContainer = document.getElementById('page-content');
  let html = '';
  const filteredGroups = getFilteredItems(path);
  const showHero = path === generateSlug('Início');
  const isFavoritesPage = path === generateSlug('Favoritos');

  if (showHero) {
    html += `
    <section class="hero-banner">
      <div class="hero-info">
        <h1>Minions</h1>
        <div class="hero-actions">
          <button class="btn-primary"><i class="fas fa-play"></i> Assistir agora</button>
          <button class="btn-secondary"><i class="fas fa-info-circle"></i> Ver informações</button>
        </div>
      </div>
    </section>
    `;
  }

  if (filteredGroups.length > 0) { 
    if (isFavoritesPage) {
      html += '<h1 class="main-favorites-title">Meus Favoritos</h1>'; 
    }

    filteredGroups.forEach(groupItem => {
    const groupSlug = generateSlug(groupItem.group_name);
    html += `<section id="group-${groupSlug}-header">`;
        
    if (isFavoritesPage) {
        html += `<h3>${groupItem.group_name}</h3>`;
    } else {
        html += `<h2>${groupItem.group_name}</h2>`;
    }
        
    groupItem.group.forEach(item => {
      if (item.name && item.thumb_buttons && item.thumb_buttons.url && item.thumb_buttons.url.length > 0) {
      const urls = item.thumb_buttons.url;
      const selectedThumb = randomImagesCards 
        ? urls[Math.floor(Math.random() * urls.length)] 
        : urls[0];
      const firstThumb = selectedThumb;
      const isEnabled = item.enabled !== false;
      const cardMediaStyle = isEnabled ? `background-image: url('${firstThumb}')` : `background-image: url('${firstThumb}'); filter: grayscale(100%);`;
      const watchButtonClass = isEnabled ? 'watch-button' : 'watch-button disabled';
      const watchButtonText = isEnabled ? 'ASSISTIR' : (item.name || 'INDISPONÍVEL');
      const currentIsFavorite = isFavorite(item.name);
      html += `
        <div id="group-series-button">
        <div class="card-media" style="${cardMediaStyle}"></div>
        <div class="info">
          <h1>${item.name}</h1>
          <p>TEST</p>
          <button class="${watchButtonClass}">${watchButtonText}</button>
        </div>
        <button class="favorite-button ${currentIsFavorite ? 'favorited' : ''}" data-serie='${JSON.stringify(item)}'>
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
      `;
      }
    });
    html += '</section>';
    });
  } 
  else {
    if (isFavoritesPage) {
      html += '<h1 class="main-favorites-title">Meus Favoritos</h1>';
      html += '<p>Você ainda não adicionou nenhum item aos favoritos.</p>';
    } else {
      html += '<p>Nenhum item encontrado.</p>';
    }
  }

 contentContainer.innerHTML = html;
 const currentPath = path; 

 const favoriteButtons = contentContainer.querySelectorAll('.favorite-button');
 favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
    e.preventDefault();
    const serieData = JSON.parse(this.getAttribute('data-serie'));
    const nowFavorite = toggleFavorite(serieData);

    if (currentPath === generateSlug('Favoritos') || currentPath === generateSlug('Início')) {
      loadPageContent(currentPath);
      return; 
    }
        
    this.classList.toggle('favorited', nowFavorite);

    const star = this.querySelector('.rating__star');
    const ring = this.querySelector('.rating__star-ring');
    const stroke = this.querySelector('.rating__star-stroke');
    const fill = this.querySelector('.rating__star-fill');
    const lines = this.querySelectorAll('.rating__star-line');

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

    const tooltip = this.querySelector('.tooltip-text');
    if (tooltip) {
      tooltip.textContent = nowFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
    }

    this.classList.add('pulse');
    setTimeout(() => {this.classList.remove('pulse');}, 600);});
 });
}

function activateByPath(path) {
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  const targetLink = document.querySelector(`a[data-path="${path}"], a[data-group="${path}"]`);
  if (targetLink) targetLink.closest('li').classList.add('active');
  else if (path === generateSlug('Início') || path === 'inicio')
    document.querySelector('#main-menu-list li:first-child').classList.add('active');
}

function getCurrentPath() {
  let pathname = window.location.pathname;
  if (pathname.endsWith('/index.html') || pathname === '/index.html' || pathname === '/')
    return generateSlug('Início');
  else if (pathname.includes('/index.html/')) {
    const part = pathname.split('/index.html/')[1];
    return part && part.trim() !== '' ? part : generateSlug('Início');
  } else {
    const part = pathname.split('/').pop();
    return part && part.trim() !== '' ? part : generateSlug('Início');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('dynamic-content-menu');
  const mainMenuLinks = document.querySelectorAll('#main-menu-list li a');
  let htmlContent = '';
  const initialActiveGroup = null;

  mainMenuLinks[0].setAttribute('data-path', generateSlug('Início'));
  mainMenuLinks[1].setAttribute('data-path', generateSlug('Histórico'));
  mainMenuLinks[2].setAttribute('data-path', generateSlug('Favoritos'));

  seriesData.forEach(item => {
    if (item.visible) {
      const iconData = getIcon(item.group_name);
      let iconHTML = '';
      const isActive = (initialActiveGroup && item.group_name === initialActiveGroup) ? 'active' : '';

      if (iconData.type === 'fa') {
        iconHTML = `<i class="${iconData.value}"></i>`;
      } else if (iconData.type === 'base64') {
        iconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt || item.group_name + ' Icon'}">`;
      } else if (iconData.type === 'svg') {
        iconHTML = iconData.value;
      }

      const slug = generateSlug(item.group_name);
      htmlContent += `
        <li class="${isActive}">
          <a href="#" data-group="${slug}">
            ${iconHTML} ${item.group_name}
          </a>
        </li>
      `;
    }
  });

  if (menuContainer) menuContainer.innerHTML = htmlContent;

  const allMenuLinks = document.querySelectorAll('.sidebar nav ul li a');
  allMenuLinks.forEach(link => {
    link.addEventListener('click', async function (event) {
        event.preventDefault();
        let path = this.getAttribute('data-path') || this.getAttribute('data-group');
        if (!path) return;

        let newPath = path === generateSlug('Início') ? '/index.html' : '/index.html/' + path;
        history.pushState(null, '', newPath);
        activateByPath(path);
        await loadPageContent(path);
    });
  });

  const currentPath = getCurrentPath();
  activateByPath(currentPath);
  loadPageContent(currentPath);

  window.addEventListener('popstate', () => {
    const path = getCurrentPath();
    activateByPath(path);
    loadPageContent(path);
  });

  const streamsLink = document.querySelector('a[data-group="' + generateSlug('Streams') + '"]');
  if (streamsLink) setupStreamIcons(streamsLink);
});