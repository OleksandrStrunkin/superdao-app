document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burger-btn");
  const closeBtn = document.getElementById("close-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerBtn && closeBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
      document.body.classList.add("overflow-hidden");
    });
    const closeMenu = () => {
      mobileMenu.classList.add("translate-x-full");
      document.body.classList.remove("overflow-hidden");
    };

    closeBtn.addEventListener("click", closeMenu);

    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => link.addEventListener("click", closeMenu));
  }
});
