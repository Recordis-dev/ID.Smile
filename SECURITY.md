# 🛡️ Arquitectura de Seguridad, Privacidad y Conmutación en 3 Capas
### *ID Smile & diagnosticadoc.com — Matriz de Privacidad y Separación de Información*

Este documento describe la especificación técnica, de diseño y operativa del sistema de seguridad de **3 Capas de Protección** implementado en el Workspace de ID Smile. Este modelo segrega de forma estricta los activos públicos de captación de pacientes frente a los entregables del cliente, la bitácora operativa de dashboards internos, y la documentación táctica en Markdown, garantizando el cumplimiento de la directiva `noindex, nofollow` tanto a nivel HTML como en el servidor Edge de Vercel.

---

## 🗺️ Matriz de Visibilidad e Información Separada (Rutas Noindexadas)

Hemos dividido el repositorio de ID Smile en **4 niveles diferenciados de acceso y visibilidad** para separar estratégicamente el tráfico público del paciente, el workspace interactivo del clínico, el dashboard interno de control y el repositorio de documentos técnicos:

| Nivel de Información | Propósito Estratégico | Archivo(s) Físico(s) | Ruta Limpia (Vercel) | Indexable (SEO) | Meta Robots / X-Robots-Tag | Capa L1 Gatekeeper | Capa L3 IP Shield / Watermark |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Área Pública** | Conversiones de pacientes, velocidad y SEO | `index.html`<br>`v1.html` | `/`<br>`/v1` | **Sí** | `index, follow` (Permitido) | No (Oculto) | No (Área Libre) |
| **2. Client Workspace** | Entregables interactivos para el Dr/Director | `dx-digital-smile-ortodoncia.html`<br>`business-model-canvas-id-smile.html` | `/dx`<br>`/bmc` | **No** | `noindex, nofollow` | **Sí** (Passkey) | **Sí** (Watermark & Copy Block) |
| **3. Operational Dashboard** | Bitácora interna de desarrollo, métricas y KPIs | `dashboard-operativo-id-smile.html`<br>`viewer.html` *(SPA)* | `/dashboard`<br>`/viewer` | **No** | `noindex, nofollow` | **Sí** (Passkey) | **Sí** (Watermark & Copy Block) |
| **4. Tactical Document Repo** | Estrategia de Outreach, Metaprompts y Referencias | `*.md`<br>`diagnosticadoc/**/*.md` | `/viewer?doc=...`<br>`/*.md` | **No** | `noindex, nofollow` | **Sí** (Passkey) | **Sí** (Watermark & Copy Block) |

---

## 📂 Detalle de Niveles de Acceso y Rutas

### Nivel 1: Área Pública (Public Conversions)
* **Descripción:** Espacio abierto y optimizado para tráfico móvil y pacientes.
* **Rutas Físicas y Limpias:**
  * `/index.html` o `/` ── Landing Page MVP (Estático de Carga Rápida).
  * `/v1.html` o `/v1` ── Prototipo Rediseño Premium V1 (React).
* **Control de indexación:** Totalmente visible. Optimizado para indexadores web de motores de búsqueda.
* **Comportamiento Stealth:** El floating navigator flotante está **100% oculto** por defecto. No existe visibilidad pública de las carpetas internas de diagnóstico para el paciente casual.

### Nivel 2: Workspace de Entregables del Cliente (Client Workspace)
* **Descripción:** Los diagnósticos clínicos e historias de negocio destinados a ser compartidos formalmente con el cliente (ortodoncistas, dueños de la clínica).
* **Rutas Físicas y Limpias:**
  * `/dx-digital-smile-ortodoncia.html` o `/dx` ── Nota de Diagnóstico Clínico Digital con Arcada SVG Interactiva.
  * `/business-model-canvas-id-smile.html` o `/bmc` ── Business Model Canvas Estratégico.
* **Control de indexación:** Blindado contra motores de búsqueda usando etiquetas `<meta name="robots" content="noindex, nofollow">` en el `<head>` de los HTMLs y la regla global `X-Robots-Tag: noindex, nofollow` en `vercel.json` para las rutas `/dx` y `/bmc`.
* **Seguridad:** Requiere de autorización de la Capa 1 y aplica Copy Blocker y Watermark Tiled (Capa 3).

### Nivel 3: Dashboard Operativo e Instrumentación de KPIs (Operations Space)
* **Descripción:** Panel de control de uso estrictamente interno del equipo técnico y de Growth para monitorear el Gantt, devlogs y métricas de desempeño.
* **Rutas Físicas y Limpias:**
  * `/dashboard-operativo-id-smile.html` o `/dashboard` ── Dashboard Operativo de 12 semanas.
  * `/viewer.html` o `/viewer` ── Workspace Visualizador SPA central de entregables.
* **Control de indexación:** Enrutado estrictamente con políticas `noindex, nofollow` a nivel HTML y reglas de cabeceras de servidor Edge Vercel en `vercel.json` para `/dashboard` y `/viewer`.
* **Seguridad:** Requiere obligatoriamente autorización de la Capa 1 (Passkey) y aplica IP Shielding (Capa 3).

### Nivel 4: Repositorio de Documentación Táctica (Technical Document Repo)
* **Descripción:** Archivos de documentación técnica, planes de abordaje, metaprompts y benchmarks del vertical de ortodoncia.
* **Rutas Físicas y Limpias:**
  * Root `.md` files (como `mensaje-wa-bundle.md`, `analytics-kpis-instrumentacion.md`, `checklist-evidencia.md`, `DEPLOYMENT.md`).
  * Subdirectorio de habilidades de Agentes y Benchmarks en `diagnosticadoc/SKILL.md` y `diagnosticadoc/references/*.md`.
* **Control de indexación:** El archivo `vercel.json` asocia la cabecera HTTP `X-Robots-Tag: noindex, nofollow` de manera granular a todos los archivos que coincidan con la expresión regular `/(.*)\.md` y al directorio `/diagnosticadoc/:path*`.
* **Seguridad:** No pueden ser cargados en texto plano o visualizados a través de `/viewer` a menos que se cuente con la autorización del Gatekeeper.

---

## 🔒 Las 3 Capas Sólidas de Seguridad

El motor de control de accesos y protección intelectual se centraliza de manera uniforme en `navigator.js` y se ejecuta síncronamente antes de que el navegador complete la renderización física de la página, implementando las siguientes 3 capas:

### 🌟 CAPA 1: Gatekeeper de Acceso (Autorización por Passkey)
Actúa como la aduana de seguridad para todos los recursos internos.

* **Ocultación de Contenido sin Flash (Anti-FOUC):**
  Si el visitante intenta ingresar directamente a una ruta de los Niveles 2, 3 o 4 sin estar autorizado, se inyecta dinámicamente un bloque de estilos CSS agresivo directamente en el elemento `<html>`:
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
  La marca de agua es semi-transparente (`opacity: 0.035`) y utiliza un gris táctico neutral (`#5A6A70`), haciéndola perfectamente visible y legible tanto en las páginas de tema oscuro (Teal clínico) como en los documentos claros sin obstruir la lectura de gráficos, cronogramas Gantt u hojas de ruta. Cualquier captura de pantalla tomada llevará de forma inamovible la marca de confidencialidad del proyecto.

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
