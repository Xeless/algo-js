(() => {
   // Exercises 2.1

   function age () {
    if (age >= 18) {

        console.log("Your are an adult")

    }else{

        console.log("Your are not yet and adult")

    }
   }

// Exercises 2.2 
let min = ("enter number min")
let current= ("enter number current")
let max = ("enter number maximum")

if ( min < current && current < max ) {


}else if (min > max ) {

    return "Error Exit program"
    
}

else {

}

// Exercises 2.3
let i = 1
 while ( i <= 100)
 console.log(i)
i++

for (let i = 0 ; i < 50 ; i++) {
    console.log(i)
}

// Exercises 2.4 

for (let j = 1 ; j < 100; j++) {
    if (j % 2 === 0)  {

    console.log(j / 2 + "les chiffre sont paire")
    }else {

     console.log(j * 3 + "les chiffre sont inpaire")
    }
}


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


// Exercises 2.6 

switch (jourDeLaSemaine) {
    case 1: 
console.log("lundi")
break;

case 2:
    console.log("mardi")
    break;

    case 3:
        console.log("mercredi")
        break;

        case 4: 
        console.log("jeudi")
        break;
        
        case 5:
            console.log('vendredi')
            break;

            case 6:
                console.log("samedi")
                break;

                case 7:
                    console.log("dimanche")
                    break;
                    default:
                        console.log("jour inconnu")
                             
}

 // Exercises 2.7

 let total = 0;
 function numberN (n) {
   console.log("choissiez un nombre de n")

   for (let x=0; x < n ; x++) {

    total += n
   }
 }
 
})();

