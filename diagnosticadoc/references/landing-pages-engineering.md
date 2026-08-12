# Ingeniería de Landing Pages de Alta Conversión y Prestigio para Especialistas Médicos

Leer este archivo cuando la tarea sea **construir o codear** el sitio/landing page de un médico especialista (no solo diseñar la estrategia — para eso ver el `SKILL.md` principal). Este documento recopila la abstracción metodológica, arquitectura técnica y estrategia de conversión de un caso real (Dr. Pedro Avilés, traumatólogo de columna), generalizable a cualquier especialista.

---

## 1. Visión general y propósito

El objetivo de este patrón es resolver la tensión clásica de los sitios médicos: **cómo proyectar autoridad científica e institucional, manteniendo una experiencia de usuario cálida, accesible y de altísima conversión** (generación de citas de pacientes de alto valor).

### Enfoque comparativo (v1, v2, v3)

En lugar de lanzar una landing page monolítica, se puede diseñar un **selector de versiones** (`index.html`) con un iframe que carga tres variaciones estratégicas (`v1.html`, `v2.html`, `v3.html`). Esto permite:

1. **A/B testing en vivo** — comparar rendimiento de layouts tradicionales vs. interactivos.
2. **Modularidad de contenidos** — catálogo compacto de servicios estrella vs. catálogo masivo categorizado.
3. **Optimización técnica incremental** — refinar CSS/JS de forma aislada sin afectar versiones anteriores.

Patrón de inclusión:

```html
<div id="selector-bar">
  <span>Seleccionar Versión:</span>
  <button class="version-btn active" onclick="loadVersion('v1.html', this)">Versión 1</button>
  <button class="version-btn" onclick="loadVersion('v2.html', this)">Versión 2</button>
  <button class="version-btn" onclick="loadVersion('v3.html', this)">Versión 3</button>
</div>
<iframe id="version-frame" src="v1.html"></iframe>
```

## 2. Progresión de versiones (patrón de evolución)

**v1 — Base clásica de prestigio.** Diseño tradicional, lineal, limpio. Tipografía Serif elegante + paleta corporativa. Catálogo compacto (3-4 servicios estrella). Desplazamiento vertical continuo, fade-in simple vía `IntersectionObserver`. Conversión: formulario clásico al final + botón flotante de WhatsApp.

**v2 — Interactividad y "Smart Triage".** Evoluciona hacia una experiencia interactiva pre-consulta:
- **Smart Triage:** componente en el Hero donde el paciente selecciona su síntoma/zona de dolor y el sistema despliega un pre-diagnóstico educativo con CTA personalizada.
- **Outcomes Strip:** barra horizontal bajo el Hero con métricas de confianza (institución, tiempo de respuesta, % basado en evidencia).
- **Trust Banner:** consolidación visual de los pilares éticos de la práctica.
- **Sticky Vertical Index:** menú lateral pegajoso que navega entre tarjetas de servicios.
- **Slide-out Form Panel:** los CTAs abren un cajón lateral modal en vez de saltar al final de la página, reduciendo fricción cognitiva.
- **Mobile Bottom Bar:** barra inferior persistente con WhatsApp directo + botón de agendamiento.

**v3 — Máxima precisión clínica y escalabilidad editorial.** Rigor médico absoluto:
- **Restricción de especialidad:** eliminar cualquier término de subespecialidad que el médico no posea formalmente (verificar credenciales exactas antes de escribir).
- **Catálogo expandido (10+ servicios)** organizado en subcategorías bajo el mismo Sticky Index.
- **Consistencia de credenciales:** unificar referencias formativas exactamente como el médico las presenta (institución, posgrado, afiliaciones).
- **Localización estricta:** español neutro en todo el contenido y en el marcado semántico (JSON-LD), evitando anglicismos.

## 3. Arquitectura técnica: "Cero dependencias y máximo rendimiento"

Para una landing page standalone (no Next.js), el patrón de referencia evita frameworks (React/Angular/Vue) y librerías pesadas (jQuery/Bootstrap): HTML5 + CSS3 + Vanilla JS puro, todo inline.

Ventajas:
- **Velocidad instantánea** (Lighthouse 98-100%): cero llamadas a APIs de terceros, CSS/JS embebido, sin bloqueo de renderizado.
- **Estabilidad absoluta:** sin dependencias externas, inmune a caídas de librerías/CDNs.
- **Óptimo para tráfico móvil:** pacientes buscando alivio urgente suelen estar en redes móviles — una página ligera evita el abandono antes de cargar.

