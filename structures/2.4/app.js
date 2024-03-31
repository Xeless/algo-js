(() => {

// j'initie une boucle que j'appel j qui vas ce lancer 99 fois
for (let j = 1 ; j < 100; j++) {
    
        //  j'initie une condition qui vas m'aider a cherchais le nombre pair pour ca ont utilise modulo % 
        // qui permet de diviser la boucle part 2 qui est === a 0
        if (j % 2 === 0)  {
    //j'initie une console log qui vas devise le nombre de ma boucle part 2 puis j'ajoute un string  les chiffre sont pair
        console.log(j / 2 + "les chiffre sont pair")
        // j'intie une condition else pour les chiffre impaire
        }else {
        // j'affiche une console qui vas mutiplier ma boucle est ducoup ma boucle est impair
         console.log(j * 3 + "les chiffre sont inpair")
        }
    }





     // j'initie une boucle que j'appel i qui vas ce lancer 99 fois
for (let i = 1; i < 100; i++) {
                                                // le ternaire 
    // initie une variable qui s'appel message qui est = aux parametre de ma condition ensuite j'initie ma condition grace a ? (if)
    // ensuite je demande si : ${}(ma conditon) est avant :(vrai) si oui les chiffre sont pair en ternaire puis je refait un : avant et apres ma conditon pour verifier (vrai) ou (faux)
    // je redemande une condition : ${}(ma conditon) est avant :(vrai) alors les chiffre sont impaire en ternaire
const message = (i % 2 === 0) ? `${i / 2} : les chiffres sont pair en ternaire` : `${i * 3} : les chiffre sont impaire en ternaire`;
console.log(message)

}
})();

