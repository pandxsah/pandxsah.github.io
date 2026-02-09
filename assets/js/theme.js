const htmlEl = document.documentElement;

const themeToggle = () => {
  const saved = localStorage.getItem("theme") || "dark";
  htmlEl.classList.toggle("dark", saved === "dark");
};

document.addEventListener("click", (e) => {
  if (!e.target.closest("#themeToggle")) return;

  const isDark = htmlEl.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  htmlEl.classList.toggle("dark");
});

themeToggle();
