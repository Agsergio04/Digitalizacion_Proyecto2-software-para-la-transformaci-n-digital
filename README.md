# Proyecto: Gestor de Tareas Personal

## Objetivo

Crear un software que permita a los usuarios:

- **Gestionar Tareas**: Crear, editar y eliminar tareas con fechas y prioridades.
- **Organizar Notas**: Guardar notas personales y listas.
- **Planificar Eventos**: Agendar eventos con recordatorios.
- **Integrar GitHub**: Sincronizar proyectos para seguimiento y colaboración.

## Funcionalidades

1. **Gestión de Tareas**
   - Crear, editar y visualizar tareas con título, descripción, fecha y prioridad.
   - Mostrar tareas en lista o calendario.
   - Enviar alertas para tareas pendientes.

2. **Notas**
   - Espacio para notas rápidas y listas.
   - Buscar y categorizar notas.

3. **Eventos**
   - Crear eventos con fecha, hora y ubicación.
   - Notificaciones previas al evento.

4. **Integración con GitHub**
   - Conectar repositorios para ver progreso e issues.
   - Asignar tareas a proyectos.

## Tecnologías

- **Frontend**: React.js y Tailwind CSS.
- **Backend**: Node.js con Express y PostgreSQL.
- **Integraciones**: API de GitHub para autenticación y sincronización.

## Seguridad y Almacenamiento en PostgreSQL

- **Datos almacenados solo en PostgreSQL**, sin uso de la nube.
- **Respaldo y cifrado** de datos para seguridad.
- **Roles y permisos** para controlar accesos.
- Cumplimiento con **normativas como GDPR**.

## Impacto

- **Optimización del trabajo** con una herramienta de organización eficiente.
- **Mejor comunicación** entre equipos con seguimiento de tareas.
- **Análisis de datos** para mejorar la productividad.

## Respondiendo preguntas

### Ciclo de vida del dato (5b)
- Los datos se generan cuando el usuario crea tareas, notas o eventos y se almacenan en PostgreSQL. Se pueden modificar o eliminar según las acciones del usuario.
- Se garantiza la consistencia con restricciones en la base de datos, validaciones en el backend y transacciones seguras.
- Aunque actualmente no usamos datos externos, podríamos agregar análisis de uso para mejorar la experiencia del usuario.

### Almacenamiento en la nube (5f)
- No utilizamos almacenamiento en la nube. Toda la información se gestiona localmente en PostgreSQL.
- Consideramos opciones en la nube, pero elegimos PostgreSQL por su control, seguridad y facilidad de administración.
- En futuras versiones, podríamos integrar la nube para backups automáticos o acceso desde múltiples dispositivos.

### Seguridad y regulación (5i)
- Implementamos autenticación segura, cifrado de datos y control de accesos con roles en PostgreSQL.
- Cumplimos con GDPR al permitir a los usuarios gestionar sus datos y asegurarnos de que no se almacene información innecesaria.
- Sin medidas de seguridad, los riesgos incluirían pérdida de datos o accesos no autorizados. Por eso aplicamos cifrado y autenticación.

### Implicación de las THD en negocio y planta (2e)
- Nuestro software mejora la eficiencia en entornos empresariales al organizar tareas y optimizar flujos de trabajo.
- Facilita la gestión de proyectos y mejora la productividad mediante recordatorios y seguimiento de tareas.
- También podría ser útil en educación y gestión personal para planificación eficiente.

### Mejoras en IT y OT (2f)
- Puede conectar equipos de IT y operaciones al centralizar tareas y proyectos en una sola plataforma.
- Beneficia la automatización de flujos de trabajo mediante recordatorios y asignación de tareas.
- Podría adaptarse para monitoreo de proyectos técnicos en fábricas o empresas de tecnología.

### Tecnologías Habilitadoras Digitales (2g)
- Usamos PostgreSQL, React.js y Node.js como base tecnológica.
- Estas herramientas garantizan rendimiento, seguridad y escalabilidad.
- En el futuro, podríamos integrar inteligencia artificial para sugerencias de tareas o análisis de productividad.

