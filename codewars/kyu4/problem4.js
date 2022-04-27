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

//starting with only the coins that are equal or less than the value of money,
//look for cases where the coin or a multiple of that coin could equal money
//then look in function(money, coins + 1?) How? I could just set it as an function expression
//and loop through each coin, any coin multiple that equals money is returned as
//an array, with the first element being the coin, and the second being the multiple
//at the end I have an array of arrays of possible combinations? [3, 2] for money === 6
// [[3, 2], [1, 6]] gives me only multiples, that I would also automatically find if I were searching
//more broadly. Four terms, for example:

// [4, 3, 1, 2] and the money of 10.
// how do I search broadly? can (4 or multiples of 4 below 10) + any other element(or multiples of that element below 10)
// sum to equal 10?
// now I have:
// all multiples that equal money(starting return value)
// all possible integers formed from coins[i] or multiples of coins[i],

// I just now need to look through the whole array and see which combinations result in
// the value of money

// in this case, factorial for the (length - 1) of the returned multiples array, minus r,
// which changes, according to whether or not the current sum has already reached a value
// close to moneys value

// example :    1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4, 6, 8, 3, 6, 9, 4, 8

// looping through from 0 to the end,
// items like '9' are only a match for anything equal to the value of money - '9' = 1
// so I could even sort this if it helps, which I think it would, it would stop from
// iterating over parts of the array that go above the value of money - '9'.
// so, starting with a sorted array, let's see what I can do.

var countChange = function(money, coins) {
  let combinations = 0
  let multiples = []
  for(let i = 0; i < coins.length; i++){
    let counter = 0
    if(coins[i] === money){
      combinations++
    }
    else if(coins[i] < money){
      while(counter <= money){
        if(counter === 0){
          counter = counter + coins[i]
        }
        else{
          if(counter === money){
            counter = counter + coins[i]
            combinations++
          }
          else{
            multiples.push(counter)
            counter = counter + coins[i]
          }
        }
      }
      counter = counter + coins[i]
    }
  }
  for(let i = 0; i < multiples.length; i++){

  }
  let sorted = multiples.sort((a, b) => {
    if(a < b){
      return -1
    }
    else if(a > b){
      return 1
    }
    else{
      return 0
    }
  })
  for(let i = sorted.length; i >= 0; i--){
    // first, if in sorted there already exists an element with a value that is equal  to
    // money - sorted[i], combinations++
    let recursive = (sorted) => {
      if(sorted.length <= 1){
        return sorted
      }
    }
    let possibles = sorted.filter((x => x <= money - sorted[i]))
    for(let j = 0; j < possibles.length; j++){
      let nextLayer = possibles.filter( x => x < money - sorted[i] - possibles[j])
      if(nextLayer.length === 0){
        console.log(money, sorted[i], possibles[j])
      }
      else{
        console.log(nextLayer.length)
      }
    }
    console.log(possibles)
    //now I have just those that could possibly be combined with sorted[i]
    //now I need the next set of possibles.
    // if not that number, is there a number smaller or larger than that in the array that
    // are equal to money - sorted[i]
    // if so, combinations++
  }
  console.log(multiples)
}
countChange(10, [1,2,3,4])
