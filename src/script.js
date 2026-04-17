document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerBtn && closeBtn && mobileMenu) {
    // Відкрити
    burgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      document.body.classList.add("overflow-hidden"); // Заборона скролу фону
    });

    // Закрити
    const closeMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
    };

    closeBtn.addEventListener("click", closeMenu);

    // Закривати при кліку на будь-яке посилання
    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", closeMenu));
  }
});
