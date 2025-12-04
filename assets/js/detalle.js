// obtener ciudad desde la url
var parametros = new URLSearchParams(window.location.search);
var ciudad = parametros.get("ciudad");

// por si viene con espacios
if(ciudad){
    ciudad = decodeURIComponent(ciudad);
}

// revisar si existe
if(ciudad && climaData[ciudad]){

    var data = climaData[ciudad];

    // nombre ciudad
    document.querySelector(".ciudad-detalle").innerText = ciudad;

    // temperatura
    document.querySelector(".temp-detalle").innerText = data.temperatura + "°C";

    // icono
    document.querySelector(".icono-detalle").innerText = data.icono;

    // info de clima
    var info = "";
    info += "<p>Humedad: <strong>"+data.humedad+"%</strong></p>";
    info += "<p>Viento: <strong>"+data.viento+" km/h</strong></p>";
    info += "<p>Sensación térmica: <strong>"+data.sensacion+"°C</strong></p>";

    document.querySelector(".info-extra").innerHTML = info;

    // pronostico
    var cont = document.querySelector(".row");
    cont.innerHTML = "";

    for(var i=0; i < data.pronostico.length; i++){
        var d = data.pronostico[i];

        cont.innerHTML +=
        "<div class='col'>" +
            "<div class='mini-card'>" +
                "<div class='dia'>" + d.dia + "</div>" +
                "<div class='icono-mini'>" + d.icono + "</div>" +
                "<div class='temp-mini'>" + d.temp + "°C</div>" +
            "</div>" +
        "</div>";
    }

} else {
    console.log("no se encontro la ciudad");
}
