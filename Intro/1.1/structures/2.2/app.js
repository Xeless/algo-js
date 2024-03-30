(() => {
// j'initie ma variable min je lui m'ai prompt car je dois pose une question a une personne
let min = prompt("enter number min")
// j'initie ma variable current je lui m'ai prompt pour poser une question
let current= prompt("enter number current")
// j'initie ma variable max je lui m'ai prompt car je dois pose une question 
let max = prompt("enter number maximum")

// Je m'ai une condition ici c'est pour que le petit malin qui essaye de mettre une lettre plutot que un nombre ne puisse pas
// grace IsNaN (is not a Number) avec || (ou) qui permet de faire comprendre que je que tout mes variable puis avoir IsNaN
if (isNaN (min) || isNaN(current) || isNaN(max)) {
    // j'affiche un message aux petit malin qui essaye de mettre une lettre plutot que un nom
console.log ("non non pas de triche je veut des nombres !")
// j'intie un return qui me permet de faire quitter une personne qui respect pas la regle qui j'ai imposer
return
}

// je precise que je veux un nombre dans mon min et non une chaine de caractéres
min = Number(min)
// je precise que je veux un nombre dans mon current et non une chaine de caractéres
current = Number(current)
// je precise que je veux un nombre dans mon max et non une chaine de caractéres
max = Number(max)

// je rajoute une autre condition qui me permet de dire a la personne que le minimum ne peut pas etre superieur aux max ca parait logique 
if (min < max ) {
// j'utilise la console.log pour avertir la personne qui ne sais pas que un nombre minimum et inferieur aux superieur 
console.log ("desole mais le minimum ne peut pas etre superieur aux max")
// j'initie un return pour faire quitter la personne qui n'a pas compris 
return 
// j'utilse a la fin un else (condition) pour dire a la personne qui si a reussis comprendre le min n'est pas superieur aux max
}else {

    // je refaire une condition pour dire a la personne que maintant on compare min est inferieur a l'actuelle
    // &&(et) on compare l'actuelle qui est inferieur aux maximum 
    if (min < current && current < max) {
        // j'initie un console.log pour afficher un message en disant que le nombre actuelle est bien entre le minimum et le maximum
        console.log("le nombre actuelle est bien entre le minimum et le maximum")

        // j'initie une condition (else)
        }else {
      // j'initie la console.log  dire a la personne qui n'est pas entre le minimum et le maximum
            console.log("le nombre actuelle n'est pas entre le minimum et le maxium")
        }       
}
})();

