//GNW-API
//v1.0
const express = require('express');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv').config();
const connectionMongo = require('./config/database');

const app = express();
const port = 3000;

// Connexion à la base de données
connectionMongo();

// Limiter le spam de requetes
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: 'Vous avez dépassé la limite de requêtes par minute.'
});

// Traiter les données de la requete
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/routes"));

// Lancer le serveur
app.listen(port, () => {
    console.log("Serveur démarré !");
});