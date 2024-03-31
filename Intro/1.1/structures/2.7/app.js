(() => {
 
  // Je declare ma variable total qui est = 0
 let total = 0;
 // J'initie une fonction qui s'appel choissiezNombre je m'ai le parametre n 
 function choissiezNombre (n) {
  // je dit que le parametre n est = a une question choissiez un nombre
   n =  window.prompt("choisiez un nombre")

   // J'intie ma boucle qui a le nom x 
   for (let x=0; x < n ; x++) {

    // je redemande via mon parametre n de rechoisir un nombre
    n = window.prompt("choisie encore un nombre")
      
    total += n
   }
 }
 choissiezNombre()
 
})();

