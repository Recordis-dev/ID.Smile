# Workspace de ID Smile & Diagnosticadoc

Ecosistema digital unificado para ID Smile, diseñado e implementado con una arquitectura premium de coexistencia de versiones (MVP y V1) y una suite integrada de entregables estratégicos para el vertical de salud en México.

---

## 🗺️ System Blueprint: Fullstack Architecture
El siguiente diagrama ha sido diseñado siguiendo rigurosamente las pautas de [Diagram Design de Cathryn Lavery](https://github.com/cathrynlavery/diagram-design), con un enfoque minimalista editorial, alineación precisa en grilla divisible por 4, tipografía Geist/Instrument Serif y énfasis focal selectivo.

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
* **Localhost Clean-URL Resolver:** Mapea automáticamente URLs limpias de producción (como `/dashboard`) a archivos locales reales (como `/dashboard-operativo-id-smile.html`) de forma transparente para simplificar el testing fuera del servidor edge.

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
