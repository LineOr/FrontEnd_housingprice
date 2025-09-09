// Selectionner le bouton par son id
let button = document.getElementById("predictbutton");

/*
// Ajoute un "écouteur d'événement" au clic
button.addEventListener("click", function() {
  console.log('Click effectué');
});
*/

/*
// Ajout de l'écouteur de clic
button.addEventListener("click", function() {
  // Récupérer les valeurs des inputs
  let medinc = parseFloat(document.getElementById("MedInc").value);
  let houseAge = parseFloat(document.getElementById("HouseAge").value);
  let aveRooms = parseFloat(document.getElementById("AveRooms").value);
  let aveBedrms = parseFloat(document.getElementById("AveBedrms").value);
  let population = parseFloat(document.getElementById("Population").value);
  let aveOccup = parseFloat(document.getElementById("AveOccup").value);
  let latitude = parseFloat(document.getElementById("Latitude").value);
  let longitude = parseFloat(document.getElementById("Longitude").value);
  // Afficher dans la console pour vérifier
  console.log("MedInc:", medinc);
  console.log("HouseAge:", houseAge);
  console.log("AveRooms:", aveRooms);
  console.log("AveBedrms:", aveBedrms);
  console.log("Population:", population);
  console.log("AveOccup:", aveOccup);
  console.log("Latitude:", latitude);
  console.log("Longitude:", longitude);
})
*/

button.addEventListener("click", function() {
  // Récupérer les valeurs des inputs
  let medinc = parseFloat(document.getElementById("MedInc").value);
  let houseAge = parseFloat(document.getElementById("HouseAge").value);
  let aveRooms = parseFloat(document.getElementById("AveRooms").value);
  let aveBedrms = parseFloat(document.getElementById("AveBedrms").value);
  let population = parseFloat(document.getElementById("Population").value);
  let aveOccup = parseFloat(document.getElementById("AveOccup").value);
  let latitude = parseFloat(document.getElementById("Latitude").value);
  let longitude = parseFloat(document.getElementById("Longitude").value);

  // Créer l'objet JSON ici
  const data = {
    MedInc: medinc,
    HouseAge: houseAge,
    AveRooms: aveRooms,
    AveBedrms: aveBedrms,
    Population: population,
    AveOccup: aveOccup,
    Latitude: latitude,
    Longitude: longitude
  };

  // Envoyer la requête POST ici aussi
  fetch("https://fastapi-housingprice.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(result => {
    console.log("Résultat API :", result);
    document.getElementById("result").innerText = "Prix prédit : " + result.prediction;
  });
});