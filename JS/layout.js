// Detecta automáticamente si hay nombre de repositorio en la URL
const pathSegments = window.location.pathname.split("/").filter(Boolean);

// Si estás en GitHub Pages, el primer segmento es el nombre del repo
const basePath =
  window.location.hostname.includes("github.io") && pathSegments.length > 0
    ? `/${pathSegments[0]}`
    : "";

/* =========================
   HEADER
========================= */
fetch(`${basePath}/HTML/Layout/header.html`)
  .then(response => response.text())
  .then(data => {
    const header = document.getElementById("idheader");
    if (header) header.innerHTML = data;
  })
  .catch(error => console.error("Error cargando header:", error));

/* =========================
   FOOTER
========================= */
fetch(`${basePath}/HTML/Layout/footer.html`)
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById("idfooter");
    if (footer) footer.innerHTML = data;
  })
  .catch(error => console.error("Error cargando footer:", error));
