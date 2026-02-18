
 
     //Llamado al HEADER
fetch("../../HTML/Layout/header.html") // Correcto desde WhatsApp
      .then(response => response.text())
      .then(data => {
        document.getElementById('idheader').innerHTML = data;
      })
      .catch(error => {
        console.error('Error cargando el header:', error);
      });

 //Llamado al footer
fetch("../../HTML/Layout/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById('idfooter').innerHTML = data;
      })
      .catch(error => {
        console.error('Error cargando el footer:', error);
      });
