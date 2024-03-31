(() => {
   // je declare mon tableau d'objet en l'appelant keller 7 en suite je lui mais les noms github de chaque personne de l'equipe
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
  
// j'initie ma function test juger pas j'avais pas l'inspi..
   function test () {
      // je declare ma variable total je lui precise quelle est egale a 0
    let total = 0
    // j'initie une boucle qui s'appel i pour faire le tour de mon tableau d'objet
    for (let i = 0; i < keller7.length; i++) {
      // a l'interieur de ma boucle j'initie ma variable pour lui dire ajoute tout le contenue de mon tableau d'objet keller 7 je lui 
     // je lui dit que je veut les noms et les caracteres
    total += keller7[i].name.length
   }
   // je return le resutal ou je devrais avoir le total  des caracteres des noms que j'ai dans mon tableau d'objet
   return total
}
// j'affiche avec une console pour voir avec mes yeux si je suis un dieu de l'ago ou pas
console.log(test())

})();