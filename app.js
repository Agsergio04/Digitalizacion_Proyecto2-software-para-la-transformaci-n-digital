const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const tasksFile = path.join(__dirname, 'tasks.json');

// Configuración básica
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));

// Headers CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rutas HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend/index.html')));
app.get('/crear', (req, res) => res.sendFile(path.join(__dirname, 'frontend/crear.html')));
app.get('/listar', (req, res) => res.sendFile(path.join(__dirname, 'frontend/listar.html')));
app.get('/filtrar', (req, res) => res.sendFile(path.join(__dirname, 'frontend/filtrar.html')));

// API Endpoints
app.get('/api/tasks', async (req, res) => {
    try {
        const data = await fs.readFile(tasksFile, 'utf8');
        let tasks = JSON.parse(data);

        if (req.query.completed) {
            tasks = tasks.filter(task => task.completed === (req.query.completed === 'true'));
        }

        res.json(tasks);
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(tasksFile, '[]');
            res.json([]);
        } else {
            res.status(500).json({ error: 'Error al obtener tareas' });
        }
    }
});

app.post('/api/tasks', async (req, res) => {
    try {
        // Validar datos
        if (!req.body.title?.trim()) {
            return res.status(400).json({ error: "El título es obligatorio" });
        }

        // Leer o crear archivo tasks.json
        let tasks = [];
        try {
            const data = await fs.readFile(tasksFile, 'utf8');
            tasks = JSON.parse(data);
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(tasksFile, '[]'); // Crear archivo si no existe
            } else {
                throw error;
            }
        }

        // Crear nueva tarea
        const newTask = {
            id: Date.now().toString(),
            title: req.body.title.trim(),
            description: req.body.description?.trim() || "",
            completed: false,
            createdAt: new Date().toISOString()
        };

        tasks.push(newTask);
        await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
        res.status(201).json(newTask);

    } catch (error) {
        console.error("Error en POST /api/tasks:", error); // Debug en consola
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


app.get('/api/search', async (req, res) => {
    try {
        const searchTerm = req.query.title?.toLowerCase() || '';
        const data = await fs.readFile(tasksFile, 'utf8');
        const tasks = JSON.parse(data);

        const filtered = tasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm)
        );

        res.json(filtered);
    } catch (err) {
        res.status(500).json({ error: 'Error en la búsqueda' });
    }
});

app.listen(port, () => {
    console.log(`Servidor funcionando en: http://localhost:${port}`);
});