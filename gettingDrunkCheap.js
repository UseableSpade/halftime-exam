// HELPER FUNCTION TO SORT DRINKS

function compare (a, b) {
  const drinkA = a.pricePerAbv
  const drinkB = b.pricePerAbv

  let comparison = 0
  if (drinkA > drinkB) {
    comparison = 1
  } else if (drinkA < drinkB) {
    comparison = -1
  } return comparison
}

function gettingDrunkCheap(drinks) {
  
  // CALCULATE pricePerAbv FOR EACH OBJECT AND ROUND IT DOWN

  drinks.forEach(drink => {
    drink.pricePerAbv = Math.floor(drink.price / drink.volume / drink.abv)
  })

  // SORT DRINKS IN ASCENDING ORDER

  drinks.sort(compare)
  
  // RETURN THE DRINK WITH THE LOWEST pricePerAbv

  let cheapestDrink = {
    name: drinks[0].name,
    pricePerAbv: drinks[0].pricePerAbv
  }
  
  return cheapestDrink
}

module.exports = gettingDrunkCheap
