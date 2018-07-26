// Funcion de splash 

(function () {

  // hace conexion con el div principal
  const preload = document.getElementById("preload");
  //  
  let loading = 0;
  //  
  let id = setInterval(frame, 64);

  //  funcion para el tiempo del splash
  function frame() {
    if (loading == 100) {
      clearInterval(id);
      //  window.open("welcome.html", "_self");
      // se oculta  el splash y muestra el contenido que tiene  section=title 
      document.getElementById("splash").style.display = "none";
    } else {
      loading = loading + 1;
      if (loading == 90) {
        preload.style.animation = "fadeout 1s ease";
      }
    }
  }
})();