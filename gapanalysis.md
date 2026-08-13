# Análisis de Brechas (Gap Analysis) y Ventana de Implementación (Timeline)
**Proyecto:** Presencia Digital e Infraestructura de Conversión para ID Smile
**Origen:** diagnosticadoc.com — Grow Flow Automation

---

## 1. Resumen Ejecutivo

**ID Smile** es un consultorio de ortodoncia especializada de alta calidad, ubicado en una zona prestigiosa de Cuernavaca, Morelos (Torre Médica del Hospital San Diego, Consultorio 315). Sus titulares, la **Dra. Esbreidy Lugo Delgado** y el **Odont. Benjamín Avendaño Peralta**, cuentan con formación sólida y cédula profesional verificable (Céd. 09271434).

A pesar de esta excelente oferta clínica, la clínica sufre de **Silencio de Autoridad** y tiene un embudo de conversión digital roto. El objetivo de este análisis de brechas es mapear la distancia entre el **Estado Actual (As-Is)** y el **Estado Deseado (To-Be)**, y trazar una ventana de implementación técnica de 12 semanas para consolidar el sistema digital de adquisición de pacientes de la clínica.

---

## 2. Análisis de Brechas (Gap Analysis)

A partir de la auditoría de escritorio (Fase 0), la bitácora de control y los documentos operativos (`checklist-evidencia.md`, `analytics-kpis-instrumentacion.md`), se identificaron las siguientes brechas fundamentales:

### Brecha 1: Presencia Web y Landing Pages
*   **Estado Actual (As-Is):** Inexistencia de un sitio web propio. La clínica depende completamente de redes sociales de terceros (Facebook) que no se actualizan regularmente (último registro indexado en enero de 2024). Utilizan un correo electrónico gratuito de Gmail (`clinica.idsmile@gmail.com`) en lugar de un dominio propio, lo que debilita la confianza institucional de pacientes exigentes.
*   **Estado Deseado (To-Be):** Implementación de una arquitectura híbrida de coexistencia de versiones:
    *   **Versión MVP (Estática):** Carga ultraveloz, optimizada para tráfico móvil y conversiones de WhatsApp, sin dependencias pesadas.
    *   **Versión V1 (React Premium):** Interfaz premium y moderna de alta fidelidad, con micro-interacciones de React y control dinámico de precios e información.
    *   **Dominio propio** con correos corporativos (ej. `contacto@idsmile.mx` o similar).
*   **Acción de Cierre:** Compilación y despliegue del MVP y la versión V1 en un entorno de alto rendimiento (Vercel + GitHub Pages de respaldo), conectado a un dominio propio con certificados SSL.

### Brecha 2: Canal de Conversión e Interacción (WhatsApp)
*   **Estado Actual (As-Is):** Respuestas y agendamiento 100% manuales. No se utiliza una cuenta de WhatsApp Business estructurada, lo que obliga al médico a contestar consultas básicas repetitivas perdiendo de 2 a 4 horas valiosas al día. El handle de la URL en Facebook (`/ortodoncia.smile`) no coincide con el nombre comercial ("ID Smile").
*   **Estado Deseado (To-Be):** WhatsApp Business configurado con respuestas rápidas, catálogo de servicios, etiquetas de seguimiento, y un protocolo de abordaje de 3 niveles (`mensaje-wa-bundle.md`) diseñado para disipar las dudas más frecuentes de los pacientes (costos, dolor, duración) de forma inmediata.
*   **Acción de Cierre:** Migración a WhatsApp Business, homologación del handle comercial de contacto, e implementación de plantillas de abordaje estructuradas.

### Brecha 3: Medición, Analítica e Instrumentación
*   **Estado Actual (As-Is):** Cero instrumentación de analítica de datos. No hay forma de saber cuántas personas visitan los perfiles de la clínica, cuántos hacen clic en agendar, ni qué canales de marketing traen pacientes reales.
*   **Estado Deseado (To-Be):** Stack de medición completo y configurado:
    *   **Google Tag Manager (GTM):** Contenedor unificado para inyectar etiquetas sin tocar el código.
    *   **Google Analytics 4 (GA4):** Configurado con eventos de conversión críticos: `whatsapp_click`, `phone_click`, `form_submit`.
    *   **Corrección de rebote móvil:** Eventos enviados con `transport_type: 'beacon'` para garantizar que los clics a WhatsApp se capturen en teléfonos reales.
