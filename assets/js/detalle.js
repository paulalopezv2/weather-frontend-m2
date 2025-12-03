// Leer la ciudad desde la URL
const params = new URLSearchParams(window.location.search);
const ciudadParam = params.get("ciudad");

// Decodificar por si viene con espacios (%20)
const ciudad = ciudadParam ? decodeURIComponent(ciudadParam) : null;

console.log("Ciudad desde URL:", ciudad);

// Verificar que exista en los datos mock
if (ciudad && climaData[ciudad]) {

    const data = climaData[ciudad];

    // Título ciudad
    document.querySelector(".ciudad-detalle").innerText = ciudad;

    // Temperatura grande
    document.querySelector(".temp-detalle").innerText = data.temperatura + "°C";

    // Icono principal
    document.querySelector(".icono-detalle").innerText = data.icono;

    // Info extra
    document.querySelector(".info-extra").innerHTML = `
        <p>Humedad: <strong>${data.humedad}%</strong></p>
        <p>Viento: <strong>${data.viento} km/h</strong></p>
        <p>Sensación térmica: <strong>${data.sensacion}°C</strong></p>
    `;

    // Pronóstico semanal (mini cards)
    const contenedor = document.querySelector(".row");
    contenedor.innerHTML = "";

    data.pronostico.forEach(d => {
        contenedor.innerHTML += `
        <div class="col">
            <div class="mini-card">
                <div class="dia">${d.dia}</div>
                <div class="icono-mini">${d.icono}</div>
                <div class="temp-mini">${d.temp}°C</div>
            </div>
        </div>`;
    });

} else {
    console.log("Ciudad no encontrada en climaData:", ciudad);
}
