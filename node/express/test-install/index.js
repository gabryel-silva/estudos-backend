const express = require('express');
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/_template/index.html"));

app.get("/sobre", (req, res) => res.sendFile(__dirname + "/_template/sobre.html"));

app.get("/ola/:nome/:cargo", (req, res) => res.send(req.params));

app.listen(8081, () => console.log("Servidor rodando!!"));