(() => {
  
  
 function rand10() {

    // je cree une boucle qui s'appel i est qui relance 99 fois ma function rand10
    for (let i = 1 ; i < 100; i++)
// je recupere que les nombre entien grace a modulo
    if (i % 2 ===0){
// genere un nombre entre 1 et 10
     let nombreAleatoire = Math.floor(Math.random()*10+1)

     // j'affiche la console.log avec un message puis je montre ma variable 
     console.log("votre numero aleatoire est" , nombreAleatoire)
          
    }
   
 }



// j'appel ma function
 rand10 ()
      
      })();