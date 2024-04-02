(() => {
          function askTvSerie() {
            let tvSerie = {
                  Name: window.prompt("quel le nom de votre serie"),
                  Production: window.prompt("quel le nom de votre serie"),
                  Cast:window.prompt("quel sont les noms des l'acteurs").split(",")
                      }
                      return tvSerie
                  }
      
      function randomizeCast(tvSerie) {
       let newCast = []
        for (let i = 0 ; i < tvSerie.Cast.length; i++ ) {
            let r = Math.floor(Math.random()* tvSerie.Cast.length)
           let randomCast = tvSerie.Cast[r]
            newCast.push(randomCast)
        }
        return newCast
      }

      let tvSerie = askTvSerie(); 
      console.log("detail de la série :", tvSerie);
      
      let newCast = randomizeCast(tvSerie); 
      console.log("test casting melanger :", newCast); 
     
      })();