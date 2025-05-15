# Gestor de Tareas: Documentación del Proyecto

---

## **Introducción**  
El **Gestor de Tareas** es una aplicación web full-stack diseñada para crear, listar y filtrar tareas. Su arquitectura sigue el patrón MVC (Modelo-Vista-Controlador), utilizando tecnologías modernas para garantizar tanto funcionalidad como sencillez.

### **Tecnologías Utilizadas**  
- **Frontend**:  
  - HTML5 y CSS3 para estructura y estilo.  
  - JavaScript puro (Vanilla JS) para interacciones dinámicas.  
  - Vistas estáticas (`index.html`, `crear.html`, `listar.html`, `filtrar.html`, `wiki.html`).  
- **Backend**:  
  - **Express.js** para servidor y enrutamiento.  
  - **body-parser** para procesar peticiones HTTP.  
  - Almacenamiento local en el archivo `tasks.json`.  
- **Persistencia de Datos**:  
  - Datos guardados en formato JSON.  
  - Operaciones CRUD básicas (Crear, Leer, Filtrar).

### **Funciones Clave**  
1. Crear tareas con título y descripción.  
2. Listar todas las tareas almacenadas.  
3. Buscar tareas por título.  
4. Interfaz intuitiva con retroalimentación de errores.  

---

## Criterio 6a) Objetivos Estratégicos

**P1. ¿Qué objetivos estratégicos específicos de la empresa aborda tu software?**  
- Centraliza la creación, seguimiento y filtrado de tareas en una sola aplicación web, mejorando la eficiencia operativa y reduciendo la carga de coordinación manual.  
- Al registrar la fecha y hora y asignar IDs únicos a cada tarea, aumenta la visibilidad y la responsabilidad en los equipos.  

**P2. ¿Cómo se alinea el software con la estrategia global de digitalización?**  
- Sustituye registros de tareas en papel o correo electrónico por una plataforma web basada en MVC y Express.js, preparada para despliegues en la nube e integraciones futuras.  
- Su arquitectura mínima y flexible sigue la filosofía “construir pequeño, extender rápido”, sentando las bases para IoT, analítica o conexiones con APIs de terceros.  

---

## Criterio 6b) Áreas de Negocio y Comunicaciones

**P1. ¿Qué áreas de la empresa (producción, negocio, comunicaciones) se benefician más de tu software?**  
- **Producción/Mantenimiento:** Los técnicos pueden registrar incidentes o tareas de mantenimiento en tiempo real mediante el formulario `crear.html`.  
- **Gestión de Proyectos:** Los responsables obtienen visiones actualizadas de entregables y cuellos de botella en `listar.html` y `filtrar.html`.  
- **Comunicaciones:** La validación en cliente y servidor reduce hilos de correo ambiguos, al ofrecer retroalimentación inmediata en la interfaz.  

**P2. ¿Qué impacto operativo esperas en las operaciones diarias?**  
- Reducción del 30–50 % en la coordinación bidireccional, al priorizar y tramitar tareas directamente en el sistema.  
- Sellado automático de fecha y hora permite medir y optimizar los ciclos de resolución.  

---

## Criterio 6c) Áreas Susceptibles de Digitalización

**P1. ¿Qué áreas de la empresa son más susceptibles de digitalizarse con tu software?**  
- El registro y seguimiento de incidentes puede trasladarse completamente en línea, eliminando formularios en papel.  
- La programación de mantenimiento preventivo se puede filtrar por equipo o fecha en lugar de hojas de cálculo manuales.  
- Las solicitudes del help-desk interno pueden centralizarse, sustituyendo correos y llamadas ad hoc.  

**P2. ¿Cómo mejorará la digitalización las operaciones en esas áreas?**  
- La captura de datos en JSON previene entradas faltantes o mal formadas.  
- Los registros de auditoría completos facilitan informes de frecuencia y tiempos de resolución para la mejora continua.  

---

## Criterio 6d) Ajuste Entre Áreas Digitalizadas y No Digitalizadas

**P1. ¿Cómo interactúan las áreas digitalizadas con las no digitalizadas?**  
- Operarios de campo sin acceso constante a ordenador pueden llamar a un coordinador, quien registra la tarea en la UI web.  
- Aprobaciones en papel (p. ej., firma de supervisor) pueden escanearse o ingresarse como tareas de validación posteriores.  

