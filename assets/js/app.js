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

google.maps.event.addDomListener(window, 'load', function(){ 
  // Mostrando Ubicación
  const ubicacion = new Localizacion(()=>{
    const myLatlng = {lat : ubicacion.latitude, lng: ubicacion.longitude};

    var texto = '<h1> Mi ubicación </h1>' +'<p> Descripcion del lugar </p>' ; 

    const options = {
      center : myLatlng,       
      zoom: 16
    }
    
    // Creando el marcador 
    const map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);


    const marcador = new google.maps.Marker({
      position: myLatlng,
      map: mapa,
      title: " Laboratoria"
    });

    const informacion = new google.maps.InfoWindow({
      content : texto
    });

    marcador.addListener('click', function () {
      informacion.open(mapa, marcador);
    });

    // AutoCompletado
    const autocomplete = document.getElementById('autocomplete');
    const search = new google.maps.places.Autocomplete(autocomplete);
    search.bindTo("bounds",mapa);

  });
});