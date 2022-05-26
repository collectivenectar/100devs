// Given an integer n and a digit to look for, find how many times digit appears
// in all the numbers from 0 to n SQUARED.
// P given an n >= 0, and a digit 0 <= d <= 9
// Return an integer(the number of times you found d in the squares of 0 <= n)
// Example : given n = 3, d = 0 => 1
//           given n = 11, d = 1 => 4
// Pseudocode
// create an array to store all the squares from 0 <= n
// iterate from 0 to n inclusive, pushing to the array each number squared
// create a variable to store the total count of d in the array elements.
// iterate over the array with squares, counting the occurrences of d and adding
// 1 each time to the variable.
// return the variable.

unction nbDig(n, d) {
  let squared = []
  for(let toSquare = 0; toSquare <= n; toSquare++){
    squared.push(toSquare ** 2)
  }
  let dFoundInSquared = 0
  for(let squaredString = 0; squaredString < squared.length; squaredString++){
    let numString = `${squared[squaredString]}`
    for(let letter = 0; letter < numString.length; letter++){
      if(+numString[letter] === d){
        dFoundInSquared++
      }
    }
  }
  return dFoundInSquared
}
