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

// Funcion de mostrar ubicacion

google.maps.event.addDomListener(window, 'load', function(){ 
  // Mostrando Ubicación
  const ubicacion = new Localizacion(()=>{
    const myLatlng = {lat : ubicacion.latitude, lng: ubicacion.longitude};

    const options = {
      center : myLatlng,       
      zoom: 16,
      mapTypeId: google.maps.mapTypeId.MAP
    };
    
    
    // Creando el marcador 
    const map = document.getElementById('map');
    const mapa = new google.maps.Map(map, options);


    const marcador = new google.maps.Marker({
      position: myLatlng,
      map: mapa,
    });

    const informacion = new google.maps.InfoWindow();

    marcador.addListener('click', function () {
      informacion.open(mapa, marcador);
    });

    // AutoCompletado
    const autocomplete = document.getElementById('autocomplete');
    const search = new google.maps.places.Autocomplete(autocomplete);
    search.bindTo("bounds",mapa);

    search.addListener('place_changed', function (){
      informacion.close();
      marcador.setVisible(false);

      var place = search.getPlace();

      if (!place.geometry.viewport) {
        window.alert("Error al mostrar el lugar");
        return;        
      }
      if (place.geometry.viewport) {
        mapa.fitBounds(place.geometry.viewport);
      }else{
        mapa.setCenter(place.geometry.location);
        mapa.setZoom(18);
      }

      marcador.setPosition(place.geometry.location);
      marcador.setVisible(true);

      var address =" ";
      if(place.address_components){
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || ''), 
        ];
      }

      informacion.setContent('<div><strong>' + place.name + ' </strong></br>' + address);
      informacion.open(map,marcador);


    });
  });
});