---
name: diagnosticadoc
description: >-
  Sistema para diagnosticar, diseñar, presentar y vender estrategias de marketing
  digital a médicos especialistas (algólogos, traumatólogos, cirujanos, cualquier
  subespecialidad con alta autoridad clínica y baja presencia digital), usando la
  metáfora "historia clínica / diagnóstico / tratamiento" como lenguaje unificador de
  todos los entregables. Usar SIEMPRE que el usuario pida: auditar la presencia digital
  de un médico o clínica, formular estrategia digital para salud, crear pitch deck o
  dashboard para un doctor/a, redactar outreach/ventas a médicos, construir sitio web o
  landing page para un consultorio médico, diseñar calculadora de ROI médica, o crear
  entregables con estética "clínica/expediente médico" — aunque no digan
  "diagnosticadoc". Activar también con "Dx digital", "medfluencer", o cuando el
  cliente/prospecto de Grow Flow Automation sea un médico especialista.
---

# DiagnosticaDoc — Estrategia Digital para Médicos Especialistas

Sistema de marketing clínico-narrativo, generalizable a cualquier médico especialista (no depende del caso original). Producto de Grow Flow Automation para el vertical de salud.

## 0. Cuándo usar esta skill

Consulta este archivo completo cada vez que el trabajo involucre a un médico especialista como cliente o prospecto: auditorías, pitch decks, dashboards, sitios web/landing pages, mensajes de outreach, BMC, infografías de diagnóstico, o calculadoras de ROI. Si la tarea es específicamente **construir/codear el sitio web o landing page**, después de leer este archivo lee también `references/landing-pages-engineering.md`, que contiene la arquitectura técnica completa (HTML/CSS/JS zero-dependency), la paleta/tipografía de referencia y un metaprompt maestro listo para adaptar.

## 1. Insight central

Los médicos especialistas de alto nivel (certificaciones internacionales, ponencias, congresos) casi nunca tienen una presencia digital proporcional a su autoridad clínica real. El gap no es de calidad — es de **traducción**: nadie ha convertido su expediente de credenciales en un sistema digital legible por Google, por Doctoralia y por un paciente ansioso buscando alivio a las 11pm.

## 2. La solución de formato

En vez de presentar la estrategia digital con vocabulario genérico de marketing (funnels, CTR, buyer persona), se narra todo el proceso en el propio lenguaje del médico: historia clínica, motivo de consulta, exploración física, signos vitales, diagnósticos diferenciales, diagnóstico, tratamiento (Rx), plan, pronóstico. Esto logra tres cosas a la vez:

1. **Empatía instantánea** — el médico reconoce el formato en el que piensa todos los días.
2. **Credibilidad de método** — se percibe como un proceso riguroso, no una promesa vaga.
3. **Memorabilidad** — un "diagnóstico" con nombre propio (ej. "Síndrome de Autoridad Clínica Silenciosa") se recuerda y se repite, incluso se comparte.

## 3. Principios rectores (innegociables)

- **Nunca fabricar datos.** Todo el análisis parte de evidencia real disponible (capturas de pantalla, perfiles públicos, búsquedas web). Donde falta información, se marca explícitamente `[VERIFICAR]` en vez de inventarse. Los archivos `references/benchmarks-<especialidad>-mx.md` son la única excepción controlada: cifras de **sector**, con fuente y año, que se usan como referencia mientras se completa la evidencia real — y que se etiquetan siempre como "referencia del sector", nunca como dato de la clínica.
- **Diagnóstico antes que receta.** Nunca se presenta una "solución" sin antes mostrar, con evidencia, cuál es la brecha exacta. Orden narrativo siempre: contexto → hallazgos → brecha → diagnóstico → tratamiento → pronóstico. Invertir este orden rompe la metáfora y se siente como venta agresiva genérica.
- **Un solo sistema de diseño para todos los entregables.** Pitch deck, sitio web, dashboard, infografía clínica y calculadora de ROI comparten paleta, tipografía y tono — para que el prospecto sienta que está viendo un solo "expediente", no una colección de PDFs de agencia.
- **La metáfora médica se extiende hasta donde sea honesta, y se detiene donde deja de serlo.** Se usa para estructura y tono — nunca para prometer resultados clínicos, ni para simular literalmente un diagnóstico médico real. Todo entregable que use esta metáfora debe llevar un disclaimer claro de que es una analogía de comunicación estratégica, no un diagnóstico médico.
- **Cada entregable debe sostenerse solo**, pero todos deben poder leerse en secuencia como una sola historia.
- **Transparencia activa sobre supuestos.** Datos estimados (tipo de cambio, precio de seguimiento como % de consulta, etc.) se declaran como editables/ajustables en el propio entregable — nunca como hechos duros.
- **Restricción de especialidad clínica.** Nunca atribuir al médico un título o subespecialidad que no posee formalmente (ej. no llamar "neurocirujano" a un traumatólogo de columna). Verificar credenciales exactas antes de redactar cualquier copy.

