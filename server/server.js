//GNW-API
//v1.0
const express = require('express');

const app = express();
const port = 3000;

app.use("/", require("./routes/routes"));

app.listen(port, () => {
    console.log("Serveur démarré !");
});