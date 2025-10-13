const seriesData = [
    {
      group_name: "Animes",
      visible: true,
    },
    {
      group_name: "Canais",
      visible: true,
    },
    {
      group_name: "Filmes",
      visible: true,
    },
    {
      group_name: "Minecraft",
      visible: true,
    },
    {
      group_name: "Novelas",
      visible: true,
    },
    {
      group_name: "Séries",
      visible: true,
    },
    {
      group_name: "Séries Bíblicas",
      visible: true,
    },
    {
      group_name: "Streams",
      visible: true,
    },
];

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

function generateSlug(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function getIcon(groupName) {
  const name = groupName.toLowerCase();

  if (name.includes('animes'))    return { type: 'base64', value: animesIconBase64,    alt: 'animes' };
  if (name.includes('canais'))    return { type: 'base64', value: channelsIconBase64,  alt: 'canais' };
  if (name.includes('filmes'))    return { type: 'base64', value: moviesIconBase64,    alt: 'filmes' };
  if (name.includes('novelas'))   return { type: 'base64', value: novelsIconBase64,    alt: 'novelas' };
  if (name.includes('minecraft')) return { type: 'base64', value: minecraftIconBase64, alt: 'minecraft' };
  if (name.includes('bíblicas'))  return { type: 'base64', value: biblicalIconBase64,  alt: 'series bíblica' };
  if (name.includes('séries'))    return { type: 'base64', value: seriesIconBase64,    alt: 'series' };
  if (name.includes('streams'))   return { type: 'svg', value: kickIconSvg, alt: 'kick' };

  return { type: 'fa', value: 'fas fa-layer-group' }; 
}

document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('dynamic-content-menu');
  let htmlContent = '';
  const initialActiveGroup = null; 

  const mainMenuLinks = document.querySelectorAll('#main-menu-list li a');
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
  
  if (menuContainer) {
      menuContainer.innerHTML = htmlContent;
  }

  function activateByPath(path) {
      document.querySelectorAll('.sidebar li').forEach(li => {
          li.classList.remove('active');
      });

      const targetLink = document.querySelector(`a[data-path="${path}"], a[data-group="${path}"]`);
      if (targetLink) {
          targetLink.closest('li').classList.add('active');
      } else if (path === generateSlug('Início') || path === 'inicio') {
          document.querySelector('#main-menu-list li:first-child').classList.add('active');
      }
  }

  let currentPath = window.location.pathname.split('/').pop().replace(/%20/g, ' ').toLowerCase();
  if (!currentPath || currentPath === 'index.html') {
      currentPath = generateSlug('Início');
  }
  activateByPath(currentPath);

  const allMenuLinks = document.querySelectorAll('.sidebar nav ul li a');

  allMenuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); 
          let path = this.getAttribute('data-path') || this.getAttribute('data-group');
          if (!path) return; // Ignora se não tiver

          history.pushState(null, '', '/' + path);
          activateByPath(path);
      });
  });

  window.addEventListener('popstate', () => {
      let path = window.location.pathname.split('/').pop();
      if (!path || path === 'index.html') {
          path = generateSlug('Início');
      }
      activateByPath(path);
  });

  const streamsLink = document.querySelector('a[data-group="' + generateSlug('Streams') + '"]');
  if (streamsLink) {
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

          if (iconData.type === 'svg') {
              newIconHTML = iconData.value;
          } else if (iconData.type === 'base64') {
              newIconHTML = `<img src="${iconData.value}" class="custom-icon" alt="${iconData.alt}">`;
          }

          streamsLink.innerHTML = `${newIconHTML} ${text}`;
          currentIndex = (currentIndex + 1) % icons.length;
      }

      updateIcon();
      setInterval(updateIcon, 3000);
  }
});