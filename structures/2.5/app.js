(() => {
// J'initie ma function qui s'appelera favoriteNumber
function favoriteNumber () {
    // je declare une variable numberFavoritees 
 let  numberFavorites;
 // j'initie la boucle qui va s'executer jusqu'à ce qu'elle soit 42
 while (true) {
   
    // ma variable vas poser une question 
  numberFavorites = parseInt(window.prompt("choissiez un nombre"))

// je m'ai une condition que number favorites est egale a 42
  if (numberFavorites === 42) {
    // le console.log affiche le message si le numero 42 est trouvée 
  console.log("bravo vous avez trouveé mon nombre favorit")
  // je casse la boucle while pour evite quelle tourne a l'infinie
break

// ma conditon else est la pour dire que il n'a toujours pas trouve le nombre 
}else {
  // console.log affiche un message si la condition n'est pas trouvé 
    console.log("vous n'avez pas trouvé mon nombre favorit")
}
}
}
// j'appel ma function 
favoriteNumber() 
})();

