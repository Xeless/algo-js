(() => {
   // mon tableau d'objet de l'equipe keller 7 c'etait long a ecrire 
    let keller7 = [
      {name:"Lyne" },
      {name:"Dj3y" },
      {name:"Zara"},
      {name:"Manu zapé comme jamais"},
      {name:"Adrien"},
      {name:"NathAmd"},
      {name:"Xeless le goat"},
      {name:"Caroline"},
      {name:"Arnaud"},
      {name:"Stacy"},
      {name:"Justine"},
      {name:"Angel"},
      {name:"Dylan"},
      {name:"Adca"},
      {name:"isabelle"},
      {name:"doblaria"},
      {name:"Youris"},
      {name:"Giovanni le goat de la finance"},
      {name:"Illies le Roi des pirates"},
      {name:"Justine L"},
      {name:"Denis"},
      {name:"Mohamed"},
      {name:"ludovic"},
      {name:"Maryam"},
      {name:"Julie"},
      {name:"Jordan"},
      {name:"Tasha"}
   ]
   
     // je declare ma variable total qui est egale a 0 
     let total = 0
  
// j'initie ma function average 
function average () {
   // je declare ma boucle que j'appel i pour quelle puisse prendre tout mon tableau d'objet 
for (let i= 0 ; i < keller7.length ; i++) {
 
   // je precise que je souhaite ajouter la longueur de mon tableau d'objet a ma variable total
   total += keller7[i].name.length
}

// je lui demande de return le resultat de ma variable total et le tableau d'objet en divisant le tout c'est le principe de faire une moyenne
return total / keller7.length
}

// j'affiche le resultat pour que je puisse voir si j'ai bien reussis mon algo 
console.log(average())
})();