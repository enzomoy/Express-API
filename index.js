const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config();
const sequelize = require('./backend/config/db');
const Signin = require('./backend/models/signin.models');

// Middleware pour parser les requêtes POST
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données
sequelize.sync().then(() => {
  console.log('La connexion à la base de données a été établie avec succès.');
  const port = 8000;
  app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
  });
}).catch((error) => {
  console.error('Erreur lors de la connexion à la base de données:', error);
});

// Importation des routes
const userRoute = require("./backend/routes/user.route");
const signinRoute = require("./backend/routes/signin.route");
const appartementRoute = require("./backend/routes/appartement.route");
const reservationRoute = require("./backend/routes/reservation.route");
app.use("/user", userRoute);
app.use("/signin", signinRoute);
app.use("/appartement", appartementRoute);
app.use("/reservation", reservationRoute);