// ==========================================
// 1. CONSTANTES E CONFIGURAÇÕES
// ==========================================
const API_CONFIG = {
    twitch: {
        logo: "https://i.imgur.com/DJ0qtop.png",
        badge: "https://i.imgur.com/DJ0qtop.png", //https://i.imgur.com/nu8TZvY.png
        checker: checkTwitch,
        name: "TWITCH",
        info: "Twitch: Ver lives e informações."
    },
    kick: {
        logo: "https://i.imgur.com/QafLmHR.png",
        badge: "https://i.imgur.com/QafLmHR.png", //https://i.imgur.com/hBNy949.png
        checker: checkKick,
        name: "KICK",
        info: "Kick: Ver lives e informações."
    },
    youtube: {
        logo: "https://i.imgur.com/x4GSLDb.png",
        badge: "https://i.imgur.com/x4GSLDb.png", //https://i.imgur.com/nhsbGph.png
        checker: null, // Não implementado
        name: "YOUTUBE",
        info: "YouTube: Em breve. (desativado)"
    }
};

const INITIAL_USERNAMES_ARRAY = [];

const DOM = {
    inputUsernames: document.getElementById('usernames'),
    checkButton: document.getElementById('checkStreamsButton'),
    resultDiv: document.getElementById('result'),
    showOfflineCheckbox: document.getElementById('showOffline'),
    platformCheckboxes: document.querySelectorAll('.platform-toggle'),
    platformLogos: document.querySelectorAll('.platform-logo')
};

// ==========================================
// 2. VARIÁVEIS DE ESTADO
// ==========================================
let streamsDataCache = {};
let currentAllStreams = [];

// ==========================================
// 3. FUNÇÕES UTILITÁRIAS
// ==========================================
function isURL(str) {
    if (typeof str !== 'string') return false;
    return str.startsWith('http');
}

function initializeDOM() {
    DOM.inputUsernames.value = INITIAL_USERNAMES_ARRAY.join(' ');
    const platformWrappers = document.querySelectorAll('.platform-card-wrapper');
    
    platformWrappers.forEach(wrapper => {
        const platform = wrapper.dataset.platform;
        const config = API_CONFIG[platform];
        
        if (config) {
            const logoContainer = wrapper.querySelector('.platform-logo-container');
            const descDisplay = wrapper.querySelector('.platform-desc-text');
            
            // Atualiza a descrição
            descDisplay.textContent = config.info;
            
            // Limpa conteúdo anterior
            logoContainer.innerHTML = '';
            
            // Adiciona logo ou nome
            if (isURL(config.logo)) {
                const logoImg = document.createElement('img');
                logoImg.classList.add('platform-logo');
                logoImg.src = config.logo;
                logoImg.alt = config.name;
                logoContainer.appendChild(logoImg);
            } else {
                const nameFallback = document.createElement('div');
                nameFallback.classList.add('platform-name-fallback');
                nameFallback.textContent = config.name;
                logoContainer.appendChild(nameFallback);
            }
        }
    });

    DOM.checkButton.addEventListener('click', checkStreams);
    DOM.inputUsernames.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkStreams();
        }
    });
    DOM.platformCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handlePlatformToggle);
    });
    DOM.showOfflineCheckbox.addEventListener('change', renderStreams);
}

function getInputUsernames() {
    return DOM.inputUsernames.value.split(/\s+/).map(u => u.trim().toLowerCase()).filter((u, i, arr) => u && arr.indexOf(u) === i);
}

// ==========================================
// 4. FUNÇÕES DE REQUISIÇÃO (FETCHERS)
// ==========================================

const CORS_PROXY_URL = 'https://corsproxy.io/?url=';

