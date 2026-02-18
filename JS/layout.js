// Detectar si estamos en local o en GitHub Pages
const isLocal =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost";

// Nombre EXACTO de tu repositorio en GitHub
const repoName = "charlaAATEGRE.github.io";

// Base dinámica
const basePath = isLocal ? "" : `/${repoName}`;

/* =========================
   HEADER
========================= */
fetch(`${basePath}/HTML/Layout/header.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("idheader").innerHTML = data;
  })
  .catch(error => {
    console.error("Error cargando el header:", error);
  });

/* =========================
   FOOTER
========================= */
fetch(`${basePath}/HTML/Layout/footer.html`)
  .then(response => response.text())
  .then(data => {
    document.getElementById("idfooter").innerHTML = data;
  })
  .catch(error => {
    console.error("Error cargando el footer:", error);
  });
