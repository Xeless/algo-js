(() => {
    class Circle {
        constructor(xPos,yPos,radius) {
            this.xPos = xPos
            this.yPos = yPos
            this.radius = radius
        }
        move(xOffset,yOffset){
          this.xPos += xOffset
          this.yPos += yOffset
        }
        get surface() {
          return Math.PI * Math.pow(this.radius, 2)
        }
       calcArea() {
        return this.xPos * this.yPos
       }
    }

    const test = new Circle (10,10,5)
    console.log(test.surface)
})();