// Datos de clima inventados (mock) para todas las ciudades

const climaData = {

    "Talca": {
        icono: "⛅",
        temperatura: 18,
        humedad: 62,
        viento: 8,
        sensacion: 16,
        pronostico: [
            { dia: "Lun", icono: "☀️", temp: 26 },
            { dia: "Mar", icono: "⛅", temp: 22 },
            { dia: "Mié", icono: "🌧️", temp: 18 },
            { dia: "Jue", icono: "🌦️", temp: 20 }
        ]
    },

    "Santiago": {
        icono: "☀️",
        temperatura: 26,
        humedad: 48,
        viento: 12,
        sensacion: 27,
        pronostico: [
            { dia: "Lun", icono: "☀️", temp: 30 },
            { dia: "Mar", icono: "☀️", temp: 28 },
            { dia: "Mié", icono: "⛅", temp: 24 },
            { dia: "Jue", icono: "⛅", temp: 25 }
        ]
    },

    "Temuco": {
        icono: "🌧️",
        temperatura: 14,
        humedad: 82,
        viento: 10,
        sensacion: 13,
        pronostico: [
            { dia: "Lun", icono: "🌧️", temp: 15 },
            { dia: "Mar", icono: "🌦️", temp: 14 },
            { dia: "Mié", icono: "🌧️", temp: 13 },
            { dia: "Jue", icono: "⛅", temp: 16 }
        ]
    },

    "Viña del Mar": {
        icono: "⛅",
        temperatura: 17,
        humedad: 72,
        viento: 14,
        sensacion: 17,
        pronostico: [
            { dia: "Lun", icono: "⛅", temp: 18 },
            { dia: "Mar", icono: "🌤️", temp: 20 },
            { dia: "Mié", icono: "⛅", temp: 17 },
            { dia: "Jue", icono: "🌦️", temp: 16 }
        ]
    },

    "La Serena": {
        icono: "🌤️",
        temperatura: 21,
        humedad: 55,
        viento: 18,
        sensacion: 22,
        pronostico: [
            { dia: "Lun", icono: "☀️", temp: 24 },
            { dia: "Mar", icono: "🌤️", temp: 22 },
            { dia: "Mié", icono: "⛅", temp: 21 },
            { dia: "Jue", icono: "☀️", temp: 25 }
        ]
    },

    "Concepción": {
        icono: "🌩️",
        temperatura: 16,
        humedad: 78,
        viento: 21,
        sensacion: 15,
        pronostico: [
            { dia: "Lun", icono: "🌧️", temp: 14 },
            { dia: "Mar", icono: "🌧️", temp: 15 },
            { dia: "Mié", icono: "🌩️", temp: 13 },
            { dia: "Jue", icono: "⛅", temp: 17 }
        ]
    },

    "Coyhaique": {
        icono: "❄️",
        temperatura: 3,
        humedad: 92,
        viento: 12,
        sensacion: -1,
        pronostico: [
            { dia: "Lun", icono: "❄️", temp: -1 },
            { dia: "Mar", icono: "❄️", temp: 0 },
            { dia: "Mié", icono: "🌨️", temp: 2 },
            { dia: "Jue", icono: "⛅", temp: 5 }
        ]
    },

    "Punta Arenas": {
        icono: "💨",
        temperatura: 12,
        humedad: 68,
        viento: 45,
        sensacion: 7,
        pronostico: [
            { dia: "Lun", icono: "💨", temp: 11 },
            { dia: "Mar", icono: "🌥️", temp: 12 },
            { dia: "Mié", icono: "🌦️", temp: 10 },
            { dia: "Jue", icono: "☁️", temp: 9 }
        ]
    },

    "Valdivia": {
        icono: "🌦️",
        temperatura: 15,
        humedad: 80,
        viento: 9,
        sensacion: 14,
        pronostico: [
            { dia: "Lun", icono: "🌧️", temp: 14 },
            { dia: "Mar", icono: "🌦️", temp: 15 },
            { dia: "Mié", icono: "⛅", temp: 16 },
            { dia: "Jue", icono: "🌧️", temp: 13 }
        ]
    },

    "Rancagua": {
        icono: "🌤️",
        temperatura: 19,
        humedad: 60,
        viento: 11,
        sensacion: 20,
        pronostico: [
            { dia: "Lun", icono: "☀️", temp: 23 },
            { dia: "Mar", icono: "🌤️", temp: 21 },
            { dia: "Mié", icono: "⛅", temp: 19 },
            { dia: "Jue", icono: "☁️", temp: 17 }
        ]
    }

};
