# Task Manager: Project Documentation

---

## **Introduction**  
The **Task Manager** is a full-stack web application designed to create, list, and filter tasks. Its architecture follows the MVC (Model-View-Controller) pattern, using modern technologies to ensure both functionality and simplicity.

### **Technologies Used**  
- **Frontend**:  
  - HTML5 and CSS3 for structure and styling.  
  - Vanilla JavaScript for dynamic interactions.  
  - Static views (`index.html`, `crear.html`, `listar.html`, `filtrar.html`, `wiki.html`).  
- **Backend**:  
  - **Express.js** for the server and routing.  
  - **body-parser** for processing HTTP requests.  
  - Local storage in the `tasks.json` file.  
- **Data Persistence**:  
  - Data stored in JSON format.  
  - Basic CRUD operations (Create, Read, Filter).

### **Key Features**  
1. Create tasks with a title and description.  
2. List all stored tasks.  
3. Search tasks by title.  
4. Intuitive interface with error feedback.  

---

## Criterion 6a) Strategic Objectives

**Q1. Which specific strategic objectives of the company does your software address?**  
- It centralizes task creation, tracking, and filtering into a single web application, improving operational efficiency and reducing manual coordination overhead.  
- By timestamping and assigning unique IDs to every task, it enhances visibility and accountability across teams.  

**Q2. How does the software align with the overall digitalization strategy?**  
- It replaces paper- or email-based task logs with an MVC-patterned web platform built on Express.js, ready for future cloud deployment and integrations.  
- Its minimal, flexible architecture embodies a “build-small, extend-fast” roadmap, laying the groundwork for IoT, analytics, or third-party API connections down the line.  

---

## Criterion 6b) Business Areas and Communications

**Q1. Which areas of the company (production, business, communications) benefit most from your software?**  
- **Production/Maintenance:** Technicians can log incidents or maintenance tasks in real time via the `crear.html` form.  
- **Project Management:** Leads gain up-to-date overviews of deliverables and bottlenecks through the `listar.html` and `filtrar.html` views.  
- **Communications:** Built-in client- and server-side validation reduces ambiguous email threads by providing immediate UI feedback on errors.  

**Q2. What operational impact do you expect on daily operations?**  
- A 30–50% reduction in back-and-forth coordination, since tasks are triaged and prioritized directly in the system.  
- Automated timestamps enable precise time tracking, helping teams measure and optimize resolution cycles.  

---

## Criterion 6c) Areas Susceptible to Digitalization

**Q1. Which areas of the company are most susceptible to being digitalized with your software?**  
- Incident reporting and follow-up can move entirely online, eliminating paper forms.  
- Preventive maintenance scheduling becomes filterable by equipment or date instead of manual spreadsheets.  
- Internal help-desk requests can be centralized, replacing ad hoc emails and calls.  

**Q2. How will digitalization improve operations in those areas?**  
- Consistent JSON-based data capture prevents missing or malformed entries.  
- Full audit trails enable generation of frequency and resolution-time reports for continuous improvement.  

---

## Criterion 6d) Fit Between Digitalized and Non-Digitalized Areas

**Q1. How do the digitalized areas interact with the non-digitalized ones?**  
- Field operators without constant computer access can call a coordinator, who then logs the task via the web UI.  
- Paper-based approvals (e.g., supervisor sign-off) can be scanned or entered as follow-up validation tasks.  

**Q2. What solutions or improvements would you propose to integrate these areas?**  
- A lightweight mobile web view or SMS gateway would let crews create tasks from the field.  
- An email-to-task converter could automatically transform incoming support emails into system tasks.  

---

## Criterion 6e) Present and Future Needs

**Q1. What current needs of the company does your software resolve?**  
- It prevents lost or forgotten tickets by centralizing all entries in `tasks.json`.  
- It enforces required-field validation both on the client and server, ensuring data completeness.  

**Q2. What future needs can it anticipate?**  
- Role-based access control and JWT authentication can be layered in to secure data.  
- Automated alerts (e.g., overdue-task reminders via Slack or email) can be added using Express middleware.  

---

## Criterion 6f) Relationship with Enabling Technologies

**Q1. Which enabling technologies have you employed, and how do they impact the company’s areas?**  
- **Express.js (Node.js):** Provides a minimal, performant backend framework that can be containerized and scaled.  
- **Local JSON storage:** Simple for prototyping, with a clear migration path to SQL/NoSQL systems for production.  
- **Vanilla JavaScript:** Ensures a lightweight, dependency-free UI that loads quickly across devices.  

**Q2. What specific benefits does implementing these technologies bring?**  
- Rapid feature iteration without complex build chains reduces time-to-market.  
- Portability across on-premise servers, VMs, or serverless environments lowers infrastructure costs.  

---

## Criterion 6g) Security Gaps

**Q1. What possible security breaches could arise when implementing your software?**  
- An unrestricted CORS policy (`Access-Control-Allow-Origin: *`) could permit unauthorized cross-site requests.  
- Lack of authentication/authorization means any network user can create, view, or delete tasks.  
- Concurrent writes to `tasks.json` risk data corruption without transaction support.  

**Q2. What concrete measures would you propose to mitigate them?**  
- Enforce HTTPS and configure CORS to allow only trusted origins via specific `Access-Control-Allow-Origin` entries.  
- Implement JWT-based authentication and role-based authorization in Express.js.  
- Migrate persistence to a transactional database (e.g., PostgreSQL or Firestore) to ensure atomic operations.  

---

## Criterion 6h) Data Handling and Analysis

**Q1. How is data managed in your software, and which methodologies do you use?**  
- Data flows from the HTML form in `crear.html` through client- and server-side validation, then is appended to `tasks.json` with a unique `id` and `createdAt` timestamp.  
- For prototyping, synchronous JSON I/O is used; future phases will introduce schema-based validation (e.g., JSON Schema).  

**Q2. What do you do to guarantee data quality and consistency?**  
- Client- and server-side checks enforce required fields and prevent malformed entries.  
- Unique identifiers and timestamps prevent collisions and provide an audit trail; migrating to a validator like Ajv will enforce complex schema rules.  

---

## **How to run this proyect**  
1. Clone repository:  
   ```bash  
   git clone https://github.com/tu-usuario/gestor-tareas  
    ```
2. Navigate to the project folder and run
   ```bash
   node app.js
   ```
