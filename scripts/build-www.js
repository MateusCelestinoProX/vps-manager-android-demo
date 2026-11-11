const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const androidAssetsPublic = path.join('android', 'app', 'src', 'main', 'assets', 'public');

// 1. Limpeza total de builds anteriores (zero resíduos do legado)
fs.rmSync('www', { recursive: true, force: true });
fs.rmSync(androidAssetsPublic, { recursive: true, force: true });
fs.mkdirSync('www', { recursive: true });

// 2. Copiar diretórios estáticos oficiais
copyDir('data', 'www/data');
copyDir('images', 'www/images');
copyDir('js', 'www/js');

// 3. Processar index.html
let html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('viewport-fit=cover')) {
  html = html.replace(
    /<meta name="viewport"[^>]*>/,
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">'
  );
}
fs.writeFileSync('www/index.html', html, 'utf8');

// 4. Garantir import local do OGL em www/js/webgl-backgrounds.js
if (fs.existsSync('js/webgl-backgrounds.js')) {
  let webgl = fs.readFileSync('js/webgl-backgrounds.js', 'utf8');
  webgl = webgl.replace(
    'https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm',
    './vendor/ogl.esm.js'
  );
  fs.writeFileSync('www/js/webgl-backgrounds.js', webgl, 'utf8');
}

// 5. Copiar styles.css
const css = fs.readFileSync('styles.css', 'utf8');
fs.writeFileSync('www/styles.css', css, 'utf8');

// 6. Processar app.js com integração nativa Capacitor (StatusBar + BackButton + Haptics)
const rawAppJs = fs.readFileSync('app.js', 'utf8');
const capacitorLifecycle = `
// ==========================================================================
// ANDROID CAPACITOR NATIVE LIFECYCLE (FULLSCREEN + HARDWARE BACK BUTTON)
// ==========================================================================
(function initVpsManagerNative() {
  if (typeof window === 'undefined') return;

  const enforceFullscreen = () => {
    try {
      const sb = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.StatusBar;
      if (sb) {
        sb.hide();
        sb.setOverlaysWebView({ overlay: true });
      }
    } catch {}
  };

  enforceFullscreen();
  window.addEventListener('orientationchange', () => setTimeout(enforceFullscreen, 120));
  window.addEventListener('resize', () => setTimeout(enforceFullscreen, 120));

  window.triggerNativeHaptic = function () {
    try {
      const h = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Haptics;
      if (h) h.impact({ style: 'light' });
    } catch {}
  };

  document.addEventListener('DOMContentLoaded', () => {
    enforceFullscreen();
    try {
      const capApp = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App;
      if (capApp && typeof capApp.addListener === 'function') {
        capApp.addListener('backButton', ({ canGoBack }) => {
          const modalIds = ['agentDetailModalOverlay', 'terminalModalOverlay', 'settingsModalOverlay', 'reportsModalOverlay'];
          for (const id of modalIds) {
            const modal = document.getElementById(id);
            if (modal && (modal.classList.contains('active') || modal.style.display === 'flex')) {
              modal.classList.remove('active');
              modal.style.display = 'none';
              window.__MODAL_OPEN_PAUSE__ = false;
              return;
            }
          }
          if (canGoBack) {
            window.history.back();
          } else {
            capApp.exitApp();
          }
        });
      }
    } catch {}
  });
})();
`;

fs.writeFileSync('www/app.js', capacitorLifecycle + '\n' + rawAppJs, 'utf8');

// 7. Sincronizar para assets Android do Capacitor
copyDir('www', androidAssetsPublic);

console.log('VPS Manager www/ compilado e sincronizado com android/app/src/main/assets/public!');