Cuando el build real es en Next.js (stack habitual de Grow Flow Automation), usar este mismo principio como meta de rendimiento: minimizar dependencias de terceros en el critical path, priorizar componentes estáticos/SSG sobre client-side pesado, y aplicar los mismos patrones de UX (Sticky Index, Slide-out Panel, Mobile Bottom Bar) con la librería de animación que ya esté en el stack.

## 4. Guía de UI/UX y diseño visual

### Paleta de referencia (variante navy/dorado — adaptar por especialidad y cliente)

| Tono | Hex | Rol | Impacto psicológico |
|---|---|---|---|
| Navy Profundo | `#08172e` | Fondos principales, Hero, Footer, títulos de alta jerarquía | Seriedad, rigor científico, estabilidad institucional |
| Dorado Metálico | `#b8922a` / `#d4a843` | Acentos, bordes, iconos, CTAs primarios, badges | Exclusividad, maestría, calidad premium |
| Verde Clínico | `#10b981` | Botones de WhatsApp, alertas de urgencia, confirmaciones | Alivio, sanación, respuesta rápida |
| Blanco Off-white | `#ffffff` / `#f8f9fb` | Fondos de secciones de lectura prolongada | Pulcritud hospitalaria, higiene, claridad |

(Ver el `SKILL.md` principal para una segunda variante — paleta forest/sage/gold usada en el caso de algología. El método siempre es el mismo: elegir tonos que huyan de defaults genéricos de IA, nunca reciclar la misma paleta sin adaptarla al cliente.)

### Tipografía

1. **Serif de prestigio** (`Cormorant Garamond`, `Playfair Display` o `Fraunces`): exclusiva para encabezados de sección (`h1`, `h2`), frases célebres y citas del médico. Evoca herencia académica y tradición científica.
2. **Sans-serif limpia** (`DM Sans` o `Inter`): para menús, texto descriptivo, formularios, botones y tablas. Legibilidad óptima en móvil, transmite modernidad técnica.

### Efectos y microinteracciones

- **Active Blinking Indicator:** punto luminoso animado junto al badge de especialidad en el Hero, para simular actividad y precisión constante.
- **Fade-Up con IntersectionObserver:** contenido que aparece al scroll con desplazamiento vertical de ~22px y transición de opacidad de ~0.7s.
- **Sticky Interactive Services Navigation:** menú flotante que cambia de pestaña activa según la sección que se esté leyendo.

## 5. Estrategia de copywriting médico (E-E-A-T)

El copywriting para servicios de salud debe alinearse con **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) de Google y con la psicología del paciente en dolor/ansiedad.

Estructura de mensaje de alto impacto:

1. **Premisa fundamental:** conectar el problema clínico con la libertad/dignidad del paciente, no solo con la anatomía (ej. "Recupera tu movimiento. Recupera tu vida.").
2. **Compromiso ético explícito:** usar la máxima que aplique a la especialidad (ej. *Primum Non Nocere*) para contrarrestar el miedo principal del paciente.
3. **Factor de autoridad institucional:** nombrar la institución/posgrado exacto del médico como sello de rigor — siempre verificado, nunca inflado.
4. **Diferenciador "Blue Ocean":** posicionar alternativas de menor invasión o riesgo cuando existan, como alternativa inteligente a la opción tradicional más temida.

## 6. Sitemap informativo (patrón replicable)

```
[HERO] ────────────────────► Captura atención, define especialidad, Triage interactivo (si aplica).
   │
[OUTCOMES STRIP] ──────────► Credenciales numéricas duras (institución, tiempo de respuesta, evidencia).
   │
[TRUST BANNER] ────────────► Sello de calidad ética.
   │
[SOBRE MÍ] ─────────────────► Conexión humana (historia, formación, motivación personal).
   │
[SERVICIOS] ────────────────► Catálogo categorizado con índice interactivo.
   │
[FILOSOFÍA MÉDICA] ─────────► Pilares operativos de la práctica.
   │
[EDUCACIÓN/BLOG] ───────────► Posicionamiento de conocimiento, podcast si aplica.
   │
[FAQ] ───────────────────────► Derriba objeciones (costos, seguros, segundas opiniones, tiempos).
   │
[CONTACTO/CTA] ──────────────► Cierre con múltiples canales rápidos (WhatsApp, formulario, slide panel).
```

## 7. Requisitos técnicos obligatorios (checklist de build)

