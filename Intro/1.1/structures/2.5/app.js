(() => {
// J'initie ma function qui s'appelera favoriteNumber
function favoriteNumber () {
    // je declare une variable numberFavoritees 
 let  numberFavorites;
 // j'initie la boucle qui va s'executer jusqu'à ce qu'elle soit 42
 while (true) {
   
    // ma variable vas poser une question 
  numberFavorites = prompt("quel est votre nombre favorit")

// je verifie que le nombre sois convertie en nombre &&(et) que le chiffre de ma condition sois 42
  if (!isNaN(numberFavorites) && numberFavorites === 42) {
  console.log("bravo vous avez trouveé mon nombre favorit")

  // je casse la boucle while pour evite quelle tourne a l'infinie
break

// ma conditon else est la pour dire que il n'a toujours pas trouve le nombre 
}else {
    console.log("vous n'avez pas trouvé mon nombre favorit")
}
}
}
// j'appel ma function 
favoriteNumber() 
})();

