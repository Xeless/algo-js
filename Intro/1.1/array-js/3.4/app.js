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

   // j'initie la function minMax
   function minMax () {
      // je declare une variable min a l'interieur je precise que je veux quelle prenne le tableau d'objet avec les nom a l'index 0
      let min = keller7[0].name.length
      // je declare une variable max a l'interieur je precise que je veux quelle prenne le tableau d'objet avec les nom a l'index 0
      let max = keller7[0].name.length
      // je parcours tout mon tableau d'objet pour qui puisse tout avoir grace une boucle que j'appel i
      for (let i = 0; i < keller7.length; i++ ) {
         // je lui demande une condition a l'interieur pour qui comprenne que je souhaite le min du tableau objet je lui precise que je veux qui calcule les prenom
        if (min > keller7[i].name.length) {
         // je stock la condtion dans ma variable min pour que je puisse tout recupere et garde sont contenue que j'ai demandé 
         min = keller7[i].name.length
        }
        // je lui redemande une autre condition ou cette vois-ci je demande si il peut stock le max de mon tableau d'objet je le calcule toujours avec les prenom
        if (max < keller7[i].name.length) {
         // je stock la condition de ma variable max pour recupere le max que ma condtion a fait pour moi
              max = keller7[i].name.length
        }
      }
// je lui demande de return le resultat de mes variables min et max en priant que j'ai reussis 
      return {min, max}

   }

   // ici ma console.log me permais d'affiche le resultat dans la console puis que je puisse voir si j'ai bien le resultat de ma function
 console.log(minMax())
})();