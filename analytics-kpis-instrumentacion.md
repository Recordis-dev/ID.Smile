# Analítica, instrumentación y KPIs — vertical dental / ortodoncia

Documento operativo. Define qué se mide, con qué herramienta, con qué frecuencia y qué decisión dispara cada número.

---

## 1. Principio

Sin línea base no hay mejora demostrable, solo percepción. **La semana 1 se dedica a medir, no a producir.** Un consultorio que no sabe de dónde vinieron sus últimos diez pacientes no puede evaluar ninguna inversión, y por lo tanto tampoco puede renovar contigo con criterio.

Corolario comercial: la línea base es tu mejor activo de retención. Cuando en el mes 6 la doctora pregunta "¿realmente sirvió?", el número del mes 0 responde por ti.

---

## 2. Stack de instrumentación

| Capa | Herramienta | Qué captura |
|---|---|---|
| Sitio | GA4 + Google Tag Manager | Sesiones, origen, eventos de conversión |
| Conversión | Eventos GTM: `whatsapp_click`, `phone_click`, `form_submit`, `agenda_click` | Cada intención de contacto, con su fuente |
| Ficha local | Google Business Profile Insights | Impresiones, búsquedas por descubrimiento vs. marca, clics a llamada y cómo llegar |
| Conversación | WhatsApp Business (o API vía GHL) | Volumen, tiempo de primera respuesta, tasa de respuesta |
| Pipeline | GHL o, como mínimo, hoja de cálculo con origen por paciente | De conversación a cita a tratamiento iniciado |
| Pauta | Google Ads + Meta Ads con conversiones importadas | Costo por conversación y costo por cita |

### Trampa conocida: el clic a WhatsApp que no se registra

En móvil, el navegador cambia a la app de WhatsApp antes de que el evento termine de enviarse, y la conversión aparece en cero aunque el Asistente de Etiquetas confirme que se dispara. Solución: enviar el evento con `transport_type: 'beacon'`.

```javascript
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXXXX/XXXXXXXXXXXXXX',
  transport_type: 'beacon'
});
```

Si el enlace navega de inmediato, además retrasar la navegación con `event_callback` o usar `target="_blank"` en el enlace de WhatsApp. Verificar siempre desde un teléfono real, no desde el emulador de escritorio: el bug no aparece en escritorio.

**Requisito previo:** acceso de administrador al contenedor de GTM antes de prometer medición. Si el contenedor lo controla un tercero, migrar a un contenedor propio en la semana 1 en lugar de pelear por accesos durante un mes.

### Por qué WhatsApp es el canal prioritario en México

**Penetración de WhatsApp en México: 93%** de usuarios de internet — top 5 mundial por número de usuarios, ~57.2 millones (We Are Social / Statista Digital Report 2026). WhatsApp Business tiene una tasa de apertura de **~98%** frente a ~21.5% del email, y el 55% de las empresas mexicanas ya lo usan para difundir productos y servicios. Instrumentar bien este canal (respuesta rápida, catálogo, plantillas) vale más que cualquier campaña de pauta que no lo tenga resuelto primero.

---

## 3.5 Precios de referencia — ortodoncia en México 2025-2026 (MXN)

Para calibrar tickets, calculadoras de ROI y conversaciones de precio con la clínica:

| Tipo de tratamiento | Rango MXN |
|---|---|
| Brackets metálicos (completo) | $15,000 – $35,000 |
| Brackets estéticos (cerámica/zafiro) | $20,000 – $30,000 |
| Alineadores transparentes (casos sencillos) | desde $25,000 |
| Alineadores transparentes (casos completos) | $40,000 – $80,000 |
| Invisalign | desde ~$36,000 |
| Consulta de valoración inicial | $350 – $700 |

**Competencia a considerar:** Moons, alineadores directos al consumidor, ~50% más económico que ortodoncia tradicional (~$24,000 MXN), más de 10,000 pacientes tratados en México y Colombia, financiada con Serie A de USD $9M (DILA Capital). Su límite: casos ligeros-medianos. El diferenciador defendible de un consultorio tradicional es la supervisión profesional continua y el manejo de casos complejos — debe decirse explícitamente en el contenido, no asumirse.

---

## 3. KPIs por capa

