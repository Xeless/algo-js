(() => {

      function askTvSerie() {
           let tvSerie = {
                  Name: window.prompt("quel le nom de votre serie"),
                  "Production year": window.prompt("quel est l'année de production"),
                  "Name actor":window.prompt("quel est le nom de l'acteur").split(",")
                      }
                      return tvSerie
                  }
console.log(askTvSerie())
      })();