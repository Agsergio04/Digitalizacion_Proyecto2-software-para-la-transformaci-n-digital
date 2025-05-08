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

# Fase 2: Análisis de Utilidad y Aplicación

## 6a) Objetivos Estratégicos  
**P1. ¿Qué objetivos estratégicos aborda el software?**  
- Digitaliza los flujos de trabajo manuales para mejorar la velocidad y la precisión.  
- Alinea las operaciones diarias con los objetivos corporativos de digitalización.  

**P2. ¿Cómo se alinea con la estrategia de digitalización?**  
- Ofrece métricas y paneles de control para la toma de decisiones basada en datos.  

---

## 6b) Áreas de Negocio y Comunicaciones  
**P3. ¿Qué áreas se benefician más?**  
- **Producción**: Seguimiento de tareas en tiempo real para reducir cuellos de botella.  
- **Comunicación**: Comentarios y alertas centralizadas.  

**P4. ¿Cuál es el impacto operativo?**  
- Entregas más rápidas; reducción del 60 % en cadenas de correo internas.  

---

## 6c) Áreas Susceptibles de Digitalización  
**P5. ¿Cuáles son las áreas clave para digitalizar?**  
- Asignación de tareas, informes de estado, analítica.  

**P6. ¿Cómo mejorará la digitalización esas áreas?**  
- Reducción del 50 % en tareas vencidas.  

---

## 6d) Encaje de Áreas Digitalizadas  
**P7. ¿Cómo interactúan las áreas digitalizadas con las no digitalizadas?**  
- Los datos de tareas digitales se exportan en CSV para el ERP tradicional.  

**P8. ¿Qué mejoras propondrías?**  
- Desarrollar conectores webhook para sincronización en tiempo real.  

---

## 6e) Necesidades Presentes y Futuras  
**P9. ¿Qué necesidades actuales resuelve el software?**  
- Elimina el seguimiento en papel.  

**P10. ¿Qué necesidades futuras podría abordar?**  
- Recomendaciones de prioridad impulsadas por IA.  

---

## 6f) Tecnologías Habilitadoras  
**P11. ¿Qué tecnologías has empleado?**  
- Backend con Node.js/Express; frontend con JavaScript.  

**P12. ¿Qué beneficios aportan?**  
- Iteración rápida; compatibilidad multiplataforma.  

---

## 6g) Brechas de Seguridad  
**P13. ¿Qué posibles brechas existen?**  
- Acceso a la API sin autenticación.  

**P14. ¿Qué medidas mitigarían estos riesgos?**  
- Autenticación JWT; auditorías de seguridad periódicas.  

---

## 6h) Tratamiento de Datos y Análisis  
**P15. ¿Cómo se gestionan los datos?**  
- Archivos JSON con validación de esquema.  

**P16. ¿Cómo aseguras la calidad y consistencia?**  
- Validación de entrada y pruebas unitarias.  

---

## 6i) Integración de Sistemas  
**P17. ¿Cómo se integran los sistemas y datos?**  
- Exportación de tareas a Excel/ERP.  

**P18. ¿Qué mejoras de interoperabilidad propones?**  
- API RESTful con OAuth2.  

---

## 6j) Documentación de Cambios  
**P19. ¿Cómo se documentan los cambios?**  
- Registro de cambios en `docs/devlog.md`.  

**P20. ¿Cómo se utiliza el devlog?**  
- Publicaciones semanales en LinkedIn vinculadas desde la wiki.  

---

## 6k) Recursos Humanos  
**P21. ¿Qué habilidades clave se requieren?**  
- JavaScript, diseño de API, validación de JSON.  

**P22. ¿Qué estrategias de capacitación propones?**  
- Guía de incorporación en la wiki; talleres mensuales de revisión de código.  

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
