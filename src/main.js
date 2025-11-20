// Initialize Lucide Icons
lucide.createIcons();

// ------------------
// 1. Mobile Menu Toggle
// ------------------
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  // Toggle menu icon
  const menuIcon = mobileMenuButton.querySelector("i");
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.setAttribute("data-lucide", "menu");
  } else {
    menuIcon.setAttribute("data-lucide", "x");
  }
  lucide.createIcons();
});

// Hide mobile menu when a link is clicked
mobileMenu.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenuButton.querySelector("i").setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

// ------------------
// 2. Footer Year Update
// ------------------
document.getElementById("current-year").textContent = new Date().getFullYear();

// ------------------
// 3. Smooth Scroll
// ------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    try {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    } catch (error) {
      console.error("Scroll error:", error);
    }
  });
});
