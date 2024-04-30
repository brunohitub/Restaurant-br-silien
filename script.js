AOS.init();
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
  function addProducts(data){

  
  let temoin ="";
  data.entreprise.temoignages.forEach( (t)=> {
    temoin += `<div class="temoignage"> <h4>${t.prenom}</h4> <p class="badge">${t.typeExperience}</p> <p><i class="fa-solid fa-quote-left"></i>${t.commentaire}<i class="fa-solid fa-quote-right"></i></p> ${avis(t.note)} </div> `
    
  });
function avis(note){
    let chaine="";
    for(let i=1; i<=note; i++){
        chaine += "★";
    }
    for (let j=0; j<5-note; j++){
        chaine += "☆";
    }
    return chaine;
}
document.querySelector("#temoignages").innerHTML += 
`
${temoin}


`
  }
  var map = L.map('map').setView([43.30391977807304, 5.364327318420163], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.30391977807304, 5.364327318420163]).addTo(map)
    .bindPopup('tudo de bom, Marseille.')
    .openPopup();

    function icon(typeExperience){
      if (typeExperience==="Cours de Cuisine"){
        document.querySelector(".badge").innerHTML +=
        `
        <i class="fa-solid fa-utensils"></i>${typeExperience}

        `
      }
    }