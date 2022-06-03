//Return the number of possible combinations of coins to produce a quantity of money

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:
//
// 1+1+2 == 2+1+1
// Also, assume that you have an infinite amount of coins.
//
// Your function should take an amount to change and an array of unique denominations for the coins:

//all possible combinations is a theme I'm noticing with harder problems. How to consider all possible
//combinations, when the set size is not restricted?
// for a set of 5 numbers, 1 2 3 4 5, there are 5! possible combinations with no set restrictions,
// or (n - r)! for with set restrictions
// if money is not divisible by coin[i], and coin[i] is not larger than money,
// I need to test if money - coin[i] - counted[j] === 0, or if
// counted[j] could be multiplied to produce money - coin[i] - n * counted[j] === 0
// online research leans towards recursive solutions, so lets see how I can nest this problems

// figured out how to get all the possible multiples figured out, but I can't seem to figure
// out how to

var countChange = function(money, coins) {
  //for each coin, 
}


countChange(300, [ 5, 10, 20, 50, 100, 200, 500 ])
