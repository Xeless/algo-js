(() => {
// Exercises 2.5 
function favoriteNumber () {
const number = prompt("vous avez trouve le number 42")
    console.log("quel est votre numéro prefere ")
   for (let n; n < Infinity; n++ ) {
    if (number === 42) {
        console.log("vous avez trouvée le bon numéro")
        break
    }else {
        console.log("vous n'avais pas trouvé le bon numéro")
    }
   }
}
favoriteNumber() 
})();

