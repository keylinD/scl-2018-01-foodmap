//obtener la ubicacion actual
class Localizacion{
  constructor(callback){
    if (navigator.geolocation) {
      //obtienes la ubicacion
      
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