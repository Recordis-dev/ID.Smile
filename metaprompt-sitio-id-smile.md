# Metaprompt standalone — Sitio web ID Smile (Pilar 1, Fase 5)

Especificación autosuficiente. No depende de contexto de conversación previo — cualquier herramienta de generación (Stitch, v0, Claude, u otra) puede ejecutarla de punta a punta. Es también el documento de referencia que describe exactamente lo que se construyó en `sitio-id-smile/index.html`.

---

## 1. Quién es la clínica

**ID Smile** — consultorio de ortodoncia especializado dentro del Hospital San Diego, Cuernavaca, Morelos, México.

- **Titulares:** Dra. Esbreidy Lugo Delgado (Cirujano Dentista, Especialista en Ortodoncia, M.C. Odontológicas) y Odont. Benjamín Avendaño Peralta (Cirujano Dentista, ULA Campus Cuernavaca 2015; especialidad en Ortodoncia, ULA 2017; cédula profesional 09271434).
- **Dirección:** Av. San Diego 1203, Torre Médica San Diego, Consultorio 315, Col. Delicias, C.P. 62330, Cuernavaca, Morelos.
- **Contacto:** Tel. 777 377 3106 · Clinica.idsmile@gmail.com.
- **Servicios:** ortodoncia (brackets metálicos y estéticos, alineadores transparentes), ortodoncia infantil / ortopedia dentofacial, y servicios generales de los titulares (endodoncia, rehabilitación bucal, urgencias) según sus perfiles públicos.

## 2. Diagnóstico en el que vive el sitio

El nombre que ID Smile muestra en sus canales no coincide con su identidad de URL, no tiene sitio propio (usan correo Gmail, no dominio propio) y no se pudo confirmar una ficha de Google gestionada. La consecuencia no es estética: sin un destino propio, no hay dónde mandar a un paciente que ya decidió buscar, ni forma de medir qué funciona. Este sitio **es** ese destino — el primer entregable de la Fase 1 (Alineación) del plan de 12 semanas.

## 3. Objetivo en una frase

Que un paciente que busca "ortodoncista en Cuernavaca" encuentre una sola identidad clara, confíe en la formación real de ambos titulares, y agende por WhatsApp en menos de dos clics.

## 4. Tokens de diseño exactos

Continuidad de marca con el resto del expediente (infografía de diagnóstico, pitch deck, dashboard, BMC) — mismo sistema, mismo tono.

```css
--xray:      #0C242B;   /* fondo Hero y footer — seriedad clínica */
--petrol:    #14515C;   /* primario — CTAs, acentos, autoridad */
--aqua:      #2E9AA0;   /* secundario — WhatsApp, confirmaciones */
--liga:      #D2506B;   /* acento — badges "nuevo", énfasis puntual */
--ambar:     #D08A32;   /* alertas suaves, uso mínimo */
--enamel:    #FAF7F2;   /* fondo claro — blanco cálido, NO beige saturado */
--enamel-2:  #F0EBE3;   /* fondo de tarjetas alterno */
--ink:       #131A1D;   /* texto principal */
--ink-soft:  #5A6A70;   /* texto secundario */
--line:      #DFD8CE;   /* bordes sutiles */
```

- **Tipografía display:** Bricolage Grotesque (encabezados, cifras destacadas).
- **Tipografía cuerpo/UI:** Public Sans (texto descriptivo, menús, formularios).
- **Tipografía mono:** JetBrains Mono (etiquetas, eyebrows, metadatos — "ODONTOLOGÍA", "VER SERVICIOS").
- **Elemento-firma:** el mismo motivo de arcada/círculos concéntricos usado en la infografía de diagnóstico y el pitch deck — círculos trazados en el Hero, nunca una barra o franja de acento (evitar el look genérico de IA).

## 5. Estructura de secciones, con copy real

```
Header (sticky) — "ID Smile" + nav ancla (Servicios · Doctores · Contacto) + botón WhatsApp siempre visible
#hero — lema + credencial headline + doble CTA (Agendar por WhatsApp / Ver servicios) + elemento-firma
#servicios — grid de tarjetas: Brackets metálicos, Brackets estéticos, Alineadores transparentes, Ortodoncia infantil
#doctores — bloque de autoridad: Dra. Lugo Delgado y Odont. Avendaño Peralta, formación en lenguaje de paciente
#confianza — franja de credenciales verificables (cédula, hospital, años de formación) — NO testimonios inventados
#contacto — dirección, teléfono, horarios, mapa, CTA final grande por WhatsApp
footer — marca + año + nota de versión ("Sitio v1 (MVP) — Pilar 1")
```