*   **Acción de Cierre:** Crear contenedor de GTM, configurar GA4 y habilitar el rastreo de eventos interactivos en el nuevo sitio web.

### Brecha 4: Google Business Profile (GBP) y SEO Local
*   **Estado Actual (As-Is):** Silencio digital local. Solo se registra 1 reseña sin calificar en su perfil de Facebook. No hay una estrategia activa de recopilación de opiniones de pacientes en Google Business Profile (Maps), lo que los deja fuera del "Local Pack" (las primeras 3 posiciones en mapas), que es el activo de mayor conversión dental local (85% de los pacientes lo consultan antes de agendar).
*   **Estado Deseado (To-Be):** Ficha de Google Business Profile optimizada al 100% con categorías correctas ("Ortodoncista", "Clínica Dental"), fotos del consultorio real en el Hospital San Diego, horarios sincronizados, y un flujo automatizado de generación de reseñas (meta: mínimo +4 reseñas de 5 estrellas al mes).
*   **Acción de Cierre:** Reclamar/optimizar la ficha en Google Maps, actualizar fotos profesionales del consultorio e implementar el protocolo post-cita para solicitar reseñas vía código QR o link directo de WhatsApp.

### Brecha 5: Cumplimiento Regulatorio (COFEPRIS)
*   **Estado Actual (As-Is):** La clínica corre el riesgo de cometer infracciones sanitarias de COFEPRIS si publica imágenes de "antes y después" o testimonios informales sin el riguroso consentimiento por escrito requerido para uso publicitario en salud.
*   **Estado Deseado (To-Be):** Copias de seguridad legales con contratos de consentimiento informado específicos para uso publicitario. Sitios web y publicidad que cumplan estrictamente con el Reglamento de la Ley General de Salud en Materia de Publicidad (Aviso de Publicidad tramitado mediante DIGIPRiS). Presentación destacada de las cédulas profesionales de los doctores en todas las piezas publicitarias.
*   **Acción de Cierre:** Incluir leyendas COFEPRIS y cédulas visibles en el pie de página de todos los sitios, y preparar el Aviso de Publicidad en DIGIPRiS.

---

## 3. Ventana de Implementación (Timeline of 12 Weeks)

Este cronograma de 12 semanas detalla las actividades estructuradas para cerrar las brechas identificadas, dividido en 4 fases de alineación estratégica.

```
       M-01       M-02       M-03       M-04       M-05       M-06       M-07       M-08       M-09       M-10       M-11       M-12
Fase 1 [========] (Alineación e Instrumentación)
Fase 2            [===========] (Nivelación y Lanzamiento MVP)
Fase 3                         [=======] (Cierre de Espacios y Versión V1)
Fase 4                                  [=====] (Optimización, Retención y Pauta)
```

### Fase 1: Alineación e Instrumentación (Semanas 1–3)
*   **Semana 1: Configuración de la Línea Base y Migración de Canales**
    *   Migrar el WhatsApp convencional a una cuenta de **WhatsApp Business** configurando perfil, catálogo inicial, horarios y respuestas rápidas.
    *   Auditar y reclamar la propiedad de la ficha de **Google Business Profile** (Google Maps) del Hospital San Diego Consultorio 315.
    *   Comprar el dominio definitivo de ID Smile (ej. `idsmile.mx`) y configurar correos corporativos correspondientes.
*   **Semana 2: Implementación de la Infraestructura de Medición**
    *   Crear los contenedores en Google Tag Manager (GTM) e inyectar el script unificado en las páginas del proyecto.
    *   Configurar Google Analytics 4 (GA4) vinculando las propiedades de conversión prioritarias.
    *   Habilitar el rastreo de eventos con el parámetro `transport_type: 'beacon'` para capturar clics en enlaces de WhatsApp en móviles sin pérdida de datos.