## 4. Proceso end-to-end (fases replicables)

**Fase 0 — Auditoría de contexto disponible.** Reunir todo el material existente del médico: capturas de perfiles (Doctoralia, Google, redes), flyers, fotos de conferencias/congresos, cualquier PDF o post existente. No pedirle al cliente que resuma su propia presencia — auditar directamente la evidencia. Output: lista de hallazgos crudos (qué existe, qué falta, qué está roto/desactualizado).

**Fase 1 — Deep research complementario.** Buscar en web información pública adicional: perfil profesional, clínica/marca bajo la que opera, certificaciones, congresos, cobertura de prensa. Todo dato usado debe ser verificable; si una fuente bloquea el acceso, se declara la limitación en vez de inferir.

**Fase 2 — Formulación de la estrategia (framework de 4 pilares / 12 semanas).** Convertir hallazgos en un plan estructurado (ver sección 6). Orden de prioridad siempre: 1) existir y ser encontrable (fundación) → 2) construir autoridad → 3) convertir en citas → 4) fidelizar/multiplicar reputación. Nunca invertir en pauta pagada antes de tener fundación digital sólida.

**Fase 3 — Pitch deck (.pptx).** 10–14 slides: portada, diagnóstico, activos de autoridad no explotados, oportunidad de mercado, framework de 4 pilares, un slide por pilar, cronograma tipo Gantt, KPIs, cierre/CTA.

**Fase 4 — Dashboard one-pager.** Documento operativo (no de venta): bitácora del proceso, tabla de gap analysis con severidad por área, cronograma visual de 12 semanas, tarjetas de KPI.

**Fase 5 — Metaprompt standalone para el sitio web.** Especificación autosuficiente que cualquier herramienta de generación pueda ejecutar de punta a punta: quién es el médico, diagnóstico, estrategia en la que vive el sitio, objetivo de una frase, tokens de diseño exactos, estructura de secciones con copy real, tono, requisitos técnicos, y explícitamente qué NO debe hacer el sitio. → Ver `references/landing-pages-engineering.md` para el patrón completo y un metaprompt maestro adaptable.

**Fase 6 — Construcción del sitio v1 (MVP).** Ejecutar el metaprompt como especificación de build real (HTML/CSS/JS o el stack disponible — para Grow Flow, normalmente Next.js). Un long-scroll con navegación ancla, hero con elemento-firma, tarjetas de padecimientos/servicios, sección de autoridad, prueba social, contacto con WhatsApp deep-link.

**Fase 7 — Business Model Canvas de expansión.** Traducir la estrategia a los 9 bloques del BMC estándar, marcando explícitamente con una etiqueta visual "(nuevo)" cada canal, actividad o fuente de ingreso que la estrategia digital añade sobre lo que ya existía.

**Fase 8 — Copy de outreach/ventas.** Mensaje (WhatsApp u otro canal) que inicia la relación comercial, con estructura de "value stack" (oferta empaquetada con lead magnet gratuito primero, sin pedir confianza a ciegas). Ver sección 7.

**Fase 9 — Infografía de diagnóstico (pieza-insignia).** El documento más denso en metáfora clínica: nota de ingreso completa (ficha, motivo de consulta, HPI, signos vitales digitales, DDx, Dx con nombre propio, formulación 5P, Rx/plan, pronóstico). Es la pieza que más se comparte y la que ancla la marca "diagnosticadoc" como producto repetible.

