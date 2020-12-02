"use strict";
class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this), this.verErrores.bind(this));
    }
    getPosition(position){
        this.mensaje = "La petición de geolocalización se ha realizado con éxito";
        this.longitud = position.coords.longitude; 
        this.latitud = position.coords.latitude;  
        this.precision = position.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;
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
        let liAltitud = document.createElement('li');
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
        coordenadas.appendChild(liVelocidad);
    }
}
var posicion = new GeoLocalizacion();