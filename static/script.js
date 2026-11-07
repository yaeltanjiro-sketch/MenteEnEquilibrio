
const emociones = {

    feliz: {
        emoji: "😊",
        titulo: "¡Nos encanta que estés feliz!",
        mensajes: [
            "Disfruta este momento. La felicidad también está en las pequeñas cosas.",
            "Sigue disfrutando de lo bonito que te está regalando la vida.",
            "Tu alegría importa. Comparte esa energía positiva con quienes te rodean."
        ],
        consejo: "Haz algo que disfrutes y agradece algo bueno que haya pasado hoy."
    },

    triste: {
        emoji: "💜",
        titulo: "Está bien no estar bien",
        mensajes: [
            "No tienes que fingir una sonrisa. Tus emociones merecen ser escuchadas.",
            "Un día difícil no define tu historia. Date tiempo y sé amable contigo.",
            "No eres menos fuerte por sentir tristeza. También mereces descansar."
        ],
        consejo: "Habla con alguien de confianza, escucha música tranquila o escribe lo que sientes."
    },

    estresado: {
        emoji: "🌿",
        titulo: "Respira, vamos paso a paso",
        mensajes: [
            "No tienes que resolver toda tu vida en un solo día.",
            "Haz lo que puedas con lo que tienes. Eso también es suficiente.",
            "Tómate un momento. Tu tranquilidad también es importante."
        ],
        consejo: "Prueba respirar lentamente, toma agua y organiza tus pendientes de uno en uno."
    },

    enojado: {
        emoji: "🧡",
        titulo: "Date un momento para ti",
        mensajes: [
            "No tienes que responder a todo inmediatamente.",
            "Tus sentimientos son válidos. También puedes elegir cómo expresarlos.",
            "A veces, tomar distancia un momento ayuda a ver las cosas con más claridad."
        ],
        consejo: "Aléjate un momento de la situación, respira y piensa qué necesitas antes de actuar."
    },

    cansado: {
        emoji: "🌙",
        titulo: "Descansar también es avanzar",
        mensajes: [
            "No eres una máquina. Está bien necesitar una pausa.",
            "Tu valor no depende de cuánto hagas durante el día.",
            "Mañana será otra oportunidad. Por ahora, cuídate."
        ],
        consejo: "Regálate un descanso, come algo nutritivo y procura dormir lo suficiente."
    },

    solo: {
        emoji: "🫂",
        titulo: "Mereces sentirte acompañado",
        mensajes: [
            "Tu presencia importa, incluso cuando sientes que nadie lo nota.",
            "No tienes que enfrentar todos tus sentimientos en silencio.",
            "Mereces amistades y relaciones donde puedas ser tú mismo."
        ],
        consejo: "Intenta conversar con alguien de confianza o compartir un momento con una persona que te haga sentir bien."
    }

};

let emocionActual = null;

const botones = document.querySelectorAll(".mood");
const resultado = document.getElementById("resultado");
const seccionEmociones = document.getElementById("emociones");

function mostrarMensaje(emocion) {

    emocionActual = emocion;

    const datos = emociones[emocion];

    const mensajeAleatorio =
        datos.mensajes[
            Math.floor(Math.random() * datos.mensajes.length)
        ];

    document.getElementById("emojiResultado").textContent =
        datos.emoji;

    document.getElementById("tituloResultado").textContent =
        datos.titulo;

    document.getElementById("mensajeResultado").textContent =
        mensajeAleatorio;

    document.getElementById("consejoResultado").textContent =
        datos.consejo;

    resultado.classList.remove("oculto");

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const emocion = boton.dataset.mood;

        mostrarMensaje(emocion);

    });

});

document.getElementById("otroMensaje")
    .addEventListener("click", () => {

        mostrarMensaje(emocionActual);

    });

document.getElementById("volver")
    .addEventListener("click", () => {

        resultado.classList.add("oculto");

        seccionEmociones.scrollIntoView({
            behavior: "smooth"
        });

    });
