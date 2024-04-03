(() => {
    
function rectangleProgr () {
    class Rectangle {
        constructor(topLeftPos, width , length) {
            this.topLeftPos = topLeftPos
            this.width = width
            this.length = length
        }
        collides(otherRectangle) {
            if  (this.topLeftPos === otherRectangle.topLeftPos) {
                return true
            }
        }
        }


     let arrayRectangle = []
    for(let i = 0; i <  1001 ; i++) { 
        let width = Math.floor(Math.random() * 50)
        let length = Math.floor(Math.random() * 50)
        let topLeftPos = {
            x: Math.floor(Math.random() * 50), 
            y: Math.floor(Math.random() * 50)
        }
        arrayRectangle.push(new Rectangle(width,length,topLeftPos))
    }
        
   for(let j = 0 ; j < arrayRectangle.length ; j++) {
       const test1 = arrayRectangle[j]
       for (let n = 0 ; n < arrayRectangle.length ; n++) {
        const test2 = arrayRectangle[n]
        if (test1.collides(test2) && j !==n ) {
                console.log("Boom!")
                console.log(test1)
                console.log(test2)
            }

        }
       }
   }







rectangleProgr()


})();