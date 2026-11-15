
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

const NOMBRES_EMOCION = {
    feliz: "feliz",
    triste: "triste",
    estresado: "con estrés",
    enojado: "con enojo",
    cansado: "con cansancio",
    solo: "con soledad"
};

function mostrarMensaje(emocion) {

    emocionActual = emocion;

    const datos = emociones[emocion];
    const textoActual = document.getElementById("mensajeResultado").textContent;

    // Evita repetir el mismo mensaje dos veces seguidas.
    const opciones = datos.mensajes.filter(m => m !== textoActual);
    const mensajeAleatorio =
        opciones[Math.floor(Math.random() * opciones.length)];

    document.getElementById("emojiResultado").textContent = datos.emoji;
    document.getElementById("tituloResultado").textContent = datos.titulo;
    document.getElementById("mensajeResultado").textContent = mensajeAleatorio;
    document.getElementById("consejoResultado").textContent = datos.consejo;

    botones.forEach(b => b.classList.toggle("seleccionado", b.dataset.mood === emocion));

    resultado.classList.remove("oculto");

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Solo se guarda si la persona permitió las cookies de preferencias.
    window.cookiesMee.guardar("mee_ultima_emocion", emocion, 30, "preferencias");
}

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        mostrarMensaje(boton.dataset.mood);
    });
});

document.getElementById("otroMensaje")
    .addEventListener("click", () => {
        mostrarMensaje(emocionActual);
    });

document.getElementById("volver")
    .addEventListener("click", () => {
        resultado.classList.add("oculto");
        botones.forEach(b => b.classList.remove("seleccionado"));
        seccionEmociones.scrollIntoView({ behavior: "smooth" });
    });

/* ---------- Bienvenida de vuelta (cookie de preferencias) ---------- */

function mostrarBienvenida() {
    const aviso = document.getElementById("bienvenidaDeVuelta");
    const ultima = window.cookiesMee.permite("preferencias")
        ? window.cookiesMee.leer("mee_ultima_emocion")
        : null;

    if (ultima && NOMBRES_EMOCION[ultima]) {
        aviso.textContent = `💜 Qué bueno verte de nuevo. La última vez te sentías ${NOMBRES_EMOCION[ultima]}. ¿Cómo estás hoy?`;
        aviso.hidden = false;
    } else {
        aviso.hidden = true;
    }
}

mostrarBienvenida();
document.addEventListener("consentimiento-cookies", mostrarBienvenida);

/* ---------- Ejercicio de respiración ---------- */

const FASES_RESPIRACION = [
    { texto: "Inhala", segundos: 4, clase: "inhalar" },
    { texto: "Sostén", segundos: 4, clase: "sostener" },
    { texto: "Exhala", segundos: 6, clase: "exhalar" }
];
const CICLOS_TOTALES = 4;

const circulo = document.getElementById("circuloRespira");
const textoRespira = document.getElementById("textoRespira");
const contadorRespira = document.getElementById("contadorRespira");
const botonRespira = document.getElementById("botonRespira");

let temporizadorRespira = null;
let respirando = false;

function detenerRespiracion(mensajeFinal) {
    clearTimeout(temporizadorRespira);
    respirando = false;
    circulo.className = "circulo-respira";
    textoRespira.textContent = mensajeFinal || "Listo";
    contadorRespira.textContent = "";
    botonRespira.textContent = "Empezar 🌬️";
}

function ejecutarFase(ciclo, indiceFase) {
    if (!respirando) return;

    if (indiceFase >= FASES_RESPIRACION.length) {
        if (ciclo >= CICLOS_TOTALES) {
            detenerRespiracion("Muy bien 💜");
            contadorRespira.textContent = "Lo hiciste. Nota cómo se siente tu cuerpo ahora.";
            return;
        }
        ejecutarFase(ciclo + 1, 0);
        return;
    }

    const fase = FASES_RESPIRACION[indiceFase];
    circulo.style.setProperty("--duracion", `${fase.segundos}s`);
    circulo.className = `circulo-respira ${fase.clase}`;
    textoRespira.textContent = fase.texto;
    contadorRespira.textContent = `Ciclo ${ciclo} de ${CICLOS_TOTALES}`;

    temporizadorRespira = setTimeout(
        () => ejecutarFase(ciclo, indiceFase + 1),
        fase.segundos * 1000
    );
}

botonRespira.addEventListener("click", () => {
    if (respirando) {
        detenerRespiracion();
        return;
    }
    respirando = true;
    botonRespira.textContent = "Detener";
    ejecutarFase(1, 0);
});
