// Funciones principales
const loadTasks = async () => {
    try {
        const response = await fetch('/api/tasks');
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        showError('Error al cargar tareas');
    }
};

const addTask = async (title, description) => {
    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.error || 'Error desconocido');

        window.location.href = '/listar';
    } catch (error) {
        showError(error.message);
    }
};

// Helpers
const renderTasks = (tasks) => {
    const container = document.getElementById('taskList') || document.getElementById('filteredList');
    if (!container) return;

    container.innerHTML = tasks.map(task => `
        <li class="${task.completed ? 'completed' : ''}">
            <strong>${task.title}</strong>
            <p>${task.description}</p>
            <small>${new Date(task.createdAt).toLocaleDateString()}</small>
        </li>
    `).join('');
};

const showError = (message) => {
    const errorDiv = document.getElementById('errorMessage');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        setTimeout(() => errorDiv.style.display = 'none', 3000);
    }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('taskForm')) {
        document.getElementById('taskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('taskTitle').value.trim();
            const description = document.getElementById('taskDescription').value.trim();
            if (title) addTask(title, description);
        });
    }

    if (document.getElementById('applyFilter')) {
        document.getElementById('applyFilter').addEventListener('click', async () => {
            const searchTerm = document.getElementById('searchInput').value.trim();
            try {
                const response = await fetch(`/api/search?title=${encodeURIComponent(searchTerm)}`);
                const tasks = await response.json();
                renderTasks(tasks);
            } catch (error) {
                showError('Error al filtrar');
            }
        });
    }

    if (window.location.pathname === '/listar') loadTasks();
});