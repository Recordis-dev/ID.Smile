# 🛡️ Arquitectura de Seguridad, Privacidad y Conmutación en 3 Capas
### *ID Smile & diagnosticadoc.com — Workspace de Entregables Estratégicos*

Este documento describe la especificación técnica, de diseño y operativa del sistema de seguridad de **3 Capas de Protección** implementado en el Workspace de ID Smile. Este sistema blinda la propiedad intelectual clínica, la bitácora operativa, el Business Model Canvas y los documentos estratégicos de la marca contra accesos no autorizados, indexación accidental, descargas locales y capturas de pantalla, manteniendo las landings públicas de conversión 100% descubribles y veloces.

---

## 🗺️ Visión General de la Separación de Áreas

La plataforma de ID Smile opera bajo una **Arquitectura de Coexistencia de Versiones** distribuida en dos grandes zonas de visibilidad:

```
                  ┌─────────────────────────────────────────┐
                  │          ENTRADA GENERAL / GET /        │
                  └────────────────────┬────────────────────┘
                                       │
                    Is Public Page? (index.html / v1.html)
                                      / \
                                     /   \
                               Sí   /     \ No (hub.html, viewer.html, etc.)
                                   /       \
                                  ▼         ▼
             ┌────────────────────────┐  ┌────────────────────────┐
             │       ÁREA PÚBLICA     │  │   WORKSPACE INTERNO    │
             │   - Landing MVP        │  │   - Hub de Entregables │
             │   - Landing V1 React   │  │   - Visualizador SPA   │
             │                        │  │   - Nota de Dx Clínico │
             │   * Navegador oculto   │  │   - Dashboard Operativo│
             │   * Sin restricciones  │  │   - Business Canvas    │
             │   * SEO indexable      │  │   - Docs Markdown (.md)│
             └───────────┬────────────┘  └───────────┬────────────┘
                         │                           │
              Shift+DblClick Trigger              Is Authorized?
                         │                          / \
                         ▼                         /   \
                 [ Prompt Passkey ]               /     \
                         │                   Sí  /       \ No
                         ▼                      /         \
                 [ Unlocked State ]            ▼           ▼
                                       ┌──────────────┐  ┌──────────────┐
                                       │ ACCESO LIBRE │  │ PANTALLA DE  │
                                       │ + IP SHIELD  │  │ BLOQUEO (L1) │
                                       └──────────────┘  └──────────────┘
```

### 1. Área Pública (Landing Pages)
* **Objetivo:** Atracción de pacientes, agendamiento rápido por WhatsApp y posicionamiento en buscadores (SEO).
* **Archivos:** `index.html` (Prototipo MVP estático) y `v1.html` (Rediseño premium interactivo en React).
* **Comportamiento de Seguridad:** No se aplican restricciones de copia ni watermarks. El floating navigator se mantiene **completamente invisible** para no dar pistas del directorio interno a pacientes generales.

### 2. Workspace Interno (Deliverables de Diagnóstico)
* **Objetivo:** Espacio interactivo y de soporte analítico reservado para el clínico tratante y el equipo de operaciones.
* **Archivos:** `hub.html` (Deliverable Hub), `viewer.html` (Workspace SPA), `dx-digital-smile-ortodoncia.html` (Nota de Diagnóstico Clínico), `dashboard-operativo-id-smile.html` (Bitácora de Control) y `business-model-canvas-id-smile.html` (Canvas Comercial).
* **Documentos de Soporte (.md):** Todos los archivos de estrategia y guías técnicas en Markdown (`mensaje-wa-bundle.md`, `analytics-kpis-instrumentacion.md`, etc., incluyendo referencias en `diagnosticadoc/`).
* **Comportamiento de Seguridad:** Bloqueo completo por Gatekeeper a nivel de renderizado (Capitaneado por `navigator.js`), con aplicación permanente del IP Shield una vez desbloqueado.

---

## 🔒 Las 3 Capas Sólidas de Seguridad

El motor de control de accesos y protección intelectual se centraliza de manera uniforme en `navigator.js` y se ejecuta síncronamente antes de que el navegador complete la renderización física de la página, implementando las siguientes 3 capas:

### 🌟 CAPA 1: Gatekeeper de Acceso (Autorización por Passkey)
Actúa como la aduana de seguridad para todos los recursos internos.

* **Ocultación de Contenido sin Flash (Anti-FOUC):**
  Si el visitante intenta ingresar directamente a una ruta del Workspace Interno sin estar autorizado, se inyecta dinámicamente un bloque de estilos CSS agresivo directamente en el elemento `<html>`:
  ```css
  body > :not(#ids-lock-screen) {
    display: none !important;
  }
  html, body {
    background: #0C242B !important;
    overflow: hidden !important;
    height: 100vh !important;
  }
  ```
  Esto garantiza que el contenido original de la página se oculte de inmediato a nivel de motor de renderizado del navegador, impidiendo fugas visuales de información clínica mientras se carga el script.
* **Pantalla de Bloqueo Premium (Lock Screen Overlay):**
  Se inyecta una interfaz de entrada oscura y estilizada diseñada bajo principios minimalistas de grilla y contraste. Solicita la Clave de Acceso Jedi.
