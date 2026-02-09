async function loadPartial(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadPartial("site-header", "/partials/header.html");
loadPartial("site-footer", "/partials/footer.html");
