(() => {
  
    function rand10() {
   // genere un nombre entre 1 et 10
        let nombreAleatoire = Math.floor(Math.random()*10+1)
        // j'affiche la console.log avec un message puis je montre ma variable 
        console.log("votre numero aleatoire est" , nombreAleatoire)
       }
       // j'intie ma function qui prend n comme parametre
function multiRand(n) {
    // je declare une variable result qui prend un tableau vide
   let result = []
   // je cree une condition qui prend n comme parametre et je justifie que j'attend un nombre
if (isNaN(n)) {
    console.log("le nombre ne peut que etre un chiffre")
return
}
// je cree une boucle que j'appel i qui boucle dans mon parametre de ma function multirand
    for(let i = 0; i < n ; i++) {
        // je push le resultat dans mon tableau qui grace a ma function rand10 qui serra un chiffre aleatoire
        result.push(rand10())
    }

    // je return le result pour avoir mon tableau avec mon chiffre aleatoire
return result
}

// je cree une variable qui pose une question aux client 
let n = window.prompt("Combien de nombres aléatoires voulez-vous générer ?")
   // j'appel ma function avec comme parametre ma question
         console.log(multiRand(n))
         })();