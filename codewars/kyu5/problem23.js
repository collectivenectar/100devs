// Parameters: Given two objects, one object is a cooking recipe, with keys and values representing
// ingredients and amounts, and the other object is the supply of ingredients given.
// Return: Return the number of possible 'cakes' you can make given the recipe and
// the supplied ingredients. Only return integers.

// Examples:
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})
// should return 2
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000})
// should return 0

// Pseudocode:

// Start with a variable to store the minimum number of cakes that can be made

// Then, declare but leave undefined a var ratio, to represent the ratio of
// Supplied ingredient amount to required amount for the recipe.

// Then, declare another variable equal to all the keys present in the recipe
// by pulling it from the recipe object.keys(recipe) method.

// Then, loop through the keys array.

// Inside the loop, set a new var 'amount' equal to the value present for the given
// key in the recipe object at the current loop index.

// Then check if the same key is not present in the supplied ingredients, or if
// the supplied amount is less than the required amount in the recipe. If not,
// return 0, ending the loop.

// Otherwise, set the ratio variable to the next whole number below the result of
// dividing the supplied amount by the required amount.
// If that ratio is lower than the value present in minUnit, replace it with that
// ratio value, if not, continue the loop.

// If the loop has completed without finding a ratio of 0, then return the value
// present in minUnit.



function cakes(recipe, available) {
  let minUnit = 0
  let ratio
  let keys = Object.keys(recipe)
  for(let ingredient = 0; ingredient < keys.length; ingredient++){
    let amount = keys[ingredient]
    if(!available[amount] || available[amount] < recipe[amount]){
      return 0
    }else{
      ratio = Math.floor(available[amount] / recipe[amount])
      if(ingredient === 0){
        minUnit = ratio
      }else{
        if(minUnit > ratio){
          minUnit = ratio
        }
      }
    }
  }
  return minUnit
}
