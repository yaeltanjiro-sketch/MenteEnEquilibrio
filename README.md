# MenteEnEquilibrio
Página web de bienestar emocional.

## Ejecutar en local

```bash
pip install -r requirements.txt
python app.py
```

Abre http://127.0.0.1:5000

## Estructura

- `app.py`: rutas (`/`, `/terminos`, `/privacidad`, `/cookies`) y datos del sitio (correo de contacto, fecha legal).
- `templates/base.html`: encabezado, pie, ventana de términos, aviso y configuración de cookies.
- `static/legal.js`: lógica de aceptación de términos y consentimiento de cookies.
- `static/script.js`: emociones, mensajes y ejercicio de respiración.

## Antes de publicar

1. Cambia `correo_contacto` en `app.py` por tu correo real.
2. Revisa los textos legales con alguien que conozca la ley de tu país.
3. Si cambias los términos, actualiza `fecha_legal` en `app.py` y `VERSION_TERMINOS` en `static/legal.js` para que se pidan de nuevo.
