(() => {
  

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


const test = new Rectangle (10,10,60,60)
const test1 = new Rectangle (10,10,60,60)
console.log(test.collides(test1))
})();