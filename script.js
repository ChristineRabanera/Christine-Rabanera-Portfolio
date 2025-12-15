// Handle tab switching
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      const sectionId = button.getAttribute("data-section");
  
      // Hide all sections
      document.querySelectorAll(".section-container").forEach(section => {
        section.classList.add("hidden");
      });
  
      // Show the clicked section
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
      }
    });
  });
  