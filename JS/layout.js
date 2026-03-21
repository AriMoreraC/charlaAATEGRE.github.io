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
/* =========================
   SECCIONES
========================= */

fetch(`${basePath}/HTML/ConfiguracionBasica/volumen.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-volumen");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });
fetch(`${basePath}/HTML/ConfiguracionBasica/brillo.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-brillo");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });
fetch(`${basePath}/HTML/ConfiguracionBasica/letra.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-letra");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });
fetch(`${basePath}/HTML/ConfiguracionBasica/teclado.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-teclado");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });



fetch(`${basePath}/HTML/WhatsApp/mensajes.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-mensajes");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });

function mostrarSeccion(id) {
  // NO ocultar el menú ❌ (quitar esta línea)
  // document.getElementById("menu").style.display = "none";

  // Oculta todas las secciones
  const secciones = ["volumen", "brillo", "letra", "teclado"];
  secciones.forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });

  // Muestra la seleccionada
  document.getElementById(id).classList.remove("hidden");

  window.scrollTo({ top: 300, behavior: "smooth" }); // baja un poco al contenido
}
function volverMenu() {
  document.getElementById("menu").style.display = "grid";

  const secciones = ["volumen", "brillo", "letra", "teclado"];
  secciones.forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}