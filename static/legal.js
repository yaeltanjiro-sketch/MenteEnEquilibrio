/*
 * Términos y Condiciones + consentimiento de cookies.
 * Cambia VERSION_TERMINOS cuando actualices los términos: a todos se les
 * volverá a pedir que los acepten.
 */
(function () {

    const VERSION_TERMINOS = "2026-11-14";

    const COOKIE_TERMINOS = "mee_terminos";
    const COOKIE_CONSENTIMIENTO = "mee_cookies";

    // Cookies que pertenecen a cada categoría opcional (se borran si se rechaza).
    const COOKIES_POR_CATEGORIA = {
        preferencias: ["mee_ultima_emocion"],
        analiticas: []
    };

    /* ---------- Utilidades de cookies ---------- */

    function leerCookie(nombre) {
        const par = document.cookie
            .split("; ")
            .find(fila => fila.startsWith(nombre + "="));
        return par ? decodeURIComponent(par.slice(nombre.length + 1)) : null;
    }

    function guardarCookie(nombre, valor, dias) {
        const seguro = location.protocol === "https:" ? "; Secure" : "";
        document.cookie =
            `${nombre}=${encodeURIComponent(valor)}; max-age=${dias * 86400}; path=/; SameSite=Lax${seguro}`;
    }

    function borrarCookie(nombre) {
        document.cookie = `${nombre}=; max-age=0; path=/`;
    }

    function obtenerConsentimiento() {
        try {
            return JSON.parse(leerCookie(COOKIE_CONSENTIMIENTO));
        } catch (e) {
            return null;
        }
    }

    function permite(categoria) {
        if (categoria === "necesarias") return true;
        const c = obtenerConsentimiento();
        return Boolean(c && c[categoria]);
    }

    // API pública para el resto de scripts del sitio.
    window.cookiesMee = {
        leer: leerCookie,
        borrar: borrarCookie,
        permite,
        // Solo guarda la cookie si su categoría está permitida.
        guardar(nombre, valor, dias, categoria) {
            if (permite(categoria)) guardarCookie(nombre, valor, dias);
        }
    };

    /* ---------- Ventanas modales ---------- */

    const modalTerminos = document.getElementById("modalTerminos");
    const formTerminos = document.getElementById("formTerminos");
    const botonAceptarTerminos = document.getElementById("aceptarTerminos");
    const progresoTerminos = document.getElementById("progresoTerminos");
    const casillasTerminos = formTerminos.querySelectorAll('input[type="checkbox"]');

    const banner = document.getElementById("bannerCookies");
    const modalCookies = document.getElementById("modalCookies");
    const formCookies = document.getElementById("formCookies");

    let focoAnterior = null;

    function abrirModal(modal) {
        focoAnterior = document.activeElement;
        modal.hidden = false;
        document.body.classList.add("sin-scroll");
        const primero = modal.querySelector("input:not([disabled]), button");
        if (primero) primero.focus();
    }

    function cerrarModal(modal) {
        modal.hidden = true;
        if (modalTerminos.hidden && modalCookies.hidden) {
            document.body.classList.remove("sin-scroll");
        }
        if (focoAnterior) focoAnterior.focus();
    }

    // Mantiene el foco del teclado dentro de la ventana abierta.
    function atraparFoco(evento, modal) {
        if (evento.key !== "Tab") return;
        const enfocables = [...modal.querySelectorAll("a[href], button:not([disabled]), input:not([disabled])")];
        if (!enfocables.length) return;
        const primero = enfocables[0];
        const ultimo = enfocables[enfocables.length - 1];
        if (evento.shiftKey && document.activeElement === primero) {
            evento.preventDefault();
            ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
            evento.preventDefault();
            primero.focus();
        }
    }

    /* ---------- Términos y Condiciones ---------- */

    function actualizarProgreso() {
        const marcadas = [...casillasTerminos].filter(c => c.checked).length;
        const total = casillasTerminos.length;
        progresoTerminos.textContent = `${marcadas} de ${total} casillas marcadas`;
        botonAceptarTerminos.disabled = marcadas !== total;
    }

    casillasTerminos.forEach(c => c.addEventListener("change", actualizarProgreso));

    formTerminos.addEventListener("submit", evento => {
        evento.preventDefault();
        const todasMarcadas = [...casillasTerminos].every(c => c.checked);
        if (!todasMarcadas) return;

        const registro = {
            version: VERSION_TERMINOS,
            fecha: new Date().toISOString(),
            terminos: true,
            privacidad: true,
            profesional: true,
            edad: true
        };
        guardarCookie(COOKIE_TERMINOS, JSON.stringify(registro), 365);
        cerrarModal(modalTerminos);
        mostrarBannerSiHaceFalta();
    });

    modalTerminos.addEventListener("keydown", e => atraparFoco(e, modalTerminos));

    function terminosAceptados() {
        try {
            const registro = JSON.parse(leerCookie(COOKIE_TERMINOS));
            return registro && registro.version === VERSION_TERMINOS;
        } catch (e) {
            return false;
        }
    }

    /* ---------- Cookies ---------- */

    function aplicarConsentimiento(consentimiento) {
        guardarCookie(COOKIE_CONSENTIMIENTO, JSON.stringify(consentimiento), 180);

        // Borra las cookies de las categorías rechazadas.
        Object.entries(COOKIES_POR_CATEGORIA).forEach(([categoria, nombres]) => {
            if (!consentimiento[categoria]) nombres.forEach(borrarCookie);
        });

        if (consentimiento.analiticas) {
            // Aquí cargarías tu herramienta de análisis (solo con permiso).
        }

        banner.hidden = true;
        document.dispatchEvent(new CustomEvent("consentimiento-cookies", { detail: consentimiento }));
    }

    function mostrarBannerSiHaceFalta() {
        banner.hidden = obtenerConsentimiento() !== null;
    }

    document.getElementById("cookiesAceptar").addEventListener("click", () => {
        aplicarConsentimiento({ preferencias: true, analiticas: true, fecha: new Date().toISOString() });
    });

    document.getElementById("cookiesRechazar").addEventListener("click", () => {
        aplicarConsentimiento({ preferencias: false, analiticas: false, fecha: new Date().toISOString() });
    });

    document.querySelectorAll(".abrir-config-cookies").forEach(boton => {
        boton.addEventListener("click", () => {
            const actual = obtenerConsentimiento() || {};
            formCookies.preferencias.checked = Boolean(actual.preferencias);
            formCookies.analiticas.checked = Boolean(actual.analiticas);
            abrirModal(modalCookies);
        });
    });

    formCookies.addEventListener("submit", evento => {
        evento.preventDefault();
        aplicarConsentimiento({
            preferencias: formCookies.preferencias.checked,
            analiticas: formCookies.analiticas.checked,
            fecha: new Date().toISOString()
        });
        cerrarModal(modalCookies);
    });

    document.getElementById("cerrarCookies").addEventListener("click", () => cerrarModal(modalCookies));

    modalCookies.addEventListener("keydown", evento => {
        if (evento.key === "Escape") cerrarModal(modalCookies);
        atraparFoco(evento, modalCookies);
    });

    modalCookies.addEventListener("click", evento => {
        if (evento.target === modalCookies) cerrarModal(modalCookies);
    });

    /* ---------- Inicio ---------- */

    // En las páginas legales no bloqueamos la lectura con la ventana de términos.
    const esPaginaLegal = document.body.dataset.paginaLegal === "si";

    if (!esPaginaLegal && !terminosAceptados()) {
        actualizarProgreso();
        abrirModal(modalTerminos);
    } else {
        mostrarBannerSiHaceFalta();
    }

})();
