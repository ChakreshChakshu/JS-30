let todos = [
  { id: 1, text: "Learn Vanilla JavaScript DOM", completed: true },
  { id: 2, text: "Master Event Delegation", completed: false },
  { id: 3, text: "Build 30 frontend projects", completed: false }
];

let activeFilter = "all";

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const filterButtons = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const activeCount = document.getElementById("activeCount");

function getFilteredTodos() {
  if (activeFilter === "active") return todos.filter((t) => !t.completed);
  if (activeFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

function render() {
  const filtered = getFilteredTodos();
  const left = todos.filter((t) => !t.completed).length;
  activeCount.textContent = `${left} item${left === 1 ? "" : "s"} left`;

  if (filtered.length === 0) {
    todoList.innerHTML = '<li class="empty-state">No tasks to display.</li>';
    return;
  }

  todoList.innerHTML = "";
  filtered.forEach((todo) => {
    const li = document.createElement("li");
    li.className = `todo-item${todo.completed ? " completed" : ""}`;
    li.dataset.id = todo.id;

    li.innerHTML = `
      <div class="todo-content">
        <input type="checkbox" class="toggle-checkbox" ${todo.completed ? "checked" : ""} aria-label="Toggle completed">
        <span class="todo-text">${escapeHtml(todo.text)}</span>
      </div>
      <div class="action-buttons">
        <button type="button" class="btn-icon edit" aria-label="Edit task">&#9998;</button>
        <button type="button" class="btn-icon delete" aria-label="Delete task">&times;</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Event Delegation on todoList
todoList.addEventListener("click", (event) => {
  const target = event.target;
  const li = target.closest(".todo-item");
  if (!li) return;
  const id = Number(li.dataset.id);

  // Toggle complete
  if (target.classList.contains("toggle-checkbox")) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = target.checked;
      render();
    }
  }

  // Delete
  if (target.classList.contains("delete")) {
    todos = todos.filter((t) => t.id !== id);
    render();
  }

  // Edit
  if (target.classList.contains("edit")) {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      const updated = prompt("Edit task description:", todo.text);
      if (updated !== null && updated.trim() !== "") {
        todo.text = updated.trim();
        render();
      }
    }
  }
});

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = todoInput.value.trim();
  if (!text) return;

  todos.push({
    id: Date.now(),
    text,
    completed: false
  });

  todoInput.value = "";
  render();
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    render();
  });
});

clearCompletedBtn.addEventListener("click", () => {
  todos = todos.filter((t) => !t.completed);
  render();
});

render();
