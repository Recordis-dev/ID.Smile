(function() {
  // Prevent duplicate initialization
  if (window.__idsSmileNavigatorInitialized) return;
  window.__idsSmileNavigatorInitialized = true;

  // 1. Identify public vs internal pages
  var path = window.location.pathname;
  var cleanPath = path.toLowerCase().replace(/\/$/, ""); // remove trailing slash
  var isPublicPage = cleanPath === "" || cleanPath === "/index" || cleanPath === "/index.html" || cleanPath === "/v1" || cleanPath === "/v1.html";
  var isAuthorized = localStorage.getItem('ids-auth-key') === 'IDS-JEDI-2026';

  // 2. Query Parameter Check (?key=IDS-JEDI-2026 or ?passkey=IDS-JEDI-2026)
  var urlParams = new URLSearchParams(window.location.search);
  var keyParam = urlParams.get('key') || urlParams.get('passkey');
  if (keyParam && (keyParam.toUpperCase() === 'IDS-JEDI-2026' || keyParam.toLowerCase() === 'idsmile-workspace')) {
    localStorage.setItem('ids-auth-key', 'IDS-JEDI-2026');
    isAuthorized = true;
    // Clean URL param
    urlParams.delete('key');
    urlParams.delete('passkey');
    var newQuery = urlParams.toString();
    var newUrl = window.location.pathname + (newQuery ? '?' + newQuery : '') + window.location.hash;
    window.history.replaceState(null, '', newUrl);
  }

  // LAYER 1: Immediate Blocking CSS for internal pages
  if (!isPublicPage && !isAuthorized) {
    var blockStyle = document.createElement('style');
    blockStyle.id = 'ids-block-style';
    blockStyle.textContent = `
      body > :not(#ids-lock-screen) {
        display: none !important;
      }
      html, body {
        background: #0C242B !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
        height: 100vh !important;
        width: 100vw !important;
      }
    `;
    document.documentElement.appendChild(blockStyle);
  }

  // Determine current active page for navigation
  var currentFile = path.split('/').pop() || 'index.html';
  if (currentFile === '' || currentFile === '/') {
    currentFile = 'index.html';
  }

  // Inject CSS styles for the Navigation Hub, Watermark, and Gatekeeper
  var style = document.createElement('style');
  style.textContent = `
    /* Floating Navigation Hub Styling */
    .ids-nav-hub {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 100000;
      font-family: 'JetBrains Mono', 'Public Sans', ui-sans-serif, system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
    }
    @media (max-width: 760px) {
      .ids-nav-hub {
        left: 14px;
        bottom: 84px; /* Placed cleanly above the mobile bottom bar */
      }
    }
    .ids-nav-hub *, .ids-nav-hub *:before, .ids-nav-hub *:after {
      box-sizing: border-box;
    }
    .ids-nav-pill {
      background: #0C242B;
      border: 1.5px solid #1D4451;
      padding: 5px 8px;
      border-radius: 99px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 32px rgba(12, 36, 43, 0.45);
      transition: all 0.25s ease;
    }
    .ids-nav-pill:hover {
      border-color: #2E9AA0;
    }
    .ids-nav-logo {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #14515C;
      position: relative;
      flex-shrink: 0;
    }
    .ids-nav-logo:before, .ids-nav-logo:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 1px solid #2E9AA0;
    }
    .ids-nav-logo:before { inset: 4px; }
    .ids-nav-logo:after { inset: 8px; border-color: #fff; }

    .ids-nav-versions {
      display: flex;
      gap: 4px;
    }
    .ids-nav-btn {
      padding: 5px 12px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      border-radius: 99px;
      color: #8FB6BD;
      text-decoration: none !important;
      background: transparent;
      transition: all 0.2s ease;
    }
    .ids-nav-btn.active {
      background: #2E9AA0;
      color: #fff;
    }
    .ids-nav-btn:not(.active):hover {
      color: #fff;
      background: rgba(46, 154, 160, 0.2);
    }
    .ids-nav-sep {
      width: 1px;
      height: 18px;
      background: #1D4451;
    }
    .ids-nav-toggle-btn {
      background: transparent;
      border: none;
      color: #B9D3D8;
      font-family: inherit;
      font-size: 11.5px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 5px 12px;
      border-radius: 99px;
      transition: all 0.2s ease;
    }
    .ids-nav-toggle-btn:hover {
      color: #fff;
      background: rgba(210, 80, 107, 0.2);
    }
    .ids-nav-arrow {
      width: 12px;
      height: 12px;
      fill: currentColor;
      transition: transform 0.25s ease;
    }
    .ids-nav-hub.open .ids-nav-arrow {
      transform: rotate(180deg);
    }

    /* Expandable Navigation Panel */
    .ids-nav-panel {
      display: none;
      opacity: 0;
      transform: translateY(10px);
      position: absolute;
      bottom: calc(100% + 14px);
      left: 0;
      width: 480px;
      max-width: calc(100vw - 40px);
      max-height: 75vh;
      background: rgba(12, 36, 43, 0.98);
      backdrop-filter: blur(12px);
      border: 1.5px solid #1D4451;
      border-radius: 12px;
      box-shadow: 0 16px 48px rgba(12, 36, 43, 0.6);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      color: #fff;
      transition: opacity 0.25s ease, transform 0.25s ease;
      pointer-events: none;
    }
    .ids-nav-hub.open .ids-nav-panel {
      display: flex;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
    .ids-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1.5px solid #1D4451;
      background: #08191E;
    }
    .ids-panel-header h3 {
      margin: 0;
      font-size: 13px;
      font-weight: 800;
      color: #2E9AA0;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .ids-panel-close {
      background: transparent;
      border: none;
      color: #8FB6BD;
      font-size: 24px;
      font-weight: 300;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s ease;
    }
    .ids-panel-close:hover {
      color: #D2506B;
    }
    .ids-panel-body {
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .ids-panel-section {
      margin: 0;
    }
    .ids-panel-section h4 {
      margin: 0 0 10px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #D2506B;
      letter-spacing: 0.1em;
      border-bottom: 1px dotted #1D4451;
      padding-bottom: 6px;
    }
    .ids-link-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }
    @media (max-width: 540px) {
      .ids-link-grid {
        grid-template-columns: 1fr;
      }
    }
    .ids-panel-link {
      display: flex;
      flex-direction: column;
      background: #11333C;
      border: 1px solid #1D4451;
      padding: 10px 12px;
      border-radius: 6px;
      text-decoration: none !important;
      color: #B9D3D8 !important;
      transition: all 0.25s ease;
    }
    .ids-panel-link:hover {
      border-color: #2E9AA0;
      background: #14515C;
      color: #fff !important;
    }
    .ids-panel-link.active {
      border-color: #2E9AA0;
      background: #14515C;
      color: #fff !important;
      box-shadow: inset 3px 0 0 #2E9AA0;
    }
    .ids-link-title {
      font-size: 12px;
      font-weight: 700;
    }
    .ids-link-desc {
      font-size: 9.5px;
      color: #8FB6BD;
      margin-top: 3px;
      line-height: 1.3;
    }
    .ids-md-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 6px;
    }
    @media (min-width: 480px) {
      .ids-md-list {
        grid-template-columns: 1fr 1fr;
      }
    }
    .ids-md-link {
      font-size: 11px;
      color: #B9D3D8 !important;
      text-decoration: none !important;
      padding: 6px 8px;
      border-radius: 4px;
      background: rgba(17, 51, 60, 0.4);
      border: 1px solid transparent;
      transition: all 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
    }
    .ids-md-link:hover {
      color: #fff !important;
      background: #11333C;
      border-color: #1D4451;
    }

    /* Layer 1: Gatekeeper Lock Screen Styling */
    .ids-lock-wrapper {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      background: #0C242B;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .ids-lock-wrapper:before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(120% 90% at 50% 10%, rgba(46, 154, 160, 0.15), transparent 60%);
      pointer-events: none;
    }
    .ids-lock-card {
      background: #11333C;
      border: 1.5px solid #1D4451;
      width: 100%;
      max-width: 440px;
      border-radius: 12px;
      padding: 36px;
      box-shadow: 0 24px 64px rgba(12, 36, 43, 0.6);
      position: relative;
      z-index: 2;
      animation: ids-lock-fadein 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes ids-lock-fadein {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .ids-lock-logo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #14515C;
      position: relative;
      margin: 0 auto 18px;
    }
    .ids-lock-logo:before, .ids-lock-logo:after {
      content: "";
      position: absolute;
      border-radius: 50%;
      border: 1.5px solid #2E9AA0;
    }
    .ids-lock-logo:before { inset: 8px; }
    .ids-lock-logo:after { inset: 16px; border-color: #fff; }

    .ids-lock-header {
      text-align: center;
      margin-bottom: 24px;
    }
    .ids-lock-header h2 {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-size: 20px;
      font-weight: 800;
      color: #fff;
      margin: 0 0 6px;
      letter-spacing: 0.05em;
    }
    .ids-lock-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #D2506B;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin: 0;
      font-weight: 700;
    }
    .ids-lock-body {
      margin-bottom: 24px;
    }
    .ids-lock-info {
      font-size: 13px;
      color: #B9D3D8;
      line-height: 1.5;
      margin: 0 0 12px;
      text-align: center;
    }
    .ids-lock-subinfo {
      font-size: 11.5px;
      color: #8FB6BD;
      text-align: center;
      margin: 0 0 20px;
    }
    .ids-input-group {
      display: flex;
      gap: 8px;
    }
    .ids-input-group input {
      flex: 1;
      background: #0C242B;
      border: 1.5px solid #1D4451;
      border-radius: 6px;
      color: #fff;
      padding: 12px 16px;
      font-size: 14px;
      font-family: inherit;
      outline: none;
      transition: all 0.25s ease;
    }
    .ids-input-group input:focus {
      border-color: #2E9AA0;
      box-shadow: 0 0 0 3px rgba(46, 154, 160, 0.25);
    }
    .ids-input-group button {
      background: #D2506B;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0 20px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .ids-input-group button:hover {
      background: #e65c79;
      transform: translateY(-1px);
    }
    .ids-lock-error {
      color: #D2506B;
      font-size: 12px;
      font-weight: 600;
      margin-top: 10px;
      text-align: center;
      min-height: 18px;
    }
    .ids-lock-footer {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #1D4451;
      padding-top: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #5A7E85;
    }

    @keyframes ids-shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-6px); }
      40%, 80% { transform: translateX(6px); }
    }
    .ids-shake {
      animation: ids-shake 0.3s ease;
    }

    /* Layer 3: Screen Watermark & Print Blocker */
    .ids-watermark {
      position: fixed;
      inset: 0;
      z-index: 999999;
      pointer-events: none;
      opacity: 0.035;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><text x='30' y='100' fill='%235A6A70' font-family='monospace' font-size='10' font-weight='bold' transform='rotate(-25 150 100)'>CONFIDENCIAL - ID SMILE WORKSPACE</text></svg>");
      background-repeat: repeat;
    }

    @media print {
      body {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  // Define components of the Navigator widget
  var htmlFiles = [
    { file: 'index.html', title: 'Sitio MVP (Estático)', desc: 'Carga ultrarrápida, alta conversión', id: 'mvp' },
    { file: 'v1.html', title: 'Sitio V1 (React Premium)', desc: 'Diseño premium e interactivo', id: 'v1' },
    { file: 'hub.html', title: '📁 Hub de Entregables', desc: 'Punto de acceso unificado del proyecto', id: 'hub' },
    { file: 'dx-digital-smile-ortodoncia.html', title: '🩺 Nota de Diagnóstico', desc: 'Auditoría clínica y plan estratégico', id: 'dx' },
    { file: 'dashboard-operativo-id-smile.html', title: '📊 Dashboard Operativo', desc: 'Control de métricas y DevLog técnico', id: 'dashboard' },
    { file: 'business-model-canvas-id-smile.html', title: '💡 Business Model Canvas', desc: 'Análisis estratégico y comercial', id: 'bmc' }
  ];

  var mdFiles = [
    { path: 'mensaje-wa-bundle.md', title: '📝 Abordaje y Oferta WA' },
    { path: 'analytics-kpis-instrumentacion.md', title: '📊 Analítica e Instrumentación' },
    { path: 'checklist-evidencia.md', title: '✅ Checklist de Evidencia' },
    { path: 'DEPLOYMENT.md', title: '🚀 Guía de Despliegue CI/CD' },
    { path: 'metaprompt-sitio-id-smile.md', title: '🧠 Metaprompt de IA del Sitio' },
    { path: 'diagnosticadoc/SKILL.md', title: '🛠️ SKILL.md (Diagnosticadoc)' },
    { path: 'diagnosticadoc/references/benchmarks-dental-mx.md', title: '🦷 Benchmarks Dental MX' },
    { path: 'diagnosticadoc/references/landing-pages-engineering.md', title: '💻 Landing Pages Eng' },
    { path: 'diagnosticadoc/references/oferta-outreach-y-medicion.md', title: '📈 Outreach y Medición' }
  ];

  // Helper to determine active classes
  var isMvpActive = currentFile === 'index.html';
  var isV1Active = currentFile === 'v1.html';

  // Construct UI HTML
  var hubDiv = document.createElement('div');
  hubDiv.className = 'ids-nav-hub';
  hubDiv.id = 'idsNavHub';

  var pillHtml = `
    <div class="ids-nav-pill">
      <div class="ids-nav-logo" title="ID Smile Navigator"></div>
      <div class="ids-nav-versions">
        <a href="index.html" class="ids-nav-btn ${isMvpActive ? 'active' : ''}" id="ids-btn-mvp">MVP</a>
        <a href="v1.html" class="ids-nav-btn ${isV1Active ? 'active' : ''}" id="ids-btn-v1">V1</a>
      </div>
      <div class="ids-nav-sep"></div>
      <button class="ids-nav-toggle-btn" id="idsNavToggleBtn">
        <span>Navegar</span>
        <svg viewBox="0 0 24 24" class="ids-nav-arrow"><path d="M7 10l5 5 5-5H7z"/></svg>
      </button>
    </div>
  `;

  var panelHtml = `
    <div class="ids-nav-panel" id="idsNavPanel">
      <div class="ids-panel-header">
        <h3>Navegador de Entregables</h3>
        <button class="ids-panel-close" id="idsPanelClose" aria-label="Cerrar">&times;</button>
      </div>
      <div class="ids-panel-body">
        <div class="ids-panel-section">
          <h4>Vistas de ID Smile</h4>
          <div class="ids-link-grid">
            ${htmlFiles.map(function(item) {
              var isActive = currentFile === item.file;
              return `
                <a href="${item.file}" class="ids-panel-link ${isActive ? 'active' : ''}" id="ids-panel-${item.id}">
                  <span class="ids-link-title">${item.title}</span>
                  <span class="ids-link-desc">${item.desc}</span>
                </a>
              `;
            }).join('')}
          </div>
        </div>
        <div class="ids-panel-section">
          <h4>Documentación y Estratégicos (.md)</h4>
          <div class="ids-md-list">
            ${mdFiles.map(function(item) {
              // Map to viewer if current view is viewer
              var isViewer = currentFile === 'viewer.html';
              var targetUrl = item.path;
              if (isViewer) {
                // If in viewer, route SPA-style using viewer parameters
                var docIdMap = {
                  'mensaje-wa-bundle.md': 'wa',
                  'analytics-kpis-instrumentacion.md': 'analytics',
                  'checklist-evidencia.md': 'evidence',
                  'DEPLOYMENT.md': 'deployment',
                  'metaprompt-sitio-id-smile.md': 'metaprompt'
                };
                var mappedId = docIdMap[item.path];
                if (mappedId) {
                  targetUrl = '?doc=' + mappedId;
                }
              }
              return `
                <a href="${targetUrl}" ${isViewer && targetUrl.startsWith('?') ? '' : 'target="_blank"'} class="ids-md-link" title="${item.title}">
                  ${item.title}
                </a>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  hubDiv.innerHTML = pillHtml + panelHtml;

  // LAYER 1: Lock Screen Creation & Setup
  var lockDiv = document.createElement('div');
  lockDiv.id = 'ids-lock-screen';
  lockDiv.className = 'ids-lock-wrapper';
  lockDiv.innerHTML = `
    <div class="ids-lock-card">
      <div class="ids-lock-header">
        <div class="ids-lock-logo"></div>
        <h2>ACCESO PROTEGIDO</h2>
        <p class="ids-lock-tag">WORKSPACE ESTRATÉGICO CONFIDENCIAL</p>
      </div>
      <div class="ids-lock-body">
        <p class="ids-lock-info">
          Estás intentando ingresar a un área reservada para el equipo clínico y de operaciones digitales de <strong>ID Smile</strong>.
        </p>
        <p class="ids-lock-subinfo">
          Introduce la Clave de Acceso Jedi para desbloquear este entregable estratégico.
        </p>
        <form id="ids-lock-form">
          <div class="ids-input-group">
            <input type="password" id="ids-lock-pass" placeholder="Clave de Acceso..." required autofocus>
            <button type="submit" id="ids-lock-submit">Autorizar</button>
          </div>
          <div id="ids-lock-error" class="ids-lock-error"></div>
        </form>
      </div>
      <div class="ids-lock-footer">
        <span>diagnosticadoc.com · Pilar 1</span>
        <span>ID SMILE © 2026</span>
      </div>
    </div>
  `;

  // Append items when DOM is ready
  var appendElements = function() {
    if (document.body) {
      if (!isPublicPage && !isAuthorized) {
        // Appending the Lock Screen instead of content
        document.body.appendChild(lockDiv);
        setupLockHandlers();
      } else {
        // Appending Watermark on internal pages if authorized
        if (!isPublicPage && isAuthorized) {
          var watermark = document.createElement('div');
          watermark.className = 'ids-watermark';
          document.body.appendChild(watermark);
          setupIPShield();
        }

        // LAYER 2: Stealth check for floating navigation pill
        // Hide pill on public pages unless the user is already authorized
        if (isAuthorized || !isPublicPage) {
          document.body.appendChild(hubDiv);
          setupNavigatorHandlers();
        }
      }

      // Setup the Stealth Activation Listener on all pages (especially public ones)
      setupStealthTrigger();
    } else {
      setTimeout(appendElements, 20);
    }
  };

  // Setup security shielding (Layer 3)
  var setupIPShield = function() {
    // Block context menu
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
    });

    // Block text selection copy & cut
    document.addEventListener('copy', function(e) {
      e.preventDefault();
      alert("🛡️ ID Smile Privacidad: Copiar contenido estratégico de este entregable está deshabilitado.");
    });
    document.addEventListener('cut', function(e) {
      e.preventDefault();
    });
    document.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });

    // Block hotkeys: Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+U, Cmd+C, Cmd+S, Cmd+U, F12 alert
    document.addEventListener('keydown', function(e) {
      var isCtrlCmd = e.ctrlKey || e.metaKey;
      if (isCtrlCmd && (e.code === 'KeyC' || e.code === 'KeyX' || e.code === 'KeyS' || e.code === 'KeyU')) {
        e.preventDefault();
        alert("🛡️ ID Smile: Acción bloqueada para prevenir filtración de propiedad intelectual.");
      }
      if (e.code === 'F12') {
        console.warn("🛡️ Consola protegida de ID Smile activa.");
      }
    });
  };

  // Setup stealth double click trigger to prompt and authorize (Layer 2)
  var setupStealthTrigger = function() {
    document.addEventListener('dblclick', function(e) {
      // Triggered if clicking page footer OR holding Shift key while double clicking anywhere
      var isFooter = e.target.closest('footer') || e.target.closest('.footer') || e.target.closest('[class*="footer"]') || e.target.closest('footer-bar');
      var isShift = e.shiftKey;

      if (isFooter || isShift) {
        var pass = prompt("🔐 ID Smile Secure Portal\n\nIntroduce la Clave de Acceso Jedi:");
        if (pass) {
          if (pass.toUpperCase() === 'IDS-JEDI-2026' || pass.toLowerCase() === 'idsmile-workspace') {
            localStorage.setItem('ids-auth-key', 'IDS-JEDI-2026');
            alert("¡Acceso Autorizado! Cargando Workspace...");
            window.location.reload();
          } else {
            alert("Acceso denegado. Clave incorrecta.");
          }
        }
      }
    });
  };

  // Setup Handlers for Lock Screen
  var setupLockHandlers = function() {
    var form = document.getElementById('ids-lock-form');
    var input = document.getElementById('ids-lock-pass');
    var errorDiv = document.getElementById('ids-lock-error');
    var card = document.querySelector('.ids-lock-card');

    if (form && input) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var code = input.value.trim();
        if (code.toUpperCase() === 'IDS-JEDI-2026' || code.toLowerCase() === 'idsmile-workspace') {
          // Success!
          localStorage.setItem('ids-auth-key', 'IDS-JEDI-2026');
          errorDiv.textContent = "";

          // Smooth fade-out transition
          card.style.transform = 'translateY(-20px)';
          card.style.opacity = '0';
          card.style.transition = 'all 0.3s ease';
          lockDiv.style.opacity = '0';
          lockDiv.style.transition = 'opacity 0.4s ease';

          setTimeout(function() {
            // Remove blocking CSS
            var blockS = document.getElementById('ids-block-style');
            if (blockS) blockS.remove();
            lockDiv.remove();

            // Reload the page to cleanly render all actual content with auth active
            window.location.reload();
          }, 350);
        } else {
          // Error shake
          errorDiv.textContent = "Clave incorrecta. Acceso denegado.";
          card.classList.add('ids-shake');
          input.value = "";
          input.focus();

          setTimeout(function() {
            card.classList.remove('ids-shake');
          }, 300);
        }
      });
    }
  };

  // Setup Handlers for Navigator Pill & Panel
  var setupNavigatorHandlers = function() {
    var toggleBtn = document.getElementById('idsNavToggleBtn');
    var closeBtn = document.getElementById('idsPanelClose');
    var hub = document.getElementById('idsNavHub');

    if (toggleBtn && hub) {
      toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        hub.classList.toggle('open');
      });
    }

    if (closeBtn && hub) {
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        hub.classList.remove('open');
      });
    }

    // Close panel on clicking outside
    document.addEventListener('click', function(e) {
      if (hub && !hub.contains(e.target)) {
        hub.classList.remove('open');
      }
    });

    // Version preference persistence handlers
    var handleVersionClick = function(id, version) {
      var el = document.getElementById(id);
      if (el) {
        el.addEventListener('click', function() {
          localStorage.setItem('preferred-version', version);
        });
      }
    };

    handleVersionClick('ids-btn-mvp', 'mvp');
    handleVersionClick('ids-panel-mvp', 'mvp');
    handleVersionClick('ids-btn-v1', 'v1');
    handleVersionClick('ids-panel-v1', 'v1');
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendElements);
  } else {
    appendElements();
  }
})();
