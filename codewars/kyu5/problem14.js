// Parameters: Given your bonus check amount(an integer >= 0), and the price of
// one beer
// Return: Return the number of levels of a 'beeramid' you can make with your bonus
// check. The beeramid is a 3d beeramid, so each level is n X n, not just n.
// Example: Given the bonus check is 10 and beer price is 2, you can purchase a total
// of 5 beers. First level is 1 beer, second level is 4 beers, so return the number 2.
// Pseudocode:

// Set up a variable representing the maximum number of beers you can buy with the
// bonus check. bonus divided by price, and floored to the next integer below if
// not an integer.
// Set up a variable to track the starting level(0)
// While loop, with a condition making sure that the current level can be purchased
// with the remaining funds.
// Subtract the current levels beer quantity required * beer price from remaining funds
// if the next level can be purchased with the remaining funds, increment the level tracker
// up one.

// When the while loop has finished and no more beers can be purchased, return the
// value of the level tracker.

var beeramid = function(bonus, price) {
  let canBuyQty = +Math.floor(bonus / price)
  let level = 0
  while(canBuyQty - (level ** 2) > 0){
    canBuyQty = canBuyQty - (level ** 2)
    if(canBuyQty - ((level + 1) ** 2) >= 0){
      level++
    }
  }
  return level
}
