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
  
// j'initale la function qui me permettra de copier mon tableau 
function copy () {
   // je declare une variable ici copyKeller7 pour faire un tableau qui reste vide vue que on dois copier non tableau
   let copyKeller7 = [];
   // j'initie une boucle qui prend le nom de variable i pour fait tout le tour de mon tableau pour qui enregiste tout mon tableau
for (let i = 0 ; i < keller7.length; i++) {
   // ici je m'ai ma variable que j'ai appeler copyKeller7 ensuite j'utilise la methode .push qui permet t'ajoute des choses 
   // et entre () je lui dit ajoute moi ca ducoup grace au pouvoir de la boucle j'ai deja tout le contenue du tableau d'objet stocker dans ma boucle
   copyKeller7.push(keller7[i]);
}

// je return le resutat de ma variable dans la logique tout mon tableau d'objet a etait rajouter a celui-ci
return copyKeller7
}
// j'affiche dans ma console pour voir si je suis un bon copieur je n'ai pas de doute sur ca 
console.log(copy())
})();