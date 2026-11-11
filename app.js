/* ==========================================================================
   VPS MANAGER ANDROID — SECURITY SQUADRON ENGINE
   4 n8n Agents ↔ 4 Discord Security Channels + :5059/:5060 Live Bridge
   Preserves: 37 WebGL Shaders, 5 Wallpaper Galleries, VisionOS Glass & Knox
   ========================================================================== */

(function () {
  'use strict';

  // ========================================================================
  // 1. PRESERVED WALLPAPER MANIFEST (5 GALERIAS REAIS EM images/)
  // ========================================================================
  const WALLPAPER_MANIFEST = {
    'gym images': [
      'images/gym images/012f4996731b766a5f6fce9ae5fa16a0.jpg',
      'images/gym images/04747ba8c86d370f14b19aff88c73f77.jpg',
      'images/gym images/1-20260505_170907.jpg',
      'images/gym images/2-20260327_135337.jpg',
      'images/gym images/3-20260313_123924.jpg',
      'images/gym images/416bb19b1eefa7c850b4db3cb09bac12 - cópia.jpg',
      'images/gym images/4567a6460e49dca509404aa4031c11d2.jpg',
      'images/gym images/9811449c83f06fc824d7a95f235d376e - cópia.jpg',
      'images/gym images/b3668afb13ab00288ff06c9d72453d19.jpg',
      'images/gym images/c6081876648f7ce1a6e4734daa79e7d4.jpg',
      'images/gym images/e5ef0ddde9b00540cdf18e4b226e0bee.jpg',
      'images/gym images/eca2c6f16007ec99ca3c5058876b2af6.jpg',
      'images/gym images/f4fcf6bb7808351828fbd6ed76cba496.jpg',
      'images/gym images/onboarding.jpg'
    ],
    'motivacional': [
      'images/motivacional/1000427297.jpg',
      'images/motivacional/1000427303.jpg',
      'images/motivacional/1000427312.jpg',
      'images/motivacional/img_8287.jpeg',
      'images/motivacional/img_9915.jpeg',
      'images/motivacional/projetounohome_20260613_155750_319.jpg',
      'images/motivacional/projetounohome_20260613_155802_757.jpg',
      'images/motivacional/projetounohome_20260613_155833_559.jpg',
      'images/motivacional/projetounohome_20260613_155903_814.jpg',
      'images/motivacional/projetounohome_20260613_171838_541.jpg',
      'images/motivacional/vaideuno_20260613_155457_985.jpg',
      'images/motivacional/vaideuno_20260613_155513_639.jpg',
      'images/motivacional/vaideuno_20260613_170029_918.jpg',
      'images/motivacional/vaideuno_20260613_171916_766.jpg',
      'images/motivacional/welitonofc001-20260222-0004.jpg',
      'images/motivacional/welitonofc001-20260222-0049.jpg',
      'images/motivacional/welitonofc001-20260222-0097.jpg'
    ],
    'red': [
      'images/red/08c3aa3a5c3631b23cec57233f5c365c.jpg',
      'images/red/465148a473500d0bf6c3b9c83b98ec92.jpg',
      'images/red/6c5d14bcb2f0390ee694119aa6704655.jpg',
      'images/red/7361af8ac2d01d02c9752f89b3365d47.jpg',
      'images/red/963a4bd9af77842586e2b4cdd53eb931.jpg',
      'images/red/f8247f7bffb7269d9e3b2310844b330d.jpg',
      'images/red/fb71f9cd02c7e3f7e41589d90f6fdaa8.jpg'
    ],
    'gen x soft club': [
      'images/gen x soft club/05f22143098023a6978520a73a77637e.jpg',
      'images/gen x soft club/142622f0d35efbffebc9b8a7995168dd.jpg',
      'images/gen x soft club/37c572ab0404204cb6f367c2a9f78a54.jpg',
      'images/gen x soft club/3e3b1728d96b733b8f3bbf418021dd42.jpg',
      'images/gen x soft club/69b55c9be40f117fd5f076d27334d2cf.jpg',
      'images/gen x soft club/6e86f5937cb8ef54593b94952a59d5a1.jpg',
      'images/gen x soft club/71acf6cb2cad2c986df87d817a06c33b.jpg',
      'images/gen x soft club/72859fb9ef398cd2a69777dc26d7d1d2.jpg',
      'images/gen x soft club/73ba35d0e4557dacaeb9ffaab42cd635.jpg',
      'images/gen x soft club/747c0ca848cc44632e4c94436348fe07.jpg',
      'images/gen x soft club/7b78f45b8a8f62b1cb9c7477d0b83f63.jpg',
      'images/gen x soft club/800c456fafbe63fae067663194fe47e9.jpg',
      'images/gen x soft club/8f432d4e77f909f3abccb186f47ffff3.jpg',
      'images/gen x soft club/b1cd9d06a79b40e08ff9b945cd051aab.jpg',
      'images/gen x soft club/b26f28a14964906204ec288ddf524432.jpg',
      'images/gen x soft club/bbf00645951aa952366c3a446a07c990.jpg',
      'images/gen x soft club/c4058aae27b4310eb2c979cf9f6a817d.jpg',
      'images/gen x soft club/e82d7e3487abb787a3398210d02801c8.jpg',
      'images/gen x soft club/f24ac251210bc82b90f9c33ce2438194.jpg',
      'images/gen x soft club/f9f930471adfb299ae9ad2f9b319421b.jpg'
    ],
    'flowers': [
      'images/flowers/59da96db902a205e9f90e651a4bcaa72.jpg',
      'images/flowers/797d233401eae1b36818abc988af10d4.jpg',
      'images/flowers/7f15501be01e3225966e2ab7fe1b735a.jpg',
      'images/flowers/8e7943acb3073ec2e112542af9fcc2c6.jpg',
      'images/flowers/a7a3a081d906882bcf9068afc3894eee.jpg',
      'images/flowers/b268e4783280047be44e09f1fca7dec6.jpg',
      'images/flowers/beb4c6ac11f067d61799142fe1a6e27d.jpg',
      'images/flowers/e55174e6ec437489913f134318952c1e.jpg'
    ]
  };

  const ALL_SHADERS = [
    'strands', 'plasmawave', 'softaurora', 'balatro', 'siderays', 'ferrofluid',
    'moltenmetal', 'topography', 'lighttunnel', 'acidsquares', 'webthreads',
    'dither', 'darkveil', 'particles', 'ghostfibers', 'beams', 'floatinglines',
    'silk', 'radar', 'ripplegrid', 'pixelblast', 'magicrings', 'gridscan',
    'liquidchrome', 'linewaves', 'faultyterminal', 'morphslider', 'antigravity',
    'aurora', 'letterglitch', 'plasma', 'liquidether', 'orb', 'prism',
    'prismaticburst', 'lightning', 'evileye'
  ];

  // ========================================================================
  // 2. AUTHORITATIVE n8n ↔ DISCORD SECURITY AGENTS MAP
  // ========================================================================
  const SECURITY_AGENTS = [
    {
      id: 'sentinel',
      icon: '🖥️',
      accent: '#38bdf8',
      title: 'Sentinel — VPS Manager',
      role: 'Infrastructure Guardian & SRE',
      n8nAgentId: 'xAj3So16VZKY9WGx',
      n8nName: '🖥️ VPS Manager · Infrastructure Guardian & SRE',
      n8nModel: 'openai/combo/guardian-thinking • reasoning: high • 25 HTTP tools (:5059)',
      discordChannelId: '1556801116132478976',
      discordChannelName: '#🖥️┃vps-manager',
      webhookId: '1556801937171685498',
      apiService: 'sentinel',
      description: 'Supervisiona saúde da Oracle ARM VPS (CPU, RAM, NVMe, Docker), atualizações diárias de pacotes/repositórios GitHub, alertas SSHD e comandos root.',
      actions: [
        { label: 'Telemetria (:5059)', service: 'sentinel', method: 'GET', path: '/api/vps/overview' },
        { label: 'Status Containers', service: 'sentinel', method: 'GET', path: '/api/vps/containers' },
        { label: 'Checar Repos Git', service: 'sentinel', method: 'GET', path: '/api/vps/repos/check' }
      ]
    },
    {
      id: 'guardian',
      icon: '🛡️',
      accent: '#10b981',
      title: 'Guardian — Segurança & Backups',
      role: 'Defense Shield, Fail2ban & Cold Backups',
      n8nAgentId: 'xAj3So16VZKY9WGx',
      n8nName: '🖥️ VPS Manager (Modo Segurança & Backups)',
      n8nModel: 'openai/combo/guardian-thinking • Livros 1/2/3 + iptables + Fail2ban',
      discordChannelId: '1557050270956126248',
      discordChannelName: '#🛡️┃segurança-e-backups',
      webhookId: '1557213238196965459',
      apiService: 'sentinel',
      description: 'Proteção Zero-Trust em tempo real (5 threads ativas: AuthStreamer, FIMMonitor, NetMonitor, KernStreamer, TailscaleSync), cold backups .tar.gz e sincronização de Livros.',
      actions: [
        { label: 'Auditoria Profunda', service: 'sentinel', method: 'GET', path: '/api/vps/security/audit-deep' },
        { label: 'Últimas Ameaças', service: 'sentinel', method: 'GET', path: '/api/vps/security/threats' },
        { label: 'Sync Livro -> Discord', service: 'sentinel', method: 'POST', path: '/api/vps/books/sync-discord', body: {} }
      ]
    },
    {
      id: 'osint',
      icon: '🕵️',
      accent: '#818cf8',
      title: 'Cyber OSINT & Abuse Hunter',
      role: 'Threat Intel, Shodan & RIPE Forensics',
      n8nAgentId: 'fKMt8yAiVhdy6b1G',
      n8nName: '🕵️‍♂️ Cyber OSINT & Incident Response · International Abuse Hunter',
      n8nModel: 'openai/combo/guardian-thinking • webSearch • 14 tools (:5060/:5059) • 4 skills • Cron 12h',
      discordChannelId: '1557442568751677570',
      discordChannelName: '#🕵️┃cyber-osint-response',
      webhookId: '1557442660934094930',
      apiService: 'osint',
      description: 'Pipeline forense autônomo Shodan/RIPE/GeoIP/Nmap. Mapeia infraestrutura atacante, CVEs críticas, ASNs e dispara bateladas AGX-BATCH de resposta a incidentes.',
      actions: [
        { label: 'Panorama OSINT (:5060)', service: 'osint', method: 'GET', path: '/api/osint/summary' },
        { label: 'Top Atacantes Catalogados', service: 'osint', method: 'GET', path: '/api/osint/catalog?limit=15' },
        { label: 'Sync OSINT -> Discord', service: 'osint', method: 'POST', path: '/api/osint/sync-discord', body: {} }
      ]
    },
    {
      id: 'cert',
      icon: '⚖️',
      accent: '#f59e0b',
      title: 'International Abuse & CERT Gateway',
      role: 'RFC 2142 / X-ARF Enforcement & CERT Logs',
      n8nAgentId: 'fKMt8yAiVhdy6b1G',
      n8nName: '🕵️‍♂️ Cyber OSINT (Subsistema CERT / RFC 2142)',
      n8nModel: 'openai/combo/guardian-thinking • Formal Abuse Dispatcher (:5060)',
      discordChannelId: '1557453999370665984',
      discordChannelName: '#⚖️┃logs-denuncias-internacionais',
      webhookId: '1557454002067738675',
      apiService: 'osint',
      description: 'Emite e registra autos formais de infração cibernética AGX-CERT-2026-* com evidências forenses (pcap/kernel logs) para CERTs nacionais (CISA, CNCERT, CERT.br) e ISPs.',
      actions: [
        { label: 'Logs Denúncias CERT', service: 'osint', method: 'GET', path: '/api/osint/denuncias_log' },
        { label: 'Consultar Livro 3', service: 'osint', method: 'GET', path: '/api/osint/book' }
      ]
    }
  ];

  // ========================================================================
  // 3. STATE MANAGEMENT
  // ========================================================================
  const state = {
    activeView: 'home', // 'home' | 'logs' | 'ips' | 'agents'
    activeFilter: 'all',
    searchQuery: '',
    isSyncing: false,
    isNative: false,
    bridgeStatus: null,
    discordByChannel: {},
    vpsSnapshot: {
      overview: null,
      containers: null,
      firewall: null,
      security: null,
      threats: null,
      whitelist: null,
      osint_summary: null,
      osint_catalog: null,
      denuncias_log: null
    },
    // Real-time security events & monotonic sequence
    lastRealtimeSeq: 0,
    realtimeEvents: [],
    // Full logs page
    fullLogs: [],
    logsCategory: 'all',
    logsSearchQuery: '',
    reportsList: [],
    activeReportName: '',
    // IPs & Occurrences page
    catalogIps: [],
    ipsStatusFilter: 'all',
    ipsSearchQuery: '',
    expandedDossiers: {},
    // n8n Chat History & modals
    n8nChatHistory: {},
    currentModalAgentId: null,
    bgType: localStorage.getItem('vps_bg_type') || 'shader',
    bgValue: localStorage.getItem('vps_bg_value') || 'strands',
    bioOnLaunch: localStorage.getItem('vps_bio_launch') === 'true',
    customSentinelUrl: localStorage.getItem('vps_sentinel_url') || '',
    customOsintUrl: localStorage.getItem('vps_osint_url') || '',
    customN8nUrl: localStorage.getItem('vps_n8n_url') || '',
    slideTimer: null,
    activeSlideIndex: 0,
    wallpaperIdx: 0
  };

  // ========================================================================
  // 4. UTILITIES
  // ========================================================================
  function escHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(msg, durationMs = 2800) {
    const toast = document.getElementById('vpsToast');
    if (!toast) return;
    toast.textContent = msg;
    toast.style.display = 'block';
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
      toast.style.display = 'none';
    }, durationMs);
  }

  function renderMarkdownToHtml(md) {
    if (!md) return '<p>Sem conteúdo no relatório.</p>';
    let html = escHtml(md);

    // Code blocks ```...```
    html = html.replace(/```([a-z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, codeText) => {
      return `<pre><code class="lang-${lang}">${codeText.trim()}</code></pre>`;
    });

    // Inline code `...`
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    // Bold & italic
    html = html.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^\*]+)\*/g, '<em>$1</em>');

    // Horizontal rule
    html = html.replace(/^---$/gim, '<hr style="border:0; border-top:1px solid rgba(255,255,255,0.15); margin:1rem 0;">');

    // Tables
    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '';
    const outputLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith('|') && line.endsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableHtml = '<table>';
        }
        if (line.includes('---')) continue;
        const cols = line.split('|').slice(1, -1).map(c => c.trim());
        const isHeader = !tableHtml.includes('<tbody>') && !tableHtml.includes('<tr>');
        if (isHeader) {
          tableHtml += '<thead><tr>' + cols.map(c => `<th>${c}</th>`).join('') + '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>' + cols.map(c => `<td>${c}</td>`).join('') + '</tr>';
        }
      } else {
        if (inTable) {
          tableHtml += '</tbody></table>';
          outputLines.push(tableHtml);
          inTable = false;
        }
        if (line) {
          outputLines.push(`<p>${line}</p>`);
        }
      }
    }
    if (inTable) {
      tableHtml += '</tbody></table>';
      outputLines.push(tableHtml);
    }

    return outputLines.join('\n');
  }


  function formatTimestamp(isoStr) {
    if (!isoStr) return '--';
    try {
      const d = new Date(isoStr);
      if (isNaN(d.getTime())) return String(isoStr).slice(0, 16);
      const dd = String(d.getDate()).padStart(2, '0');
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const hh = String(d.getHours()).padStart(2, '0');
      const min = String(d.getMinutes()).padStart(2, '0');
      return `${dd}/${mm} ${hh}:${min}`;
    } catch {
      return String(isoStr).slice(0, 16);
    }
  }

  function discordIntToHex(colorInt) {
    if (typeof colorInt === 'number' && colorInt > 0) {
      return '#' + colorInt.toString(16).padStart(6, '0');
    }
    return '#38bdf8';
  }

  function normalizeDiscordMessage(raw) {
    if (!raw || typeof raw !== 'object') return null;
    let authorName = 'Agente Discord';
    let isBot = true;
    if (typeof raw.author === 'string') {
      authorName = raw.author;
      isBot = raw.is_bot !== false;
    } else if (raw.author && typeof raw.author === 'object') {
      authorName = raw.author.global_name || raw.author.username || 'Agente Discord';
      isBot = Boolean(raw.author.bot);
    }
    const embeds = Array.isArray(raw.embeds) ? raw.embeds : [];
    const content = typeof raw.content === 'string' ? raw.content.trim() : '';
    const firstEmbed = embeds[0] || {};
    const title = firstEmbed.title || (content ? content.split('\n')[0].slice(0, 90) : 'Evento do Canal');
    const snippet = firstEmbed.description || content || (firstEmbed.fields && firstEmbed.fields[0] ? `${firstEmbed.fields[0].name}: ${firstEmbed.fields[0].value}` : '');
    return {
      id: raw.id || String(Math.random()),
      channel_id: raw.channel_id || '',
      timestamp: raw.timestamp || '',
      author: authorName,
      is_bot: isBot,
      content,
      embeds,
      previewTitle: title,
      previewSnippet: snippet
    };
  }

  function normalizeChannelArray(list) {
    if (!Array.isArray(list)) return [];
    return list
      .map(normalizeDiscordMessage)
      .filter(Boolean)
      .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0));
  }

  function getPlugin(name) {
    return window.Capacitor && window.Capacitor.Plugins ? window.Capacitor.Plugins[name] : null;
  }

  // ========================================================================
  // 5. BACKGROUND ENGINE (37 WEBGL SHADERS + 5 ROTATING WALLPAPER GALLERIES)
  // ========================================================================
  function clearWallpaperSlides() {
    if (state.slideTimer) {
      clearInterval(state.slideTimer);
      state.slideTimer = null;
    }
    const s1 = document.getElementById('bg-slide-1');
    const s2 = document.getElementById('bg-slide-2');
    if (s1) {
      s1.classList.remove('active');
      s1.style.backgroundImage = '';
    }
    if (s2) {
      s2.classList.remove('active');
      s2.style.backgroundImage = '';
    }
  }

  function applyWallpaperGallery(galleryKey) {
    const list = WALLPAPER_MANIFEST[galleryKey] || WALLPAPER_MANIFEST['gym images'];
    if (!list || !list.length) return;

    try {
      if (typeof window.stopWebGLBackground === 'function') {
        window.stopWebGLBackground();
      }
    } catch {}
    const webglCtn = document.getElementById('bg-webgl-container');
    if (webglCtn) webglCtn.innerHTML = '';

    clearWallpaperSlides();
    state.wallpaperIdx = 0;

    const showSlide = (imgPath) => {
      const s1 = document.getElementById('bg-slide-1');
      const s2 = document.getElementById('bg-slide-2');
      if (!s1 || !s2) return;
      const nextEl = state.activeSlideIndex === 0 ? s2 : s1;
      const prevEl = state.activeSlideIndex === 0 ? s1 : s2;
      const encoded = `url("${encodeURI(imgPath)}")`;
      nextEl.style.backgroundImage = encoded;
      nextEl.classList.add('active');
      prevEl.classList.remove('active');
      state.activeSlideIndex = state.activeSlideIndex === 0 ? 1 : 0;

      const heroBg = document.getElementById('heroBackdrop');
      if (heroBg) heroBg.style.backgroundImage = encoded;
    };

    showSlide(list[0]);
    state.slideTimer = setInterval(() => {
      state.wallpaperIdx = (state.wallpaperIdx + 1) % list.length;
      showSlide(list[state.wallpaperIdx]);
    }, 12000);
  }

  function applyShaderWithRetry(shaderKey, attempt = 0) {
    clearWallpaperSlides();
    // Subtle dark gradient backdrop inside hero for shader mode
    const heroBg = document.getElementById('heroBackdrop');
    if (heroBg) heroBg.style.backgroundImage = `url("${encodeURI('images/red/465148a473500d0bf6c3b9c83b98ec92.jpg')}")`;

    if (typeof window.renderWebGLBackground === 'function') {
      try {
        window.__MODAL_OPEN_PAUSE__ = false;
        window.__PAUSE_WEBGL_SHADERS__ = false;
        window.renderWebGLBackground(shaderKey);
      } catch (err) {
        console.warn('WebGL render fallback:', err);
      }
      return;
    }

    if (attempt < 25) {
      setTimeout(() => applyShaderWithRetry(shaderKey, attempt + 1), 100);
    }
  }

  function applyBackground(type, value, save = true) {
    state.bgType = type || 'shader';
    state.bgValue = value || 'strands';
    if (save) {
      localStorage.setItem('vps_bg_type', state.bgType);
      localStorage.setItem('vps_bg_value', state.bgValue);
    }

    const labelEl = document.getElementById('currentShaderName');
    if (labelEl) {
      labelEl.textContent = state.bgValue.charAt(0).toUpperCase() + state.bgValue.slice(1);
    }

    document.querySelectorAll('.shader-card-option').forEach((btn) => {
      const match = btn.dataset.bgType === state.bgType && btn.dataset.bg === state.bgValue;
      btn.classList.toggle('active', match);
    });

    if (state.bgType === 'wallpaper') {
      applyWallpaperGallery(state.bgValue);
    } else {
      applyShaderWithRetry(state.bgValue);
    }
  }

  function randomizeBackground() {
    const pickShader = Math.random() > 0.25;
    if (pickShader) {
      const next = ALL_SHADERS[Math.floor(Math.random() * ALL_SHADERS.length)];
      applyBackground('shader', next, true);
      showToast(`Shader WebGL: ${next}`);
    } else {
      const galleries = Object.keys(WALLPAPER_MANIFEST);
      const nextGal = galleries[Math.floor(Math.random() * galleries.length)];
      applyBackground('wallpaper', nextGal, true);
      showToast(`Galeria Wallpaper: ${nextGal}`);
    }
  }

  // ========================================================================
  // 6. NATIVE BRIDGE & DATA LOADING (CACHE + LIVE DISCORD/VPS/N8N)
  // ========================================================================
  async function loadBundledCaches() {
    try {
      const [discResp, vpsResp] = await Promise.all([
        fetch('./data/discord-security-cache.json'),
        fetch('./data/vps-snapshot-cache.json')
      ]);

      if (discResp.ok) {
        const discJson = await discResp.json();
        const channels = discJson && discJson.channels ? discJson.channels : {};
        Object.keys(channels).forEach((cid) => {
          const entry = channels[cid];
          const rawMsgs = Array.isArray(entry) ? entry : (entry && entry.messages ? entry.messages : []);
          state.discordByChannel[cid] = normalizeChannelArray(rawMsgs);
        });
      }

      if (vpsResp.ok) {
        const vpsJson = await vpsResp.json();
        Object.assign(state.vpsSnapshot, vpsJson || {});
      }
    } catch (e) {
      console.warn('Cache initial load notice:', e);
    }
  }

  // ========================================================================
  // 5.8. EMBEDDED MARKDOWN REPORTS (LIVROS 1, 2 E 3 - DEMO PORTFOLIO)
  // ========================================================================
  const EMBEDDED_REPORTS = {
    'relatorio_completo_livro1_sentinel.md': `# 🖥️ Livro 1 — Sentinel VPS Manager & Infraestrutura SRE

## Visão Geral de Arquitetura
- **Host:** \`vps-sentinel-demo\` (Oracle ARM64 Neoverse N1)
- **Topologia de Rede:** Tailscale Mesh Zero-Trust (\`100.64.0.0/10\`)
- **Latência de Loopback:** < 0.2ms
- **Uptime Contínuo:** 62 dias, 14 horas

### Métricas de Hardware
| Componente | Capacidade | Utilização Atual | Status |
|---|---|---|---|
| vCPUs ARM | 2 Cores Neoverse N1 | 14.2% (Load: 0.12, 0.08, 0.05) | Saudável |
| Memória RAM | 8.0 GB LPDDR4x | 3.4 GB (42.7%) | Excelente |
| Swap Virtual | 4.0 GB NVMe ZRAM | 520 MB (12.7%) | Otimizado |
| Armazenamento | 100 GB NVMe SSD | 38 GB usado / 56 GB livre | Folga Ampla |

### Topologia Docker em Produção
1. **n8n-agents-core**: Motor de IA orquestrador (Porta 5678, Tailscale isolado)
2. **redis-sentinel**: Cache volátil, fila BullMQ e rate-limiting
3. **postgres-audit**: Banco relacional com trilhas de auditoria criptografadas
4. **sentinel-vps-api**: API SRE em Node.js (:5059)
5. **osint-cert-api**: Motor Python 3 / AsyncIO (:5060)
6. **caddy-ingress**: Ingress TLS 1.3 com certificados automatizados
7. **fail2ban-ipset**: Defesa de perímetro sincronizada ao Kernel Linux
8. **discord-security-bridge**: Gateway de mensageria assíncrona`,

    'relatorio_completo_livro2_guardian.md': `# 🛡️ Livro 2 — Guardian Defesa de Perímetro & Kernel Ipset O(1)

## Estratégia de Bloqueio Perpétuo
Para neutralizar varreduras hostis automatizadas sem sobrecarregar a CPU da VPS, a defesa opera inteiramente no nível do Kernel Linux:

### Regras do Filtro IPSET
- **Nome do Set:** \`PERMANENT_BANS\` (tipo \`hash:ip\`)
- **Total de Alvos Bloqueados:** \`5.618 IPs\`
- **Complexidade de Busca:** \`O(1)\` via tabela hash na memória de rede
- **Fail2ban Jails:** \`sshd\`, \`recidive\`, \`caddy-auth\`, \`portscan\` com \`bantime = -1\`

\`\`\`bash
# Regra ativa no iptables do Kernel Linux
iptables -I INPUT -m set --match-set PERMANENT_BANS src -j DROP
\`\`\`

### Supressão Silenciosa de Bombardeio
O bombardeio de logs ruidosos às 23h foi eliminado substituindo mensagens unitárias por consolidados periódicos com arquivos Markdown anexados diretamente no canal \`#🛡️┃segurança-e-backups\`.`,

    'relatorio_completo_livro3_osint_cert.md': `# 🕵️ Livro 3 — Cyber OSINT Forense & Gateway RFC 2142

## Procedimento Formal de Notificação de Incidentes
Todo invasor com pontuação de ameaça acima de 80/100 é submetido a auditoria forense Shodan e registro de auto formal:

### Protocolo de Despacho
1. **Captura do Pacote SYN:** Registro de carimbo de data/hora, porta e flag no log do kernel.
2. **Identificação de ASN e Provedor:** Consulta reversa Whois, RDAP e Shodan API.
3. **Geração do Auto AGX-CERT-2026-*:** Documento padronizado RFC 2142 / X-ARF.
4. **Despacho Automático:** Notificação enviada para CERTs nacionais (CISA, CERT.br, NCSC-UK) e abuse dos ISPs.`
  };

  function getMockEndpointResponse(service, path, method, body) {
    const cleanPath = String(path || '').split('?')[0];

    if (cleanPath === '/api/vps/overview') {
      return state.vpsSnapshot.overview || {
        hostname: 'vps-sentinel-demo',
        ip_tailscale: '100.64.0.42',
        uptime: '62 dias, 14 horas',
        cpu: { percent: 14.2, load_avg_1_5_15m: [0.12, 0.08, 0.05] },
        memory: { total_gb: 8.0, used_gb: 3.4, percent: 42.7 },
        swap: { total_gb: 4.0, used_gb: 0.52 },
        disk: { total_gb: 100, used_gb: 38.2, free_gb: 56.4, percent: 38.2 }
      };
    }
    if (cleanPath === '/api/vps/containers') {
      return state.vpsSnapshot.containers || {
        ok: true,
        containers: [
          { name: 'n8n-agents-core', status: 'Up 14 days (healthy)', running: true },
          { name: 'redis-sentinel', status: 'Up 62 days (healthy)', running: true },
          { name: 'postgres-audit', status: 'Up 62 days (healthy)', running: true },
          { name: 'caddy-ingress', status: 'Up 62 days (healthy)', running: true },
          { name: 'sentinel-vps-api', status: 'Up 21 days (healthy)', running: true },
          { name: 'osint-cert-api', status: 'Up 21 days (healthy)', running: true },
          { name: 'fail2ban-ipset', status: 'Up 62 days (healthy)', running: true },
          { name: 'discord-security-bridge', status: 'Up 18 days (healthy)', running: true }
        ]
      };
    }
    if (cleanPath === '/api/vps/firewall/status') {
      return state.vpsSnapshot.firewall || { permanent_ban_count: 5618, total_banned_fail2ban: 5618 };
    }
    if (cleanPath === '/api/vps/security/threats') {
      return state.vpsSnapshot.threats || { recent_incidents: [] };
    }
    if (cleanPath === '/api/vps/security/whitelist') {
      return state.vpsSnapshot.whitelist || { active_whitelisted_ips: ['100.64.0.0/10'] };
    }
    if (cleanPath === '/api/osint/summary') {
      return state.vpsSnapshot.osint_summary || { total_catalog_ips: 4829, total_countries: 42 };
    }
    if (cleanPath === '/api/osint/catalog') {
      return state.vpsSnapshot.osint_catalog || { items: [] };
    }
    if (cleanPath === '/api/osint/denuncias_log') {
      return state.vpsSnapshot.denuncias_log || { logs: [] };
    }
    if (cleanPath === '/api/osint/book') {
      return { content: EMBEDDED_REPORTS['relatorio_completo_livro3_osint_cert.md'] };
    }
    if (cleanPath === '/api/vps/security/audit-deep') {
      return {
        ok: true,
        score: 100,
        status: 'SECURE_PASS',
        timestamp: new Date().toISOString(),
        checks: [
          { name: 'SSHD Root Password Auth', result: 'DISABLED (Keys Only)', status: 'PASS' },
          { name: 'Kernel IPSET Drop Filter', result: 'ACTIVE (5.618 IPs)', status: 'PASS' },
          { name: 'Fail2ban Recidive Jail', result: 'ACTIVE (Bantime = -1)', status: 'PASS' },
          { name: 'Tailscale ACL Zero-Trust', result: 'ENFORCED (100.64.0.0/10)', status: 'PASS' },
          { name: 'Samsung Knox Hardware Vault', result: 'VERIFIED', status: 'PASS' },
          { name: 'Cold Backup Diário Criptografado', result: 'VALIDADO SHA-256', status: 'PASS' }
        ]
      };
    }
    if (cleanPath === '/api/vps/repos/check') {
      return {
        ok: true,
        repos: [
          { name: 'vps-manager-android', branch: 'main', clean: true, commits_ahead: 0 },
          { name: 'agencyx-core', branch: 'main', clean: true, commits_ahead: 0 },
          { name: 'osint-cert-hunter', branch: 'main', clean: true, commits_ahead: 0 },
          { name: 'sentinel-kernel-shield', branch: 'main', clean: true, commits_ahead: 0 },
          { name: 'books-vault', branch: 'main', clean: true, commits_ahead: 0 },
          { name: 'n8n-workflows', branch: 'main', clean: true, commits_ahead: 0 }
        ]
      };
    }
    if (cleanPath === '/api/vps/books/sync-discord') {
      return {
        ok: true,
        message: 'Livros de segurança 1, 2 e 3 sincronizados com o Discord #🛡️┃segurança-e-backups',
        synced_at: new Date().toISOString()
      };
    }
    if (cleanPath === '/api/osint/sync-discord') {
      return {
        ok: true,
        message: 'Dossiê forense OSINT publicado com sucesso em #🕵️┃cyber-osint-response'
      };
    }
    if (cleanPath === '/api/vps/firewall/block') {
      const target = (body && body.target) || '198.51.100.99';
      return {
        ok: true,
        message: `IP ${target} inserido com sucesso no ipset permanente do Kernel`,
        target,
        permanent_count: 5619
      };
    }
    if (cleanPath === '/api/vps/firewall/unblock') {
      const target = (body && body.target) || '';
      return {
        ok: true,
        message: `IP ${target} removido do ipset`,
        target
      };
    }
    if (cleanPath === '/api/vps/logs/full') {
      if (path && path.includes('report=')) {
        const reportParam = decodeURIComponent(path.split('report=')[1].split('&')[0]);
        return {
          ok: true,
          content: EMBEDDED_REPORTS[reportParam] || EMBEDDED_REPORTS['relatorio_completo_livro1_sentinel.md']
        };
      }
      return {
        ok: true,
        logs: state.fullLogs,
        reports_list: [
          'relatorio_completo_livro1_sentinel.md',
          'relatorio_completo_livro2_guardian.md',
          'relatorio_completo_livro3_osint_cert.md'
        ]
      };
    }
    if (cleanPath === '/api/vps/ips/occurrences') {
      const items = (state.vpsSnapshot.osint_catalog && state.vpsSnapshot.osint_catalog.items) || [];
      return {
        ok: true,
        total_catalog_ips: 4829,
        total_permanent_blocked: 5618,
        items
      };
    }
    return null;
  }

  async function callVpsEndpoint(service, path, method = 'GET', body = null) {
    const bridge = getPlugin('VpsBridge');
    const customBase = service === 'osint' ? state.customOsintUrl : state.customSentinelUrl;

    if (bridge && typeof bridge.vpsRequest === 'function') {
      try {
        const args = { service, path, method };
        if (customBase) args.baseUrl = customBase;
        if (body && method !== 'GET') args.body = body;
        const res = await bridge.vpsRequest(args);
        if (res && res.ok) return res.data || res;
      } catch (err) {
        console.warn('Bridge request error, using mock fallback:', err);
      }
    }

    // Try mock handler in web demo mode
    const mockData = getMockEndpointResponse(service, path, method, body);
    if (mockData) return mockData;

    // Fallback HTTP fetch if running in tailnet-reachable browser
    const fallbackBase = customBase || (service === 'osint' ? 'http://100.64.0.42:5060' : 'http://100.64.0.42:5059');
    try {
      const r = await fetch(fallbackBase.replace(/\/+$/, '') + path, {
        method,
        headers: body ? { 'Content-Type': 'application/json' } : undefined,
        body: body && method !== 'GET' ? JSON.stringify(body) : undefined
      });
      if (r.ok) return await r.json();
    } catch {}

    return getMockEndpointResponse(service, path, method, body) || { ok: true, simulated: true };
  }

  async function fetchChannelMessagesLive(channelId, limit = 25) {
    const bridge = getPlugin('VpsBridge');
    if (bridge && typeof bridge.fetchDiscordMessages === 'function') {
      const res = await bridge.fetchDiscordMessages({ channelId, limit });
      if (res && res.ok && Array.isArray(res.messages)) {
        state.discordByChannel[channelId] = normalizeChannelArray(res.messages);
        return state.discordByChannel[channelId];
      }
      throw new Error((res && res.error) || 'Falha Discord API');
    }
    return state.discordByChannel[channelId] || [];
  }

  async function syncAllLiveSources(manual = false) {
    if (state.isSyncing) return;
    state.isSyncing = true;

    const spinIcon = document.querySelector('#forceSyncHeaderBtn .sync-icon-spin');
    if (spinIcon) spinIcon.classList.add('spinning');

    const statusBadge = document.querySelector('.stats-badge-vision');
    const indicator = document.getElementById('vpsStatusIndicator');

    let liveDiscordCount = 0;
    let liveVpsOk = false;

    try {
      const bridge = getPlugin('VpsBridge');
      if (bridge && typeof bridge.getStatus === 'function') {
        state.isNative = true;
        state.bridgeStatus = await bridge.getStatus();
      }

      // Sync all 4 Discord Security Channels in parallel
      const discordPromises = SECURITY_AGENTS.map((ag) =>
        fetchChannelMessagesLive(ag.discordChannelId, 25)
          .then((msgs) => { if (msgs.length) liveDiscordCount++; })
          .catch(() => {})
      );

      // Sync Sentinel (:5059) & OSINT (:5060) endpoints in parallel
      const vpsMap = [
        ['overview', 'sentinel', '/api/vps/overview'],
        ['containers', 'sentinel', '/api/vps/containers'],
        ['firewall', 'sentinel', '/api/vps/firewall/status'],
        ['threats', 'sentinel', '/api/vps/security/threats'],
        ['whitelist', 'sentinel', '/api/vps/security/whitelist'],
        ['osint_summary', 'osint', '/api/osint/summary'],
        ['osint_catalog', 'osint', '/api/osint/catalog?limit=25'],
        ['denuncias_log', 'osint', '/api/osint/denuncias_log']
      ];

      const vpsPromises = vpsMap.map(([key, svc, path]) =>
        callVpsEndpoint(svc, path, 'GET')
          .then((data) => {
            if (data) {
              state.vpsSnapshot[key] = data;
              liveVpsOk = true;
            }
          })
          .catch(() => {})
      );

      await Promise.all([...discordPromises, ...vpsPromises]);

      if (liveVpsOk || liveDiscordCount > 0 || state.isNative || window.WebMockBridge) {
        if (indicator) indicator.textContent = '● DEMO ATIVA';
        if (statusBadge) statusBadge.classList.remove('offline');
        if (manual) showToast(`Sincronizado: 4/4 canais Discord + Telemetria Mock`);
      } else {
        if (indicator) indicator.textContent = '● CACHE';
        if (statusBadge) statusBadge.classList.add('offline');
        if (manual) showToast('Exibindo snapshot local (Tailscale offline)');
      }

      renderAll();
    } finally {
      state.isSyncing = false;
      if (spinIcon) spinIcon.classList.remove('spinning');
      renderBridgeStatus();
    }
  }

  
  // ========================================================================
  // 6.5. MINIMALIST 4-VIEW NAVIGATION & ADVANCED DATA LOADERS
  // ========================================================================
  function switchView(viewKey) {
    state.activeView = viewKey || 'home';

    const viewElements = {
      home: document.getElementById('viewHome'),
      logs: document.getElementById('viewLogs'),
      ips: document.getElementById('viewIps'),
      agents: document.getElementById('viewAgents')
    };

    Object.entries(viewElements).forEach(([k, el]) => {
      if (!el) return;
      const isActive = k === state.activeView;
      el.classList.toggle('active', isActive);
      el.classList.toggle('hidden-view', !isActive);
      el.style.display = isActive ? 'flex' : 'none';
    });

    document.querySelectorAll('.dock-item[data-view]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.view === state.activeView);
    });

    const scrollEl = document.getElementById('mainContentArea');
    if (scrollEl) scrollEl.scrollTop = 0;

    if (state.activeView === 'logs') {
      loadFullLogs();
    } else if (state.activeView === 'ips') {
      loadIpsAndOccurrences();
    } else if (state.activeView === 'agents') {
      renderSecurityAgents();
    }
  }

  async function pollRealtimeSecurityEvents() {
    try {
      let data = null;
      try {
        data = await callVpsEndpoint('sentinel', `/api/vps/events/realtime?since=${state.lastRealtimeSeq}&limit=50`, 'GET');
      } catch {}

      if (!data || !data.events || !data.events.length) {
        // Generate realistic synthetic event for portfolio demo
        const eventTemplates = [
          { category: 'FIREWALL', title: 'Sonda SYN descartada no kernel', details: 'Pacote bloqueado na porta TCP/8080 pelo firewall do kernel Linux (ipset O(1))', ip: `198.51.100.${Math.floor(Math.random() * 240 + 10)}` },
          { category: 'SSHD', title: 'Handshake automatizado abortado', details: 'Sonda pré-autenticação neutralizada pelo Fail2ban (bantime perpétuo = -1)', ip: `203.0.113.${Math.floor(Math.random() * 240 + 10)}` },
          { category: 'OSINT', title: 'Correlação Shodan atualizada', details: 'Nó atacante catalogado com portas abertas e CVEs conhecidas', ip: `198.51.100.${Math.floor(Math.random() * 240 + 10)}` },
          { category: 'CERT', title: 'Auto formal RFC 2142 emitido', details: 'Dossiê AGX-CERT-2026 despachado para CERT nacional e provedor', ip: `203.0.113.${Math.floor(Math.random() * 240 + 10)}` }
        ];

        const pick = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
        data = {
          latest_seq: (state.lastRealtimeSeq || 100) + 1,
          events: [{
            seq: (state.lastRealtimeSeq || 100) + 1,
            ts: new Date().toISOString(),
            category: pick.category,
            title: pick.title,
            details: pick.details,
            ip: pick.ip,
            severity: 'CRITICAL'
          }]
        };
      }

      if (data.latest_seq != null && data.latest_seq > state.lastRealtimeSeq) {
        state.lastRealtimeSeq = data.latest_seq;
      }

      const events = Array.isArray(data.events) ? data.events : [];
      if (!events.length) return;

      const latest = events[events.length - 1];
      const alertEl = document.getElementById('homeRealtimeAlertText');
      if (alertEl && latest) {
        alertEl.textContent = `[${latest.category || 'DEFESA'}] ${latest.title}: ${latest.details || latest.message || ''}`;
      }

      state.realtimeEvents = [...events.slice().reverse(), ...state.realtimeEvents].slice(0, 100);

      events.forEach((ev) => {
        state.fullLogs.unshift({
          id: `rt_${ev.seq || Date.now()}`,
          timestamp: ev.ts || new Date().toISOString(),
          source: 'REALTIME',
          category: ev.category || 'FIREWALL',
          severity: ev.severity || 'CRITICAL',
          message: `[${ev.category || 'FIREWALL'}] ${ev.title} — ${ev.details || ''}`,
          ip: ev.ip || ''
        });

        // Trigger native Android heads-up notification
        const bridge = getPlugin('VpsBridge');
        if (bridge && typeof bridge.notifySecurityAlert === 'function') {
          bridge.notifySecurityAlert({
            title: `🛡️ ${ev.title || 'Alerta de Segurança VPS'}`,
            body: `${ev.details || ev.message || 'Atividade anômala interceptada pelo Firewall Permanente'}${ev.ip ? ` (IP: ${ev.ip})` : ''}`,
            id: ev.seq || (Date.now() % 100000)
          }).catch(() => {});
        }
      });

      renderFullLogsList();
    } catch (err) {
      console.warn('Realtime poll notice:', err.message);
    }
  }

  async function loadFullLogs(force = false) {
    const listEl = document.getElementById('fullLogsList');
    const badgeEl = document.getElementById('logsTotalCountBadge');
    if (!listEl) return;

    if (!state.fullLogs.length || force) {
      if (badgeEl) badgeEl.textContent = 'Carregando logs da VPS...';
      try {
        const queryParams = new URLSearchParams();
        queryParams.set('limit', '300');
        if (state.logsCategory && state.logsCategory !== 'all') {
          queryParams.set('category', state.logsCategory);
        }
        if (state.logsSearchQuery) {
          queryParams.set('q', state.logsSearchQuery);
        }

        let res = null;
        try {
          res = await callVpsEndpoint('sentinel', `/api/vps/logs/full?${queryParams.toString()}`, 'GET');
        } catch {}

        if (res && Array.isArray(res.logs) && res.logs.length) {
          state.fullLogs = res.logs;
          state.reportsList = Array.isArray(res.reports_list) ? res.reports_list : [];
        } else {
          // Construct 200+ logs from cached threats & denuncias for Web Demo
          const syntheticLogs = [];
          const fw = state.vpsSnapshot.firewall || {};
          const drops = Array.isArray(fw.sample_iptables_drops) ? fw.sample_iptables_drops : (fw.active_iptables_drops || []);
          const incidents = (state.vpsSnapshot.threats && state.vpsSnapshot.threats.recent_incidents) || [];
          const certLogs = (state.vpsSnapshot.denuncias_log && state.vpsSnapshot.denuncias_log.logs) || [];

          incidents.forEach((inc, idx) => {
            syntheticLogs.push({
              id: 'inc_' + idx,
              timestamp: inc.timestamp || new Date(Date.now() - idx * 180000).toISOString(),
              source: 'SENTINEL',
              category: inc.category || 'FIREWALL',
              severity: 'CRITICAL',
              message: `${inc.title} — ${inc.details || ''}`,
              ip: inc.ip || ''
            });
          });

          certLogs.forEach((cl, idx) => {
            syntheticLogs.push({
              id: 'cert_' + idx,
              timestamp: new Date(Date.now() - (idx + 10) * 120000).toISOString(),
              source: 'CERT-XARF',
              category: 'CERT',
              severity: 'WARN',
              message: cl,
              ip: ''
            });
          });

          drops.slice(0, 50).forEach((dropLine, idx) => {
            syntheticLogs.push({
              id: 'drop_' + idx,
              timestamp: new Date(Date.now() - (idx + 40) * 90000).toISOString(),
              source: 'IPTABLES',
              category: 'FIREWALL',
              severity: 'BLOCK',
              message: dropLine,
              ip: ''
            });
          });

          state.fullLogs = syntheticLogs;
          state.reportsList = [
            'relatorio_completo_livro1_sentinel.md',
            'relatorio_completo_livro2_guardian.md',
            'relatorio_completo_livro3_osint_cert.md'
          ];
        }
      } catch (err) {
        if (badgeEl) badgeEl.textContent = `Erro ao carregar logs: ${err.message}`;
      }
    }

    renderFullLogsList();
  }

  function renderFullLogsList() {
    const listEl = document.getElementById('fullLogsList');
    const badgeEl = document.getElementById('logsTotalCountBadge');
    if (!listEl) return;

    let items = state.fullLogs || [];
    const cat = state.logsCategory;
    const q = (state.logsSearchQuery || '').trim().toLowerCase();

    if (cat && cat !== 'all') {
      items = items.filter((it) => {
        const c = String(it.category || '').toUpperCase();
        return c.includes(cat.toUpperCase());
      });
    }

    if (q) {
      items = items.filter((it) => {
        const text = `${it.timestamp} ${it.category} ${it.source} ${it.severity} ${it.ip} ${it.message}`.toLowerCase();
        return text.includes(q);
      });
    }

    if (badgeEl) {
      badgeEl.textContent = `${items.length} logs exibidos (de ${state.fullLogs.length} carregados)`;
    }

    if (!items.length) {
      listEl.innerHTML = `<div class="log-row-item INFO"><span class="log-msg-text">Nenhum log encontrado para os filtros selecionados.</span></div>`;
      return;
    }

    listEl.innerHTML = items.slice(0, 200).map((it) => {
      const sev = String(it.severity || 'INFO').toUpperCase();
      const ipTag = it.ip ? `<span class="badge-mini" style="margin-left:0.3rem;">${escHtml(it.ip)}</span>` : '';
      return `
        <div class="log-row-item ${escHtml(sev)}">
          <span class="log-ts">${escHtml(formatTimestamp(it.timestamp))}</span>
          <span class="log-cat-badge">${escHtml(it.category || it.source || 'LOG')}</span>
          <span class="log-msg-text">${escHtml(it.message)}${ipTag}</span>
        </div>
      `;
    }).join('');
  }

  async function loadIpsAndOccurrences(force = false) {
    const feedEl = document.getElementById('ipsOccurrencesList');
    if (!feedEl) return;

    if (!state.catalogIps.length || force) {
      feedEl.innerHTML = '<div class="glass-subpanel">Consultando catálogo de IPs e ocorrências na VPS...</div>';
      try {
        const queryParams = new URLSearchParams();
        queryParams.set('limit', '150');
        if (state.ipsStatusFilter && state.ipsStatusFilter !== 'all') {
          queryParams.set('status', state.ipsStatusFilter);
        }
        if (state.ipsSearchQuery) {
          queryParams.set('q', state.ipsSearchQuery);
        }

        let res = null;
        try {
          res = await callVpsEndpoint('sentinel', `/api/vps/ips/occurrences?${queryParams.toString()}`, 'GET');
        } catch {}

        if (res && (res.items || res.ips)) {
          state.catalogIps = Array.isArray(res.items) ? res.items : (Array.isArray(res.ips) ? res.ips : []);
        } else if (state.vpsSnapshot.osint_catalog && Array.isArray(state.vpsSnapshot.osint_catalog.items)) {
          state.catalogIps = state.vpsSnapshot.osint_catalog.items;
        }

        const totalIps = (res && (res.total_catalog_ips ?? res.total)) || 4829;
        const permBans = (res && (res.total_permanent_blocked ?? res.permanent_count)) || 5618;

        const totalEl = document.getElementById('valTotalIpsCount');
        const bansEl = document.getElementById('valTotalPermBansCount');
        const avgScoreEl = document.getElementById('valAvgThreatScore');

        if (totalEl) totalEl.textContent = Number(totalIps).toLocaleString('pt-BR');
        if (bansEl) bansEl.textContent = Number(permBans).toLocaleString('pt-BR');

        if (state.catalogIps.length > 0 && avgScoreEl) {
          const sum = state.catalogIps.reduce((acc, cur) => acc + (cur.threat_score || 100), 0);
          avgScoreEl.textContent = (sum / state.catalogIps.length).toFixed(1);
        }
      } catch (err) {
        feedEl.innerHTML = `<div class="glass-subpanel">Erro ao carregar IPs: ${escHtml(err.message)}</div>`;
        return;
      }
    }

    renderIpsAndOccurrencesList();
  }

  function renderIpsAndOccurrencesList() {
    const feedEl = document.getElementById('ipsOccurrencesList');
    if (!feedEl) return;

    let items = state.catalogIps || [];
    const status = state.ipsStatusFilter;
    const q = (state.ipsSearchQuery || '').trim().toLowerCase();

    if (status === 'blocked') {
      items = items.filter((it) => it.permanent === true || (it.firewall_status && it.firewall_status.includes('DROP')));
    } else if (status === 'high') {
      items = items.filter((it) => (it.threat_score || 0) >= 80);
    }

    if (q) {
      items = items.filter((it) => {
        const ports = Array.isArray(it.target_ports) ? it.target_ports.join(' ') : '';
        const occDetails = Array.isArray(it.occurrences)
          ? it.occurrences.map(o => `${o.details} ${o.type}`).join(' ')
          : (Array.isArray(it.sample_events) ? it.sample_events.map(e => `${e.details} ${e.category}`).join(' ') : '');
        const text = `${it.ip} ${it.country} ${it.isp} ${ports} ${occDetails}`.toLowerCase();
        return text.includes(q);
      });
    }

    if (!items.length) {
      feedEl.innerHTML = `<div class="glass-subpanel">Nenhum IP catalogado encontrado com os filtros atuais.</div>`;
      return;
    }

    feedEl.innerHTML = items.map((it) => {
      const safeIp = String(it.ip || '').replace(/[^a-zA-Z0-9_-]/g, '_');
      const isExpanded = !!state.expandedDossiers[it.ip];
      const occurrences = Array.isArray(it.occurrences)
        ? it.occurrences
        : (Array.isArray(it.sample_events)
            ? it.sample_events.map(ev => ({
                timestamp: ev.time,
                port: ev.target_port,
                type: ev.category,
                details: ev.details,
                action: ev.defense
              }))
            : []);
      const occCount = occurrences.length || it.occurrences_count || 1;
      const score = it.threat_score != null ? it.threat_score : 100;
      const isScoreHigh = score >= 80;
      const ports = Array.isArray(it.target_ports) && it.target_ports.length ? it.target_ports.join(', ') : '22';

      const timelineHtml = occurrences.map((occ) => `
        <div class="timeline-event-item">
          <div class="timeline-event-head">
            <span><strong>${escHtml(occ.timestamp || '--')}</strong></span>
            <span>Porta: ${escHtml(occ.port || '22')} (${escHtml(occ.type || 'ATAQUE')})</span>
          </div>
          <div class="timeline-event-body">${escHtml(occ.details || 'Tentativa de intrusão detectada.')}</div>
          <div class="timeline-event-action">Ação: ${escHtml(occ.action || 'KERNEL PERMANENT DROP')}</div>
        </div>
      `).join('');

      return `
        <article class="ip-card-item">
          <div class="ip-card-head">
            <div>
              <div class="ip-address-title">
                ${escHtml(it.ip)}
                ${it.country ? `<span style="font-size:0.82rem; font-weight:normal; color:var(--text-muted);">[${escHtml(it.country)}]</span>` : ''}
              </div>
              <div class="ip-geo-sub">${escHtml(it.isp || 'Provedor / ASN')} • Portas-alvo: ${escHtml(ports)}</div>
            </div>

            <div class="ip-badges-row">
              <span class="badge-perm-ipset">🔒 IPSET PERMANENTE</span>
              <span class="badge-threat-score ${isScoreHigh ? 'high' : ''}">Score: ${score}/100</span>
              <span class="badge-mini">${occCount} ocorrência${occCount > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.5rem; flex-wrap:wrap;">
            <button type="button" class="btn-mini-glass toggle-dossier-btn" data-ip="${escHtml(it.ip)}">
              ${isExpanded ? '▲ Recolher Dossiê' : `▼ Ver O que este IP fez (${occCount})`}
            </button>

            <button type="button" class="btn-mini-glass unban-ip-btn" data-ip="${escHtml(it.ip)}" style="color:#f43f5e;">
              Desbloquear IP
            </button>
          </div>

          <div class="ip-dossier-timeline" id="dossier_${safeIp}" style="display: ${isExpanded ? 'flex' : 'none'};">
            <div class="dossier-timeline-title">
              <span>Linha do Tempo de Ocorrências</span>
              <span style="font-size:0.7rem; color:var(--text-muted); font-weight:normal;">Kernel IPSET • Permanente</span>
            </div>
            ${timelineHtml || '<div style="font-size:0.75rem; color:var(--text-muted);">Histórico inicial catalogado.</div>'}
          </div>
        </article>
      `;
    }).join('');

    feedEl.querySelectorAll('.toggle-dossier-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const ip = btn.dataset.ip;
        state.expandedDossiers[ip] = !state.expandedDossiers[ip];
        renderIpsAndOccurrencesList();
      });
    });

    feedEl.querySelectorAll('.unban-ip-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const ip = btn.dataset.ip;
        if (!confirm(`Deseja remover o IP ${ip} do bloqueio permanente no kernel ipset?`)) return;
        try {
          await callVpsEndpoint('sentinel', '/api/vps/firewall/unblock', 'POST', { target: ip });
          showToast(`IP ${ip} removido do ipset`);
          loadIpsAndOccurrences(true);
        } catch (err) {
          showToast(`Erro ao desbloquear: ${err.message}`);
        }
      });
    });
  }

  async function loadMarkdownReport(reportName) {
    const readerEl = document.getElementById('reportReaderContent');
    if (!readerEl) return;
    state.activeReportName = reportName;

    document.querySelectorAll('#reportsListBar .report-chip-item').forEach((chip) => {
      chip.classList.toggle('active', chip.dataset.report === reportName);
    });

    if (EMBEDDED_REPORTS && EMBEDDED_REPORTS[reportName]) {
      readerEl.innerHTML = renderMarkdownToHtml(EMBEDDED_REPORTS[reportName]);
      return;
    }

    readerEl.innerHTML = '<p>Carregando dossiê markdown da VPS...</p>';
    try {
      const res = await callVpsEndpoint('sentinel', `/api/vps/logs/full?report=${encodeURIComponent(reportName)}`, 'GET');
      if (res && res.content) {
        readerEl.innerHTML = renderMarkdownToHtml(res.content);
      } else {
        readerEl.innerHTML = `<p>Relatório "${escHtml(reportName)}" não encontrado ou vazio.</p>`;
      }
    } catch (err) {
      readerEl.innerHTML = `<p>Erro ao ler relatório: ${escHtml(err.message)}</p>`;
    }
  }

  function openReportsModal() {
    const bar = document.getElementById('reportsListBar');
    const overlay = document.getElementById('reportsModalOverlay');
    if (!overlay) return;

    window.__MODAL_OPEN_PAUSE__ = true;
    overlay.style.display = 'flex';
    overlay.classList.add('active');

    if (bar && state.reportsList.length) {
      bar.innerHTML = state.reportsList.map((r, idx) => `
        <button type="button" class="report-chip-item ${idx === 0 ? 'active' : ''}" data-report="${escHtml(r)}">
          📄 ${escHtml(r.replace('relatorio_completo_', '').replace('.md', ''))}
        </button>
      `).join('');

      bar.querySelectorAll('.report-chip-item').forEach((btn) => {
        btn.addEventListener('click', () => loadMarkdownReport(btn.dataset.report));
      });

      loadMarkdownReport(state.reportsList[0]);
    } else if (bar) {
      bar.innerHTML = '<span style="font-size:0.75rem; color:var(--text-muted);">Nenhum relatório arquivado ainda. Toque em "Gerar & Enviar Relatório Completo".</span>';
    }
  }

  // ========================================================================
  // 7. RENDERING ENGINE
  // ========================================================================
  function renderTelemetryAndHero() {
    const ov = state.vpsSnapshot.overview || {};
    const fw = state.vpsSnapshot.firewall || {};
    const osSum = state.vpsSnapshot.osint_summary || {};

    const hostname = ov.hostname || 'vps-sentinel-demo';
    const ip = ov.ip_tailscale || '100.64.0.42';
    const uptime = ov.uptime || '62 dias';

    const heroBadge = document.getElementById('heroDomainBadge');
    if (heroBadge) heroBadge.textContent = `${hostname} • ${ip} • UPTIME ${uptime.toUpperCase()}`;

    const uptimeHdr = document.getElementById('uptimeCounter');
    if (uptimeHdr) uptimeHdr.textContent = ` • ${uptime.split(',')[0]}`;

    const termHost = document.getElementById('terminalHostLabel');
    if (termHost) termHost.textContent = `● root@${hostname} [SECURITY & DISCORD STREAM]`;

    // CPU
    const cpu = ov.cpu || {};
    const cpuPct = cpu.percent != null ? Number(cpu.percent).toFixed(1) : '--';
    const loadArr = Array.isArray(cpu.load_avg_1_5_15m) ? cpu.load_avg_1_5_15m.join(', ') : '--';
    const valCpu = document.getElementById('valCpu');
    const subCpu = document.getElementById('subCpu');
    const barCpu = document.getElementById('barCpu');
    if (valCpu) valCpu.textContent = `${cpuPct}%`;
    if (subCpu) subCpu.textContent = `Load: ${loadArr}`;
    if (barCpu) barCpu.style.width = `${Math.max(4, Math.min(100, Number(cpu.percent || 5)))}%`;

    // RAM
    const mem = ov.memory || {};
    const swap = ov.swap || {};
    const valRam = document.getElementById('valRam');
    const subRam = document.getElementById('subRam');
    const barRam = document.getElementById('barRam');
    if (valRam) valRam.textContent = `${mem.used_gb ?? '--'} / ${mem.total_gb ?? '--'} GB`;
    if (subRam) subRam.textContent = `RAM ${mem.percent ?? '--'}% • Swap ${swap.used_gb ?? '--'}/${swap.total_gb ?? '--'} GB`;
    if (barRam) barRam.style.width = `${Math.min(100, Number(mem.percent || 45))}%`;

    // DISK
    const disk = ov.disk || {};
    const valDisk = document.getElementById('valDisk');
    const subDisk = document.getElementById('subDisk');
    const barDisk = document.getElementById('barDisk');
    if (valDisk) valDisk.textContent = `${disk.used_gb ?? '--'} / ${disk.total_gb ?? '--'} GB`;
    if (subDisk) subDisk.textContent = `Livre: ${disk.free_gb ?? '--'} GB (${disk.percent ?? '--'}%)`;
    if (barDisk) barDisk.style.width = `${Math.min(100, Number(disk.percent || 39))}%`;

    // DROPS & OSINT
    const dropsArr = Array.isArray(fw.active_iptables_drops)
      ? fw.active_iptables_drops
      : (Array.isArray(fw.sample_iptables_drops) ? fw.sample_iptables_drops : []);
    const drops = fw.total_iptables_drops ?? (dropsArr.length > 0 ? dropsArr.filter((l) => String(l).includes('DROP') && !String(l).startsWith('Chain ')).length : '--');
    const f2b = fw.total_banned_fail2ban ?? '--';
    const osintTotal = osSum.total_catalog_ips ?? '--';
    const valThreats = document.getElementById('valThreats');
    const subThreats = document.getElementById('subThreats');
    const fwBanEl = document.getElementById('homeFwBanCount');
    const permBansCount = fw.permanent_ban_count ?? 5618;
    if (fwBanEl) fwBanEl.textContent = `${Number(permBansCount).toLocaleString('pt-BR')} IPs`;
    if (valThreats) valThreats.textContent = `${Number(permBansCount).toLocaleString('pt-BR')} Bans`;
    if (subThreats) subThreats.textContent = `Fail2ban: ${f2b} • OSINT: ${osintTotal}`;
  }

  function renderSecurityAgents() {
    const grid = document.getElementById('securityAgentsGrid');
    const counter = document.getElementById('securityHubCounter');
    if (!grid) return;

    const q = state.searchQuery.trim().toLowerCase();
    const fw = state.vpsSnapshot.firewall || {};
    const fwDropsArr = Array.isArray(fw.active_iptables_drops)
      ? fw.active_iptables_drops
      : (Array.isArray(fw.sample_iptables_drops) ? fw.sample_iptables_drops : []);
    const fwDropsCount = fw.total_iptables_drops ?? (fwDropsArr.length > 0 ? fwDropsArr.filter((l) => String(l).includes('DROP') && !String(l).startsWith('Chain ')).length : '--');
    const osSum = state.vpsSnapshot.osint_summary || {};
    const ov = state.vpsSnapshot.overview || {};
    const containersArr = (state.vpsSnapshot.containers && state.vpsSnapshot.containers.containers) || ov.containers || [];
    const runningContainers = containersArr.filter((c) => c.running).length;

    let visibleCount = 0;
    const html = SECURITY_AGENTS.map((ag) => {
      const msgs = state.discordByChannel[ag.discordChannelId] || [];
      const latestMsgs = msgs.slice(0, 3);

      // Search filtering inside agent + its Discord messages
      if (q) {
        const hay = [
          ag.title, ag.role, ag.n8nAgentId, ag.discordChannelName, ag.discordChannelId, ag.description,
          ...msgs.slice(0, 12).map((m) => `${m.author} ${m.previewTitle} ${m.previewSnippet} ${m.content}`)
        ].join(' ').toLowerCase();
        if (!hay.includes(q)) return '';
      }
      visibleCount++;

      // Agent-specific dynamic metric line
      let metricChip = `${msgs.length} msgs no canal`;
      if (ag.id === 'sentinel') metricChip = `${runningContainers}/${containersArr.length} Docker UP • ${msgs.length} msgs`;
      if (ag.id === 'guardian') metricChip = `${fwDropsCount} DROPs • ${fw.total_banned_fail2ban ?? '--'} F2B`;
      if (ag.id === 'osint') metricChip = `${osSum.total_catalog_ips ?? '--'} IPs • ${osSum.shodan_attackers_with_cves ?? '--'} CVEs`;
      if (ag.id === 'cert') metricChip = `${(state.vpsSnapshot.denuncias_log && state.vpsSnapshot.denuncias_log.total) ?? msgs.length} Autos CERT`;

      const previewHtml = latestMsgs.length
        ? latestMsgs.map((m) => `
            <div class="discord-msg-mini" style="border-left-color: ${escHtml(ag.accent)};">
              <div class="discord-msg-mini-top">
                <span><strong>${escHtml(m.author)}</strong></span>
                <span>${escHtml(formatTimestamp(m.timestamp))}</span>
              </div>
              <div class="discord-msg-mini-title">${escHtml(m.previewTitle)}</div>
              ${m.previewSnippet ? `<div class="discord-msg-mini-snippet">${escHtml(m.previewSnippet)}</div>` : ''}
            </div>
          `).join('')
        : `<div class="discord-msg-mini-snippet">Aguardando mensagens do canal ${escHtml(ag.discordChannelName)}...</div>`;

      return `
        <article class="agent-glass-card" data-agent-id="${escHtml(ag.id)}">
          <div class="agent-card-top">
            <div class="agent-identity">
              <div class="agent-icon-wrap" style="border-color: ${escHtml(ag.accent)}55; background: ${escHtml(ag.accent)}20;">
                ${escHtml(ag.icon)}
              </div>
              <div style="min-width: 0; flex: 1 1 0; overflow: hidden;">
                <h3 class="agent-title">${escHtml(ag.title)}</h3>
                <div class="agent-role-sub">${escHtml(ag.role)}</div>
              </div>
            </div>
            <span class="meta-chip live">● ATIVO</span>
          </div>

          <div class="agent-n8n-meta">
            <span class="meta-chip n8n" title="${escHtml(ag.n8nAgentId)}">🤖 n8n: ${escHtml(ag.n8nAgentId)}</span>
            <span class="meta-chip discord" title="${escHtml(ag.discordChannelName)}">💬 ${escHtml(ag.discordChannelName)}</span>
            <span class="meta-chip">📊 ${escHtml(metricChip)}</span>
          </div>

          <p class="agent-desc">${escHtml(ag.description)}</p>

          <div class="agent-discord-preview" data-open-agent="${escHtml(ag.id)}" data-open-tab="discord">
            <div class="discord-preview-head">
              <span>ÚLTIMAS MENSAGENS • DISCORD</span>
              <span>${msgs.length} regs ↗</span>
            </div>
            ${previewHtml}
          </div>

          <div class="agent-card-actions">
            <button type="button" class="btn-agent-action primary" data-open-agent="${escHtml(ag.id)}" data-open-tab="discord">
              <span>💬 Discord (${msgs.length})</span>
            </button>
            <button type="button" class="btn-agent-action" data-open-agent="${escHtml(ag.id)}" data-open-tab="n8nchat">
              <span>🤖 Chat n8n</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    grid.innerHTML = html || `<div class="glass-subpanel">Nenhum agente ou mensagem corresponde à busca "${escHtml(state.searchQuery)}".</div>`;
    if (counter) counter.textContent = `${visibleCount}/4 AGENTES • DISCORD + N8N`;
  }

  function renderContainers() {
    const grid = document.getElementById('containersGrid');
    const counter = document.getElementById('dockerCounter');
    if (!grid) return;

    const q = state.searchQuery.trim().toLowerCase();
    const list = (state.vpsSnapshot.containers && state.vpsSnapshot.containers.containers)
      || (state.vpsSnapshot.overview && state.vpsSnapshot.overview.containers)
      || [];

    const filtered = list.filter((c) => {
      if (!q) return true;
      return `${c.name} ${c.image} ${c.status} ${c.ports}`.toLowerCase().includes(q);
    });

    const activeCount = filtered.filter((c) => c.running).length;
    if (counter) counter.textContent = `${activeCount}/${filtered.length} ativos`;

    grid.innerHTML = filtered.map((c) => `
      <div class="container-card ${c.running ? '' : 'exited'}">
        <div class="container-head">
          <span class="container-name">${escHtml(c.name)}</span>
          <span class="container-status-pill ${c.running ? '' : 'down'}">${c.running ? 'RUNNING' : 'EXITED'}</span>
        </div>
        <div class="container-meta">${escHtml(c.status || '--')} • ID ${escHtml((c.id || '').slice(0, 12))}</div>
        <div class="container-meta">IMG: ${escHtml(c.image || '--')}</div>
        ${c.ports ? `<div class="container-meta">PORTAS: ${escHtml(c.ports)}</div>` : ''}
      </div>
    `).join('') || `<div class="glass-subpanel">Nenhum container encontrado.</div>`;
  }

  function renderNetworkAndOsint() {
    const q = state.searchQuery.trim().toLowerCase();

    // Whitelist Tailscale nodes
    const wlBox = document.getElementById('whitelistNodesList');
    const wlObj = (state.vpsSnapshot.whitelist && state.vpsSnapshot.whitelist.tailscale_nodes) || {};
    const nodes = Object.values(wlObj);
    if (wlBox) {
      wlBox.innerHTML = nodes.map((n) => {
        const ipv4 = Array.isArray(n.tailscale_ips) ? n.tailscale_ips[0] : '--';
        return `
          <div class="node-chip-row">
            <div>
              <strong>${escHtml(n.hostname)}</strong>
              <span style="color: var(--text-muted); font-size: 0.7rem;"> (${escHtml(n.os || 'node')})</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <span class="node-chip-ip">${escHtml(ipv4)}</span>
              <span class="badge-mini" style="background:${n.online ? 'rgba(16,185,129,0.2)' : 'rgba(148,163,184,0.16)'}; color:${n.online ? '#6ee7b7' : '#cbd5e1'}">
                ${n.online ? 'ON' : 'IDLE'}
              </span>
            </div>
          </div>
        `;
      }).join('') || `<div class="node-chip-row">Sem nós Tailscale carregados.</div>`;
    }

    // OSINT Summary & Top Attackers
    const osSum = state.vpsSnapshot.osint_summary || {};
    const osCat = (state.vpsSnapshot.osint_catalog && state.vpsSnapshot.osint_catalog.items) || [];
    const osCounter = document.getElementById('osintCounter');
    const osUpdated = document.getElementById('osintUpdatedBadge');
    const osKpiRow = document.getElementById('osintStatsSummary');
    const osList = document.getElementById('osintTopAttackersList');

    if (osCounter) osCounter.textContent = `${osSum.total_catalog_ips ?? osCat.length} IPs • ${osSum.total_countries ?? '--'} países`;
    if (osUpdated) osUpdated.textContent = osSum.updated_at || '--';

    if (osKpiRow) {
      osKpiRow.innerHTML = `
        <div class="osint-kpi"><strong>${escHtml(osSum.total_catalog_ips ?? '--')}</strong><span>IPs Hostis</span></div>
        <div class="osint-kpi"><strong>${escHtml(osSum.shodan_attackers_with_cves ?? '--')}</strong><span>Com CVEs</span></div>
        <div class="osint-kpi"><strong>${escHtml(osSum.total_national_certs_mapped ?? '--')}</strong><span>CERTs</span></div>
      `;
    }

    if (osList) {
      const items = osCat.filter((it) => {
        if (!q) return true;
        return `${it.ip} ${it.country} ${it.isp} ${it.profile} ${it.report_id}`.toLowerCase().includes(q);
      }).slice(0, 12);

      osList.innerHTML = items.map((it) => `
        <div class="osint-attacker-row">
          <div class="osint-attacker-top">
            <strong>${escHtml(it.ip)} • Score ${escHtml(it.threat_score ?? 100)}</strong>
            <span class="badge-mini">${escHtml(it.report_id || it.risk_level || 'HIGH')}</span>
          </div>
          <div style="color: var(--text-secondary);">
            ${escHtml(it.country || '')} • ${escHtml(it.isp || 'ISP')} • Portas: ${escHtml((it.target_ports || []).join(', '))}
          </div>
        </div>
      `).join('') || `<div class="osint-attacker-row">Nenhum IP encontrado.</div>`;
    }

    // Firewall Rules (iptables DROPs + fail2ban)
    const fw = state.vpsSnapshot.firewall || {};
    const rulesEl = document.getElementById('firewallRulesList');
    const iptBadge = document.getElementById('iptablesTotalBadge');
    const dropsArr = Array.isArray(fw.active_iptables_drops)
      ? fw.active_iptables_drops
      : (Array.isArray(fw.sample_iptables_drops) ? fw.sample_iptables_drops : []);
    const dropsCount = fw.total_iptables_drops ?? (dropsArr.length > 0 ? dropsArr.filter((l) => String(l).includes('DROP') && !String(l).startsWith('Chain ')).length : 0);
    const f2bSample = Array.isArray(fw.fail2ban_banned_ips)
      ? fw.fail2ban_banned_ips
      : (Array.isArray(fw.fail2ban_banned_ips_sample) ? fw.fail2ban_banned_ips_sample : []);

    if (iptBadge) iptBadge.textContent = `${dropsCount} iptables • ${fw.total_banned_fail2ban ?? 0} f2b`;

    if (rulesEl) {
      const lines = [
        ...dropsArr.filter((l) => !q || String(l).toLowerCase().includes(q)).slice(0, 20),
        ...(f2bSample.length ? [`[FAIL2BAN BANNED SAMPLE]: ${f2bSample.slice(0, 20).join(', ')}`] : [])
      ];
      rulesEl.innerHTML = lines.map((line) => `<div class="mono-rule-line">${escHtml(line)}</div>`).join('')
        || `<div class="mono-rule-line">Sem regras para exibir.</div>`;
    }
  }

  function renderUnifiedTerminalStream() {
    const el = document.getElementById('terminalLogs');
    if (!el) return;

    const lines = [];
    // Mix recent Discord channel broadcasts + recent threats + denuncias logs
    SECURITY_AGENTS.forEach((ag) => {
      const msgs = state.discordByChannel[ag.discordChannelId] || [];
      msgs.slice(0, 2).forEach((m) => {
        lines.push({
          ts: m.timestamp ? new Date(m.timestamp).getTime() : 0,
          label: ag.discordChannelName,
          timeStr: formatTimestamp(m.timestamp),
          text: `${m.author}: ${m.previewTitle}`
        });
      });
    });

    const incidents = (state.vpsSnapshot.threats && state.vpsSnapshot.threats.recent_incidents) || [];
    incidents.slice(0, 4).forEach((inc) => {
      lines.push({
        ts: 0,
        label: inc.category || 'THREAT',
        timeStr: inc.timestamp || '--',
        text: `${inc.ip || ''} — ${inc.title || ''}`
      });
    });

    const certLogs = (state.vpsSnapshot.denuncias_log && state.vpsSnapshot.denuncias_log.logs) || [];
    certLogs.slice(0, 4).forEach((logLine) => {
      lines.push({
        ts: 0,
        label: 'CERT-XARF',
        timeStr: 'LOG',
        text: logLine
      });
    });

    lines.sort((a, b) => (b.ts || 0) - (a.ts || 0));

    el.innerHTML = lines.slice(0, 18).map((l) => `
      <div class="terminal-log-line">
        <span class="t-ts">[${escHtml(l.timeStr)}]</span>
        <span class="t-tag">[${escHtml(l.label)}]</span>
        ${escHtml(l.text)}
      </div>
    `).join('') || `<div class="terminal-log-line">Aguardando eventos da VPS e Discord...</div>`;
  }

  function applyVisibilityFilter() {
    const f = state.activeFilter;
    document.querySelectorAll('.nav-pill').forEach((p) => {
      p.classList.toggle('active', p.dataset.filter === f);
    });
    document.querySelectorAll('.dock-item[data-view]').forEach((d) => {
      d.classList.toggle('active', d.dataset.view === f);
    });

    document.querySelectorAll('#mainContentArea > .section-block').forEach((sec) => {
      const target = sec.dataset.section || 'all';
      const show = f === 'all' || target === f;
      sec.classList.toggle('hidden-section', !show);
    });
  }

  function renderAll() {
    renderTelemetryAndHero();
    renderSecurityAgents();
    renderContainers();
    renderNetworkAndOsint();
    renderUnifiedTerminalStream();
    applyVisibilityFilter();
  }

  function renderBridgeStatus() {
    const box = document.getElementById('bridgeStatusBox');
    if (!box) return;
    const bs = state.bridgeStatus;
    if (!bs) {
      box.innerHTML = `Modo: Web / Snapshot Local (${state.isNative ? 'Android' : 'Browser'})`;
      return;
    }
    box.innerHTML = `
      <div><strong>Ponte Nativa Android VpsBridge:</strong> ATIVA</div>
      <div>• Discord Bot Token: ${bs.hasDiscordToken ? '✅ Configurado no Keystore BuildConfig' : '❌ Ausente'}</div>
      <div>• n8n MCP Token: ${bs.hasN8nToken ? '✅ Configurado no Keystore BuildConfig' : '❌ Ausente'}</div>
      <div>• Endpoints Padrão: ${escHtml(bs.vpsSentinelUrl)} | ${escHtml(bs.vpsOsintUrl)}</div>
    `;
  }

  // ========================================================================
  // 8. MODAL 1: AGENT INSPECTOR (DISCORD MESSAGES + n8n CHAT + DOSSIÊ)
  // ========================================================================
  function renderDiscordModalFeed(agent) {
    const container = document.getElementById('modalDiscordMessages');
    if (!container || !agent) return;

    const msgs = state.discordByChannel[agent.discordChannelId] || [];
    if (!msgs.length) {
      container.innerHTML = `<div class="discord-msg-card">Nenhuma mensagem encontrada no canal ${escHtml(agent.discordChannelName)}. Toque em "Atualizar Canal".</div>`;
      return;
    }

    container.innerHTML = msgs.map((m) => {
      const embedsHtml = (m.embeds || []).map((em) => {
        const borderCol = discordIntToHex(em.color);
        const fieldsHtml = Array.isArray(em.fields) && em.fields.length
          ? `<div class="discord-embed-fields">
              ${em.fields.map((f) => `
                <div class="discord-embed-field">
                  <div class="discord-embed-field-name">${escHtml(f.name)}</div>
                  <div class="discord-embed-field-val">${escHtml(f.value)}</div>
                </div>
              `).join('')}
            </div>`
          : '';
        return `
          <div class="discord-embed-box" style="border-left-color: ${escHtml(borderCol)};">
            ${em.title ? `<div class="discord-embed-title">${escHtml(em.title)}</div>` : ''}
            ${em.description ? `<div class="discord-embed-desc">${escHtml(em.description)}</div>` : ''}
            ${fieldsHtml}
            ${em.footer && em.footer.text ? `<div class="discord-embed-footer">${escHtml(em.footer.text)}</div>` : ''}
          </div>
        `;
      }).join('');

      return `
        <div class="discord-msg-card">
          <div class="discord-msg-header">
            <span class="discord-author-name">${escHtml(m.author)} ${m.is_bot ? '<span class="badge-mini">BOT</span>' : ''}</span>
            <span class="discord-msg-time">${escHtml(formatTimestamp(m.timestamp))}</span>
          </div>
          ${m.content ? `<div class="discord-msg-content">${escHtml(m.content)}</div>` : ''}
          ${embedsHtml}
        </div>
      `;
    }).join('');
  }

  function renderN8nModalChat(agent) {
    const historyEl = document.getElementById('modalN8nChatHistory');
    if (!historyEl || !agent) return;
    const msgs = state.n8nChatHistory[agent.id] || [
      {
        role: 'agent',
        ts: 'Pronto',
        text: `Agente n8n ${agent.n8nAgentId} (${agent.title}) conectado via /mcp-server/http. Envie uma pergunta ou ordem operacional abaixo.`
      }
    ];

    historyEl.innerHTML = msgs.map((m) => `
      <div class="discord-msg-card" style="border-color: ${m.role === 'user' ? 'rgba(56,189,248,0.4)' : 'rgba(129,140,248,0.4)'};">
        <div class="discord-msg-header">
          <span class="discord-author-name">${m.role === 'user' ? '👤 Admin Mateus' : `🤖 ${escHtml(agent.title)}`}</span>
          <span class="discord-msg-time">${escHtml(m.ts)}</span>
        </div>
        <div class="discord-msg-content">${escHtml(m.text)}</div>
      </div>
    `).join('');
    historyEl.scrollTop = historyEl.scrollHeight;
  }

  function renderAgentDossier(agent) {
    const body = document.getElementById('modalAgentBody');
    if (!body || !agent) return;

    const actionsHtml = agent.actions.map((act, idx) => `
      <button type="button" class="btn-mini-glass dossier-exec-btn" data-action-idx="${idx}">
        ▶ ${escHtml(act.label)}
      </button>
    `).join('');

    body.innerHTML = `
      <div class="dossier-block">
        <h4>Identidade & Vínculo n8n ↔ Discord</h4>
        <div><strong>n8n Agent ID:</strong> <code>${escHtml(agent.n8nAgentId)}</code></div>
        <div><strong>Modelo / Motor:</strong> ${escHtml(agent.n8nModel)}</div>
        <div><strong>Canal Discord:</strong> ${escHtml(agent.discordChannelName)} (<code>${escHtml(agent.discordChannelId)}</code>)</div>
        <div><strong>Webhook ID:</strong> <code>${escHtml(agent.webhookId)}</code></div>
        <p style="margin-top:0.5rem; color: var(--text-secondary);">${escHtml(agent.description)}</p>
      </div>

      <div class="dossier-block">
        <h4>Ações Diretas na VPS (${agent.apiService === 'osint' ? ':5060' : ':5059'})</h4>
        <div class="dossier-actions-row">${actionsHtml}</div>
        <pre id="dossierActionOutput" class="vps-terminal-logs" style="margin-top:0.65rem; background:rgba(4,7,14,0.8); border-radius:10px;">Selecione uma ação acima para consultar a API ao vivo.</pre>
      </div>
    `;

    body.querySelectorAll('.dossier-exec-btn').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const act = agent.actions[Number(btn.dataset.actionIdx)];
        const outEl = document.getElementById('dossierActionOutput');
        if (!act || !outEl) return;
        outEl.textContent = `Executando ${act.method} ${act.path}...`;
        try {
          const res = await callVpsEndpoint(act.service, act.path, act.method, act.body || null);
          outEl.textContent = JSON.stringify(res, null, 2).slice(0, 6000);
          showToast(`${act.label}: OK`);
        } catch (err) {
          outEl.textContent = `Erro: ${err.message}`;
        }
      });
    });
  }

  function switchAgentModalTab(tabKey) {
    document.querySelectorAll('#agentDetailModalOverlay .modal-tab-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.agentTab === tabKey);
    });
    const map = {
      discord: 'paneAgentDiscord',
      n8nchat: 'paneAgentN8nChat',
      dossier: 'paneAgentDossier'
    };
    Object.entries(map).forEach(([k, paneId]) => {
      const el = document.getElementById(paneId);
      if (el) el.classList.toggle('active', k === tabKey);
    });
  }

  function openAgentModal(agentId, initialTab = 'discord') {
    const agent = SECURITY_AGENTS.find((a) => a.id === agentId) || SECURITY_AGENTS[0];
    state.currentModalAgentId = agent.id;

    document.getElementById('modalAgentIcon').textContent = agent.icon;
    document.getElementById('modalAgentTitle').textContent = agent.title;
    document.getElementById('modalAgentSubtitle').textContent = `${agent.discordChannelName} • n8n ${agent.n8nAgentId}`;
    document.getElementById('modalDiscordChannelTag').textContent = `${agent.discordChannelName} (${agent.discordChannelId})`;
    document.getElementById('modalN8nAgentTag').textContent = `n8n: ${agent.n8nAgentId}`;

    renderDiscordModalFeed(agent);
    renderN8nModalChat(agent);
    renderAgentDossier(agent);
    switchAgentModalTab(initialTab);

    window.__MODAL_OPEN_PAUSE__ = true;
    const overlay = document.getElementById('agentDetailModalOverlay');
    if (overlay) {
      overlay.style.display = 'flex';
      overlay.classList.add('active');
    }
  }

  function closeAllModals() {
    ['agentDetailModalOverlay', 'terminalModalOverlay', 'settingsModalOverlay', 'reportsModalOverlay', 'demoPortfolioModalOverlay'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('active');
        el.style.display = 'none';
      }
    });
    window.__MODAL_OPEN_PAUSE__ = false;
  }

  // ========================================================================
  // 9. SAMSUNG KNOX BIOMETRIC LOCKSCREEN
  // ========================================================================
  function hideLockscreen() {
    const ls = document.getElementById('loginLockscreen');
    if (!ls) return;
    ls.style.opacity = '0';
    ls.style.pointerEvents = 'none';
    setTimeout(() => { ls.style.display = 'none'; }, 260);
  }

  function showLockscreen() {
    const ls = document.getElementById('loginLockscreen');
    if (!ls) return;
    ls.style.display = 'flex';
    requestAnimationFrame(() => {
      ls.style.opacity = '1';
      ls.style.pointerEvents = 'auto';
    });
  }

  async function triggerBiometricUnlock() {
    const errEl = document.getElementById('loginErrorMsg');
    if (errEl) errEl.style.display = 'none';

    const bio = getPlugin('SamsungBiometric');
    if (!bio) {
      hideLockscreen();
      showToast('Painel desbloqueado');
      return;
    }

    try {
      const avail = await bio.isAvailable();
      if (!avail || !avail.available || !avail.hasEnrolled) {
        hideLockscreen();
        showToast('Biometria não cadastrada no aparelho — acesso liberado');
        return;
      }

      const auth = await bio.authenticate({
        title: 'VPS Manager Zero-Trust',
        subtitle: 'Autenticação Biométrica Samsung Knox',
        description: 'Confirme sua digital para acessar os agentes Sentinel e OSINT.',
        negativeButtonText: 'Cancelar'
      });

      if (auth && auth.success) {
        hideLockscreen();
        showToast('Knox Autenticado');
      } else if (errEl) {
        errEl.textContent = (auth && auth.error) || 'Autenticação cancelada.';
        errEl.style.display = 'block';
      }
    } catch (e) {
      hideLockscreen();
    }
  }

  // ========================================================================
  // 10. EVENT BINDINGS & INITIALIZATION
  // ========================================================================
  function bindEvents() {
    // Dock Minimalist View Navigation
    document.querySelectorAll('.dock-item[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchView(btn.dataset.view);
      });
    });

    // Firewall Card Actions (Home View)
    document.getElementById('btnSendFullReport')?.addEventListener('click', async () => {
      showToast('Gerando relatório consolidado e despachando ao Discord...');
      try {
        const res = await callVpsEndpoint('sentinel', '/api/vps/reports/send', 'POST', {});
        showToast('Relatório completo gerado e enviado silenciosamente!');
        if (res && res.report_file) {
          const parts = res.report_file.split('/');
          const fname = parts[parts.length - 1];
          if (!state.reportsList.includes(fname)) {
            state.reportsList.unshift(fname);
          }
          openReportsModal();
        }
        pollRealtimeSecurityEvents();
      } catch (err) {
        showToast(`Erro ao gerar relatório: ${err.message}`);
      }
    });

    document.getElementById('btnTriggerMassReban')?.addEventListener('click', async () => {
      if (!confirm('Deseja executar o Bloqueio em Massa Permanente de todos os atacantes no Kernel ipset?')) return;
      showToast('Aplicando bloqueio permanente no ipset do Linux...');
      try {
        const res = await callVpsEndpoint('sentinel', '/api/vps/firewall/mass-block', 'POST', {});
        const total = res.total_banned || 5618;
        const recaptured = res.recaptured_unbanned || 1739;
        showToast(`${total} IPs bloqueados no Kernel (+${recaptured} recuperados)!`, 4500);

        const fwBanEl = document.getElementById('homeFwBanCount');
        if (fwBanEl) fwBanEl.textContent = `${Number(total).toLocaleString('pt-BR')} IPs`;

        loadIpsAndOccurrences(true);
        loadFullLogs(true);
        pollRealtimeSecurityEvents();
      } catch (err) {
        showToast(`Falha no bloqueio: ${err.message}`);
      }
    });

    // Manual IP Block (IPs View)
    document.getElementById('btnManualIpBlock')?.addEventListener('click', async () => {
      const inp = document.getElementById('blockIpInput');
      const target = (inp && inp.value || '').trim();
      if (!target) {
        showToast('Informe um IP ou CIDR válido');
        return;
      }
      showToast(`Bloqueando ${target} permanentemente no kernel ipset...`);
      try {
        await callVpsEndpoint('sentinel', '/api/vps/firewall/block', 'POST', {
          target,
          comment: 'Bloqueio manual Android VPS Manager'
        });
        if (inp) inp.value = '';
        showToast(`IP ${target} bloqueado permanentemente no ipset!`);
        loadIpsAndOccurrences(true);
        loadFullLogs(true);
      } catch (err) {
        showToast(`Erro ao bloquear IP: ${err.message}`);
      }
    });

    // Logs Page Controls
    document.querySelectorAll('#logsCategoryFilters .logs-cat-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#logsCategoryFilters .logs-cat-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.logsCategory = pill.dataset.cat || 'all';
        renderFullLogsList();
      });
    });

    document.getElementById('logsSearchInput')?.addEventListener('input', (e) => {
      state.logsSearchQuery = e.target.value || '';
      renderFullLogsList();
    });

    document.getElementById('btnRefreshLogs')?.addEventListener('click', () => {
      showToast('Atualizando logs da VPS...');
      loadFullLogs(true);
    });

    document.getElementById('btnOpenReportsModal')?.addEventListener('click', openReportsModal);
    document.getElementById('closeReportsModalBtn')?.addEventListener('click', closeAllModals);

    // IPs Page Controls
    document.querySelectorAll('#ipsStatusFilters .logs-cat-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#ipsStatusFilters .logs-cat-pill').forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        state.ipsStatusFilter = pill.dataset.status || 'all';
        renderIpsAndOccurrencesList();
      });
    });

    document.getElementById('ipsSearchInput')?.addEventListener('input', (e) => {
      state.ipsSearchQuery = e.target.value || '';
      renderIpsAndOccurrencesList();
    });

    document.querySelectorAll('.nav-pill[data-filter]').forEach((pill) => {
      pill.addEventListener('click', () => {
        state.activeFilter = pill.dataset.filter || 'all';
        applyVisibilityFilter();
        const scrollEl = document.getElementById('mainContentArea');
        if (scrollEl) scrollEl.scrollTop = 0;
      });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value || '';
        if (clearBtn) clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
        if (state.searchQuery.trim() && state.activeFilter !== 'all') {
          state.activeFilter = 'all';
        }
        renderSecurityAgents();
        renderContainers();
        renderNetworkAndOsint();
        applyVisibilityFilter();
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.remove('visible');
        renderAll();
      });
    }

    // Header Actions
    document.getElementById('forceSyncHeaderBtn')?.addEventListener('click', () => syncAllLiveSources(true));
    document.getElementById('randomBgDockBtn')?.addEventListener('click', randomizeBackground);
    document.getElementById('randomShaderBtn')?.addEventListener('click', randomizeBackground);

    // Open Settings Modal
    const openSettings = () => {
      window.__MODAL_OPEN_PAUSE__ = true;
      document.getElementById('cfgSentinelUrl').value = state.customSentinelUrl;
      document.getElementById('cfgOsintUrl').value = state.customOsintUrl;
      document.getElementById('cfgN8nUrl').value = state.customN8nUrl;
      document.getElementById('cfgBioOnLaunch').checked = state.bioOnLaunch;
      renderBridgeStatus();
      const el = document.getElementById('settingsModalOverlay');
      el.style.display = 'flex';
      el.classList.add('active');
    };
    document.getElementById('settingsDockBtn')?.addEventListener('click', openSettings);
    document.getElementById('activeShaderPill')?.addEventListener('click', openSettings);
    document.getElementById('closeSettingsBtn')?.addEventListener('click', closeAllModals);
    document.getElementById('btnApplyAndCloseBg')?.addEventListener('click', closeAllModals);

    // Settings Subtabs & Shader/Wallpaper cards
    document.querySelectorAll('.settings-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.settings-tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.bgTab;
        document.getElementById('paneShaders')?.classList.toggle('active', tab === 'shaders');
        document.getElementById('paneWallpapers')?.classList.toggle('active', tab === 'wallpapers');
        document.getElementById('paneConnections')?.classList.toggle('active', tab === 'connections');
      });
    });

    document.querySelectorAll('.shader-card-option').forEach((card) => {
      card.addEventListener('click', () => {
        applyBackground(card.dataset.bgType, card.dataset.bg, true);
        showToast(`Fundo aplicado: ${card.dataset.bg}`);
      });
    });

    document.getElementById('btnSaveConnections')?.addEventListener('click', () => {
      state.customSentinelUrl = document.getElementById('cfgSentinelUrl').value.trim();
      state.customOsintUrl = document.getElementById('cfgOsintUrl').value.trim();
      state.customN8nUrl = document.getElementById('cfgN8nUrl').value.trim();
      state.bioOnLaunch = document.getElementById('cfgBioOnLaunch').checked;
      localStorage.setItem('vps_sentinel_url', state.customSentinelUrl);
      localStorage.setItem('vps_osint_url', state.customOsintUrl);
      localStorage.setItem('vps_n8n_url', state.customN8nUrl);
      localStorage.setItem('vps_bio_launch', String(state.bioOnLaunch));
      showToast('Preferências salvas — testando conexão...');
      syncAllLiveSources(true);
    });

    // Hero buttons & inline Terminal
    document.getElementById('btnInspectSecurityAgents')?.addEventListener('click', () => {
      state.activeFilter = 'security';
      applyVisibilityFilter();
      document.getElementById('securityAgentsHub')?.scrollIntoView({ behavior: 'smooth' });
    });

    const openTerminalModal = () => {
      window.__MODAL_OPEN_PAUSE__ = true;
      const el = document.getElementById('terminalModalOverlay');
      el.style.display = 'flex';
      el.classList.add('active');
    };
    document.getElementById('btnOpenTerminal')?.addEventListener('click', openTerminalModal);
    document.getElementById('btnOpenTerminalInline')?.addEventListener('click', openTerminalModal);
    document.getElementById('closeTerminalModalBtn')?.addEventListener('click', closeAllModals);

    // SSH Terminal commands
    const execSshCmd = async (cmd) => {
      const clean = (cmd || '').trim();
      if (!clean) return;
      const outEl = document.getElementById('sshModalOutput');
      if (outEl) outEl.textContent = `$ ${clean}\nExecutando na VPS (:5059)...`;
      try {
        const res = await callVpsEndpoint('sentinel', '/api/vps/system/exec', 'POST', { command: clean, timeout: 15 });
        const stdout = res.stdout || res.output || '';
        const stderr = res.stderr || '';
        const txt = [stdout, stderr ? `\n[STDERR]\n${stderr}` : ''].join('').trim() || JSON.stringify(res, null, 2);
        if (outEl) outEl.textContent = `$ ${clean}\n\n${txt}`;
      } catch (err) {
        if (outEl) outEl.textContent = `$ ${clean}\n\nErro: ${err.message}`;
      }
    };

    document.getElementById('btnRunSshCommand')?.addEventListener('click', () => {
      const inp = document.getElementById('sshCommandInput');
      execSshCmd(inp ? inp.value : '');
    });

    document.querySelectorAll('.cmd-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd || '';
        const inp = document.getElementById('sshCommandInput');
        if (inp) inp.value = cmd;
        execSshCmd(cmd);
      });
    });

    // Quick Block IP
    document.getElementById('btnBlockIpSubmit')?.addEventListener('click', async () => {
      const inp = document.getElementById('blockIpInput');
      const target = (inp && inp.value || '').trim();
      if (!target) {
        showToast('Informe um IP ou CIDR válido');
        return;
      }
      try {
        await callVpsEndpoint('sentinel', '/api/vps/firewall/block', 'POST', {
          target,
          comment: 'Bloqueio manual Android VPS Manager'
        });
        if (inp) inp.value = '';
        showToast(`IP bloqueado no iptables: ${target}`);
        syncAllLiveSources(false);
      } catch (err) {
        showToast(`Falha ao bloquear: ${err.message}`);
      }
    });

    // Delegate click on Agent Cards -> Open Modal
    document.getElementById('securityAgentsGrid')?.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-agent]');
      if (!trigger) return;
      openAgentModal(trigger.dataset.openAgent, trigger.dataset.openTab || 'discord');
    });

    // Agent Modal controls
    document.getElementById('closeAgentModalBtn')?.addEventListener('click', closeAllModals);
    document.querySelectorAll('#agentDetailModalOverlay .modal-tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => switchAgentModalTab(btn.dataset.agentTab));
    });

    document.getElementById('btnRefreshChannelDiscord')?.addEventListener('click', async () => {
      const ag = SECURITY_AGENTS.find((a) => a.id === state.currentModalAgentId);
      if (!ag) return;
      showToast(`Atualizando ${ag.discordChannelName}...`);
      try {
        await fetchChannelMessagesLive(ag.discordChannelId, 25);
        renderDiscordModalFeed(ag);
        renderSecurityAgents();
        showToast('Canal Discord atualizado');
      } catch (err) {
        showToast(`Erro Discord: ${err.message}`);
      }
    });

    document.getElementById('btnSendDiscordMsg')?.addEventListener('click', async () => {
      const ag = SECURITY_AGENTS.find((a) => a.id === state.currentModalAgentId);
      const inp = document.getElementById('discordMessageInput');
      const content = (inp && inp.value || '').trim();
      if (!ag || !content) return;
      const bridge = getPlugin('VpsBridge');
      if (!bridge || typeof bridge.sendDiscordMessage !== 'function') {
        showToast('Envio ao Discord disponível no app Android');
        return;
      }
      try {
        const res = await bridge.sendDiscordMessage({ channelId: ag.discordChannelId, content });
        if (res && res.ok) {
          inp.value = '';
          await fetchChannelMessagesLive(ag.discordChannelId, 25);
          renderDiscordModalFeed(ag);
          renderSecurityAgents();
          showToast('Mensagem publicada no Discord!');
        } else {
          showToast((res && res.error) || 'Falha ao enviar');
        }
      } catch (err) {
        showToast(`Erro: ${err.message}`);
      }
    });

    document.getElementById('btnSendN8nPrompt')?.addEventListener('click', async () => {
      const ag = SECURITY_AGENTS.find((a) => a.id === state.currentModalAgentId);
      const inp = document.getElementById('n8nAgentPromptInput');
      const prompt = (inp && inp.value || '').trim();
      if (!ag || !prompt) return;

      const list = state.n8nChatHistory[ag.id] || [];
      list.push({ role: 'user', ts: formatTimestamp(new Date().toISOString()), text: prompt });
      list.push({ role: 'agent', ts: 'Pensando...', text: `Consultando agente n8n ${ag.n8nAgentId}...` });
      state.n8nChatHistory[ag.id] = list;
      inp.value = '';
      renderN8nModalChat(ag);

      const bridge = getPlugin('VpsBridge');
      if (!bridge || typeof bridge.callN8nAgent !== 'function') {
        list[list.length - 1] = { role: 'agent', ts: 'Offline', text: 'Ponte nativa Android necessária para autenticar no n8n MCP.' };
        renderN8nModalChat(ag);
        return;
      }

      try {
        const args = { agentId: ag.n8nAgentId, message: prompt };
        if (state.customN8nUrl) args.n8nBaseUrl = state.customN8nUrl;
        const res = await bridge.callN8nAgent(args);
        if (res && res.ok && res.response) {
          list[list.length - 1] = { role: 'agent', ts: formatTimestamp(new Date().toISOString()), text: res.response };
        } else {
          list[list.length - 1] = { role: 'agent', ts: 'Erro', text: (res && (res.error || res.raw)) || 'Sem resposta do n8n' };
        }
      } catch (err) {
        list[list.length - 1] = { role: 'agent', ts: 'Erro', text: err.message };
      }
      renderN8nModalChat(ag);
    });

    // Biometric lock/unlock triggers
    document.getElementById('lockDockBtn')?.addEventListener('click', showLockscreen);
    document.getElementById('biometricAuthBtn')?.addEventListener('click', triggerBiometricUnlock);
    document.getElementById('biometricTriggerBtn')?.addEventListener('click', triggerBiometricUnlock);

    // Enter key in SSH terminal input
    document.getElementById('sshCommandInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const inp = document.getElementById('sshCommandInput');
        execSshCmd(inp ? inp.value : '');
      }
    });

    // Demo Portfolio Modal & Actions
    const openDemoPortfolioModal = () => {
      window.__MODAL_OPEN_PAUSE__ = true;
      const el = document.getElementById('demoPortfolioModalOverlay');
      if (el) {
        el.style.display = 'flex';
        el.classList.add('active');
      }
    };
    document.getElementById('demoPortfolioBtn')?.addEventListener('click', openDemoPortfolioModal);
    document.getElementById('closeDemoPortfolioModalBtn')?.addEventListener('click', closeAllModals);
    document.getElementById('btnReplayIntro')?.addEventListener('click', replayIntro);

    document.getElementById('btnQuickTestBiometric')?.addEventListener('click', () => {
      closeAllModals();
      showLockscreen();
      setTimeout(triggerBiometricUnlock, 400);
    });

    document.getElementById('btnQuickOpenTerminal')?.addEventListener('click', () => {
      closeAllModals();
      openTerminalModal();
    });

    // Click backdrop closes modals
    ['agentDetailModalOverlay', 'terminalModalOverlay', 'settingsModalOverlay', 'reportsModalOverlay', 'demoPortfolioModalOverlay'].forEach((id) => {
      document.getElementById(id)?.addEventListener('click', (e) => {
        if (e.target && e.target.id === id) closeAllModals();
      });
    });
  }

  // ========================================================================
  // 8. CINEMATIC INTRO & CASCADE ENTRANCE (PORTFOLIO SHOWCASE)
  // ========================================================================
  function animateNumberCountUp(element, endVal, suffix = '', duration = 1200) {
    if (!element) return;
    const start = 0;
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (endVal - start) * ease);
      element.textContent = current.toLocaleString('pt-BR') + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  function triggerCascadeEntrance() {
    const viewport = document.querySelector('.vision-viewport');
    if (viewport) {
      viewport.classList.remove('cascade-enter');
      void viewport.offsetWidth; // Force reflow
      viewport.classList.add('cascade-enter');
    }

    const fw = state.vpsSnapshot.firewall || {};
    const permBansCount = fw.permanent_ban_count ?? 5618;
    animateNumberCountUp(document.getElementById('homeFwBanCount'), permBansCount, ' IPs', 1400);
    animateNumberCountUp(document.getElementById('valThreats'), permBansCount, ' Bans', 1400);
  }

  function runCinematicIntroSequence() {
    const overlay = document.getElementById('demoIntroOverlay');
    const bar = document.getElementById('demoIntroProgressFill');
    const statusText = document.getElementById('demoIntroStatusText');
    const percentText = document.getElementById('demoIntroPercent');
    const enterBtn = document.getElementById('btnEnterDemo');

    if (!overlay) return;

    let hasEntered = false;

    const completeIntroAndEnter = () => {
      if (hasEntered) return;
      hasEntered = true;

      overlay.classList.add('fade-out');
      setTimeout(() => {
        overlay.style.display = 'none';
        triggerCascadeEntrance();
      }, 750);
    };

    if (enterBtn) {
      enterBtn.onclick = completeIntroAndEnter;
    }

    const steps = [
      { pct: 28, text: 'Inspecionando integridade do Kernel e Knox Keystore...', time: 350 },
      { pct: 58, text: 'Compilando pipeline gráfico WebGL (37 Shaders OGL)...', time: 750 },
      { pct: 88, text: 'Montando barramento Zero-Trust e telemetria mock...', time: 1150 },
      { pct: 100, text: 'Sincronização concluída. Iniciando ecossistema...', time: 1550 }
    ];

    steps.forEach((st) => {
      setTimeout(() => {
        if (hasEntered) return;
        if (bar) bar.style.width = `${st.pct}%`;
        if (percentText) percentText.textContent = `${st.pct}%`;
        if (statusText) statusText.textContent = st.text;
      }, st.time);
    });

    // Auto-enter smoothly after 2.3 seconds
    setTimeout(() => {
      completeIntroAndEnter();
    }, 2300);
  }

  function replayIntro() {
    closeAllModals();
    const overlay = document.getElementById('demoIntroOverlay');
    const bar = document.getElementById('demoIntroProgressFill');
    const percentText = document.getElementById('demoIntroPercent');
    const statusText = document.getElementById('demoIntroStatusText');
    if (!overlay) return;

    if (bar) bar.style.width = '0%';
    if (percentText) percentText.textContent = '0%';
    if (statusText) statusText.textContent = 'Reiniciando subsistemas Zero-Trust...';

    overlay.style.display = 'flex';
    overlay.classList.remove('fade-out');

    runCinematicIntroSequence();
  }

  async function initApp() {
    bindEvents();
    applyBackground(state.bgType, state.bgValue, false);
    await loadBundledCaches();
    renderAll();
    switchView('home');

    // Launch Cinematic Intro sequence for Portfolio Demo
    runCinematicIntroSequence();

    // Request Android 13+ Notification Permission on app start
    const bridge = getPlugin('VpsBridge');
    if (bridge && typeof bridge.requestNotificationPermission === 'function') {
      bridge.requestNotificationPermission().catch(() => {});
    }

    if (state.bioOnLaunch && getPlugin('SamsungBiometric')) {
      showLockscreen();
      triggerBiometricUnlock();
    }

    syncAllLiveSources(false);

    // Periodic real-time security events polling (every 6 seconds)
    pollRealtimeSecurityEvents();
    setInterval(pollRealtimeSecurityEvents, 6000);
  }

  document.addEventListener('DOMContentLoaded', initApp);
  window.addEventListener('load', () => {
    if (state.bgType === 'shader') applyShaderWithRetry(state.bgValue, 0);
  });
})();
