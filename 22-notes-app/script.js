const STORAGE_KEY = "js30_notes";

let notes = loadNotes();
let editingId = null;

const noteForm = document.getElementById("noteForm");
const formTitle = document.getElementById("formTitle");
const editNoteId = document.getElementById("editNoteId");
const noteTitle = document.getElementById("noteTitle");
const noteBody = document.getElementById("noteBody");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const notesGrid = document.getElementById("notesGrid");
const searchInput = document.getElementById("searchInput");

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : getInitialNotes();
  } catch (e) {
    return getInitialNotes();
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function getInitialNotes() {
  return [
    {
      id: 1,
      title: "Welcome to Notes",
      body: "This app persists your thoughts using browser localStorage.\nTry adding or searching notes!",
      updatedAt: "2026-10-07"
    }
  ];
}

function renderNotes() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = notes.filter(
    (n) => n.title.toLowerCase().includes(query) || n.body.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    notesGrid.innerHTML = '<p class="empty-state">No matching notes found.</p>';
    return;
  }

  notesGrid.innerHTML = "";
  filtered.forEach((note) => {
    const card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <div>
        <h3 class="note-card-title">${escapeHtml(note.title)}</h3>
        <p class="note-card-body">${escapeHtml(note.body)}</p>
      </div>
      <div class="note-card-footer">
        <span class="note-date">${note.updatedAt}</span>
        <div class="note-actions">
          <button type="button" class="icon-btn edit-btn" aria-label="Edit note">&#9998;</button>
          <button type="button" class="icon-btn delete-btn" aria-label="Delete note">&times;</button>
        </div>
      </div>
    `;

    card.querySelector(".edit-btn").addEventListener("click", () => startEdit(note));
    card.querySelector(".delete-btn").addEventListener("click", () => deleteNote(note.id));

    notesGrid.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function startEdit(note) {
  editingId = note.id;
  formTitle.textContent = "Edit Note";
  noteTitle.value = note.title;
  noteBody.value = note.body;
  cancelEditBtn.style.display = "inline-block";
}

function cancelEdit() {
  editingId = null;
  formTitle.textContent = "Create New Note";
  noteForm.reset();
  cancelEditBtn.style.display = "none";
}

function deleteNote(id) {
  notes = notes.filter((n) => n.id !== id);
  saveNotes();
  if (editingId === id) cancelEdit();
  renderNotes();
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = noteTitle.value.trim();
  const body = noteBody.value.trim();
  if (!title || !body) return;

  const dateStr = new Date().toISOString().split("T")[0];

  if (editingId) {
    const note = notes.find((n) => n.id === editingId);
    if (note) {
      note.title = title;
      note.body = body;
      note.updatedAt = dateStr;
    }
    cancelEdit();
  } else {
    notes.unshift({
      id: Date.now(),
      title,
      body,
      updatedAt: dateStr
    });
    noteForm.reset();
  }

  saveNotes();
  renderNotes();
});

cancelEditBtn.addEventListener("click", cancelEdit);
searchInput.addEventListener("input", renderNotes);

renderNotes();
