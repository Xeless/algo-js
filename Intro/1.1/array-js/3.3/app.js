(() => {
    let keller7 = [
      {name:"Lyne" },
      {name:"Dj3y" },
      {name:"Zara"},
      {name:"Manu zapé comme jamais"},
      {name:"Adrien"},
      {name:"NathAmd"},
      {name:"Xeless le goat"},
      {name:"Caroline"},
      {name:"Arnaud"},
      {name:"Stacy"},
      {name:"Justine"},
      {name:"Angel"},
      {name:"Dylan"},
      {name:"Adca"},
      {name:"isabelle"},
      {name:"doblaria"},
      {name:"Youris"},
      {name:"Giovanni le goat de la finance"},
      {name:"Illies le Roi des pirates"},
      {name:"Justine L"},
      {name:"Denis"},
      {name:"Mohamed"},
      {name:"ludovic"},
      {name:"Maryam"},
      {name:"Julie"},
      {name:"Jordan"},
      {name:"Tasha"}
   ]
  

function average () {
let total = 0
for (let i= 0 ; i < keller7.length ; i++) {
   total += keller7[i].name.length
}
return total / keller7.length
}
console.log(average())
})();