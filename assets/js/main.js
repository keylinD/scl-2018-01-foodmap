//  //obtener la ubicacion actual
// let map;
// let infoWindow;
// google.maps.event.addDomListener(window, "load", function(){ 
//       initMap = () => {

//         map = new google.maps.Map(document.getElementById('map'), 
//         {
//           center: {
//             lat: -33.419046,
//             lng: -70.64176},
//           zoom: 13
//         });
//         infoWindow = new google.maps.InfoWindow;

//         // Try HTML5 geolocation.
//         if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition((position)=> {
//             var pos = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };

//             infoWindow.setPosition(pos);
//             infoWindow.setContent('Location found.');
//             infoWindow.open(map);
//             map.setCenter(pos);
//           },
//            ()=> {
//             handleLocationError(true, infoWindow, map.getCenter());
//           });
//         } else {
//           // Browser doesn't support Geolocation
//           handleLocationError(false, infoWindow, map.getCenter());
//         }
//       }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(browserHasGeolocation ?
//                               'Error: The Geolocation service failed.' :
//                               'Error: Your browser doesn\'t support geolocation.');
//         infoWindow.open(map);
//       }

// });




// 

class Localizacion{
  constructor(callback){
    if (navigator.geolocation) {
      //obtenes la ubicacion
      
      navigator.geolocation.getCurrentPosition((position) =>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        callback();
      })
    }else{
      alert("Tu navegador no soporta geolocalización !!")
    }
  }
}