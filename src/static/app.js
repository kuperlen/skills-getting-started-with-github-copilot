document.addEventListener('DOMContentLoaded', () => {
  // Get all DOM elements with null checks
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const tasksContainer = document.getElementById('tasks-container');
  const charCount = document.getElementById('char-count');
  const totalCount = document.getElementById('total-count');
  const completedCount = document.getElementById('completed-count');
  const pendingCount = document.getElementById('pending-count');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const clearCompletedBtn = document.getElementById('clear-completed-btn');
  const clearSection = document.getElementById('clear-section');

  // Validate that all required elements exist
  if (!taskForm || !taskInput || !tasksContainer || !totalCount || !completedCount || !pendingCount) {
    console.error('Missing required DOM elements for task manager');
    return;
  }

  let currentFilter = 'all';
  let tasks = loadTasks();

  // Character count
  if (taskInput) {
    taskInput.addEventListener('input', () => {
      charCount.textContent = taskInput.value.length;
    });
  }

  // Add task
  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const trimmedValue = taskInput.value.trim();
      if (trimmedValue) {
        const task = {
          id: Date.now(),
          text: trimmedValue,
          completed: false,
          createdAt: new Date().toLocaleString(),
        };
        tasks.push(task);
        taskInput.value = '';
        charCount.textContent = '0';
        saveTasks();
        updateUI();
      }
    });
  }

  // Filter tasks
  if (filterButtons && filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        currentFilter = btn.dataset.filter;
        renderTasks();
      });
    });
  }

  // Clear completed tasks
  if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to delete all completed tasks?')) {
        tasks = tasks.filter((task) => !task.completed);
        saveTasks();
        updateUI();
      }
    });
  }

  // Load tasks from localStorage
  function loadTasks() {
    try {
      const stored = localStorage.getItem('tasks');
      const result = stored ? JSON.parse(stored) : [];
      console.log('Tasks loaded from localStorage:', result);
      return result;
    } catch (error) {
      console.error('Error loading tasks:', error);
      return [];
    }
  }

  // Save tasks to localStorage
  function saveTasks() {
    try {
      const serialized = JSON.stringify(tasks);
      localStorage.setItem('tasks', serialized);
      console.log('Tasks saved to localStorage:', tasks);
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  }

  // Render tasks
  function renderTasks() {
    if (!tasksContainer) return;
    
    tasksContainer.innerHTML = '';

    const filteredTasks = tasks.filter((task) => {
      if (currentFilter === 'completed') return task.completed;
      if (currentFilter === 'active') return !task.completed;
      return true;
    });

    if (filteredTasks.length === 0) {
      tasksContainer.innerHTML = `
        <div class="empty-state">
          <p role="status" aria-live="polite">
            ${currentFilter === 'completed' ? 'No completed tasks yet. Keep working! 💪' : currentFilter === 'active' ? 'No pending tasks. You are all caught up! 🎉' : 'No tasks yet. Add one to get started! 🚀'}
          </p>
        </div>
      `;
      return;
    }

    filteredTasks.forEach((task) => {
      const taskItem = createTaskElement(task);
      tasksContainer.appendChild(taskItem);
    });
  }

  // Create task element
  function createTaskElement(task) {
    const li = document.createElement('div');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.role = 'listitem';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', `Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`);
    checkbox.addEventListener('change', () => {
      toggleTask(task.id);
    });

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;
    taskText.title = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-task btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.type = 'button';
    deleteBtn.setAttribute('aria-label', `Delete task "${task.text}"`);
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(task.id);
    });

    const actions = document.createElement('div');
    actions.className = 'task-actions';
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(actions);

    return li;
  }

  // Toggle task completion
  function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
      saveTasks();
      updateUI();
    }
  }

  // Delete task
  function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    updateUI();
  }

  // Update UI
  function updateUI() {
    renderTasks();
    updateStats();
    updateClearButton();
  }

  // Update statistics
  function updateStats() {
    const completed = tasks.filter((t) => t.completed).length;
    const pending = tasks.filter((t) => !t.completed).length;
    const total = tasks.length;

    if (totalCount) totalCount.textContent = total;
    if (completedCount) completedCount.textContent = completed;
    if (pendingCount) pendingCount.textContent = pending;
  }

  // Update clear button visibility
  function updateClearButton() {
    if (!clearSection) return;
    const hasCompleted = tasks.some((t) => t.completed);
    clearSection.style.display = hasCompleted ? 'block' : 'none';
  }

  // Initial render
  console.log('Task Manager initialized with', tasks.length, 'tasks');
  updateUI();
});
