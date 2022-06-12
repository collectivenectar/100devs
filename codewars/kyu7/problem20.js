// Given a triangle/pyramid of consecutive odd numbers, starting at 1
// with 1 number in the first row, and n in the last, return the sum of the integers
// in row n

// Parameters: given n, positive integer
// Return: return an integer
// Example: given n = 5, return 125
// Pseudocode:

// Just brute forcing it here, the nth row has n integers in it, so if I can
// calculate all odd numbers in the triangle, reverse the array and sum the first
// n elements, I'll have it.

// start with 1 to add to the array.
// create a holding array for the odd numbers
// calculate the total number of integers in the triangle/pyramid
// use a for loop to push odd numbers starting from 1 by adding 2 to
// 'start' variable
// reverse the array, slice it from 0 to n, reduce it, and return the sum 

function rowSumOddNumbers(n) {
  let start = 1
  let oddsArray = []
  let totalNumbersInTriangle = (n * (n + 1)) / 2
  for(let oddNum = 0; oddNum < totalNumbersInTriangle; oddNum++){
    oddsArray.push(start)
    start = start + 2
  }
  return oddsArray.reverse().slice(0, n).reduce((prev, curr) => {
    return prev + curr
  })
}

console.log(rowSumOddNumbers(5))
