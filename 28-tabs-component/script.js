const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1. Deactivate all tabs
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    // 2. Hide all panels
    panels.forEach((p) => {
      p.classList.remove("active");
      p.hidden = true;
    });

    // 3. Activate selected tab & corresponding panel
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const targetPanelId = tab.getAttribute("aria-controls");
    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.add("active");
      targetPanel.hidden = false;
    }
  });
});
