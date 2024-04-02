(() => {
  
    // je cree une function qui prend en compte A1 A2 B1 B2
function calcDistance (A1,A2,B1,B2) {

    //  je fait ma variable qui calcule la difference de distance entre A1 et A2 
    const distanceA =  A1 - A2
    // Je fait ma variable qui calcule la diffenrence de distance entre B1 et B2
    const distanceB = B1 - B2

  
    



    // Math.sqrt m'aide a calculer la distance entre mon point A et mon mon Point B dans un espace 2D
    let deuxDDistance = Math.sqrt(distanceA * distanceA + distanceB * distanceB)

    // je retourne le resultat de mon calcule 
    return deuxDDistance
}

// j'affiche le resultat de ma function dans une console.log
console.log(calcDistance(5,4,12,6))

    })();