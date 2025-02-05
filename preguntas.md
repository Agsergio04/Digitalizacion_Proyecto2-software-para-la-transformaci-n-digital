## Ciclo de Vida del Dato (5b)

**¿Cómo se gestionan los datos desde su generación hasta su eliminación en tu proyecto?**

En el Gestor de Tareas Personal, los datos se gestionan de la siguiente manera:

1. **Generación**: Los datos se generan cuando el usuario crea tareas, notas o eventos. Cada entrada incluye información como título, descripción, fechas y otras propiedades relevantes.

2. **Almacenamiento**: Estos datos se almacenan en una base de datos MongoDB en la nube, lo que permite un acceso rápido y eficiente.

3. **Actualización**: Los usuarios pueden editar o actualizar sus entradas en cualquier momento. El sistema mantiene la integridad de los datos mediante validaciones y controles de consistencia.

4. **Eliminación**: Cuando un usuario decide eliminar una entrada, el sistema la elimina de la base de datos de forma segura, garantizando que no queden copias residuales.

**¿Qué estrategia sigues para garantizar la consistencia e integridad de los datos?**

Para asegurar la consistencia e integridad de los datos, se implementan las siguientes estrategias:

- **Validaciones**: Antes de almacenar o actualizar datos, se realizan validaciones tanto en el frontend como en el backend para asegurar que la información cumple con los formatos y restricciones establecidos.

- **Transacciones**: En operaciones críticas que involucran múltiples documentos o colecciones, se utilizan transacciones de MongoDB para garantizar que todas las operaciones se completen correctamente o se reviertan en caso de error.

- **Control de Concurrencia**: Se implementan mecanismos para manejar accesos concurrentes, evitando condiciones de carrera y asegurando que las modificaciones de datos sean coherentes.

**Si no trabajas con datos, ¿cómo podrías incluir una funcionalidad que los gestione de forma eficiente?**

Aunque el proyecto se centra en la gestión de datos, si no lo hiciera, se podría añadir una funcionalidad de registro de actividades del usuario. Esto permitiría almacenar información sobre las acciones realizadas, como inicio de sesión, creación de tareas o modificaciones, lo que ayudaría a mejorar la experiencia del usuario y ofrecer estadísticas personalizadas.

## Almacenamiento en la Nube (5f)

**Si tu software utiliza almacenamiento en la nube, ¿cómo garantizas la seguridad y disponibilidad de los datos?**

El Gestor de Tareas Personal utiliza almacenamiento en la nube y se implementan las siguientes medidas para garantizar la seguridad y disponibilidad de los datos:

- **Cifrado**: Los datos se cifran tanto en tránsito (utilizando HTTPS) como en reposo (mediante las capacidades de cifrado de MongoDB).

- **Control de Acceso**: Se aplican políticas estrictas de control de acceso, asegurando que solo usuarios autenticados y autorizados puedan acceder o modificar los datos.

- **Copias de Seguridad**: Se realizan respaldos periódicos de la base de datos y se almacenan en ubicaciones seguras para facilitar la recuperación en caso de fallo.

- **Monitoreo y Alertas**: Se implementan sistemas de monitoreo para detectar actividades sospechosas o anomalías, con alertas en tiempo real para una respuesta rápida.

**¿Qué alternativas consideraste para almacenar datos y por qué elegiste tu solución actual?**

Se evaluaron las siguientes alternativas:

- **Almacenamiento Local**: Ofrece control total sobre los datos, pero presenta desafíos en términos de escalabilidad, mantenimiento y disponibilidad remota.

- **Servicios en la Nube**: Proporcionan escalabilidad, alta disponibilidad y reducen la carga de mantenimiento.

Se optó por el almacenamiento en la nube debido a sus ventajas en escalabilidad, disponibilidad y menor carga administrativa, lo que permite centrarse en el desarrollo de funcionalidades clave.

**Si no usas la nube, ¿cómo podrías integrarla en futuras versiones?**

Si actualmente no se utilizara la nube, se podría integrar en futuras versiones mediante:

- **Migración de la Base de Datos**: Trasladar la base de datos local a un servicio de base de datos en la nube, como MongoDB Atlas.

- **Almacenamiento de Archivos**: Utilizar servicios de almacenamiento en la nube para guardar archivos adjuntos o respaldos.

- **Servicios de Autenticación**: Implementar autenticación y autorización a través de servicios en la nube para mejorar la seguridad y escalabilidad.

## Seguridad y Regulación (5i)

**¿Qué medidas de seguridad implementaste para proteger los datos o procesos en tu proyecto?**

Las medidas de seguridad implementadas incluyen:

- **Autenticación y Autorización**: Uso de tokens JWT para autenticar usuarios y definir permisos de acceso.

- **Cifrado**: Cifrado de datos sensibles antes de almacenarlos y uso de HTTPS para comunicaciones seguras.

- **Protección contra CSRF y XSS**: Implementación de medidas para prevenir ataques de Cross-Site Request Forgery y Cross-Site Scripting.

- **Registro de Actividades**: Mantenimiento de logs de actividades del usuario para detectar y responder a comportamientos sospechosos.

**¿Qué normativas (e.g., GDPR) podrían afectar el uso de tu software y cómo las has tenido en cuenta?**

El Reglamento General de Protección de Datos (GDPR) de la Unión Europea es relevante para este proyecto. Para cumplir con el GDPR:

- **Consentimiento del Usuario**: Se obtiene el consentimiento explícito de los usuarios para recopilar y procesar sus datos personales.

- **Derecho al Olvido**: Se proporciona a los usuarios la opción de eliminar sus datos personales del sistema.

- **Transparencia**: Se informa a los usuarios sobre qué datos se recopilan, cómo se utilizan y con qué fines.
