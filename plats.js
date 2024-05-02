// Envoie une requête GET à l'URL de l'api pour récupérer des données
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
  // Affiche les données dans la console du navigateur
  console.log(data);
  
  data.entreprise.plats.forEach((p) => {
    let plat = "";
    plat += 
    `
    <article class="carte">
    <div class="infocard">
    <h2>${p.nom}</h2>
    <p>${p.description}</p>
</div>
    <img src="${p.image}" alt="img du plat">
</article>

    `;

    if (p.type === "plat"){
      document.querySelector("#Plats").innerHTML +=
      `${plat}`
    }
    else if (p.type === "cocktail"){
      document.querySelector("#Cocktails").innerHTML += 
      `${plat}`
    }
  });

console.log(plat);
}
