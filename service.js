fetch("restaurantBresilien.json")
  // Une fois que la réponse est reçue
  .then(rep => {
    // transforme la reponse obtenu en JSON 
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
  .then(data => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addProducts(data);
  });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addProducts(data) {

    let service ="";
    data.entreprise.services.forEach( (s) => {
        service += 
        `
        <div class="service container"> <h4>${s.nom}</h4> <p>${s.description}</p> </div>

        ` 
    });
    document.querySelector("#service").innerHTML += 
    `${service}`
  
  console.log(data);
}