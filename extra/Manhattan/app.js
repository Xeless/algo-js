(() => {
    function manhattan (streetA, avenueA,streetB,avenueB) {
        
        let street = 1;
        if (streetA >= streetB ) {
            street = streetA - streetB
        }

        let avenue = 1
        if (avenueA >= avenueB) {
            avenue = avenueA - avenueB
        }
        const distance = street + avenue
        return distance
    }


    const test = manhattan(1,1,2,2)
    const test2 = manhattan(1,1,1,1)
    const test3 = manhattan(5,4,3,2)
    console.log(test)
    console.log(test2)
    console.log(test3)
})();