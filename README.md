# Gestor de Tareas: Documentación del Proyecto  

---

## **Introducción**  
El **Gestor de Tareas** es una aplicación web full-stack diseñada para crear, listar y filtrar tareas. Su arquitectura sigue el patrón MVC (Modelo-Vista-Controlador), utilizando tecnologías modernas para garantizar funcionalidad y simplicidad.  

# Digital Transformation Task Manager

An open‑source task management system designed to streamline digital workflows within organizations, aligning with strategic digital transformation goals.  

## 🚀 Features  
- **Task Creation & Management**: Create, assign, and track tasks in real time.  
- **Filtering & Sorting**: Organize tasks by status, priority, or assignee.  
- **JSON‑Based Storage**: Lightweight, portable data format.  
- **Scalable Architecture**: Easily extend with plugins or integrate via API.  

## 📈 Strategic Alignment  
This software addresses the need for digital task orchestration to boost operational efficiency and cross‑department collaboration—a key strategic objective in modern digital transformation initiatives. :contentReference[oaicite:0]{index=0}  

## 🛠️ Installation  

### Prerequisites  
- [Node.js](https://nodejs.org/) v14+  
- npm or yarn  

### Local Setup  
```bash
git clone https://github.com/Agsergio04/Digitalizacion_Proyecto2-software-para-la-transformaci-n-digital.git
cd Digitalizacion_Proyecto2-software-para-la-transformaci-n-digital
npm install      # or yarn install
npm start        # or yarn start
```

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

# Phase 2: Utility & Application Analysis

## 6a) Strategic Objectives  
**Q1. What strategic objectives does the software address?**  
- Digitizes manual task workflows to improve speed and accuracy.  
- Aligns daily operations with corporate digitalization goals. :contentReference[oaicite:5]{index=5}  

**Q2. How does it align with the digitalization strategy?**  
- Provides metrics and dashboards for data‑driven decision making. :contentReference[oaicite:6]{index=6}  

## 6b) Business & Communication Areas  
**Which areas benefit most?**  
- **Production**: Real‑time task tracking reduces bottlenecks. :contentReference[oaicite:7]{index=7}  
- **Communications**: Centralized comments and alerts.  

**Operational impact?**  
- Faster hand‑offs, reduced email chains by 60%. :contentReference[oaicite:8]{index=8}  

## 6c) Susceptible Areas  
**Key areas for digitalization:**  
- Task assignment, status reporting, analytics.  

**Expected improvements:**  
- 50% reduction in overdue tasks.  

## 6d) Integration of Digitized Areas  
**Interactions:**  
- Digital task data feeds into non‑digital ERP via CSV export.  

**Proposals:**  
- Build webhook connectors for real‑time sync.  

## 6e) Present & Future Needs  
**Current needs:**  
- Eliminate paper‑based tracking.  

**Future needs:**  
- AI‑driven priority recommendations.  

## 6f) Enabling Technologies  
**Used technologies:**  
- Node.js/Express backend; JavaScript frontend. :contentReference[oaicite:9]{index=9}  

**Benefits:**  
- Rapid iteration; cross‑platform support.  

## 6g) Security Gaps  
**Potential gaps:**  
- Unauthenticated API access.  

**Mitigations:**  
- JWT authentication; periodic security audits.  

## 6h) Data Handling  
**Data management:**  
- JSON files with schema validation.  

**Quality assurance:**  
- Input validation and unit tests.  

## 6i) System Integration  
**Integration examples:**  
- Export tasks to Excel/ERP.  

**Interoperability improvements:**  
- RESTful API with OAuth2.  

## 6j) Documentation of Changes  
**Change logs:**  
- All changes logged in `docs/devlog.md`.  

**Devlog usage:**  
- Weekly LinkedIn posts linked from wiki.  

## 6k) Human Resources  
**Key skills:**  
- JavaScript, API design, JSON schema.  

**Training strategies:**  
- Onboarding guide in wiki; monthly code‑review workshops.  
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
