// Obtener la ciudad desde la URL (versión simple)
var parametros = new URLSearchParams(window.location.search);
var ciudad = parametros.get("ciudad");

// Decodificar por si trae espacios
if (ciudad) {
    ciudad = decodeURIComponent(ciudad);
}

// Verificar si existe en los datos
if (ciudad && climaData[ciudad]) {

    var data = climaData[ciudad];

    // Título de la ciudad
    document.querySelector(".ciudad-detalle").innerText = ciudad;

    // Temperatura principal
    document.querySelector(".temp-detalle").innerText = data.temperatura + "°C";

    // Icono principal
    document.querySelector(".icono-detalle").innerText = data.icono;

    // Información adicional
    var info = "";
    info += "<p>Humedad: <strong>" + data.humedad + "%</strong></p>";
    info += "<p>Viento: <strong>" + data.viento + " km/h</strong></p>";
    info += "<p>Sensación térmica: <strong>" + data.sensacion + "°C</strong></p>";

    document.querySelector(".info-extra").innerHTML = info;

    // Pronóstico semanal
    var contenedor = document.querySelector(".row");
    contenedor.innerHTML = "";

    // Ciclo tradicional (más nivel M2)
    for (var i = 0; i < data.pronostico.length; i++) {
        var d = data.pronostico[i];

        contenedor.innerHTML +=
            '<div class="col">' +
                '<div class="mini-card">' +
                    '<div class="dia">' + d.dia + '</div>' +
                    '<div class="icono-mini">' + d.icono + '</div>' +
                    '<div class="temp-mini">' + d.temp + '°C</div>' +
                '</div>' +
            '</div>';
    }

} else {
    console.log("Ciudad no encontrada");
}
