# Fase 0 — Checklist de evidencia

**Estado: investigación de escritorio completada (búsqueda web).** El expediente ya no está en blanco — se identificó la clínica con certeza y se llenó `CFG` con lo confirmable a distancia. Lo que queda es una llamada corta con la doctora/el equipo y dos capturas directas que ninguna búsqueda puede reemplazar.

Todo lo que se llene aquí se vacía en el objeto `CFG` al inicio del `<script>` de `dx-digital-smile-ortodoncia.html` — ya actualizado con lo de abajo.

---

## Lo que ya está confirmado (investigación de escritorio, con fuente)

| Hallazgo | Evidencia | Confianza |
|---|---|---|
| La clínica detrás de `facebook.com/ortodoncia.smile` se llama **"ID Smile"** | Nombre mostrado en la página de Facebook (bio, categoría "Teeth Whitening Service") | Alta |
| Ubicada en **Cuernavaca, Morelos** | Av. San Diego 1203, Torre Médica San Diego, Consultorio 315, Col. Delicias — confirmada por Facebook, Doctoralia y el directorio del Hospital San Diego (mismo consultorio, mismo teléfono) | Alta |
| Titulares: **Dra. Esbreidy Lugo Delgado** y **Odont. Benjamín Avendaño Peralta** (céd. 09271434) | Directorio del Hospital San Diego, cruzado con Doctoralia | Alta |
| Teléfono fijo **777 377 3106** y correo **Clinica.idsmile@gmail.com** | Ficha pública de Facebook | Alta |
| **El nombre mostrado ("ID Smile") no coincide con el handle de la URL (/ortodoncia.smile)** | Comparación directa | Alta — es el hallazgo que abre el mensaje de WhatsApp |
| Solo **1 reseña sin calificar** visible en Facebook | Ficha de Facebook | Alta |
| Última actividad indexada: **enero 2024** | Búsqueda indexada (puede haber actividad posterior no visible) | Media |
| No se detectó dominio propio; usan correo Gmail | Ausencia de sitio + tipo de correo | Media (hipótesis reforzada, no 100% concluyente) |

## Lo que sigue sin poder confirmarse a distancia — **requiere verificación manual**

- [ ] **Instagram `@id.smiles`** — no se pudo vincular con certeza a esta clínica. Abrir el perfil directamente en un navegador/celular y confirmar o descartar antes de citarlo en cualquier entregable.
- [ ] **Ficha de Google Business Profile** — calificación, número de reseñas, categoría, fotos, horarios. Es el activo de mayor peso en la decisión del paciente dental (85% lo revisa primero) y hoy está completamente sin medir.
- [ ] **Biblioteca de Anuncios de Meta** — ¿hay campañas activas para la página?
- [ ] **WhatsApp real** — Doctoralia lista un celular (777 189 9172) distinto al teléfono fijo de Facebook (777 377 3106); confirmar cuál es el canal de contacto activo y si es cuenta Business.

---

## Capturas a tomar (10 minutos, con lo anterior ya reduce el trabajo a la mitad)

**Ficha de Google** (buscar "ID Smile Cuernavaca" en Maps)
- [ ] Pantalla principal completa: nombre, categoría, calificación y número de reseñas
- [ ] Sección de reseñas: las 5 más recientes y su fecha
- [ ] Sección de fotos: cuántas hay y de cuándo es la última
- [ ] Información: horarios, servicios listados, teléfono, sitio web
- [ ] Panel de Insights, si hay acceso: impresiones y acciones de los últimos 90 días

**Instagram @id.smiles** (una vez confirmado que es de la clínica)
- [ ] Biografía completa, número de publicaciones y seguidores
- [ ] Enlace en la biografía: ¿a dónde lleva?
- [ ] Últimas 9 publicaciones en cuadrícula, con fechas

**Facebook /ortodoncia.smile**
- [ ] Fecha real de la última publicación (el enero 2024 indexado puede no ser la más reciente)
- [ ] Pestaña de información: horarios exactos, botón de acción activo

**Búsquedas de verificación** (desde un teléfono, ubicado en Cuernavaca)
- [ ] "ID Smile" y "ortodoncia smile cuernavaca" → ¿qué aparece primero?
- [ ] "ortodoncista + Cuernavaca" → ¿aparece en el paquete local? ¿en qué posición?
- [ ] "brackets Cuernavaca" y "alineadores Cuernavaca"

**Datos que solo la clínica puede dar** (llamada de 15 minutos)
- [ ] Confirmar cuál titular atiende cada caso y cómo prefieren presentarse ante el paciente
- [ ] Pacientes nuevos al mes, aproximado
- [ ] Ticket promedio de un caso de ortodoncia (referencia de sector: $18,000–$40,000 MXN — ver `analytics-kpis-instrumentacion.md`)
- [ ] Quién responde el WhatsApp, en qué horario y en cuánto tiempo típicamente
- [ ] ¿Tienen fotos de casos con consentimiento firmado para uso publicitario?
- [ ] ¿Qué tratamiento les gustaría hacer más y hacen menos? (define el enfoque de las landing pages: brackets, alineadores, ortodoncia infantil)

---

## Cómo está llenado el expediente ahora mismo

En `dx-digital-smile-ortodoncia.html`, dentro de `CFG`, ya se cargó: `clinica: "ID Smile"`, `doctora`, `ciudad: "Cuernavaca, Morelos"`, la ficha de identificación completa, y el `arcada[]` reclasificado — Facebook y Reseñas en `riesgo` (confirmado), Google/Instagram/Sitio/WhatsApp en `sindatos` con la nota exacta de qué falta. El `ddx[]` marca como confirmados (`hit:true`) los cuadros que la evidencia ya sostiene: Maloclusión de Marca y Autoridad Clínica Silenciosa.

Al completar los pendientes de arriba, solo hay que:
1. Cambiar el `estado` y `fuente` del ítem correspondiente en `arcada[]`.
2. Rellenar `v` y `pct` en `vitales[]` con la cifra real (hoy tienen la referencia de sector, etiquetada como tal).
3. Ajustar `hit` en `ddx[]` si algo cambia con la nueva evidencia.

El contador de evidencia en la sección 01 se recalcula solo.

---

## Regla de entrega

**No enviar el expediente con placeholders visibles sin resolver.** Ya no los tiene: los campos confirmados están confirmados, y los pendientes están etiquetados como "sin datos" a propósito — eso es una característica del método, no un descuido, y es exactamente lo que hace creíble el resto del documento.
