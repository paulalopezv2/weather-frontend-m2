// Proyecto Módulo 2 – Paula López

// App de Clima - Paula López


console.log("App de Clima cargada ✅");

// Seleccionar todas las cards
const cards = document.querySelectorAll('.card-clima');

// Agregar evento a cada card
cards.forEach(card => {
    card.addEventListener('click', () => {

        // Obtener ciudad desde el texto interno
        const ciudad = card.querySelector('.nombre-ciudad').innerText;

        // Redirigir a detalle.html con parámetro en la URL (IMPORTANTE: codificar)
        window.location.href = `detalle.html?ciudad=${encodeURIComponent(ciudad)}`;
    });
});

// --- BUSCADOR DE CIUDADES ---
const inputBuscador = document.getElementById("buscador");
const tarjetas = document.querySelectorAll(".card-clima");

inputBuscador.addEventListener("keyup", () => {
    const texto = inputBuscador.value.toLowerCase();

    tarjetas.forEach(card => {
        const nombre = card.querySelector(".nombre-ciudad").innerText.toLowerCase();

        // Mostrar u ocultar tarjeta según coincidencia
        if (nombre.includes(texto)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
