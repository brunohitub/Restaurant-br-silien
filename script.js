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
    temoin += `<div class="temoignage"> <h4>${t.prenom}</h4> <p class="badge">${t.typeExperience}</p> <p>${t.commentaire}</p> ${avis(t.note)} </div> `
    
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
document.querySelector("#temoign").innerHTML += 
`
<div class="temoignage">
<h4>${temoin}<h4>
<p></p>
<p></p>


</div>
`
  }