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
  .then(res => res.text())
  .then(data => {
    const header = document.getElementById("idheader");
    if (!header) return;
    header.innerHTML = data;

    // --- Registrar botón solo después de insertar el HTML ---
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    console.log(menuBtn, mobileMenu); // Ahora deben existir

    if (!menuBtn || !mobileMenu) {
      console.error("No se encontró el botón o el menú móvil");
      return;
    }

    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      console.log("Menú toggleado");
    });

    mobileMenu.querySelectorAll(".mobile-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  })
  .catch(err => console.error(err));
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
   SECCIONES DE CONFIGURACIÓN BÁSICA
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


/* =========================
   SECCIONES DE WHATSAPP
========================= */
fetch(`${basePath}/HTML/WhatsApp/mensajes.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-mensajes");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });

  fetch(`${basePath}/HTML/WhatsApp/fotosyAudios.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-fotosAudios");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });

  fetch(`${basePath}/HTML/WhatsApp/llamadas.html`)
  .then(res => res.text())
  .then(data => {
    const contenedor = document.getElementById("seccion-llamadas");
    if (contenedor) {
      contenedor.innerHTML = data;
    }
  });


/* =========================
   MOSTRAR O OCULTARSECCIONES DE WHATSAPP
========================= */
function mostrarSeccion(id) {
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

/* =========================
   MENU DE SECCIONES DE CONFIGURACIÓN BÁSICA
========================= */
function volverMenu() {
  document.getElementById("menu").style.display = "grid";

  const secciones = ["volumen", "brillo", "letra", "teclado"];
  secciones.forEach(sec => {
    document.getElementById(sec).classList.add("hidden");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}