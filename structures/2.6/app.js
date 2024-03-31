(() => {

    // je declare une variable ou j'ai mis un chiffre 3 pour qui puisse me retourne mercredi
   let jourDeLaSemaine = 3

// j'utilse switch qui me permet de chosir plus nombre pour mes jours de semaine plutot que 50 if ou else 
switch (jourDeLaSemaine) {
    //  si le jourDeLaSemaine est 1 
    case 1: 
    // je convertie le nombre 1 en lundi
console.log("lundi")
// je stop une fois que le chiffre de la semaine a etez donné 
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
})();

