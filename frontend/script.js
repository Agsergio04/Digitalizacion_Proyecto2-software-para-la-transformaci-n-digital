/**
 * Fetches all tasks from the server and renders them into the list view.
 *
 * @async
 * @function loadTasks
 * @returns {Promise<void>}
 * @throws Will call showError if the network request fails or returns a non-OK status.
 */
const loadTasks = async () => {
  try {
    const response = await fetch('/api/tasks');
    if (!response.ok) throw new Error(`Error ${response.status}`);
    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    showError('Error loading tasks');
  }
};

/**
 * Sends a new task to the server to be created.
 *
 * @async
 * @function addTask
 * @param {string} title - The title of the task (must be non-empty).
 * @param {string} description - A longer description of what the task entails.
 * @returns {Promise<void>}
 * @throws Will call showError with the error message if the creation fails.
 */
const addTask = async (title, description) => {
  try {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Unknown error');

    // Redirect to the listing page on success
    window.location.href = '/listar';
  } catch (error) {
    showError(error.message);
  }
};

/**
 * Renders an array of task objects into the appropriate <ul> in the DOM.
 *
 * @function renderTasks
 * @param {Array<Object>} tasks - List of task objects to render.
 * @param {string} tasks[].title - Task title.
 * @param {string} tasks[].description - Task description.
 * @param {boolean} tasks[].completed - Completion status.
 * @param {string|number} tasks[].createdAt - ISO timestamp or milliseconds since epoch.
 */
const renderTasks = (tasks) => {
  // Determine which list container is present
  const container =
    document.getElementById('taskList') ||
    document.getElementById('filteredList');
  if (!container) return;

  container.innerHTML = tasks
    .map(task => `
      <li class="${task.completed ? 'completed' : ''}">
        <strong>${task.title}</strong>
        <p>${task.description}</p>
        <small>${new Date(task.createdAt).toLocaleDateString()}</small>
      </li>
    `)
    .join('');
};

/**
 * Displays an error message to the user for a brief period.
 *
 * @function showError
 * @param {string} message - The error text to display.
 */
const showError = (message) => {
  const errorDiv = document.getElementById('errorMessage');
  if (!errorDiv) return;

  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 3000);
};

// Set up event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Form submission for creating a new task
  const form = document.getElementById('taskForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('taskTitle').value.trim();
      const description = document.getElementById('taskDescription').value.trim();
      if (title) addTask(title, description);
    });
  }

  // Click handler for applying a title filter
  const filterBtn = document.getElementById('applyFilter');
  if (filterBtn) {
    filterBtn.addEventListener('click', async () => {
      const searchTerm = document.getElementById('searchInput').value.trim();
      try {
        const response = await fetch(
          `/api/search?title=${encodeURIComponent(searchTerm)}`
        );
        const tasks = await response.json();
        renderTasks(tasks);
      } catch (error) {
        showError('Error filtering tasks');
      }
    });
  }

  // On the list page, automatically load all tasks
  if (window.location.pathname === '/listar') {
    loadTasks();
  }
});
