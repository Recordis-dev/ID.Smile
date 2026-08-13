# Oferta, outreach y medición — módulo comercial de DiagnosticaDoc

Leer este archivo cuando la tarea sea **vender** el sistema a un médico (mensaje de abordaje, propuesta, oferta empaquetada, garantía) o **definir cómo se va a medir** el trabajo (KPIs, instrumentación, reporte mensual). Para la estrategia y el diagnóstico, ver el `SKILL.md`. Para construir el sitio, ver `landing-pages-engineering.md`.

---

## 1. La fórmula de oferta

Cuatro escuelas, una sola secuencia. Se aplican en este orden y no en otro:

| Aporte | Origen | Aplicación |
|---|---|---|
| **Dar antes de pedir** | Vaynerchuk | El diagnóstico digital completo se entrega gratis y sin condición, antes de mencionar precio. Debe ser el entregable real, no una versión recortada. |
| **Value stack** | Brunson | La oferta se descompone en 6–10 componentes con valor individual visible, para que el precio se lea contra la suma y no contra el vacío. |
| **Grand slam offer** | Hormozi | Resultado deseado ÷ (esfuerzo del cliente × tiempo × riesgo percibido). Se ataca cada denominador de forma explícita en el documento. |
| **Tono del vertical salud** | Práctica MX | Trato formal ("Dr.", "Dra.", usted), cero jerga de marketing, cero modismos. Se respeta la autoridad del médico antes de ofrecer mejorarla. |

**Regla que no se rompe:** ningún número de la oferta se envía antes de tener el diagnóstico verificado. Un mensaje que abre con precio se lee como proveedor genérico; uno que abre con un hallazgo específico y verificable se lee como colega.

## 2. Estructura del mensaje de abordaje

1. Presentación en una línea, sin adjetivos.
2. **Un hallazgo específico y verificable** del diagnóstico — algo que el médico pueda comprobar por sí mismo en segundos. Nunca un cumplido genérico.
3. La consecuencia de negocio de ese hallazgo, en una frase, sin dramatizar.
4. La entrega incondicional: el diagnóstico completo, sin costo, lo contrate o no.
5. Una sola llamada a la acción de bajo umbral. Cierre estándar: "¿Le gustaría agendar una llamada para platicar más detalles?"

Variantes a preparar siempre: (a) apertura por hallazgo, (b) apertura por pregunta —cuando no hay hallazgo fuerte que citar—, (c) cierre con oferta, que solo se envía después de haber entregado el diagnóstico.

## 3. Reversión de riesgo honesta

Una garantía sobre resultados que no se controlan —pacientes nuevos, ingresos, cierres en consultorio— es una trampa: la asistencia y el cierre dependen del médico y su equipo. La garantía se escribe sobre **entregables e infraestructura**, que sí se controlan al 100%:

> "Si al cierre del plazo no está entregado y funcionando [lista concreta], continúo sin costo hasta entregarlo."

Si se ofrece una garantía sobre volumen, se condiciona explícitamente y por escrito a lo que la clínica debe cumplir: tiempo de respuesta, entrega de material, presupuesto de pauta.

**Escasez:** solo si es verdad. Una escasez fabricada que el médico detecta destruye toda la credibilidad que construyó el diagnóstico.

## 4. Secuencia de seguimiento

Día 0 mensaje de apertura (solo texto, sin adjuntos ni enlaces) → llamada de 15 min → entrega del expediente el mismo día → día +2 oferta → día +6 un recordatorio → día +20 un aporte de valor sin pedir nada → día +45 cierre respetuoso del hilo.

**Máximo dos seguimientos sin respuesta.** Un tercero, en el vertical médico, cuesta la relación completa.

---

## 5. Medición: principio

Sin línea base no hay mejora demostrable, solo percepción. **La primera semana se dedica a medir, no a producir.** La línea base es además el mejor activo de retención: cuando en el mes 6 el médico pregunta si sirvió, el número del mes 0 responde por ti.

## 6. Stack de instrumentación

| Capa | Herramienta | Qué captura |
|---|---|---|
| Sitio | GA4 + Google Tag Manager | Sesiones, origen, eventos de conversión |
| Conversión | Eventos GTM: `whatsapp_click`, `phone_click`, `form_submit`, `agenda_click` | Cada intención de contacto con su fuente |
| Ficha local | Google Business Profile Insights | Impresiones, descubrimiento vs. marca, clics a llamada |
| Conversación | WhatsApp Business o API vía GHL | Volumen, tiempo de primera respuesta, tasa de respuesta |
| Pipeline | GHL o, mínimo, hoja de cálculo con origen por paciente | De conversación a cita a tratamiento iniciado |
| Pauta | Google Ads / Meta Ads con conversiones importadas | Costo por conversación y por cita |

### Trampa conocida: el clic a WhatsApp que no registra

En móvil el navegador salta a la app antes de que el evento termine de enviarse, y la conversión aparece en cero aunque el Asistente de Etiquetas confirme que se dispara. Enviar el evento con `transport_type: 'beacon'`; si el enlace navega de inmediato, retrasar con `event_callback` o usar `target="_blank"`. Verificar siempre desde un teléfono real: el bug no se reproduce en escritorio.

**Requisito previo:** acceso de administrador al contenedor de GTM antes de prometer medición. Si lo controla un tercero, migrar a contenedor propio en la semana 1 en lugar de pelear accesos durante un mes.

## 7. KPIs por capa

- **Visibilidad:** impresiones en ficha, proporción descubrimiento vs. marca, posición en paquete local, sesiones por canal.
- **Autoridad:** reseñas nuevas por mes, calificación promedio, tasa de respuesta a reseñas, guardados y compartidos.
- **Conversión:** conversaciones iniciadas, **tiempo de primera respuesta** (el de mayor correlación con cierre), conversación → cita, cita → asistencia, costo por conversación.
- **Negocio:** tratamientos o procedimientos iniciados, costo de adquisición por paciente, valor por caso, referidos y reactivaciones.

Cada KPI se documenta con: fuente, frecuencia y **la decisión concreta que dispara**. Un indicador que no cambia ninguna decisión es un indicador de vanidad y se elimina del reporte.

## 8. Reporte mensual de una página

1. Los tres números (conversaciones, citas asistidas, casos iniciados) y nada más arriba del pliegue.
2. Comparación contra el mes anterior **y** contra la línea base.
3. Qué se hizo: entregables cerrados, lista corta.
4. Qué encontramos: un hallazgo con su implicación. Es lo que convierte el reporte en asesoría.
5. Qué sigue y qué se necesita de la clínica. Sin este bloque, los retrasos parecen del proveedor.

---

## 9. Restricciones de comunicación en salud (México)

- No prometer resultados clínicos ni tiempos de tratamiento en material publicitario.
- No atribuir al médico especialidades o títulos que no posea formalmente; verificar cédula y formación exactas antes de redactar copy.
- Testimonios: con consentimiento por escrito y sin afirmaciones terapéuticas.
- Antes/después: consentimiento informado firmado y específico para uso publicitario, separado del consentimiento de tratamiento. Mismo encuadre, misma iluminación, sin retoque.
- La publicidad en salud está sujeta a regulación COFEPRIS; revisar el material antes de lanzar campañas pagadas.
