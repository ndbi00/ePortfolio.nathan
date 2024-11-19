'use strict';

// Utility function to toggle the "active" class
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// Modal selectors and functionality
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = () => {
  modalContainer?.classList.toggle("active");
  overlay?.classList.toggle("active");
};

// Testimonials modal functionality
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
testimonialsItems.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal();
  });
});

// Close modal functionality for testimonials
modalCloseBtn?.addEventListener("click", toggleModal);
overlay?.addEventListener("click", toggleModal);

// Portfolio filtering functionality
const filterItems = (btns, items, datasetKey) => {
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      items.forEach(item => {
        item.classList.toggle("active", selectedValue === "all" || selectedValue === item.dataset[datasetKey]);
      });
      btns.forEach(button => button.classList.remove("active"));
      this.classList.add("active");
    });
  });
};

// Portfolio filter buttons and items
const filterBtnPortfolio = document.querySelectorAll("[data-filter-btn]");
const filterItemsPortfolio = document.querySelectorAll("[data-filter-item]");
filterItems(filterBtnPortfolio, filterItemsPortfolio, "category");

// Misc filter buttons and items
const filterBtnMisc = document.querySelectorAll("[data-misc-filter-btn]");
const filterItemsMisc = document.querySelectorAll("[data-misc-filter-item]");
filterItems(filterBtnMisc, filterItemsMisc, "category");

// Form validation functionality
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      formBtn?.toggleAttribute("disabled", !form.checkValidity());
    });
  });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(nav => nav.classList.remove("active"));

    pages[index]?.classList.add("active");
    this.classList.add("active");
    window.scrollTo(0, 0);
  });
});



const openProjectModal = (projectId) => {
  const content = projectDescriptions[projectId] || "<p>No details available for this project.</p>";
  projectModalImg.src = "./path/to/image.png"; // Placeholder image
  projectModalTitle.textContent = projectId;
  projectModalDescription.innerHTML = content;
  projectModalContainer?.classList.add("active");
};

projectItems.forEach(item => {
  item.addEventListener("click", () => {
    const projectId = item.querySelector("[data-project-title]")?.innerText.trim();
    if (projectId) openProjectModal(projectId);
  });
});

// Close project modal
projectModalContainer?.addEventListener("click", (event) => {
  if (event.target === projectModalContainer) {
    projectModalContainer.classList.remove("active");
  }
});

// Close all modals with close buttons
document.querySelectorAll("[data-modal-close-btn]").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    document.querySelectorAll(".modal-container").forEach(modal => modal.classList.remove("active"));
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const idata1003Btn = document.getElementById("idata1003-btn");
  const idata1004Btn = document.getElementById("idata1004-btn");
  const idata1003Section = document.getElementById("idata1003-section");
  const idata1004Section = document.getElementById("idata1004-section");
  const closeButtons = document.querySelectorAll("[data-close-section]");

  // Show sections when buttons are clicked
  idata1003Btn?.addEventListener("click", () => {
    idata1003Section?.classList.add("active");
  });

  idata1004Btn?.addEventListener("click", () => {
    idata1004Section?.classList.add("active");
  });

  // Close sections
  closeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      idata1003Section?.classList.remove("active");
      idata1004Section?.classList.remove("active");
    })
  );
});

