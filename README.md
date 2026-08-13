# Workspace de ID Smile & Diagnosticadoc

Ecosistema digital unificado para ID Smile, diseñado e implementado con una arquitectura premium de coexistencia de versiones (MVP y V1) y una suite integrada de entregables estratégicos para el vertical de salud en México.

---

## 🗺️ System Blueprint: Fullstack Architecture
El siguiente diagrama describe la arquitectura general del sistema siguiendo las pautas de [Diagram Design de Cathryn Lavery](https://github.com/cathrynlavery/diagram-design), con un enfoque minimalista editorial, alineación precisa en grilla divisible por 4, tipografía Geist/Instrument Serif y énfasis focal selectivo.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="border-radius: 8px; background: #0C242B;" role="img" aria-labelledby="blueprint-title blueprint-desc">
  <title id="blueprint-title">ID Smile Fullstack Blueprint</title>
  <desc id="blueprint-desc">Architectural blueprint of the ID Smile dual-version workspace ecosystem, built following professional diagram-design guidelines.</desc>
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&amp;family=Geist+Mono:wght@400;500;600&amp;family=Geist:wght@400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap');

      .bg { fill: #0C242B; }
      .text-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 20px; fill: #FAF7F2; text-anchor: middle; font-weight: 800; letter-spacing: -0.02em; }
      .text-subtitle { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; text-anchor: middle; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; }

      .node-border { stroke: #1D4451; stroke-width: 1; fill: #11333C; }
      .node-border-focal { stroke: #D2506B; stroke-width: 1.2; fill: #1C2E34; }
      .node-border-accent { stroke: #2E9AA0; stroke-width: 1.2; fill: #113840; }

      .node-title { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #FAF7F2; }
      .node-title-focal { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #D2506B; }
      .node-title-accent { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #2E9AA0; }

      .node-sub { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; }
      .node-tech { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #2E9AA0; }
      .node-tech-muted { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #8FB6BD; opacity: 0.8; }

      .edge { fill: none; stroke: #8FB6BD; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-muted); }
      .edge-focal { fill: none; stroke: #D2506B; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-accent); }
      .edge-accent { fill: none; stroke: #2E9AA0; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-aqua); }

      .edge-label { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #FAF7F2; text-anchor: middle; font-weight: 500; }
      .edge-label-focal { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #D2506B; text-anchor: middle; font-weight: 600; }

      .callout-text { font-family: 'Instrument Serif', serif; font-size: 14px; fill: #FAF7F2; font-style: italic; text-anchor: middle; }
      .callout-line { fill: none; stroke: #D2506B; stroke-width: 0.8; stroke-dasharray: 4,4; }
    </style>

    <marker id="arrow-muted" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#8FB6BD" />
    </marker>
    <marker id="arrow-accent" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#D2506B" />
    </marker>
    <marker id="arrow-aqua" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#2E9AA0" />
    </marker>

    <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="rgba(46, 154, 160, 0.12)" />
    </pattern>
  </defs>

  <rect width="800" height="480" class="bg" />
  <rect width="800" height="480" fill="url(#dotgrid)" />

  <text x="400" y="36" class="text-title">ID SMILE &amp; DIAGNOSTICADOC</text>
  <text x="400" y="52" class="text-subtitle">SYSTEM BLUEPRINT · FULLSTACK SR JEDI ENGINEER</text>

  <rect x="40" y="144" width="120" height="56" rx="6" class="node-border" />
  <text x="52" y="164" class="node-title">USER TRAFFIC</text>
  <text x="52" y="176" class="node-sub">Mobile / Desktop</text>
  <text x="52" y="188" class="node-tech">GET / HTTP Request</text>

  <rect x="200" y="120" width="160" height="104" rx="6" class="node-border-focal" />
  <text x="212" y="144" class="node-title-focal">HIBRID SWITCHER</text>
  <text x="212" y="160" class="node-sub">Synchronous Head JS</text>
  <text x="212" y="176" class="node-tech-muted">Reads preferred-version</text>
  <text x="212" y="188" class="node-tech-muted">Instant redirect (No loop)</text>
  <text x="212" y="200" class="node-tech">mvp | v1 in localStorage</text>

  <rect x="400" y="64" width="140" height="56" rx="6" class="node-border" />
  <text x="412" y="84" class="node-title">MVP LANDING</text>
  <text x="412" y="96" class="node-sub">index.html</text>
  <text x="412" y="108" class="node-tech">Zero-Dependency HTML</text>

  <rect x="400" y="200" width="140" height="56" rx="6" class="node-border" />
  <text x="412" y="220" class="node-title">PREMIUM REDESIGN</text>
  <text x="412" y="232" class="node-sub">v1.html</text>
  <text x="412" y="244" class="node-tech">React / Modern UX</text>

  <rect x="200" y="300" width="160" height="104" rx="6" class="node-border-accent" />
  <text x="212" y="324" class="node-title-accent">UNIFIED WORKSPACE</text>
  <text x="212" y="340" class="node-sub">viewer.html / hub.html</text>
  <text x="212" y="356" class="node-tech-muted">Vanilla JS MD Parser</text>
  <text x="212" y="368" class="node-tech-muted">Dual mobile simulator</text>
  <text x="212" y="380" class="node-tech">Clean-URL path mapper</text>

  <rect x="400" y="344" width="140" height="56" rx="6" class="node-border" />
  <text x="412" y="364" class="node-title">10 STRATEGIC DOCS</text>
  <text x="412" y="376" class="node-sub">Markdown + HTML</text>
  <text x="412" y="388" class="node-tech">Dx, BMC, WA, KPIs, ...</text>

  <rect x="600" y="120" width="160" height="184" rx="6" class="node-border" />
  <text x="612" y="144" class="node-title">EDGE HOST &amp; CI/CD</text>
  <text x="612" y="156" class="node-sub">Vercel &amp; GitHub Pages</text>
  <text x="612" y="176" class="node-tech-muted">vercel.json routing</text>
  <text x="612" y="188" class="node-tech-muted">cleanUrls: true</text>
  <text x="612" y="200" class="node-tech">X-Robots-Tag: noindex</text>
  <text x="612" y="220" class="node-tech-muted">GHA Workflows:</text>
  <text x="612" y="232" class="node-tech-muted">• Auto-Setup script</text>
  <text x="612" y="244" class="node-tech-muted">• Bot-PR auto-approval</text>
  <text x="612" y="256" class="node-tech">• Multi-cloud mirroring</text>

  <path d="M 160 172 L 200 172" class="edge-focal" />
  <text x="180" y="164" class="edge-label-focal">GET /</text>

  <path d="M 360 144 L 380 144 L 380 92 L 400 92" class="edge" />
  <text x="384" y="136" class="edge-label">mvp</text>

  <path d="M 360 200 L 380 200 L 380 228 L 400 228" class="edge" />
  <text x="384" y="192" class="edge-label">v1</text>

  <path d="M 280 224 L 280 300" class="edge-accent" />
  <text x="292" y="264" class="edge-label">/viewer</text>

  <path d="M 360 352 L 380 352 L 380 372 L 400 372" class="edge" />
  <text x="384" y="340" class="edge-label">iframe</text>

  <path d="M 540 92 L 580 92 L 580 160 L 600 160" class="edge" />
  <text x="564" y="84" class="edge-label">Deploy</text>

  <path d="M 540 228 L 580 228 L 580 212 L 600 212" class="edge" />
  <text x="564" y="220" class="edge-label">Deploy</text>

  <path d="M 540 372 L 580 372 L 580 264 L 600 264" class="edge" />
  <text x="564" y="384" class="edge-label">Deploy</text>

  <path d="M 680 348 Q 680 324 680 304" class="callout-line" />
  <text x="680" y="364" class="callout-text">Protects clinical IP with strict</text>
  <text x="680" y="380" class="callout-text">X-Robots-Tag: noindex, nofollow</text>
  <text x="680" y="396" class="callout-text">headers at Vercel Edge</text>
</svg>
```

---

## 🗺️ Sitemap & User Flow Blueprint
Este diagrama ilustra las rutas de usuario, la navegación interactiva, las secciones de contenido de la marca (áreas), los llamados a la acción (CTAs) y cómo se interconectan los entregables dentro de la plataforma.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="border-radius: 8px; background: #0C242B;" role="img" aria-labelledby="sitemap-title">
  <title id="sitemap-title">ID Smile Sitemap &amp; Flow Blueprint</title>
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&amp;family=Geist+Mono:wght@400;500;600&amp;family=Geist:wght@400;500;600&amp;display=swap');
      .bg { fill: #0C242B; }
      .text-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 20px; fill: #FAF7F2; text-anchor: middle; font-weight: 800; letter-spacing: -0.02em; }
      .text-subtitle { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; text-anchor: middle; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; }
      .node-border { stroke: #1D4451; stroke-width: 1; fill: #11333C; }
      .node-border-focal { stroke: #D2506B; stroke-width: 1.2; fill: #1C2E34; }
      .node-border-accent { stroke: #2E9AA0; stroke-width: 1.2; fill: #113840; }
      .node-title { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #FAF7F2; }
      .node-title-focal { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #D2506B; }
      .node-title-accent { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #2E9AA0; }
      .node-sub { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; }
      .node-tech { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #2E9AA0; }
      .node-tech-muted { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #8FB6BD; opacity: 0.8; }
      .edge { fill: none; stroke: #8FB6BD; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-muted-s); }
      .edge-focal { fill: none; stroke: #D2506B; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-accent-s); }
      .edge-accent { fill: none; stroke: #2E9AA0; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-aqua-s); }
      .edge-label { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #FAF7F2; text-anchor: middle; }
    </style>
    <marker id="arrow-muted-s" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#8FB6BD" />
    </marker>
    <marker id="arrow-accent-s" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#D2506B" />
    </marker>
    <marker id="arrow-aqua-s" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#2E9AA0" />
    </marker>
    <pattern id="dotgrid-s" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="rgba(46, 154, 160, 0.12)" />
    </pattern>
  </defs>

  <rect width="800" height="480" class="bg" />
  <rect width="800" height="480" fill="url(#dotgrid-s)" />

  <text x="400" y="36" class="text-title">SITEMAP, RUTAS Y INTERCONEXIONES</text>
  <text x="400" y="52" class="text-subtitle">MAPA DE FLUJO, ÁREAS DE MARCA Y ACCIONES (CTAs)</text>

  <!-- Entry -->
  <rect x="40" y="212" width="112" height="56" rx="6" class="node-border" />
  <text x="52" y="232" class="node-title">USER ENTRY</text>
  <text x="52" y="244" class="node-sub">HTTP GET /</text>
  <text x="52" y="256" class="node-tech">Clean paths on Edge</text>

  <!-- Switcher -->
  <rect x="192" y="188" width="128" height="104" rx="6" class="node-border-focal" />
  <text x="204" y="212" class="node-title-focal">DYNAMIC ROUTER</text>
  <text x="204" y="228" class="node-sub">preferred-version</text>
  <text x="204" y="244" class="node-tech-muted">Vercel Server Clean-URLs</text>
  <text x="204" y="256" class="node-tech-muted">GitHub Pages Fallback</text>
  <text x="204" y="272" class="node-tech">localStorage Sync</text>

  <!-- MVP Landing -->
  <rect x="360" y="80" width="128" height="56" rx="6" class="node-border" />
  <text x="372" y="100" class="node-title">SITIO MVP (Estático)</text>
  <text x="372" y="112" class="node-sub">/index.html</text>
  <text x="372" y="124" class="node-tech">Pure HTML5 / CSS3 / JS</text>

  <!-- V1 Premium Landing -->
  <rect x="360" y="344" width="128" height="56" rx="6" class="node-border" />
  <text x="372" y="364" class="node-title">SITIO V1 (React Redesign)</text>
  <text x="372" y="376" class="node-sub">/v1.html</text>
  <text x="372" y="388" class="node-tech">Interactive Premium UI</text>

  <!-- Hub / Workspace -->
  <rect x="360" y="212" width="128" height="56" rx="6" class="node-border-accent" />
  <text x="372" y="232" class="node-title-accent">HUB &amp; VISUALIZER</text>
  <text x="372" y="244" class="node-sub">/hub.html &amp; /viewer</text>
  <text x="372" y="256" class="node-tech">SPA Unified Workspace</text>

  <!-- MVP Areas -->
  <rect x="528" y="80" width="128" height="56" rx="6" class="node-border" />
  <text x="540" y="100" class="node-title">MVP SECCIONES</text>
  <text x="540" y="112" class="node-sub">Hero, Carousel, Testim</text>
  <text x="540" y="124" class="node-tech">Ultra-fast Mobile Loading</text>

  <!-- V1 Areas -->
  <rect x="528" y="344" width="128" height="56" rx="6" class="node-border" />
  <text x="540" y="364" class="node-title">V1 SECCIONES</text>
  <text x="540" y="376" class="node-sub">Premium Hero, Dx Map, Tour</text>
  <text x="540" y="388" class="node-tech">Dynamic React state</text>

  <!-- Workspace Deliverables Map -->
  <rect x="528" y="212" width="128" height="56" rx="6" class="node-border-accent" />
  <text x="540" y="232" class="node-title-accent">10 ENTEGABLES MAP</text>
  <text x="540" y="244" class="node-sub">Clinical Dx, BMC, Prompts</text>
  <text x="540" y="256" class="node-tech">Dynamic Markdown fetch</text>

  <!-- MVP CTA -->
  <rect x="684" y="80" width="88" height="56" rx="6" class="node-border-focal" />
  <text x="696" y="100" class="node-title-focal">⚡ CTA MVP</text>
  <text x="696" y="112" class="node-sub">WhatsApp</text>
  <text x="696" y="124" class="node-tech">One-click Lead</text>

  <!-- V1 CTA -->
  <rect x="684" y="344" width="88" height="56" rx="6" class="node-border-focal" />
  <text x="696" y="364" class="node-title-focal">⚡ CTA V1</text>
  <text x="696" y="376" class="node-sub">Scheduler</text>
  <text x="696" y="388" class="node-tech">Calendly Modal</text>

  <!-- Workspace Outputs -->
  <rect x="684" y="212" width="88" height="56" rx="6" class="node-border-accent" />
  <text x="696" y="232" class="node-title-accent">🔒 OUTPUT</text>
  <text x="696" y="244" class="node-sub">Clinical Sandbox</text>
  <text x="696" y="256" class="node-tech">NoIndex IP</text>

  <!-- Edges -->
  <path d="M 152 240 L 192 240" class="edge" />
  <path d="M 320 216 L 340 216 L 340 108 L 360 108" class="edge" />
  <path d="M 320 264 L 340 264 L 340 372 L 360 372" class="edge" />
  <path d="M 320 240 L 360 240" class="edge-accent" />

  <path d="M 488 108 L 528 108" class="edge" />
  <path d="M 488 372 L 528 372" class="edge" />
  <path d="M 488 240 L 528 240" class="edge-accent" />

  <path d="M 656 108 L 684 108" class="edge-focal" />
  <path d="M 656 372 L 684 372" class="edge-focal" />
  <path d="M 656 240 L 684 240" class="edge-accent" />
</svg>
```

---

## 🗺️ Repository Directory Structure & Tech Stack
Este diagrama de arquitectura técnica representa la estructura del repositorio de código estático, la organización de archivos de ID Smile y Diagnosticadoc, y el stack tecnológico utilizado en cada capa.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="border-radius: 8px; background: #0C242B;" role="img" aria-labelledby="repo-title">
  <title id="repo-title">ID Smile Repository Structure Blueprint</title>
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&amp;family=Geist+Mono:wght@400;500;600&amp;family=Geist:wght@400;500;600&amp;display=swap');
      .bg { fill: #0C242B; }
      .text-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 20px; fill: #FAF7F2; text-anchor: middle; font-weight: 800; letter-spacing: -0.02em; }
      .text-subtitle { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; text-anchor: middle; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; }
      .container-border { stroke: #1D4451; stroke-width: 1; fill: #08191E; }
      .node-border { stroke: #1D4451; stroke-width: 1; fill: #11333C; }
      .node-border-focal { stroke: #D2506B; stroke-width: 1.2; fill: #1C2E34; }
      .node-border-accent { stroke: #2E9AA0; stroke-width: 1.2; fill: #113840; }
      .node-title { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #FAF7F2; }
      .node-title-focal { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #D2506B; }
      .node-title-accent { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #2E9AA0; }
      .node-sub { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; }
      .node-tech { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #2E9AA0; }
      .edge { fill: none; stroke: #8FB6BD; stroke-width: 1; stroke-dasharray: 2,2; }
    </style>
    <pattern id="dotgrid-r" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="rgba(46, 154, 160, 0.12)" />
    </pattern>
  </defs>

  <rect width="800" height="480" class="bg" />
  <rect width="800" height="480" fill="url(#dotgrid-r)" />

  <text x="400" y="36" class="text-title">ESTRUCTURA DE REPOSITORIO Y STACK</text>
  <text x="400" y="52" class="text-subtitle">MAPA DE DIRECTORIOS, CÓDIGO Y COMPONENTES TÉCNICOS</text>

  <!-- Root Directory Box -->
  <rect x="40" y="96" width="720" height="344" rx="8" class="container-border" />
  <text x="56" y="116" class="node-title-accent" style="font-size: 13px;">REPOSITORY ROOT /</text>

  <!-- Folder scripts/ -->
  <rect x="64" y="136" width="216" height="88" rx="6" class="node-border" />
  <text x="76" y="156" class="node-title">📁 /scripts/</text>
  <text x="76" y="172" class="node-sub">auto-setup.js</text>
  <text x="76" y="188" class="node-tech-muted" style="fill:#8FB6BD;">Local environment validation</text>
  <text x="76" y="200" class="node-tech">Node.js ES6 Scripting</text>

  <!-- Folder diagnosticadoc/ -->
  <rect x="64" y="248" width="216" height="160" rx="6" class="node-border" />
  <text x="76" y="268" class="node-title">📁 /diagnosticadoc/</text>
  <text x="76" y="284" class="node-sub">SKILL.md (Metaprompt)</text>
  <text x="76" y="300" class="node-tech-muted" style="fill:#8FB6BD;">• diagnosticadoc.skill</text>
  <text x="76" y="316" class="node-sub">/references/</text>
  <text x="92" y="332" class="node-tech-muted" style="fill:#8FB6BD;">- benchmarks-dental-mx.md</text>
  <text x="92" y="344" class="node-tech-muted" style="fill:#8FB6BD;">- landing-pages-engineering.md</text>
  <text x="92" y="356" class="node-tech-muted" style="fill:#8FB6BD;">- outreach-y-medicion.md</text>
  <text x="76" y="376" class="node-tech">Strategic Clinical Prompts</text>

  <!-- Core HTML Files -->
  <rect x="304" y="136" width="216" height="272" rx="6" class="node-border-focal" />
  <text x="316" y="160" class="node-title-focal">📄 CORE WEBPAGES</text>
  <text x="316" y="180" class="node-sub">index.html (MVP Landing)</text>
  <text x="316" y="196" class="node-sub">v1.html (React Redesign)</text>
  <text x="316" y="212" class="node-sub">viewer.html (Strategic Workspace)</text>
  <text x="316" y="228" class="node-sub">hub.html (Deliverables Portal)</text>
  <text x="316" y="244" class="node-sub">navigator.js (Floating Menu Widget)</text>
  <text x="316" y="260" class="node-sub">support.js (Helper &amp; Shared Code)</text>
  <text x="316" y="276" class="node-sub">*.html (Dx, BMC, Dashboards)</text>
  <text x="316" y="300" class="node-tech-muted" style="fill:#8FB6BD;">Vanilla ES6+, HTML5 Canvas, SVG</text>
  <text x="316" y="312" class="node-tech-muted" style="fill:#8FB6BD;">Bricolage Grotesque Google Fonts</text>
  <text x="316" y="332" class="node-sub">Markdown Strategics:</text>
  <text x="316" y="348" class="node-tech-muted" style="fill:#8FB6BD;">- mensaje-wa-bundle.md</text>
  <text x="316" y="360" class="node-tech-muted" style="fill:#8FB6BD;">- analytics-kpis-instrumentacion.md</text>
  <text x="316" y="372" class="node-tech-muted" style="fill:#8FB6BD;">- checklist-evidencia.md</text>
  <text x="316" y="392" class="node-tech">Fullstack Presentation Layer</text>

  <!-- Core Configs -->
  <rect x="544" y="136" width="192" height="272" rx="6" class="node-border-accent" />
  <text x="556" y="160" class="node-title-accent">⚙️ CONFIGURATION</text>
  <text x="556" y="180" class="node-sub">vercel.json</text>
  <text x="556" y="196" class="node-tech-muted" style="fill:#8FB6BD;">- cleanUrls: true</text>
  <text x="556" y="208" class="node-tech-muted" style="fill:#8FB6BD;">- trailingSlash: false</text>
  <text x="556" y="220" class="node-tech-muted" style="fill:#8FB6BD;">- X-Robots-Tag Headers</text>
  <text x="556" y="240" class="node-sub">.github/workflows/</text>
  <text x="568" y="256" class="node-tech-muted" style="fill:#8FB6BD;">- deploy.yml</text>
  <text x="568" y="268" class="node-tech-muted" style="fill:#8FB6BD;">• auto-setup Node 22</text>
  <text x="568" y="280" class="node-tech-muted" style="fill:#8FB6BD;">• bot-approval workflow</text>
  <text x="568" y="292" class="node-tech-muted" style="fill:#8FB6BD;">• vercel preview build</text>
  <text x="568" y="304" class="node-tech-muted" style="fill:#8FB6BD;">• github pages deploy</text>
  <text x="556" y="324" class="node-sub">DEPLOYMENT.md</text>
  <text x="556" y="340" class="node-tech-muted" style="fill:#8FB6BD;">- DevLog &amp; Deployment Manual</text>
  <text x="556" y="360" class="node-sub">README.md</text>
  <text x="556" y="376" class="node-tech-muted" style="fill:#8FB6BD;">- Blueprint Onepager</text>
  <text x="556" y="396" class="node-tech">Infrastructure-as-Code (IaC)</text>

  <!-- Connectors -->
  <path d="M 280 180 L 304 180" class="edge" />
  <path d="M 280 328 L 304 328" class="edge" />
  <path d="M 520 272 L 544 272" class="edge" />
</svg>
```

---

## 🗺️ CI/CD Deployment Pipeline & Multi-Cloud Architecture
Este blueprint muestra el ciclo de vida del despliegue, la validación estática paralela de código, y cómo se aprovisionan y sincronizan los hosts redundantes (Vercel Edge y GitHub Pages) para garantizar tolerancia a fallos.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="100%" height="100%" style="border-radius: 8px; background: #0C242B;" role="img" aria-labelledby="deploy-title">
  <title id="deploy-title">ID Smile Deployment Pipeline Blueprint</title>
  <defs>
    <style type="text/css">
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&amp;family=Geist+Mono:wght@400;500;600&amp;family=Geist:wght@400;500;600&amp;display=swap');
      .bg { fill: #0C242B; }
      .text-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 20px; fill: #FAF7F2; text-anchor: middle; font-weight: 800; letter-spacing: -0.02em; }
      .text-subtitle { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; text-anchor: middle; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; }
      .node-border { stroke: #1D4451; stroke-width: 1; fill: #11333C; }
      .node-border-focal { stroke: #D2506B; stroke-width: 1.2; fill: #1C2E34; }
      .node-border-accent { stroke: #2E9AA0; stroke-width: 1.2; fill: #113840; }
      .node-title { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #FAF7F2; }
      .node-title-focal { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #D2506B; }
      .node-title-accent { font-family: 'Geist', sans-serif; font-size: 11px; font-weight: 600; fill: #2E9AA0; }
      .node-sub { font-family: 'Geist Mono', monospace; font-size: 9px; fill: #8FB6BD; }
      .node-tech { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #2E9AA0; }
      .node-tech-muted { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #8FB6BD; opacity: 0.8; }
      .edge { fill: none; stroke: #8FB6BD; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-muted-d); }
      .edge-focal { fill: none; stroke: #D2506B; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-accent-d); }
      .edge-accent { fill: none; stroke: #2E9AA0; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; marker-end: url(#arrow-aqua-d); }
      .edge-label { font-family: 'Geist Mono', monospace; font-size: 8px; fill: #FAF7F2; text-anchor: middle; }
    </style>
    <marker id="arrow-muted-d" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#8FB6BD" />
    </marker>
    <marker id="arrow-accent-d" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#D2506B" />
    </marker>
    <marker id="arrow-aqua-d" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 6 4 L 0 7 z" fill="#2E9AA0" />
    </marker>
    <pattern id="dotgrid-d" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="rgba(46, 154, 160, 0.12)" />
    </pattern>
  </defs>

  <rect width="800" height="480" class="bg" />
  <rect width="800" height="480" fill="url(#dotgrid-d)" />

  <text x="400" y="36" class="text-title">CI/CD PIPELINE Y MULTI-CLOUD HOSTING</text>
  <text x="400" y="52" class="text-subtitle">FLUJO DE TRABAJO AUTOMATIZADO, VALIDACIÓN Y ARQUITECTURA DE DESPLIEGUE Redundante</text>

  <!-- Git Commit Trigger -->
  <rect x="40" y="212" width="112" height="56" rx="6" class="node-border" />
  <text x="52" y="232" class="node-title">GIT TRIGGER</text>
  <text x="52" y="244" class="node-sub">Push or PR to main</text>
  <text x="52" y="256" class="node-tech">GitHub Actions Webhook</text>

  <!-- GitHub Runner -->
  <rect x="192" y="144" width="136" height="192" rx="6" class="node-border-focal" />
  <text x="204" y="168" class="node-title-focal">GHA WORKFLOW RUNNER</text>
  <text x="204" y="184" class="node-sub">deploy.yml (Node 22)</text>
  <text x="204" y="200" class="node-tech-muted">• Checkout Code</text>
  <text x="204" y="212" class="node-tech-muted">• Run static analyses</text>
  <text x="204" y="224" class="node-tech-muted">• Build validation matrix</text>
  <text x="204" y="240" class="node-sub">Automated Bot-PR Review</text>
  <text x="204" y="256" class="node-tech-muted">• Direct review approval</text>
  <text x="204" y="268" class="node-tech-muted">• Fallback feedback comment</text>
  <text x="204" y="284" class="node-tech-muted">Fast feedback loops</text>
  <text x="204" y="304" class="node-tech">CI/CD Automation Engine</text>

  <!-- Auto Setup & Validation -->
  <rect x="368" y="144" width="136" height="192" rx="6" class="node-border-accent" />
  <text x="380" y="168" class="node-title-accent">AUTO-SETUP &amp; MATRIX</text>
  <text x="380" y="184" class="node-sub">scripts/auto-setup.js</text>
  <text x="380" y="200" class="node-tech-muted">• Node local healthchecks</text>
  <text x="380" y="212" class="node-tech-muted">• HTML files checklist</text>
  <text x="380" y="224" class="node-tech-muted">• Broken path verifications</text>
  <text x="380" y="240" class="node-sub">Vercel AI Context Plugin</text>
  <text x="380" y="256" class="node-tech-muted">• Plugins injection</text>
  <text x="380" y="268" class="node-tech-muted">• Non-interactive auto-init</text>
  <text x="380" y="284" class="node-tech-muted">Pre-flight check passed</text>
  <text x="380" y="304" class="node-tech">Validation &amp; Integrity</text>

  <!-- Vercel Edge Target -->
  <rect x="544" y="80" width="216" height="120" rx="6" class="node-border" />
  <text x="556" y="104" class="node-title">HOST 1: VERCEL PRODUCTION</text>
  <text x="556" y="120" class="node-sub">Global Edge Server (Serverless)</text>
  <text x="556" y="136" class="node-tech-muted">• vercel pull &amp; vercel build</text>
  <text x="556" y="148" class="node-tech-muted">• High speed CDN caching</text>
  <text x="556" y="160" class="node-tech-muted">• X-Robots-Tag: noindex, nofollow</text>
  <text x="556" y="172" class="node-tech-muted">• Clean-URL rewriting</text>
  <text x="556" y="188" class="node-tech">Production Clean-URLs Host</text>

  <!-- GitHub Pages Target -->
  <rect x="544" y="280" width="216" height="120" rx="6" class="node-border" />
  <text x="556" y="304" class="node-title">HOST 2: GITHUB PAGES</text>
  <text x="556" y="320" class="node-sub">Static Redundant Mirror (CDN)</text>
  <text x="556" y="336" class="node-tech-muted">• configure-pages &amp; upload-pages</text>
  <text x="556" y="348" class="node-tech-muted">• environment: github-pages</text>
  <text x="556" y="360" class="node-tech-muted">• url outputs tracking</text>
  <text x="556" y="372" class="node-tech-muted">• physical fallbacks mapped on load</text>
  <text x="556" y="388" class="node-tech">Alternative Redundant Host</text>

  <!-- Connectors -->
  <path d="M 152 240 L 192 240" class="edge" />
  <path d="M 328 240 L 368 240" class="edge-focal" />
  <path d="M 504 216 L 524 216 L 524 140 L 544 140" class="edge" />
  <path d="M 504 264 L 524 264 L 524 340 L 544 340" class="edge" />
</svg>
```

---

## ⚡ Addendum: Onepager Infográfico Diagramático
### *(Fullstack Sr Jedi Engineer — Max Resumen)*

Este documento resume la infraestructura estratégica de la plataforma co-existente diseñada para **ID Smile**. Unifica la perspectiva técnica (Fullstack) con los objetivos de negocio y privacidad clínica de manera ultra-resumida.

### 1. Sistema Híbrido de Coexistencia de Versiones (MVP ↔ V1)
Para optimizar costos, mitigar riesgos y acelerar el tiempo de lanzamiento, implementamos una **arquitectura de coexistencia paralela** sin necesidad de bases de datos o redirecciones pesadas de servidor:
* **Conmutador Head Síncrono:** Un script bloqueante ligero inyectado en el `<head>` de `index.html` y `v1.html` que intercepta la carga de forma instantánea.
* **Sin Page-Flash ni Loops:** Almacena la preferencia del usuario en `localStorage` (`preferred-version` = `mvp` | `v1`). Realiza una redirección de ruta física limpia evitando bucles infinitos de recarga.
* **MVP (`index.html`):** Un sitio estático robusto, de alta performance (100% Core Web Vitals) y zero-dependencias.
* **V1 (`v1.html`):** El rediseño premium interactivo y dinámico basado en React.

### 2. Workspace de Visualización Unificado y Extensible (`viewer.html` / `hub.html`)
Ofrece un panel de control interactivo para interactuar directamente con los 10 entregables estratégicos de ID Smile:
* **Lector Markdown Integrado:** Implementa un parser de Markdown super-liviano escrito en Vanilla JS puro que convierte dinámicamente los archivos tácticos `.md` a HTML estructurado sin bibliotecas externas.
* **Simulador de Dispositivo Dual:** Permite alternar la previsualización del sitio móvil y desktop dentro de un iframe interactivo con marcos realistas de hardware.
* **Localhost Clean-URL Resolver & Cross-Platform Path Mapper:** Mapea automáticamente URLs limpias de producción (como `/dashboard`) a archivos locales reales (como `/dashboard-operativo-id-smile.html`) de forma transparente en ambientes de prueba o GitHub Pages, garantizando que el 100% de los links interconecten perfectamente sin 404s en ninguna plataforma.

### 3. Seguridad de IP Médica en Servidor Edge & CI/CD
Toda la documentación estratégica y los borradores clínicos están blindados contra indexación pública accidental:
* **Privacidad de Extremo a Extremo:** Los archivos estratégicos, carpetas internas (`diagnosticadoc/*`) y documentos de diagnóstico clínico inyectan etiquetas meta `<meta name="robots" content="noindex, nofollow">`.
* **Configuración del Servidor Edge:** El archivo `vercel.json` asocia la cabecera HTTP `X-Robots-Tag: noindex, nofollow` de manera granular a todos los subdirectorios internos y archivos Markdown.
* **Pipeline CI/CD Robusto:** GitHub Actions ejecuta automáticamente `scripts/auto-setup.js` para asegurar que el **Vercel Plugin** y las herramientas de IA tengan el contexto listo para solucionar problemas, aprobando de forma automática los pull requests creados por bots o agentes dedicados a mejoras técnicas (*troubleshooting*).

---

## 📂 Mapa Rápido de Archivos del Sistema

| Ruta del Archivo | Tipo de Entregable | Propósito en el Ecosistema |
| :--- | :--- | :--- |
| `index.html` | MVP HTML | Landing page estática, ultra-rápida y optimizada para conversiones de WhatsApp. |
| `v1.html` | React HTML | Rediseño interactivo y premium de la plataforma clínica. |
| `viewer.html` | Workspace | Visualizador interactivo unificado para todos los 10 entregables. |
| `hub.html` | Hub Portal | Punto de entrada unificado y directorio descriptivo de recursos. |
| `vercel.json` | Config de Servidor | Definición de Clean URLs, enrutamiento y cabeceras de privacidad edge. |
| `DEPLOYMENT.md` | Guía de Entorno | Documentación técnica detallada del flujo CI/CD y automatización de agentes. |
| `diagnosticadoc/SKILL.md` | Skill de Agente | Directrices maestros de la metodología estratégico-clínica de la marca. |