**Fase 10 — Calculadora de ROI interactiva.** Dashboard con sliders en vivo: capacidad clínica real (días/pacientes/precio), comisiones por procedimiento, ingresos recurrentes, colaboraciones, valor de autoridad — sumados y comparados contra el costo de la inversión, con cálculo de punto de equilibrio.

**Fase 11 — Iteración fina basada en feedback directo.** Todos los entregables se ajustan en vivo según feedback puntual (ej. cambiar un H1 por el lema real de marca, convertir un valor fijo en slider). Cada ajuste se hace directamente sobre el archivo existente (edición in-place), nunca regenerando desde cero, para preservar el resto del trabajo intacto.

## 5. Arquitectura de información / sitemap del sistema de entregables

```
Auditoría (Fase 0-1)
   │
   ├── Diagnóstico compartido (usado por TODOS los entregables siguientes)
   │      • Hallazgos crudos
   │      • Gap analysis
   │      • Activos de autoridad no explotados
   │
   ├──▶ Pitch Deck (.pptx)              — para presentar/vender la estrategia
   ├──▶ Dashboard one-pager (.html)      — devlog + gap analysis + timeline
   ├──▶ Metaprompt sitio (.md)           — especificación standalone para generación de sitio
   │        └──▶ Sitio web v1            — el MVP público
   ├──▶ Business Model Canvas (.html)    — canales/ingresos nuevos vs. existentes
   ├──▶ Mensaje de outreach              — copy de venta inicial
   ├──▶ Infografía Dx clínica (.html)    — pieza de marca
   └──▶ Calculadora ROI (.html)          — cierre de venta con números en vivo
```

**Regla de dependencia:** el diagnóstico (hallazgos + gap analysis) es la única fuente de verdad. Todos los demás entregables citan el mismo diagnóstico con las mismas cifras — nunca se recalculan o redescriben desde cero en cada pieza, para evitar inconsistencias entre documentos.

### Sitemap del sitio web (patrón replicable, single long-scroll)

```
/
 ├── Header (sticky) — logo + nav ancla + botón WhatsApp siempre visible
 ├── #hero — lema de marca + credencial headline + doble CTA + elemento-firma
 ├── #servicios/#padecimientos — grid de tarjetas, cada una con micro-CTA
 ├── #doctor(a) — bloque de autoridad: retrato + credenciales en lenguaje de paciente
 ├── #opiniones — prueba social honesta (rating real)
 ├── #contacto — dirección, teléfonos, horarios, mapa, CTA final grande
 └── footer — marca + año + nota de versión
```

Pensado para crecer sin rediseño: cada tarjeta de servicio puede convertirse luego en una landing page individual sin tocar la estructura general.

## 6. Framework de estrategia: 4 pilares / 12 semanas

Adaptar los nombres exactos a la especialidad del médico, pero mantener el orden de prioridad:

1. **Pilar 1 — Fundación:** existir y ser encontrable (Google Business Profile, Doctoralia, sitio web básico, WhatsApp Business, NAP consistente).
2. **Pilar 2 — Autoridad:** contenido educativo, credenciales visibles, prensa/podcast, testimonios.
3. **Pilar 3 — Conversión:** landing pages por padecimiento/servicio, formularios de agendamiento, pauta pagada (Google/Meta Ads) — solo después de que 1 y 2 estén sólidos.
4. **Pilar 4 — Fidelización/reputación:** seguimiento post-consulta, solicitud de reseñas, referidos, contenido recurrente.

## 7. Framework de copywriting de outreach ("value stack")

1. Abrir con un hallazgo específico y verificable del diagnóstico (no un cumplido genérico).
2. Nombrar la brecha en una frase memorable (el "diagnóstico" con nombre propio).
3. Ofrecer un lead magnet gratuito o de bajo compromiso primero (ej. auditoría, mini-reporte) — nunca pedir confianza a ciegas ni saltar directo a la oferta completa.
4. Empacar la oferta completa como "tratamiento" con pasos claros.
5. Cerrar con una única llamada a la acción de bajo umbral (agendar una llamada breve).

