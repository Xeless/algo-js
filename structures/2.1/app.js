(() => {
    // j'initie ma function caculAge je lui rajoute un parametre qui est l'age
   function calculAge (age) {
    // Je donne des conditions qui prendre dit que si l'age et plus grand que ou = a 18 t'est adulte Bienvenue dans le monde des adultes 
    if (age >= 18) {
         // je rajoute une console log pour dire a la personne que c'est un adulte on sais jamais si a un doute
        console.log("Your are an adult")
    // le else et la pour les personne qui n'ont pas 18 ou plus 
    }else{
         // je rajoute une console log pour dire a la personne qui n'est pas adulte dans le cas ou il n'a pas 18 ou plus 
        console.log("Your are not yet and adult")
    }
   }

// j'appel la function et je lui dit que j'ai 25 ans et oui je suis un adulte 
   calculAge(25)
})();