1. **Zero-dependency** (si es standalone) o mínimas dependencias en el critical path (si es Next.js).
2. **Responsive extremo:** Flexbox/Grid + media queries exactos; Mobile Bottom Sticky Bar con WhatsApp + Agendamiento.
3. **CSS/JS inline o co-localizado** para minimizar llamadas de bloqueo (si standalone).
4. **SEO médico:** JSON-LD `Physician` con especialidades exactas, procedimientos clave y afiliación hospitalaria — en español, sin anglicismos en el marcado.
5. **Verificación de especialidad:** antes de escribir cualquier copy, confirmar con el cliente el alcance exacto de su título/certificación.

## 8. Metaprompt maestro "De Novo" (para generación asistida por IA de un sitio completo)

Usar como punto de partida cuando se necesite generar rápido un borrador completo de sitio para un nuevo médico. Adaptar nombre, especialidad, paleta y catálogo de servicios al cliente real — nunca reusar literalmente el caso Dr. Pedro Avilés.

```text
Eres un Ingeniero Frontend Senior y Diseñador UX/UI especializado en conversión digital
para el sector de salud premium. Tu misión es programar desde cero un sistema de landing
pages médicas comparativas de alta gama y ultra-rendimiento para el especialista:
[INSERTAR NOMBRE DEL MÉDICO] y su clínica [INSERTAR NOMBRE DE LA CLÍNICA].

El sistema debe incluir un selector interactivo de versiones ("index.html") que inyecte,
vía iframe, tres variaciones estáticas optimizadas ("v1.html", "v2.html", "v3.html").

REQUISITOS TÉCNICOS OBLIGATORIOS:
1. Arquitectura zero-dependency: HTML5 semántico puro, CSS3 modular in-file con variables
   nativas, Vanilla JS optimizado. Sin frameworks ni librerías externas.
2. Optimización móvil extrema: Flexbox/Grid + media queries exactos. Mobile Bottom Sticky
   Bar con botones rápidos de WhatsApp y Agendamiento.
3. Velocidad: CSS y JS inyectados dentro de <style>/<script> en cada archivo html.
4. SEO médico: JSON-LD "Physician" con especialidades exactas, procedimientos clave y
   afiliación hospitalaria, en español.

DIRECTRICES DE DISEÑO:
1. Paleta de alta gama adaptada a [ESPECIALIDAD] — evitar defaults genéricos de IA
   (nada de beige #F4F1EA ni terracota #D97757 sin justificación).
2. Emparejamiento tipográfico: Serif de prestigio para encabezados/citas + Sans-serif
   limpia para menús/formularios/texto descriptivo.
3. Efectos: blink dot en el Hero, fade-in con IntersectionObserver, Sticky Index lateral
   en desktop, Slide-Out Panel para agendamiento express.

DIRECTRICES DE COPYWRITING (E-E-A-T):
1. Restricción de especialidad: nunca asumir títulos que el médico no posee formalmente.
2. Autoridad institucional: usar la formación/posgrado exacto del médico, verificado.
3. Filosofía ética explícita de la especialidad.
4. Diferenciador Blue Ocean: alternativas de menor invasión/riesgo cuando existan.

VARIACIONES A GENERAR:
- v1.html: lineal, catálogo compacto (3-4 servicios estrella), formulario estático al pie.
- v2.html: agrega Smart Triage, Outcomes Strip, Sticky Index, Slide-Out Panel.
- v3.html: conserva todo de v2, expande catálogo a 10+ servicios categorizados,
  localización estricta al español neutro.

Genera el código fuente completo, operativo y responsivo para cada archivo
(index.html, v1.html, v2.html, v3.html), asegurando que menú móvil, IntersectionObserver,
Smart Triage, Sticky Index, FAQ accordions y Slide-Out Panel funcionen sin errores.
```

## 9. Insights clave

1. **La conversión está en los detalles móviles.** Más del 80% del tráfico inicial en salud es móvil. El Sticky Menu de escritorio ayuda estéticamente, pero la **Mobile Bottom Sticky Bar** + **Slide-Out Form Drawer** es lo que realmente mueve la aguja en conversión.
2. **La confianza (E-E-A-T) no se presume, se diseña.** Mostrar la institución/afiliación exacta y anclarse a un principio ético explícito crea una barrera protectora psicológica que incrementa la propensión a contactar.
3. **El "triaje" autoevaluativo reduce el rebote.** Un componente interactivo que resuelve dudas inmediatas en los primeros 10 segundos mantiene al paciente activo en el sitio y lo guía orgánicamente al embudo de agendamiento.
