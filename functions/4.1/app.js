(() => {
  
let width = windows.prompte("donner une largeur")
let height = windows.prompte("donner une hauteur")


if(isNaN(width) || isNaN(height)) {
   console.log("veuillez rendre un nombre")
   return
}

    function calcSurface (largeur,hauteur) {
        return largeur * hauteur
    }


    calcSurface()
  
  })();