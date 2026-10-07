const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const icon = item.querySelector(".icon");

  header.addEventListener("click", () => {
    const isCurrentlyActive = item.classList.contains("active");

    // Close all accordion items
    accordionItems.forEach((otherItem) => {
      otherItem.classList.remove("active");
      const otherHeader = otherItem.querySelector(".accordion-header");
      const otherIcon = otherItem.querySelector(".icon");
      otherHeader.setAttribute("aria-expanded", "false");
      otherIcon.textContent = "+";
    });

    // If it was not open, open it
    if (!isCurrentlyActive) {
      item.classList.add("active");
      header.setAttribute("aria-expanded", "true");
      icon.textContent = "−";
    }
  });
});