*   **Semana 3: Auditoría Física y Geolocalización Inicial**
    *   Realizar la llamada corta de calibración técnica de 15 minutos con el equipo para validar datos internos (pacientes nuevos al mes, ticket promedio, etc.).
    *   Actualizar las variables dinámicas (`CFG`) de configuración en los expedientes digitales.
    *   Establecer la línea base de geolocalización local del perfil en un radio de 5 km alrededor del Hospital San Diego.

### Fase 2: Nivelación y Lanzamiento de Landing Page MVP (Semanas 4–7)
*   **Semana 4: Lanzamiento Oficial de la Landing Page MVP**
    *   Desplegar el prototipo estático MVP de carga rápida (`index.html`) en la infraestructura productiva de Vercel y GitHub Pages.
    *   Realizar pruebas de velocidad (PageSpeed) buscando una puntuación superior a 95/100 en dispositivos móviles.
*   **Semana 5: Integración del Protocolo de Abordaje y Mensajería**
    *   Capacitar a la recepción/médicos en el uso del guion de respuestas de tres niveles (`mensaje-wa-bundle.md`).
    *   Configurar plantillas de mensajes y respuestas rápidas preestablecidas en WhatsApp Business para agilizar la agenda.
*   **Semana 6: Optimización Estética y Visual de Google Maps**
    *   Subir fotografías profesionales de alta calidad del consultorio 315, del instrumental, y fotos corporativas de los doctores a Google Business Profile.
    *   Alineación de categorías y datos de horarios con la información de las landing pages para evitar rechazos algorítmicos.
*   **Semana 7: Gestión de Cumplimiento Regulatorio**
    *   Completar el trámite del Aviso de Publicidad digital para servicios dentales ante la plataforma DIGIPRiS de COFEPRIS.
    *   Asegurar que todas las piezas visuales activas y la landing page incluyan el nombre de los responsables sanitarios y su Cédula Profesional visible.

### Fase 3: Cierre de Espacios y Lanzamiento de Versión V1 Premium (Semanas 8–10)
*   **Semana 8: Despliegue de la Landing Page V1 (React Premium)**
    *   Habilitar y probar el enrutamiento híbrido limpio de coexistencia en Vercel para derivar tráfico a la versión interactiva React (`v1.html`).
    *   Probar la consistencia del Toggle Switcher unificado para alternar de forma transparente entre MVP y V1 en producción.
*   **Semana 9: Lanzamiento de la Estrategia de Reseñas en Google**
    *   Imprimir y colocar en el consultorio 315 tarjetas acrílicas de fácil acceso o códigos QR que dirijan directamente a los pacientes de salida al enlace para calificar la ficha de Google Maps.
    *   Meta del mes: Recopilar las primeras 4 reseñas orgánicas de pacientes recurrentes reales para quebrar el Silencio de Autoridad.
*   **Semana 10: Auditoría del Primer Ciclo de Datos**
    *   Revisar reportes de GA4 para medir el volumen de clics de agendamiento y llamadas.
    *   Analizar el tiempo medio de respuesta en WhatsApp Business (establecer la meta por debajo de 15 minutos en horario laboral).

### Fase 4: Retención y Optimización Comercial (Semanas 11–12)
*   **Semana 11: Despliegue de Campañas de Adquisición Digital**
    *   Estructurar y lanzar campañas hiper-locales y segmentadas en **Google Ads** ("brackets Cuernavaca", "ortodoncista Hospital San Diego") dirigiendo tráfico a la landing page MVP/V1.
    *   Asegurar la consistencia de conversiones importadas desde GA4 en Google Ads para optimizar el Costo por Conversación (CPL).
*   **Semana 12: Consolidación del Dashboard y Entrega del Primer Reporte**
    *   Desplegar el **Dashboard Operativo** (`dashboard-operativo-id-smile.html`) de uso interno para consolidar de forma permanente la salud técnica e indicadores clave del sistema digital.
    *   Presentar el primer **Reporte Ejecutivo Mensual de Una Página** mostrando: conversaciones iniciadas, citas agendadas y tratamientos iniciados en comparación directa con la línea base de la Semana 0.
