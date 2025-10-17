// ==========================================
// 1. CONSTANTES E CONFIGURAÇÕES
// ==========================================
const CACHE_TTL = 60 * 1000; // 60 segundos
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

const FREE_CORS_PROXIES = [
    (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
    (url) => `https://thingproxy.freeboard.io/fetch/${url}`,
    (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`
];

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
let streamsDataCache = {}; // Cache em memória (complementa LocalStorage)
let currentAllStreams = [];
let timerInterval = null; // Timer global simples pro uptime-badge

// ==========================================
// 3. CACHE LOCAL (LOCALSTORAGE)
// ==========================================
function getCacheKey(username, platform) {
    return `streamCache_${platform}_${username}`;
}

function saveToCache(username, platform, data) {
    const cacheEntry = { data, timestamp: Date.now() };
    try { localStorage.setItem(getCacheKey(username, platform), JSON.stringify(cacheEntry)); } catch {}
}

function loadFromCache(username, platform) {
    try {
        const cached = localStorage.getItem(getCacheKey(username, platform));
        if (!cached) return null;
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp > CACHE_TTL) return null;
        return parsed.data;
    } catch {
        return null;
    }
}

// ==========================================
// 4. FUNÇÕES UTILITÁRIAS
// ==========================================
function isURL(str) {
    if (typeof str !== 'string') return false;
    return str.startsWith('http');
}

function escapeHtml(str) {
    if (!str && str !== 0) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

async function tryFetchWithProxies(url, options = {}, maxRetries = 1) {
    const attempts = [{ fetchUrl: url }, ...FREE_CORS_PROXIES.map(fn => ({ fetchUrl: fn(url) }))];
    for (let attempt of attempts) {
        for (let r = 0; r <= maxRetries; r++) {
            try {
                const resp = await fetch(attempt.fetchUrl, options);
                if (!resp.ok) {
                    const e = new Error(`HTTP ${resp.status}`);
                    e.status = resp.status;
                    throw e;
                }
                const text = await resp.text();
                try {
                    return JSON.parse(text);
                } catch {
                    return text;
                }
            } catch (err) {
                // 404 do endpoint (canal não encontrado) — propaga para o chamador
                if (err && err.status === 404) {
                    const e = new Error('404');
                    e.code = 404;
                    throw e;
                }
                // backoff mínimo e tenta novamente
                await new Promise(res => setTimeout(res, 200 * (r + 1)));
            }
        }
    }
    throw new Error('Falha em todas as tentativas de fetch');
}

async function apiFetch(url, options = {}) {
    return tryFetchWithProxies(url, options, 1);
}

function initializeDOM() {
    DOM.inputUsernames.value = INITIAL_USERNAMES_ARRAY.join(' ');
    const platformWrappers = document.querySelectorAll('.platform-card-wrapper');  // Corrigi de volta pro original
    
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
// 5. FUNÇÕES DE REQUISIÇÃO (FETCHERS) COM CACHE
// ==========================================
async function checkTwitch(username) {
    const platform = 'twitch';
    // Tenta cache LocalStorage primeiro
    const cached = loadFromCache(username, platform);
    if (cached) return cached;

    const query = `
        query {
            user(login: "${username}") {
                displayName, profileImageURL(width: 300), 
                stream { viewersCount, previewImageURL(width: 640, height: 360), title, createdAt }
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
        const result = {
            platform,
            online: isOnline,
            username: user.displayName,
            profileImageURL: user.profileImageURL || '',
            title: isOnline ? user.stream.title : 'Streamer Offline',
            viewers: isOnline ? user.stream.viewersCount : 0,
            thumbnail: isOnline ? user.stream.previewImageURL : '',
            startedAt: isOnline ? user.stream.createdAt : null  // Usa startedAt pro timer
        };

        // Salva em cache LocalStorage
        saveToCache(username, platform, result);
        return result;
    } catch (error) {
        console.error(`Erro em checkTwitch para ${username}:`, error);
        const result = { platform, online: false, username, error: error.message };
        saveToCache(username, platform, result); // Cache de erro também
        return result;
    }
}

async function checkKick(username) {
    const platform = 'kick';
    // Tenta cache LocalStorage primeiro
    const cached = loadFromCache(username, platform);
    if (cached) return cached;

    const endpoints = [
        `https://kick.com/api/v2/channels/${username}`,
        `https://kick.com/api/v1/channels/${username}`
    ];
    for (let ep of endpoints) {
        try {
            const data = await apiFetch(ep);
            const parsed = typeof data === 'string' ? JSON.parse(data) : data;
            if (!parsed?.user) continue;

            const { user, livestream } = parsed;
            const isOnline = !!livestream;
            let startedAt = null;
            if (isOnline) {
                // Converte created_at pra ISO UTC pro timer (como no código anterior)
                startedAt = livestream.created_at.replace(' ', 'T') + 'Z';
            }
            const result = {
                platform,
                online: isOnline,
                username: user.username,
                profileImageURL: user.profile_pic || '',
                title: isOnline ? livestream.session_title : 'Streamer Offline',
                viewers: isOnline ? livestream.viewer_count : 0,
                thumbnail: isOnline ? livestream.thumbnail?.url : '',
                startedAt
            };

            // Salva em cache LocalStorage
            saveToCache(username, platform, result);
            return result;
        } catch (error) {
            if (error.message.includes('404')) return null;
            // Tenta próximo endpoint
            continue;
        }
    }

    const result = { platform, online: false, username, error: 'Indisponível' };
    saveToCache(username, platform, result); // Cache de erro
    return result;
}

// ==========================================
// 6. LÓGICA PRINCIPAL E HANDLERS
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

    // 1. Inicializa ou atualiza o cache para os novos usernames (LocalStorage + memória)
    usernames.forEach(u => {
        if (!streamsDataCache[u]) streamsDataCache[u] = {};
    });

    // 2. Busca e armazena os dados (com cache)
    await fetchAndUpdateCache(usernames, selectedPlatforms);

    // 3. Atualiza o array de resultados a ser renderizado
    updateCurrentAllStreams(usernames, selectedPlatforms);
    
    // 4. Renderiza e inicia timers
    renderStreams();
}

async function fetchAndUpdateCache(usernames, platforms) {
    const promises = [];
    usernames.forEach(username => {
        platforms.forEach(platform => {
            const checker = API_CONFIG[platform].checker;
            
            if (checker) {
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
// 7. RENDERIZAÇÃO E CRONÔMETROS
// ==========================================
// Mantive o safeParse como backup, mas uso string ISO direta no formatUptime
function safeParseStartTime(raw) {
    if (!raw) return null;
    // Se já for número (timestamp ms), retorna direto
    if (typeof raw === 'number') return raw;
    // Tenta parse ISO normal (pra Twitch)
    const date = new Date(raw);
    if (!isNaN(date.getTime())) return date.getTime();
    // Pra Kick: YYYY-MM-DD HH:MM:SS -> parse como UTC
    const match = raw.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
    if (match) {
        const [, year, month, day, hour, min, sec] = match;
        // Date.UTC retorna ms desde epoch em UTC
        return Date.UTC(
            parseInt(year), 
            parseInt(month) - 1, 
            parseInt(day), 
            parseInt(hour), 
            parseInt(min), 
            parseInt(sec)
        );
    }
    return null;
}

// Função do timer anterior: usa string de data ISO diretamente
function formatUptime(startedAt) {
    const start = new Date(startedAt);
    const now = new Date();
    const diff = now - start;
    const hours = Math.floor(diff / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateUptimes() {
    document.querySelectorAll('.uptime-badge').forEach(badge => {
        const startedAt = badge.dataset.startedAt;
        if (startedAt) {
            badge.textContent = formatUptime(startedAt);
        }
    });
}

function startUptimeTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateUptimes, 1000);
        // Inicializa imediatamente
        updateUptimes();
    }
}

function stopUptimeTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function renderStreams() {
    const showOffline = DOM.showOfflineCheckbox.checked;
    let filteredStreams = currentAllStreams;

    if (!showOffline) {
        filteredStreams = currentAllStreams.filter(s => s && (s.online || s.error));
    }

    // Corrige streams null/undefined
    filteredStreams = (filteredStreams || []).filter(s => s && typeof s === 'object' && 'online' in s);

    if (filteredStreams.length === 0) {
        DOM.resultDiv.innerHTML = showOffline 
            ? '<p class="error">Nenhum canal encontrado para os usernames fornecidos ou plataformas selecionadas.</p>'
            : '<p class="error">Nenhum canal online no momento.</p>';
        stopUptimeTimer(); // Para o timer se não há streams online
        return;
    }
    
    filteredStreams.sort((a, b) => (b.online ? 1 : 0) - (a.online ? 1 : 0));
    DOM.resultDiv.innerHTML = `
        <div class="platforms-section">
            ${filteredStreams.map(createStreamCardHTML).join('')}
        </div>
    `;

    // Inicia timer se há streams online com startedAt
    if (filteredStreams.some(s => s.online && s.startedAt)) {
        startUptimeTimer();
    } else {
        stopUptimeTimer();
    }
}

function createStreamCardHTML(stream) {
    const { platform, online, username, title, viewers, profileImageURL, thumbnail, error, startedAt } = stream;
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
    const avatarSrc = platform === 'kick' && hasAvatar ? FREE_CORS_PROXIES[0](profileImageURL) : (hasAvatar ? profileImageURL : '');

    let badgeHTML;
    if (isURL(badgeContent)) {
        badgeHTML = `<img class="platform-badge" src="${badgeContent}" alt="${escapeHtml(platformName)} Badge">`;
    } else {
        badgeHTML = `<div class="platform-badge">${escapeHtml(platformName)}</div>`;
    }

    if (isError) {
        const errorText = error.includes('Canal não encontrado') ? `O canal ${escapeHtml(username)} não foi encontrado na ${platformName}.` : `Erro em ${platformName}: ${escapeHtml(username)} - ${escapeHtml(error)}`;
        return `
            <div class="stream-card ${fullClass} error">
                ${badgeHTML}
                <div class="stream-header"><div class="username">${escapeHtml(username)}</div></div>
                <p class="error">${errorText}</p>
            </div>`;
    }

    // Badge de uptime: só pra online, com data-started-at (string ISO)
    let uptimeHTML = '';
    if (online && startedAt) {
        uptimeHTML = `<div class="uptime-badge" data-started-at="${escapeHtml(startedAt)}">00:00:00</div>`;
    }

    return `
        <div class="stream-card ${fullClass}">
            <div class="thumbnail-wrapper">  <!-- Container novo pra thumb + badges -->
                ${badgeHTML}
                ${uptimeHTML}
                ${hasThumbnail 
                    ? `<img class="thumbnail" src="${thumbnail}" alt="Thumbnail da live de ${escapeHtml(username)}" onerror="this.outerHTML='<div class=\\'thumbnail-placeholder\\'>Thumbnail indisponível</div>';">` 
                    : `<div class="thumbnail-placeholder">Thumbnail indisponível</div>`
                }
            </div>
            
            <div class="stream-header">
                <div class="avatar-container">
                    <div class="avatar-placeholder" style="background: ${isPlaceholderColor};">${avatarInitial}</div>
                    ${hasAvatar 
                        ? `<img class="avatar-img" src="${avatarSrc}" alt="Avatar de ${escapeHtml(username)}" onerror="this.style.display='none';">` 
                        : ''
                    }
                </div>
                <div class="info-container">
                    <div class="username">${escapeHtml(username)}</div>
                    <div class="status-line">
                        <span class="viewer-dot" style="background: ${isPlaceholderColor};"></span>
                        <span class="viewers">${escapeHtml(viewersText)}</span>
                    </div>
                </div>
            </div>
            
            <div class="title">${escapeHtml(title)}</div>
        </div>
    `;
}

// ==========================================
// 8. INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeDOM();
    // checkStreams(); 

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