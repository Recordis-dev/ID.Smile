# Guía de Despliegue Automatizado y Configuración de Agentes (CI/CD)

Este documento detalla la integración de la infraestructura de despliegue continuo (CI/CD) para **ID Smile** utilizando **GitHub Actions**, **Vercel** y **GitHub Pages**.

Incluye la integración nativa de **Vercel Plugin** (`npx plugins add vercel/vercel-plugin`) para habilitar la resolución automática de problemas (*troubleshooting*) y mejoras continuas (*improvements*) lideradas por agentes de IA, así como un mecanismo de **Aprobación de Bots** (*bot approval*).

---

## 🚀 Arquitectura General del Flujo

```
   [ Desarrollador o Bot de IA ]
                 │ (Push o Pull Request)
                 ▼
     [ GitHub Actions Workflow ]
                 │
                 ├──► Job 1: Auto-Setup & Validation (Inicia Vercel Plugin & Valida archivos HTML)
                 │
                 ├──► Job 2: Bot Approval (Aprueba automáticamente si es bot/mejora)
                 │
                 ├──► Job 3: Deploy to Vercel (Previsualización en PRs / Producción en rama main)
                 │
                 └──► Job 4: Deploy to GitHub Pages (Espejo de respaldo en rama main)
```

---

## 1. Integración de Vercel Plugin (`vercel/vercel-plugin`)

Para potenciar la asistencia de agentes de IA en el desarrollo (como Claude Code, Cursor, GitHub Copilot, etc.), el entorno de CI y desarrollo local incorpora la herramienta oficial de Vercel.

### ¿Por qué lo integramos?
Al ejecutar `npx plugins add vercel/vercel-plugin`, se inyectan en el espacio de trabajo:
- **Grafo de Conocimiento Ecológico:** Todo el contexto oficial de mejores prácticas de Vercel y Next.js.
- **Habilidades especializadas:** 28+ directrices avanzadas de optimización y despliegue.
- **Agentes especialistas en el runner:** Optimizadores de rendimiento y expertos en despliegue que operan directamente durante la ejecución para diagnosticar y corregir errores automáticamente.

---

## 2. Flujo de Trabajo en GitHub Actions (`.github/workflows/deploy.yml`)

El archivo de configuración de GitHub Actions maneja de forma segura e independiente todo el proceso de integración:

### A. Auto-Setup & Validation (`auto-setup`)
- Configura un entorno limpio con Node.js v20.
- Instala globalmente la CLI de Vercel.
- Ejecuta `npx plugins add vercel/vercel-plugin` de manera no interactiva para garantizar que las herramientas de IA tengan el contexto listo.
- Realiza una validación de integridad estática de los archivos del consultorio (`index.html`, `dx-digital-smile-ortodoncia.html`, etc.).

### B. Aprobación Automatizada de Bots (`bot-approval`)
- **Problema:** Los cambios sugeridos por bots de automatización o agentes de IA para solucionar bugs (*troubleshooting*) suelen quedar atascados esperando aprobación manual para integrarse.
- **Solución:** Si un Pull Request (PR) es iniciado por un bot o agente (identificado por tipo o nombre), o si el título/cuerpo incluye palabras clave como `improvement` o `troubleshoot`, la acción utiliza la API de GitHub para **aprobar automáticamente el PR** tras pasar las validaciones.

### C. Despliegue en Vercel (`deploy-vercel`)
- Realiza compilaciones previas (*prebuilds*) utilizando la CLI oficial de Vercel.
- Genera **URLs de Previsualización (Preview URLs)** para cada Pull Request.
- Despliega automáticamente a **Producción** cuando se mezclan cambios a la rama `main`.
- *Nota:* Si las credenciales de Vercel no están configuradas en los secretos de GitHub, el paso muestra una advertencia útil y continúa con elegancia sin romper el pipeline.

### D. Despliegue en GitHub Pages (`deploy-pages`)
- Actúa como un respaldo estático automático y robusto.
- Cada push a la rama `main` compila y publica los archivos estáticos en la infraestructura global de GitHub Pages.

---

## 3. Guía de Configuración Paso a Paso

### Paso 1: Configurar Secretos en tu Repositorio de GitHub
Para activar el despliegue automático en Vercel, ve a la pestaña de configuración de tu repositorio de GitHub (**Settings > Secrets and variables > Actions**) y añade los siguientes secretos:

1. **`VERCEL_TOKEN`**: Tu token de acceso personal de Vercel (se obtiene en Vercel Account Settings > Tokens).
2. **`VERCEL_ORG_ID`**: El ID de tu organización o cuenta de Vercel.
3. **`VERCEL_PROJECT_ID`**: El ID del proyecto creado en Vercel.

*Nota: `GITHUB_TOKEN` es proporcionado automáticamente por GitHub en cada ejecución.*

### Paso 2: Ejecución Local de Pruebas y Diagnóstico
Puedes ejecutar el script de diagnóstico y auto-instalación localmente para asegurarte de que todo está en orden antes de subir tus cambios:

```bash
node scripts/auto-setup.js
```

Este script:
- Verificará que tu entorno de Node.js y npm sea compatible.
- Instalará el **Vercel Plugin** de IA en tu espacio de trabajo.
- Validará que no existan enlaces rotos, atributos vacíos o redirecciones de WhatsApp mal formadas en los archivos del proyecto.
- Te indicará si falta alguna variable de entorno local para despliegues.

---

## 4. Estructura de Rutas Limpias en Vercel (`vercel.json`)

Para que el sitio no luzca como un conjunto de archivos estáticos genéricos, el archivo `vercel.json` en la raíz del proyecto reescribe y optimiza las rutas URL:

- **Inicio**: `/` carga `index.html` (El sitio web principal MVP de ID Smile).
- **Diagnóstico**: `/diagnostico` carga `dx-digital-smile-ortodoncia.html` (La infografía y expediente clínico).
- **Tablero**: `/dashboard` carga `dashboard-operativo-id-smile.html` (El dashboard de control).
- **Modelo de Negocio**: `/bmc` carga `business-model-canvas-id-smile.html` (El Canvas estratégico).

Esto le permite a ID Smile presentar URLs limpias y profesionales a los doctores y pacientes, ocultando la extensión `.html` y mejorando enormemente la confianza y la indexación en motores de búsqueda (SEO local).
