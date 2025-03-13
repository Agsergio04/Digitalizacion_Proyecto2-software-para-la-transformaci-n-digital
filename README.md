# Gestor de Tareas: Documentación del Proyecto  

---

## **Introducción**  
El **Gestor de Tareas** es una aplicación web full-stack diseñada para crear, listar y filtrar tareas. Su arquitectura sigue el patrón MVC (Modelo-Vista-Controlador), utilizando tecnologías modernas para garantizar funcionalidad y simplicidad.  

### **Tecnologías Utilizadas**  
- **Frontend**:  
  - HTML5 y CSS3 para la estructura y estilos.  
  - JavaScript vanilla para la interacción dinámica.  
  - Vistas estáticas (`index.html`, `crear.html`, `listar.html`, `filtrar.html`).  
- **Backend**:  
  - **Express.js** para el servidor y manejo de rutas.  
  - **body-parser** para procesar solicitudes HTTP.  
  - Almacenamiento local en archivo `tasks.json`.  
- **Persistencia de datos**:  
  - Datos guardados en formato JSON.  
  - Operaciones CRUD básicas (Crear, Leer, Filtrar).  

### **Funcionalidades Clave**  
1. Crear tareas con título y descripción.  
2. Listar todas las tareas almacenadas.  
3. Buscar tareas por título.  
4. Interfaz intuitiva con feedback de errores.  

---

## **Preguntas y Respuestas**  

### **1. Ciclo de vida del dato (5b)**  
**¿Cómo se gestionan los datos desde su generación hasta su eliminación?**  
- **Generación**: Los datos se crean al enviar el formulario en `crear.html`, validando que el título no esté vacío.  
- **Almacenamiento**: Se guardan en `tasks.json` con un ID único y marca de tiempo (`createdAt`).  
- **Eliminación**: *No implementada actualmente*. Para completar el ciclo, se requiere un endpoint de eliminación.  

**¿Qué estrategias garantizan la consistencia e integridad?**  
- Validación del título en el backend.  
- *Limitación actual*: No hay manejo de concurrencia al escribir en `tasks.json`.  

---

### **2. Almacenamiento en la nube (5f)**  
**¿Cómo garantizar seguridad y disponibilidad en la nube?**  
- *Situación actual*: Los datos están en un archivo local (`tasks.json`).  
- *Propuesta*: Migrar a **Firestore** (Firebase) o **AWS S3** para cifrado, backups y escalabilidad.  

**¿Qué alternativas se consideraron?**  
- **Bases de datos SQL**: Opté por JSON local para simplificar el MVP.  

---

### **3. Seguridad y regulación (5i)**  
**¿Qué medidas de seguridad se implementaron?**  
- Headers CORS permisivos (`*`), validación de entrada básica.  
- *Faltantes clave*: Autenticación, HTTPS y cifrado.  

**¿Qué normativas afectan al proyecto?**  
- **GDPR**: Requeriría consentimiento explícito y opción de borrado, no implementados.  

---

### **4. Implicación de las THD en negocio y planta (2e)**  
**¿Qué impacto tendría en entornos industriales?**  
- **Planta**: Gestión de mantenimientos preventivos o incidencias.  
- **Negocio**: Mejora de productividad mediante seguimiento centralizado.  

---

### **5. Mejoras en IT y OT (2f)**  
**¿Cómo integrar IT y OT?**  
- Conectar con sensores IoT para generar tareas automáticas (ej: alertas de sobrecalentamiento).  

---

### **6. Tecnologías Habilitadoras Digitales (2g)**  
**¿Qué THD se usaron o podrían integrarse?**  
- **Express.js**: Backend ágil.  
- **Cloud Computing**: Para escalabilidad (ej: AWS Lambda).  
- **IoT**: Para automatización basada en datos en tiempo real.  

---

## **Cómo Probar el Proyecto**  
1. Clonar el repositorio:  
   ```bash  
   git clone https://github.com/tu-usuario/gestor-tareas  
    ```
2. Vas hacia la ruta donde tengas en proyecto y ejecutas
   ```bash
   node app.js
   ```