* **Clave de Acceso Jedi Autorizada:** `IDS-JEDI-2026` *(o el alias 'idsmile-workspace')*.
* **Autenticación por URL Param (Query Parameter Resolver):**
  Para permitir accesos directos desde integraciones externas o correos seguros sin interrumpir el flujo del usuario, el Gatekeeper intercepta parámetros en la barra de direcciones:
  `https://workspace.idsmile.mx/viewer?key=IDS-JEDI-2026`
  Al detectarla, el script guarda la sesión en `localStorage` (`ids-auth-key`) y limpia el parámetro de la URL mediante `window.history.replaceState` de forma transparente. Esto evita que la clave se filtre en capturas de pantalla, marcadores de navegador o el historial local de navegación.

---

### 🌟 CAPA 2: Modo Stealth (Aislamiento de Navegación Pública)
Aísla la existencia de la documentación interna, previniendo la curiosidad accidental o de competidores.

* **Invisibilidad del Hub Flotante:**
  El script unificado de navegación `navigator.js` se inyecta tanto en páginas públicas como internas. En el área pública (`index.html` / `v1.html`), el floating navigation pill ("Navegar") se mantiene **totalmente oculto** y no se añade al árbol de elementos del DOM por defecto.
* **Activador Jedi de Doble Click (Stealth Activation):**
  Un programador o un clínico puede revelar el menú y autorizar la sesión directamente desde las landings públicas realizando un **gesto de doble click** en cualquier elemento del pie de página (`footer`) o haciendo un **doble click general mientras sostiene la tecla Shift**.
  Esto abre un diálogo prompt nativo donde el usuario introduce `IDS-JEDI-2026`. Al autorizarse, el sitio se recarga instantáneamente con el navegador activado y las rutas internas listas para explorar.

---

### 🌟 CAPA 3: IP Shielding & Prevención de Filtraciones (Copy & Print Protection)
Diseñado para mitigar la fuga de información sensible, descargas accidentales o capturas de pantalla del material clínico o comercial estratégico una vez que el usuario ha sido autorizado.

* **Bloqueo de Copia y Arrastre (Copy/Paste Block):**
  * Deshabilita por completo el menú de clic derecho contextual (`contextmenu`).
  * Intercepta y detiene eventos de copiado (`copy`) y corte (`cut`) de texto, mostrando una alerta contextual flotante de advertencia.
  * Bloquea el arrastre de elementos multimedia y diagramas (`dragstart`).
* **Bloqueo de Atajos Teclado (Security Hotkeys):**
  Monitorea combinaciones de teclado críticas a nivel global:
  * `Ctrl + C` / `Cmd + C` (Copiado de portapapeles).
  * `Ctrl + X` / `Cmd + X` (Cortado).
  * `Ctrl + S` / `Cmd + S` (Guardado de página HTML local).
  * `Ctrl + U` / `Cmd + U` (Inspección del código fuente crudo).
* **Bloqueo de Impresión y Exportación a PDF (Print Blocker):**
  Inyecta una directiva CSS para medios físicos y virtuales de impresión:
  ```css
  @media print {
    body {
      display: none !important;
    }
  }
  ```
  Si el usuario intenta presionar `Ctrl + P` o exportar a PDF, la hoja se renderiza en blanco, protegiendo las notas diagnósticas contra impresiones no autorizadas.
* **Watermark Visual Tiled (Marca de Agua Monospace Diagonal):**
  Genera un overlay de pantalla completa inamovible, transparente al puntero (`pointer-events: none`) con un z-index ultra alto (`999999`). Carga una imagen SVG vectorizada dinámicamente con texto repetido y rotado a -25 grados:
  `CONFIDENCIAL - ID SMILE WORKSPACE`
  La marca de agua es semi-transparente (`opacity: 0.035`) y utiliza un gris táctico neutral (`#5A6A70`), haciéndola perfectamente visible y legible tanto en las páginas de tema oscuro (Teal clínico) como en los documentos claros sin obstruir la lectura de gráficos, cronogramas Gantt u hojas de ruta. Cualquier captura de pantalla tomada llevará impresa de forma inamovible la marca de confidencialidad.

---

## 🚀 Guía de Operaciones para Desarrolladores (Jedi DevLog)

### Cómo simular acceso de forma local
1. Levanta un servidor estático local en la raíz:
   ```bash
   python -m http.server 3000
   ```
2. Abre en tu navegador la ruta de desarrollo con el token incorporado:
   `http://localhost:3000/hub.html?key=IDS-JEDI-2026`
3. Verás que el sistema te autoriza de inmediato, limpia la URL y renderiza el Hub de Entregables con la marca de agua activa.

### Cómo purgar la autorización para pruebas
Para volver a simular el estado bloqueado de un paciente o cliente externo, abre la Consola de DevTools (`F12`) y ejecuta:
```javascript
window.localStorage.clear();
window.location.reload();
```
Esto limpiará el token `ids-auth-key`, inyectará el Gatekeeper de inmediato y bloqueará la página sin flashes de contenido.

### Integración en Servidores Edge (Protección SEO en Vercel)
A nivel de servidor Edge, toda la documentación interna está resguardada por el archivo `vercel.json` que complementa este IP Shield inyectando las cabeceras HTTP de privacidad:
```json
{
  "key": "X-Robots-Tag",
  "value": "noindex, nofollow"
}
```
Esto asegura que incluso si un bot evadiera las etiquetas meta `<meta name="robots">`, los motores de búsqueda respetarán la cabecera HTTP a nivel de servidor DNS de Vercel, manteniendo el material estratégico 100% privado en internet.
