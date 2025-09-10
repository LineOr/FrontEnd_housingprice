### FrontEnd Housing Price ###

Interface web simple pour tester un modèle de Machine Learning (déployé avec FastAPI) qui prédit le prix des maisons en fonction de leurs caractéristiques.

=> Fonctionnalités

Formulaire HTML pour saisir les caractéristiques d’un logement :

MedInc : revenu médian

HouseAge : âge de la maison

AveRooms : nombre moyen de pièces

AveBedrms : nombre moyen de chambres

Population : population du quartier

AveOccup : nombre moyen d’occupants

Latitude : latitude géographique

Longitude : longitude géographique

Envoi des données à l’API FastAPI via fetch (méthode POST).

Affichage du prix prédit directement sur la page.

=> Structure du projet
FrontEnd_housingprice/
│── index.html   # Interface utilisateur (formulaire + affichage résultat)
│── style.css    # Styles CSS pour la mise en page
│── script.js    # Logique frontend : récupération inputs + appel API
│── README.md    # Documentation du projet

⚙ Installation et utilisation

Clone le projet :

git clone https://github.com/LineOr/FrontEnd_housingprice.git
cd FrontEnd_housingprice


Ouvre index.html dans ton navigateur OU déploie sur un service comme Render / Netlify / Vercel.

Assure-toi que ton API FastAPI est en ligne (ex : https://fastapi-housingprice.onrender.com/predict).

Renseigne les champs et clique sur Prédire → le prix s’affiche.

=>Backend associé

Le frontend communique avec une API FastAPI qui expose un endpoint /predict.
Exemple de réponse de l’API :

{
  "prediction": 245678.32
}


=> Améliorations possibles

Ajouter des validations côté frontend (valeurs négatives interdites, etc.).

Mettre en place un meilleur design.

Graphiques pour comparer prix réel vs prix prédit.