**Restricción explícita: NO incluir testimonios de pacientes ni antes/después.** No existe evidencia de consentimiento informado firmado para uso publicitario (ver `checklist-evidencia.md`). Incluirlos sin ese documento es una violación directa de COFEPRIS (ver `references/benchmarks-dental-mx.md` del skill diagnosticadoc, sección 6). La sección de confianza se sostiene solo con credenciales verificables.

## 6. Tono de redacción

Formal, cálido, sin anglicismos ni jerga de marketing. Se dirige al paciente que busca alivio o estética, no al profesional. Frases cortas. Nunca promesas de resultado ("sonrisa perfecta garantizada") — sí compromisos de proceso ("evaluación honesta antes de proponer tratamiento").

## 7. Requisitos técnicos obligatorios

1. **Zero-dependency:** HTML5 semántico puro, CSS3 con variables nativas, Vanilla JS. Sin frameworks ni librerías externas — coherente con el principio de velocidad instantánea para tráfico móvil en salud.
2. **Mobile-first:** el 97.2% de usuarios de internet en México se conecta desde smartphone (ENDUTIH 2024). Barra inferior fija en móvil con botón directo a WhatsApp.
3. **CSS y JS inline**, sin llamadas de bloqueo a terceros (excepto Google Fonts).
4. **JSON-LD `Dentist`/`Physician`** con especialidad exacta (ortodoncia), afiliación (Hospital San Diego) y dirección — en español, sin anglicismos en el marcado.
5. **Botón de WhatsApp con deep-link** (`https://wa.me/52777...`) y mensaje prellenado.
6. Accesibilidad básica: contraste AA, foco visible en enlaces y botones.

## 8. Qué NO debe hacer el sitio

- No inventar reseñas, calificaciones ni número de pacientes atendidos.
- No usar la palabra "garantizado" ni variantes de resultado clínico asegurado.
- No mencionar especialidades que los titulares no tengan documentadas (p. ej. no llamarlos "neurocirujanos" ni acreditar membresías no confirmadas — no se halló registro en la AMO).
- No incluir precios exactos sin que la clínica los confirme — mostrar rango de referencia del sector, marcado como tal, o remitir a WhatsApp para cotización.
- No usar plantillas de color genéricas de IA (beige `#F4F1EA`, terracota `#D97757`) ni franjas de acento decorativas.

---

## 9. Árbol y Evolución de Versiones (MVP vs. V1)

Para mantener la flexibilidad de experimentación, el sistema de ID Smile preserva y evoluciona su árbol de versiones mediante una arquitectura híbrida de coexistencia.

### Estructura de Archivos y Versiones
- **Versión MVP (Estática / Veloz):** Ubicada en `/` (`index.html`). Implementación pura en HTML5, CSS3 nativo y Vanilla JS, con cero dependencias externas. Garantiza velocidad extrema para conexiones móviles inestables y cumple al 100% con COFEPRIS.
- **Versión V1 (Premium / React):** Ubicada en `/v1` (`v1.html`). Un rediseño premium y sofisticado basado en la especificación `<x-dc>` y React. Ofrece una experiencia interactiva fluida con animaciones avanzadas de revelado al deslizar y una disposición visual impecable.

### Mecanismo de Conmutación (Toggle Switcher)
Ambas versiones incorporan un widget de conmutación de versión (**Toggle Version Switcher**) flotante en la esquina inferior izquierda.
- **Persistencia de preferencia:** Utiliza `localStorage` (`preferred-version`) para guardar la preferencia del usuario.
- **Redirección automática transparente:** Si un usuario prefiere la versión V1 (`preferred-version: 'v1'`), cualquier acceso posterior a la raíz `/` le redirigirá instantáneamente a `/v1` mediante un script de alto rendimiento incrustado en el `<head>` del MVP.
- **Diseño unificado:** El widget de control flotante está diseñado para seguir el tono y tokens de marca de ID Smile (utilizando `--xray`, `--aqua`, `--line-dark` y tipografía `JetBrains Mono`), posicionándose con seguridad por encima de la barra de navegación móvil.

---

*Este metaprompt describe exactamente `sitio-id-smile/index.html`, el MVP ya construido como parte de la Fase 6. Para adaptar este patrón a un nuevo cliente médico, usar el metaprompt maestro genérico en `references/landing-pages-engineering.md` del skill diagnosticadoc — este documento es su instancia aplicada, no el patrón general.*