async function apiFetch(url, options = {}) {
    const proxyUrl = `${CORS_PROXY_URL}${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl, options);
    
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    
    return response.json();
}

async function checkTwitch(username) {
    const platform = 'twitch';
    const query = `
        query {
            user(login: "${username}") {
                displayName, profileImageURL(width: 300), 
                stream { viewersCount, previewImageURL(width: 640, height: 360), title }
            }
        }
    `;
    const targetUrl = 'https://gql.twitch.tv/gql';

    try {
        const data = await apiFetch(targetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Client-ID': 'kimne78kx3ncx6brgo4mv6wki5h1ko' },
            body: JSON.stringify({ query })
        });

        const user = data.data?.user;
        if (!user || !user.displayName) return null;

        const isOnline = !!user.stream;
        
        return {
            platform,
            online: isOnline,
            username: user.displayName,
            profileImageURL: user.profileImageURL || '',
            title: isOnline ? user.stream.title : 'Streamer Offline',
            viewers: isOnline ? user.stream.viewersCount : 0,
            thumbnail: isOnline ? user.stream.previewImageURL : ''
        };
    } catch (error) {
        console.error(`Erro em checkTwitch para ${username}:`, error);
        return { platform, online: false, username, error: error.message };
    }
}

async function checkKick(username) {
    const platform = 'kick';
    const targetUrl = `https://kick.com/api/v1/channels/${username}`;

    try {
        const data = await apiFetch(targetUrl);
        
        const { user, livestream } = data;
        if (!user) return null;

        const isOnline = !!livestream;
        
        return {
            platform,
            online: isOnline,
            username: user.username,
            profileImageURL: user.profile_pic || '',
            title: isOnline ? livestream.session_title : 'Streamer Offline',
            viewers: isOnline ? livestream.viewer_count : 0,
            thumbnail: isOnline ? livestream.thumbnail?.url : ''
        };
    } catch (error) {
        if (error.message.includes('404')) return null;
        console.error(`Erro em checkKick para ${username}:`, error);
        return { platform, online: false, username, error: error.message };
    }
}

// ==========================================
// 5. LÓGICA PRINCIPAL E HANDLERS
// ==========================================
async function checkStreams() {
    const usernames = getInputUsernames();
    
    if (usernames.length === 0) {
        DOM.resultDiv.innerHTML = '<p class="error">Digite pelo menos um username!</p>';
        return;
    }

    const selectedPlatforms = Array.from(DOM.platformCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.dataset.platform);
        
    if (selectedPlatforms.length === 0) {
        DOM.resultDiv.innerHTML = '<p class="error">Selecione pelo menos uma plataforma!</p>';
        return;
    }

    DOM.resultDiv.innerHTML = '<div class="loading">Carregando streams...</div>';

    // 1. Inicializa ou atualiza o cache para os novos usernames
    usernames.forEach(u => {
        if (!streamsDataCache[u]) streamsDataCache[u] = {};
    });

    // 2. Busca e armazena os dados
    await fetchAndUpdateCache(usernames, selectedPlatforms);

    // 3. Atualiza o array de resultados a ser renderizado
    updateCurrentAllStreams(usernames, selectedPlatforms);
    
    // 4. Renderiza
    renderStreams();
}

async function fetchAndUpdateCache(usernames, platforms) {
    const promises = [];
    usernames.forEach(username => {
        platforms.forEach(platform => {
            const checker = API_CONFIG[platform].checker;
            
            if (checker && !streamsDataCache[username][platform]) {
                promises.push(
                    checker(username).then(result => {
                        if (result) {
                            streamsDataCache[username][platform] = result;
                        } else {
                            streamsDataCache[username][platform] = { platform, online: false, username, error: 'Canal não encontrado' };
                        }
                    })
                );
            }
        });
    });

    if (promises.length > 0) {
        await Promise.all(promises);
    }
}

function updateCurrentAllStreams(usernames, selectedPlatforms) {
    currentAllStreams = [];
    usernames.forEach(username => {
        selectedPlatforms.forEach(platform => {
            if (streamsDataCache[username] && streamsDataCache[username][platform]) {
                currentAllStreams.push(streamsDataCache[username][platform]);
            }
        });
    });
}

async function handlePlatformToggle(event) {
    const platform = event.target.dataset.platform;
    const isChecked = event.target.checked;
    
    const usernames = getInputUsernames();
    if (usernames.length === 0) return;

    if (isChecked) {
        DOM.resultDiv.innerHTML = `<div class="loading">Carregando para ${platform.toUpperCase()}...</div>`;
        await fetchAndUpdateCache(usernames, [platform]);
    }

    const selectedPlatforms = Array.from(DOM.platformCheckboxes).filter(cb => cb.checked).map(cb => cb.dataset.platform);

    updateCurrentAllStreams(usernames, selectedPlatforms);
    renderStreams();
}

