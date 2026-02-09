const htmlEl = document.documentElement;

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "dark";
htmlEl.classList.toggle("dark", savedTheme === "dark");

// Icon sync function
function syncIcons() {
  const moon = document.getElementById("moonIcon");
  const sun = document.getElementById("sunIcon");

  if (!moon || !sun) return;

  if (htmlEl.classList.contains("dark")) {
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  } else {
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  }
}

// Run once header is injected
setTimeout(syncIcons, 0);

// Handle toggle click (works even for injected header)
document.addEventListener("click", (e) => {
  if (!e.target.closest("#themeToggle")) return;

  const isDark = htmlEl.classList.contains("dark");
  const nextTheme = isDark ? "light" : "dark";

  htmlEl.classList.toggle("dark", nextTheme === "dark");
  localStorage.setItem("theme", nextTheme);

  syncIcons();
});
