Respuestas a las preguntas
1. Ciclo de vida del dato (5b)
Gestión de los datos:
En el proyecto, los datos se generan cuando se crea una nueva tarea a través de una petición POST a la API. Una vez recibidos, se validan y se almacenan en un archivo JSON (tasks.json). El ciclo de vida incluye la creación, lectura, actualización y eliminación de registros, asegurando que cada operación quede registrada en el archivo.

Estrategia para garantizar consistencia e integridad:
Se implementan validaciones a nivel de API y se utiliza un enfoque de escritura secuencial al archivo para evitar condiciones de carrera. Además, se recomienda realizar copias de seguridad periódicas del archivo para asegurar la integridad de los datos. La estrategia incluye:

Validación de entradas de datos.
Actualización atómica del archivo JSON.
Registro de fechas de creación y modificación para cada tarea.
Inclusión de funcionalidades de gestión de datos:
Aunque el proyecto se centra en tareas, se podrían ampliar funcionalidades agregando registros de auditoría o logs para monitorear cada cambio, lo que permitiría un seguimiento detallado desde la generación hasta la eliminación de los datos.

2. Almacenamiento en la nube (5f)
Uso de la nube y garantía de seguridad:
El proyecto actual no implementa almacenamiento en la nube, ya que se opta por un archivo JSON local por su simplicidad y enfoque demostrativo. No obstante, para futuras versiones se podría integrar una solución en la nube (como AWS S3 o servicios de bases de datos administradas) para mejorar la escalabilidad y disponibilidad, implementando cifrado y copias de seguridad automáticas.

Alternativas consideradas:
Se evaluaron bases de datos relacionales (como MySQL o PostgreSQL) y NoSQL (como MongoDB). Sin embargo, se eligió un archivo JSON por ser una solución ligera, sin dependencias de infraestructura, ideal para fines demostrativos y de aprendizaje.

Integración futura de la nube:
En futuras versiones, se podría migrar la base de datos a una solución en la nube, permitiendo mayor escalabilidad y redundancia, lo que a su vez facilitaría la integración con otros servicios y herramientas de análisis de datos.

3. Seguridad y regulación (5i)
Medidas de seguridad implementadas:
Se han implementado medidas básicas de seguridad en la API, tales como:

Validación y sanitización de los datos de entrada para prevenir inyecciones y entradas maliciosas.
Configuración de cabeceras de seguridad y uso de CORS para limitar accesos.
Recomendación de usar HTTPS en entornos de producción.
Normativas y regulaciones:
El proyecto considera la posibilidad de estar sujeto a normativas como el GDPR, en caso de manejo de datos personales. Se ha diseñado de forma que el usuario pueda solicitar la eliminación de sus datos y se recomienda documentar el proceso de consentimiento, garantizando la privacidad y el control de la información personal.

Riesgos potenciales y estrategias futuras:
En ausencia de medidas de seguridad robustas, los riesgos incluyen la exposición de datos sensibles y ataques de inyección. En el futuro, se implementarían controles de acceso, autenticación robusta, encriptación en reposo y en tránsito, y auditorías regulares de seguridad.

4. Implicación de las THD en negocio y planta (2e)
Impacto en entornos de negocio y planta:
El software puede optimizar la gestión de tareas y procesos en entornos empresariales, mejorando la eficiencia operativa y la coordinación de equipos. En una planta industrial, podría adaptarse para gestionar órdenes de trabajo, mantenimiento preventivo y seguimiento de incidencias, facilitando la toma de decisiones y la optimización de recursos.

Mejoras operativas y toma de decisiones:
Al digitalizar el seguimiento de tareas, se reducen los errores manuales y se obtiene una visión clara de los procesos, lo que permite decisiones informadas y oportunas. La trazabilidad de cada acción facilita la identificación de cuellos de botella y áreas de mejora.

Otros entornos beneficiados:
Además de negocios y plantas industriales, entornos educativos, de servicios y organizaciones sin fines de lucro pueden beneficiarse de la automatización y la eficiencia en la gestión de procesos y proyectos.

5. Mejoras en IT y OT (2f)
Integración entre entornos IT y OT:
El software, al ser una API basada en tecnologías web estándar, facilita la integración entre sistemas IT (informáticos) y OT (operativos). Puede actuar como puente entre sistemas de gestión empresarial y sistemas de control industrial.

Procesos beneficiados:
Procesos como la monitorización en tiempo real, la automatización de reportes y la coordinación de tareas entre diferentes departamentos se verían mejorados. La API permite la integración con herramientas de análisis y control, facilitando la automatización y la eficiencia operativa.

Adaptación para mejorar procesos tecnológicos:
Si bien actualmente el proyecto es una simple API de gestión de tareas, se podría extender para incluir integración con protocolos industriales (por ejemplo, MQTT para IoT) y sistemas ERP, adaptándolo a las necesidades específicas de entornos IT y OT.

6. Tecnologías Habilitadoras Digitales (2g)
Tecnologías utilizadas e integradas:
El proyecto utiliza tecnologías como Node.js y Express, que son habilitadoras digitales clave para el desarrollo rápido y escalable de aplicaciones web. El uso de JSON como base de datos local permite una gestión sencilla y directa de los datos.

Mejoras en funcionalidad y alcance:
Estas tecnologías facilitan la implementación de APIs RESTful, permitiendo la integración con otras herramientas digitales y la ampliación del proyecto en el futuro. Además, su naturaleza open source y la comunidad activa que las respalda aseguran mejoras constantes y soporte robusto.

Implementación futura de THD:
Se podrían integrar tecnologías adicionales, como IoT para la monitorización de dispositivos en tiempo real, Machine Learning para análisis predictivos o blockchain para mayor transparencia en el registro de datos. Esto enriquecería la solución, ampliando su alcance y capacidad de adaptación a diversos entornos.

