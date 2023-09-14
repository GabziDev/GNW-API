//GNW-API
//v1
const express = require('express');

const app = express();
const port = 3000;

app.get("/test", (req, res) => {
    res.json({ message: "Ok !" });
});

app.listen(port, () => {
    console.log("Serveur démarré !");
});