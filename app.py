from flask import Flask, render_template

app = Flask(__name__)

# Cambia estos datos por los reales antes de publicar el sitio.
DATOS_SITIO = {
    "nombre_sitio": "Mente en Equilibrio",
    "correo_contacto": "km6016836@gmail.com",
    "fecha_legal": "14 de noviembre de 2026",
}


@app.context_processor
def datos_globales():
    return DATOS_SITIO


@app.route("/")
def inicio():
    return render_template("index.html")


@app.route("/ciclo")
def ciclo():
    return render_template("ciclo.html")


@app.route("/terminos")
def terminos():
    return render_template("terminos.html")


@app.route("/privacidad")
def privacidad():
    return render_template("privacidad.html")


@app.route("/cookies")
def cookies():
    return render_template("cookies.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
