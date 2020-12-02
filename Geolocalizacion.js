"use strict";

var mapaDinamicoGoogle = new Object();
function initMap(){
    var oviedo = {lat: 43.3672702, lng: -5.8502461};
    var mapaOviedo = new google.maps.Map(document.getElementById('mapa'),{zoom: 8,center:oviedo});
    var marcador = new google.maps.Marker({position:oviedo,map:mapaOviedo});
}
mapaDinamicoGoogle.initMap = initMap;


"use strict"
class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this), this.verErrores.bind(this));
    }
    getPosition(position){
        this.mensaje = "La petición de geolocalización se ha realizado con éxito.";
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;

        //Si descomento lo siguiente no funciona (puede ser mi ordenador)

        /*this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;*/
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    show(){
        var coordenadas = document.querySelector('.coordenadas');
        coordenadas.innerHTML = '';

        //Mostrar coordenadas
        let liLongitud = document.createElement('li');
        liLongitud.append("Longitud: " + this.longitud + " grados");
        coordenadas.appendChild(liLongitud);
        let liLatitud = document.createElement('li');
        liLatitud.append("Latitud: " + this.latitud + " grados");
        coordenadas.appendChild(liLatitud);
        let liPrecision = document.createElement('li');
        liPrecision.append("Precisión de latitud y longitud: " + this.precision + " metros");
        coordenadas.appendChild(liPrecision);

        //Si descomento lo siguiente no funciona (puede ser mi ordenador)

        /*let liAltitud = document.createElement('li');
        liAltitud.append("Altitud: " + this.altitud + " metros");
        coordenadas.appendChild(liAltitud);
        let liPrecisionAltitud = document.createElement('li');
        liPrecisionAltitud.append("Precisión altitud: " + this.precisionAltitud + " metros");
        coordenadas.appendChild(liPrecisionAltitud);
        let liRumbo = document.createElement('li');
        liRumbo.append("Rumbo: " + this.rumbo + " grados");
        coordenadas.appendChild(liRumbo);
        let liVelocidad = document.createElement('li');
        liVelocidad.append("Velocidad: " + this.velocidad + " metros/segundo");
        coordenadas.appendChild(liVelocidad);*/
    }

    getMapaEstaticoGoogle(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        //URL: obligatoriamente https
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //Parametros
        // centro del mapa (obligatorio si no hay marcadores)
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom (obligatorio si no hay marcadores)
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom ="&zoom=15";
        //Tamaño del mapa en pixeles (obligatorio)
        var size = "&size=800x600";
        //Escala (opcional)
        //Formato (opcional): PNG,JPEG,GIF
        //Tipo de mapa (opcional)
        //Idioma (opcional)
        //region (opcional)
        //marcadores (opcional)
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        //rutas. path (opcional)
        //visible (optional)
        //style (opcional)
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + size + marcador + sensor + apiKey;
        ubicacion.innerHTML = "<img src='" + this.imagenMapa + "' alt='Mapa'></img>";
    }
}