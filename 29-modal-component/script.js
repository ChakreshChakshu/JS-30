const openModalBtn = document.getElementById("openModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const modalCard = document.getElementById("modalCard");
const closeBtn = document.getElementById("closeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmBtn = document.getElementById("confirmBtn");

function openModal() {
  modalOverlay.removeAttribute("hidden");
  closeBtn.focus();
}

function closeModal() {
  modalOverlay.setAttribute("hidden", "");
  openModalBtn.focus();
}

// 1. Open Button
openModalBtn.addEventListener("click", openModal);

// 2. Close and Cancel buttons
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

// 3. Confirm button action
confirmBtn.addEventListener("click", () => {
  alert("Action confirmed successfully!");
  closeModal();
});

// 4. Click outside modal card (on backdrop) to close
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

// 5. Escape key to close
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalOverlay.hasAttribute("hidden")) {
    closeModal();
  }
});