Para la fórmula completa de oferta empaquetada (Brunson + Hormozi + Vaynerchuk + tono del vertical salud), las variantes de mensaje de abordaje, la reversión de riesgo honesta y la secuencia de seguimiento, leer `references/oferta-outreach-y-medicion.md`. Ese mismo archivo contiene el stack de instrumentación, los KPIs por capa y el formato de reporte mensual.

Nota: este framework es compatible con las mejores prácticas de propuestas de Grow Flow Automation — mini-ejercicio de diferenciación antes del scope técnico, cierre siempre con "¿Le gustaría agendar una llamada para platicar más detalles?", tono formal sin modismos.

## 8. Sistema de diseño (design tokens replicables)

El objetivo **no** es reusar literalmente una paleta fija para cualquier médico — es reusar el **método**: elegir tokens que huyan de los defaults genéricos de IA y respondan a la especialidad y personalidad del cliente.

Ejemplo de paleta base (caso algología/dolor — adaptar hex y nombres por especialidad):

```
--forest      #1B4D47   /* primario — autoridad clínica, confianza */
--forest-dark #123531   /* fondos de contraste, headers */
--sage        #6B8F71   /* secundario — calma */
--gold        #C99A3E   /* acento cálido — NUNCA terracota genérico de IA */
--terra       #B5654F   /* acento humano, uso moderado */
--paper       #FAF8F4   /* fondo claro, blanco cálido, NO beige saturado */
--ink         #22282B   /* texto principal */
--ink-soft    #5B6360   /* texto secundario */
--line        #E1DED3   /* bordes sutiles */
```

Explícitamente evitado en cualquier variante: fondo crema/beige genérico (#F4F1EA), acento terracota de IA por defecto (#D97757), barras de acento decorativas sin función, líneas bajo títulos sin propósito.

Tipografía: una serif editorial-clínica para títulos (ej. Fraunces, Cormorant Garamond, Playfair Display) + una sans-serif limpia para cuerpo/UI (ej. DM Sans, Inter). Ver `references/landing-pages-engineering.md` para una segunda variante de paleta (navy/dorado, caso traumatología) y la lógica de por qué cada tono se eligió.

## 9. Cuándo leer cada referencia

**`references/oferta-outreach-y-medicion.md`** — cuando la tarea sea **vender** (mensaje de abordaje, propuesta, oferta empaquetada, garantía, seguimiento) o **definir la medición** (instrumentación GTM/GA4/GBP/WhatsApp, KPIs por capa, reporte mensual, restricciones COFEPRIS).

**`references/benchmarks-dental-mx.md`** — cuando el cliente sea un **dentista, ortodoncista o clínica dental en México** y se necesiten cifras de referencia del sector (CPC/CPL, no-show, precios de tratamiento, penetración de WhatsApp, speed-to-lead, regulación COFEPRIS) para calibrar signos vitales, KPIs o la calculadora de ROI mientras se completa la evidencia real del cliente. Cada dato lleva fuente y año, y distingue explícitamente lo verificado en México de lo que solo existe en EEUU. **Patrón replicable:** para especialidades distintas a dental (traumatología, algología, etc.), construir un archivo equivalente `references/benchmarks-<especialidad>-mx.md` con la misma disciplina de fuentes antes de fijar metas numéricas — nunca reusar benchmarks de un vertical para otro.

**`references/landing-pages-engineering.md`** — cuando la tarea sea **construir o codear** el sitio/landing page (no solo diseñar la estrategia). Contiene:

- Arquitectura zero-dependency (HTML5/CSS3/Vanilla JS puro, sin frameworks) — útil como referencia de rendimiento incluso si el build final es en Next.js.
- Patrón de selector de versiones A/B/C vía iframe, para presentar variantes al cliente antes de elegir una.
- Paleta navy/dorado/verde clínico + emparejamiento tipográfico Serif/Sans alternativo.
- Estrategia de copywriting médico E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
- Un metaprompt maestro completo, listo para adaptar a un nuevo médico y clínica.
