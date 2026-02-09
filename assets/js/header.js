document.addEventListener("click", (e) => {
  const menuButton = e.target.closest("#menuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuButton || !mobileMenu) return;

  mobileMenu.classList.toggle("hidden");
});