### Visibilidad — ¿la encuentran?
| Indicador | Fuente | Frecuencia | Decisión que dispara |
|---|---|---|---|
| Impresiones en ficha de Google | GBP Insights | Quincenal | Si no sube tras optimizar: revisar categoría principal y radio de servicio |
| Búsquedas de descubrimiento vs. marca | GBP Insights | Mensual | Alta proporción de marca = solo la encuentran quienes ya la conocen; falta SEO local |
| Posición en paquete local | Revisión geolocalizada manual | Mensual | Fuera del top 3: reseñas y consistencia de datos antes que pauta |
| Sesiones al sitio por canal | GA4 | Semanal | Canal que no aporta sesiones ni conversaciones: reasignar el esfuerzo |

### Autoridad — ¿le creen?
| Indicador | Fuente | Frecuencia | Decisión que dispara |
|---|---|---|---|
| Reseñas nuevas por mes | GBP | Semanal | Menos de 2: el proceso post-cita no se está ejecutando en consultorio. Referencia de sector: +4/mes |
| Calificación promedio | GBP | Semanal | Debajo de 4.7–4.8: problema de experiencia, no de marketing. Se aborda antes de invertir en pauta |
| Tasa de respuesta a reseñas | GBP | Mensual | Meta 100%, incluidas las negativas |
| Guardados y compartidos en Instagram | Instagram Insights | Mensual | Mejor señal de valor que los "me gusta". Sube = el contenido educativo funciona |

**Dato de calibración (BrightLocal Local Consumer Review Survey, 2025):** la confianza del consumidor en reseñas "tanto como en recomendaciones personales" cayó del 79% (2020) al **42% (2025)**; solo el 38% exige mínimo 4 estrellas para considerar confiable a un negocio. Cifras más altas (76-88%) que circulan en blogs de marketing están desactualizadas — no usarlas para fijar metas.

### Conversión — ¿agendan?
| Indicador | Fuente | Frecuencia | Decisión que dispara |
|---|---|---|---|
| Conversaciones iniciadas | GTM/GA4 + WhatsApp | Semanal | Es el numerador de todo lo demás |
| **Tiempo de primera respuesta** | WhatsApp Business | Semanal | **El KPI con mayor correlación con cierre, y el que cuesta cero adicional.** Meta de sector: <15 min. Arriba de 1 hora: se trabaja el proceso de la recepción antes que cualquier campaña |
| Tasa conversación → cita agendada | Pipeline | Semanal | Baja: el guion de cotización necesita ajuste |
| Tasa cita agendada → cita asistida | Agenda | Semanal | Baja: faltan recordatorios automáticos. Referencia: no-show dental promedio ~15% (hasta 30%); con recordatorios SMS/WhatsApp bien implementados, reducción documentada de 20–35% |
| Costo por conversación | Ads + gestión | Mensual | Referencia (EEUU, no México): CPL dental promedio ~$73 USD — usar solo como techo direccional, sustituir con dato real de campaña en cuanto exista |

**Por qué el tiempo de respuesta es el KPI de mayor apalancamiento:** un estudio de Harvard Business Review sobre 2,241 empresas de EEUU (Oldroyd, McElheran & Elkington, 2011, "The Short Life of Online Sales Leads") encontró que el 23% de los leads nunca recibió respuesta, y que responder en menos de 1 hora hace ~7 veces más probable calificar el lead frente a esperar 24 horas o más. Un estudio anterior de InsideSales/MIT (2007) sobre 15,000+ leads encontró que contactar en 5 minutos en vez de 30 multiplica por ~100x la probabilidad de contacto. Solo ~0.1% de las empresas responde en menos de 5 minutos — es la ventaja competitiva más barata que existe.

### Negocio — ¿paga?
| Indicador | Fuente | Frecuencia | Decisión que dispara |
|---|---|---|---|
| Tratamientos iniciados | Registro de la clínica | Mensual | El único que paga la inversión |
| Costo de adquisición por paciente | Cálculo consolidado | Mensual | Comparado contra ticket promedio del tratamiento |
| Valor por caso | Registro de la clínica | Trimestral | Casos de mayor valor indican dónde enfocar el contenido |
| Referidos y reactivaciones | Pipeline | Mensual | Salud del sistema de retención |