**P2. ¿Qué soluciones o mejoras propondrías para integrar estas áreas?**  
- Una vista web móvil ligera o un gateway SMS permitiría al personal crear tareas desde el campo.  
- Un conversor de correo a tarea podría transformar automáticamente emails de soporte en tareas del sistema.  

---

## Criterio 6e) Necesidades Presentes y Futuras

**P1. ¿Qué necesidades actuales de la empresa resuelve tu software?**  
- Evita tickets perdidos u olvidados al centralizar todas las entradas en `tasks.json`.  
- Válida campos obligatorios en cliente y servidor, garantizando la integridad de los datos.  

**P2. ¿Qué necesidades futuras puede anticipar?**  
- Se puede añadir control de acceso basado en roles y autenticación JWT para asegurar los datos.  
- Alertas automáticas (p. ej., recordatorios de tareas vencidas por Slack o email) mediante middleware de Express.  

---

## Criterio 6f) Relación con Tecnologías Habilitadoras

**P1. ¿Qué tecnologías habilitadoras has empleado y cómo impactan las áreas de la empresa?**  
- **Express.js (Node.js):** Framework backend ligero y de alto rendimiento, apto para contenerización y escalado.  
- **Almacenamiento JSON local:** Ideal para prototipos, con ruta clara de migración a bases de datos SQL/NoSQL en producción.  
- **JavaScript puro:** UI ligera y sin dependencias, con tiempos de carga rápidos en cualquier dispositivo.  

**P2. ¿Qué beneficios específicos aportan estas tecnologías?**  
- Iteración rápida de características sin cadenas de compilación complejas, reduciendo el time-to-market.  
- Portabilidad en servidores on-premise, máquinas virtuales o entornos serverless, disminuyendo costos de infraestructura.  

---

## Criterio 6g) Brechas de Seguridad

**P1. ¿Qué posibles brechas de seguridad podrían surgir al implementar tu software?**  
- Una política CORS sin restricciones (`Access-Control-Allow-Origin: *`) permitiría peticiones cross-site no autorizadas.  
- Falta de autenticación/autorización permite a cualquier usuario de la red crear, ver o eliminar tareas.  
- Escrituras concurrentes en `tasks.json` pueden corromper datos si no hay soporte transaccional.  

**P2. ¿Qué medidas propones para mitigarlas?**  
- Forzar HTTPS y configurar CORS solo para orígenes de confianza mediante entradas específicas de `Access-Control-Allow-Origin`.  
- Implementar autenticación JWT y autorización basada en roles en Express.js.  
- Migrar la persistencia a una base de datos transaccional (por ejemplo, PostgreSQL o Firestore) para operaciones atómicas.  

---

## Criterio 6h) Gestión y Análisis de Datos

**P1. ¿Cómo se gestionan los datos en tu software y qué metodologías utilizas?**  
- Los datos fluyen desde el formulario HTML en `crear.html`, pasan por validación en cliente y servidor, y se añaden a `tasks.json` con un `id` único y marca de tiempo `createdAt`.  
- Para el prototipo se usa E/S JSON síncrona; en fases futuras se introducirá validación basada en esquemas (por ejemplo, JSON Schema).  

**P2. ¿Qué haces para garantizar la calidad y coherencia de los datos?**  
- Validaciones en cliente y servidor previenen entradas mal formadas o incompletas.  
- IDs únicos y marcas de tiempo evitan colisiones y proporcionan trazabilidad; migrar a un validador como Ajv impondrá reglas de esquema más complejas.  

---

## **Cómo ejecutar este proyecto**  
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/gestor-tareas

## **Como utilizar este proyecto**  

1. **Clonas el repositorio:**
   ```bash  
   git clone https://github.com/tu-usuario/gestor-tareas
    ```

2.**Descargar Node.js en caso de no tenerlo**
  -Aqui el enlace de descarga : https://nodejs.org/en/download/

  2.1**Tras la instalacion comprueba que todo esta correcto con el siguiente comando**
  
  ```bash  
     git clone https://github.com/tu-usuario/gestor-tareas
   ```

3. **Ve hacia donde tengas el repositorio descargado y ejecuta este comando para ejecutar el proyecto**
   ```bash
   node app.js
   ```
