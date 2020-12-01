"use strict";
class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
    }
    getPosition(position){
        this.longitud = position.coords.longitude; 
        this.latitud = position.coords.latitude;  
        this.precision = position.coords.accuracy;
        /*this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;*/
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
}
var posicion = new GeoLocalizacion();