---

## 4. Reporte mensual — una página, cinco bloques

1. **Los tres números** — conversaciones, citas asistidas, tratamientos iniciados. Nada más arriba del pliegue.
2. **Contra el mes anterior y contra la línea base** — siempre ambas comparaciones. La segunda es la que sostiene la renovación.
3. **Qué se hizo** — entregables cerrados en el mes, en una lista corta.
4. **Qué encontramos** — un hallazgo por mes, con su implicación. Es lo que convierte el reporte en asesoría.
5. **Qué sigue y qué necesito de la clínica** — sin este bloque, los retrasos parecen tuyos.

---

## 5. Insights del vertical (aplicar, verificar por clínica)

- **La ortodoncia se decide por confianza, no por precio, salvo cuando no hay nada más que comparar.** Cuando no existe autoridad visible, el paciente solo puede comparar cifras, y ahí las cadenas ganan siempre. Construir autoridad es literalmente salir de la competencia por precio.
- **El antes/después es el activo de mayor valor y el más subutilizado.** Requiere consentimiento informado firmado para uso publicitario, específico y separado del consentimiento de tratamiento. Sin ese documento, no se publica.
- **El ciclo de decisión es largo.** Entre la primera consulta de precio y el inicio del tratamiento pueden pasar semanas o meses. Sin secuencia de seguimiento se pierde a quien sí iba a decir que sí, solo que más tarde.
- **La recepción es parte del embudo.** El eslabón más débil en la mayoría de los consultorios no es la publicidad, es lo que ocurre entre el mensaje y la cita. Es también lo más barato de arreglar.
- **Ortodoncia infantil y ortopedia maxilar tienen buscador propio.** La mamá busca términos distintos a los del adulto que quiere alineadores. Justifica landing pages separadas, no una sola página de "servicios".
- **Los alineadores directos al consumidor cambiaron el terreno.** El diferenciador defendible del consultorio es la supervisión profesional y el manejo de casos complejos, y eso debe estar dicho explícitamente en el contenido, no asumido.

---

## 6. Restricciones de comunicación en salud — COFEPRIS

- **Aviso de Publicidad obligatorio** antes de promocionar servicios dentales (Art. 86, Reglamento de la Ley General de Salud en Materia de Publicidad, Modalidad A). Se tramita en la plataforma **DIGIPRiS**; es una declaración, no requiere resolución previa si se cumplen los requisitos. **Cambiar copy, imagen o canal exige un nuevo aviso.**
- **Prohibido explícitamente:** "resultados garantizados", "cura definitiva", "milagroso", "100% seguro", comparaciones directas con competidores, promociones sin leyendas legales.
- **Testimonios de pacientes:** solo con consentimiento por escrito y validación documental, sin afirmaciones terapéuticas.
- **Antes/después:** requiere consentimiento informado firmado y específico para uso publicitario (separado del consentimiento de tratamiento). Mismo encuadre, misma iluminación, sin retoque — un retoque detectable destruye la confianza que el activo debía construir.
- **Obligatorio en cada pieza publicitaria:** cédula profesional visible, nombre completo del responsable sanitario y especialidad reconocida.
- **Contenido puramente educativo** (sin promover servicios, precios o CTA de agendar) generalmente **no requiere aviso** — es la vía de contenido más segura y compatible con las publicaciones de autoridad del Pilar 2.
- **Sanciones:** desde advertencias hasta multas de hasta ~$2.5 millones de pesos, o clausura.
- No atribuir a ningún titular especialidades o títulos que no posea formalmente; verificar cédula y formación exactas antes de redactar copy.

**Tensión estratégica a señalar siempre al cliente:** los dos formatos de mejor desempeño en Instagram dental —antes/después y testimonios— son también los más regulados. El contenido educativo es más seguro legalmente pero requiere más trabajo creativo para no aburrir; ambos formatos deben convivir en el calendario editorial, no sustituirse uno al otro.

---

*Este documento es el caso aplicado de `references/benchmarks-dental-mx.md` en el skill `diagnosticadoc`, donde vive la versión reutilizable de estos mismos benchmarks para el siguiente cliente dental — con la misma disciplina de fuente y año.*
