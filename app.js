const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Ambiente efímero - Heroku</title>
      </head>
      <body>
        <h1>Ambiente efímero con Heroku</h1>
        <p>Aplicación de demostración para la Actividad 2.3.</p>
        <p>Estado: ambiente efímero funcionando correctamente.</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;