// ==========================================
// 6. RENDERIZAÇÃO
// ==========================================
function renderStreams() {
    const showOffline = DOM.showOfflineCheckbox.checked;
    let filteredStreams = currentAllStreams;

    if (!showOffline) {
        filteredStreams = currentAllStreams.filter(s => s.online || s.error);
    }

    if (filteredStreams.length === 0) {
        DOM.resultDiv.innerHTML = showOffline 
            ? '<p class="error">Nenhum canal encontrado para os usernames fornecidos ou plataformas selecionadas.</p>'
            : '<p class="error">Nenhum canal online no momento.</p>';
        return;
    }
    
    filteredStreams.sort((a, b) => b.online - a.online);
    DOM.resultDiv.innerHTML = filteredStreams.map(createStreamCardHTML).join('');
}

function createStreamCardHTML(stream) {
    const { platform, online, username, title, viewers, profileImageURL, thumbnail, error } = stream;
    const config = API_CONFIG[platform];
    const platformName = config.name;
    const badgeContent = config.badge;
    const isError = !!error;
    
    const className = online || isError ? '' : 'offline';
    const fullClass = `${className} ${platform}`;

    const avatarInitial = username.charAt(0).toUpperCase();
    const viewersText = online ? `${viewers.toLocaleString('pt-BR')} Espectadores` : 'Offline';
    const isPlaceholderColor = online ? '#22c55e' : (isError ? '#f59e0b' : '#ef4444');

    const hasAvatar = profileImageURL && profileImageURL.length > 0 && profileImageURL.startsWith('http');
    const hasThumbnail = online && thumbnail;
    const avatarSrc = platform === 'kick' && hasAvatar ? `${CORS_PROXY_URL}${encodeURIComponent(profileImageURL)}` : (hasAvatar ? profileImageURL : '');

    let badgeHTML;
    if (isURL(badgeContent)) {
        badgeHTML = `<img class="platform-badge" src="${badgeContent}" alt="${platformName} Badge">`;
    } else {
        badgeHTML = `<div class="platform-badge">${platformName}</div>`;
    }

    if (isError) {
        const errorText = error.includes('Canal não encontrado') ? `O canal ${username} não foi encontrado na ${platformName}.` : `Erro em ${platformName}: ${username} - ${error}`;
        return `
            <div class="stream-card ${fullClass} error">
                ${badgeHTML}
                <div class="stream-header"><div class="username">${username}</div></div>
                <p class="error">${errorText}</p>
            </div>`;
    }

    return `
        <div class="stream-card ${fullClass}">
            ${badgeHTML}
            
            ${hasThumbnail 
                ? `<img class="thumbnail" src="${thumbnail}" alt="Thumbnail da live de ${username}" onerror="this.outerHTML='<div class=\\'thumbnail-placeholder\\'>Thumbnail indisponível</div>';">` 
                : `<div class="thumbnail-placeholder">Thumbnail indisponível</div>`
            }
            
            <div class="stream-header">
                <div class="avatar-container">
                    <div class="avatar-placeholder" style="background: ${isPlaceholderColor};">${avatarInitial}</div>
                    ${hasAvatar 
                        ? `<img class="avatar-img" src="${avatarSrc}" alt="Avatar de ${username}" onerror="this.style.display='none';">` 
                        : ''
                    }
                </div>
                <div class="info-container">
                    <div class="username">${username}</div>
                    <div class="status-line">
                        <span class="viewer-dot" style="background: ${isPlaceholderColor};"></span>
                        <span class="viewers">${viewersText}</span>
                    </div>
                </div>
            </div>
            
            <div class="title">${title}</div>
        </div>
    `;
}

// ==========================================
// 7. INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDOM();
    checkStreams(); 

    document.querySelectorAll('.neon-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const platform = this.dataset.platform;
            const content = this.closest('.content');
            
            content.classList.remove('checked-twitch', 'checked-kick', 'checked-youtube');
            if (this.checked) {
                content.classList.add(`checked-${platform}`);
            }
        });
    });

    document.querySelectorAll('.neon-checkbox input').forEach(checkbox => {
        if (checkbox.checked) {
            const platform = checkbox.dataset.platform;
            const content = checkbox.closest('.content');
            content.classList.add(`checked-${platform}`);
        }
    });
    
});