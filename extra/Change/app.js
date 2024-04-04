(() => {
    function changeMoney(price,moneyHanded) {
        
        let moneyRendu = moneyHanded - price
        const coins = [20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
        const add = []

        if(isNaN(price) || price <= 0 ||  isNaN(moneyHanded)  || moneyHanded < price)  {
            return []
      } 
      else if (moneyRendu > 0) {
        for(let i = 0 ; i < coins.length ; i++) {
            while(moneyRendu >= coins[i]){
                add.push(coins[i])
                 moneyRendu -= coins[i]
                 moneyRendu = Math.round(moneyRendu * 100) / 100
            }
        }
        return add
      }
      else{
        return []
      }
    }

    const test = changeMoney(12.3, 50);
         console.log(test)
         const test2 = changeMoney(17.41,20)
         console.log(test2)
})();