(function() {
  // Prevent duplicate initialization
  if (window.__idsSmileNavigatorInitialized) return;
  window.__idsSmileNavigatorInitialized = true;

  // Determine current active page
  var path = window.location.pathname;
  var currentFile = path.split('/').pop() || 'index.html';
  if (currentFile === '' || currentFile === '/') {
    currentFile = 'index.html';
  }

  // Inject CSS styles for the Navigation Hub
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
              return `
                <a href="${item.path}" target="_blank" class="ids-md-link" title="${item.title}">
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

  // Insert the hub into the page
  var appendNavigator = function() {
    if (document.body) {
      document.body.appendChild(hubDiv);
      setupHandlers();
    } else {
      setTimeout(appendNavigator, 20);
    }
  };

  var setupHandlers = function() {
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
    document.addEventListener('DOMContentLoaded', appendNavigator);
  } else {
    appendNavigator();
  }
})();
