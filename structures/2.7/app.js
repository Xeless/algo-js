(() => {
 
  // Je declare ma variable total qui est = 0
 let total = 0;
 // J'initie une fonction qui s'appel choissiezNombre je m'ai le parametre n 
 function choissiezNombre (n) {
  // je dit que le parametre n est = a une question choissiez un nombre le parseInt() verfie que c'est bien un nombre
   n =  parseInt(window.prompt("choissiez un nombre"))

   // J'intie ma boucle qui a le nom x 
   for (let x=0; x < n ; x++) {

    // je redemande via mon parametre n de rechoisir un nombre toujours avec parseInt() qui verifie que c'est bien un nombre
    n = parseInt(window.prompt("choissiez un nombre"))
      
    total += n
   }
 }
 choissiezNombre()
 
})();

