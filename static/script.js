const emociones = {

    feliz: {
        emoji: "😊",
        titulo: "¡Nos encanta que estés feliz!",
        mensajes: [
            "Disfruta este momento. La felicidad también está en las pequeñas cosas.",
            "Sigue disfrutando de lo bonito que te está regalando la vida.",
            "Tu alegría importa. Comparte esa energía positiva con quienes te rodean.",
            "Guarda este momento en tu memoria. Te lo mereces.",
            "Celebra tus logros, por pequeños que parezcan. Todos cuentan.",
            "Que tu sonrisa de hoy te recuerde que los días buenos sí llegan."
        ],
        consejo: "Haz algo que disfrutes y agradece algo bueno que haya pasado hoy."
    },

    triste: {
        emoji: "💜",
        titulo: "Está bien no estar bien",
        mensajes: [
            "No tienes que fingir una sonrisa. Tus emociones merecen ser escuchadas.",
            "Un día difícil no define tu historia. Date tiempo y sé amable contigo.",
            "No eres menos fuerte por sentir tristeza. También mereces descansar.",
            "Llorar no es debilidad. Es una forma de soltar lo que pesa.",
            "Esta tristeza no es para siempre, aunque hoy se sienta así.",
            "Eres importante, incluso en los días en que no te sientes así."
        ],
        consejo: "Habla con alguien de confianza, escucha música tranquila o escribe lo que sientes."
    },

    estresado: {
        emoji: "🌿",
        titulo: "Respira, vamos paso a paso",
        mensajes: [
            "No tienes que resolver toda tu vida en un solo día.",
            "Haz lo que puedas con lo que tienes. Eso también es suficiente.",
            "Tómate un momento. Tu tranquilidad también es importante.",
            "Una cosa a la vez. No tienes que cargar con todo al mismo tiempo.",
            "Está bien decir \"no\" cuando ya no te queda energía.",
            "Ya has superado días difíciles antes. Este también pasará."
        ],
        consejo: "Prueba respirar lentamente, toma agua y organiza tus pendientes de uno en uno."
    },

    enojado: {
        emoji: "🧡",
        titulo: "Date un momento para ti",
        mensajes: [
            "No tienes que responder a todo inmediatamente.",
            "Tus sentimientos son válidos. También puedes elegir cómo expresarlos.",
            "A veces, tomar distancia un momento ayuda a ver las cosas con más claridad.",
            "El enojo suele avisarte que algo te importa. Escúchalo con calma.",
            "Respirar antes de hablar puede evitar palabras de las que luego te arrepientas.",
            "Sentir enojo no te hace mala persona. Lo importante es lo que haces con él."
        ],
        consejo: "Aléjate un momento de la situación, respira y piensa qué necesitas antes de actuar."
    },

    cansado: {
        emoji: "🌙",
        titulo: "Descansar también es avanzar",
        mensajes: [
            "No eres una máquina. Está bien necesitar una pausa.",
            "Tu valor no depende de cuánto hagas durante el día.",
            "Mañana será otra oportunidad. Por ahora, cuídate.",
            "Escuchar a tu cuerpo es una forma de quererte.",
            "Detenerte un momento no es rendirte, es recargar fuerzas.",
            "Hiciste lo que pudiste hoy, y eso está bien."
        ],
        consejo: "Regálate un descanso, come algo nutritivo y procura dormir lo suficiente."
    },

    solo: {
        emoji: "🫂",
        titulo: "Mereces sentirte acompañado",
        mensajes: [
            "Tu presencia importa, incluso cuando sientes que nadie lo nota.",
            "No tienes que enfrentar todos tus sentimientos en silencio.",
            "Mereces amistades y relaciones donde puedas ser tú mismo.",
            "Sentirte solo no significa que estés solo. Hay personas que te valoran.",
            "Dar el primer paso para hablar con alguien también es un acto de valentía.",
            "Aprender a acompañarte también es un regalo que puedes darte."
        ],
        consejo: "Intenta conversar con alguien de confianza o compartir un momento con una persona que te haga sentir bien."
    },

    miedo: {
        emoji: "🕊️",
        titulo: "Aquí estás a salvo",
        mensajes: [
            "Sentir miedo es humano. No tienes que enfrentarlo todo de golpe.",
            "El miedo no significa que no puedas. Significa que algo te importa.",
            "Muchas de las cosas que tememos nunca llegan a pasar.",
            "Puedes avanzar aunque tengas miedo. La valentía es eso.",
            "Concéntrate en este momento. Ahora mismo, estás bien.",
            "No tienes que cargar tus miedos en silencio. Pedir ayuda también es valiente."
        ],
        consejo: "Nombra lo que te da miedo, respira profundo y piensa en un pequeño paso que sí puedas dar hoy."
    },

    nostalgico: {
        emoji: "📷",
        titulo: "Lo bonito también se queda contigo",
        mensajes: [
            "Extrañar algo significa que fue valioso para ti.",
            "Los recuerdos bonitos son parte de quien eres hoy.",
            "Está bien mirar atrás, siempre que no olvides vivir el presente.",
            "Lo que viviste no se pierde. Vive en ti de otra manera.",
            "Todavía hay momentos hermosos esperándote más adelante.",
            "Puedes honrar el pasado y, al mismo tiempo, abrirte a lo nuevo."
        ],
        consejo: "Mira una foto o escucha una canción que te traiga buenos recuerdos y agradece lo vivido."
    },

    avergonzado: {
        emoji: "🌷",
        titulo: "Equivocarte no te hace menos",
        mensajes: [
            "Todos hemos vivido momentos incómodos. No eres el único.",
            "Lo que hoy te da vergüenza, mañana probablemente nadie lo recuerde.",
            "Eres mucho más que un momento difícil.",
            "Trátate con la misma amabilidad que tendrías con un amigo.",
            "Equivocarte es parte de aprender y de crecer.",
            "No necesitas ser perfecto para merecer cariño y respeto."
        ],
        consejo: "Respira, recuerda que es algo pasajero y háblate con cariño en lugar de juzgarte."
    },

    culpable: {
        emoji: "🤍",
        titulo: "Puedes aprender y seguir adelante",
        mensajes: [
            "Sentir culpa muestra que te importa hacer las cosas bien.",
            "Un error no define quién eres como persona.",
            "Puedes reparar lo que esté en tus manos y soltar lo que no.",
            "Perdonarte no significa olvidar, significa permitirte crecer.",
            "Mereces la misma compasión que le darías a los demás.",
            "Lo importante no es no fallar nunca, sino lo que haces después."
        ],
        consejo: "Si puedes, ofrece una disculpa sincera. Luego piensa qué aprendiste y permítete soltar."
    },

    celoso: {
        emoji: "💚",
        titulo: "Tu valor no se compara",
        mensajes: [
            "Sentir celos es normal. Lo importante es entender de dónde vienen.",
            "El éxito o la felicidad de otros no le quita valor a lo tuyo.",
            "Tu camino es único. No tiene por qué parecerse al de nadie más.",
            "Los celos a veces hablan de inseguridades que merecen cariño, no castigo.",
            "Mereces relaciones donde te sientas seguro y en confianza.",
            "Enfócate en lo que tú tienes para ofrecer. Es mucho."
        ],
        consejo: "Pregúntate qué necesitas realmente y, si es con alguien cercano, háblalo con calma y honestidad."
    },

    sorprendido: {
        emoji: "✨",
        titulo: "¡Vaya, eso no lo esperabas!",
        mensajes: [
            "La vida a veces nos sorprende para mostrarnos algo nuevo.",
            "Date un momento para procesar lo que pasó. No hay prisa.",
            "Las sorpresas pueden abrir puertas que no imaginabas.",
            "Está bien no saber todavía cómo sentirte al respecto.",
            "Lo inesperado también puede traer cosas buenas.",
            "Toma aire, observa y luego decide qué hacer con calma."
        ],
        consejo: "Respira y date tiempo para entender cómo te sientes antes de tomar decisiones."
    },

    decepcionado: {
        emoji: "🌧️",
        titulo: "Es válido sentirte así",
        mensajes: [
            "Te decepcionas porque tenías esperanza, y eso habla bien de ti.",
            "No todo salió como esperabas, pero eso no significa que hayas fallado.",
            "Date permiso de sentirlo antes de intentar seguir adelante.",
            "A veces las cosas no salen como queremos para dar paso a algo mejor.",
            "Tu valor no depende de lo que otros hagan o dejen de hacer.",
            "Puedes ajustar tus planes sin abandonar tus sueños."
        ],
        consejo: "Escribe lo que esperabas y lo que pasó. Luego piensa en un nuevo pequeño paso hacia lo que quieres."
    },

    confundido: {
        emoji: "🧭",
        titulo: "No tienes que tener todas las respuestas",
        mensajes: [
            "Está bien no saber qué hacer todavía.",
            "La claridad muchas veces llega con el tiempo, no de golpe.",
            "No tienes que decidir todo hoy.",
            "Hacer preguntas es parte de encontrar tu camino.",
            "A veces hablarlo con alguien ayuda a ordenar las ideas.",
            "Paso a paso, las cosas irán tomando forma."
        ],
        consejo: "Escribe tus ideas o haz una lista de opciones. Verlas en papel ayuda a aclarar la mente."
    },

    agradecido: {
        emoji: "🌻",
        titulo: "Qué bonito sentirse así",
        mensajes: [
            "La gratitud convierte lo que tienes en suficiente.",
            "Reconocer lo bueno también es una forma de cuidarte.",
            "Las personas que te rodean seguramente se alegran de tenerte.",
            "Agradecer las pequeñas cosas hace los días más ligeros.",
            "Que este sentimiento te acompañe incluso en los días difíciles.",
            "Compartir tu gratitud puede alegrarle el día a alguien más."
        ],
        consejo: "Escribe tres cosas por las que te sientas agradecido hoy o díselo a alguien especial."
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
    solo: "con soledad",
    miedo: "con miedo",
    nostalgico: "con nostalgia",
    avergonzado: "con vergüenza",
    culpable: "con culpa",
    celoso: "con celos",
    sorprendido: "con sorpresa",
    decepcionado: "con decepción",
    confundido: "con confusión",
    agradecido: "con gratitud"
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
