# Api-project

Pour récupérer le projet : 
* Créer un dossier pour le projet
* Faire le commande : git clone git@github.com:ESGI2/Api-project.git
* Crée un fichier **.env** à la racine du projet (voir modèle en dessous)
* Pour lancer le serveur faire : npm start   -> localhost:8080

Modèle du fichier **.env** : 

```
DB_SERVER = 'localhost'
DB_USER = 'user'
DB_PASSWORD = 'mot-de-passe'
DB_NAME = 'nom-db'
```

Tables à crée : 
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  prenon VARCHAR(255) NOT NULL,
  mail VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  token VARCHAR(255)
);

CREATE TABLE Appartement (
  id INT PRIMARY KEY AUTO_INCREMENT,
  superficie FLOAT NOT NULL,
  capacite INT NOT NULL,
  adresse VARCHAR(255) NOT NULL,
  disponibilite BOOLEAN NOT NULL,
  prix_nuit FLOAT NOT NULL
);

CREATE TABLE Reservation (
  id INT PRIMARY KEY AUTO_INCREMENT,
  appartementId INT,
  userId INT,
  dateDebut DATE,
  dateFin DATE,
  prix FLOAT,
  FOREIGN KEY (appartementId) REFERENCES Appartement(id),
  FOREIGN KEY (userId) REFERENCES User(id)
);
