//GNW-API
//v1.0
const express = require('express');
const dotenv = require('dotenv').config();
const connectionMongo = require('./config/database');

const app = express();
const port = 3000;

// Connexion à la base de données
connectionMongo();

// Traiter les données de la requete
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/routes"));

// Lancer le serveur
app.listen(port, () => {
    console.log("Serveur démarré !");
});