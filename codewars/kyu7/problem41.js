// sum of odd cubed numbers

// Parameters : Given an array of integers
// Return : Return the sum of only the odd numbers in the array AFTER cubing all
// the elements
// also, return 'undefined' if any of the elements are not numbers
// Example :
// cubeOdd([0, 1, 2, 3, 4]) => 28
// Pseudocode:

// first, check for non numbers:
// using filter, return any elements that are not numbers. If filter returns
// an array with any length besides 0, return undefined
// Then, cube the array using array.prototype.map()
// Next, filter the array eliminating any element not divisible by 2
// If filter returns an empty array, return 0, otherwise use
// array.prototype.reduce() to sum the contents of the odd filtered array, and
// return the sum

function cubeOdd(arr) {
  if(arr.filter(x => typeof x === "string").length > 0){
    return undefined
  }
  let cubed = arr.map(el => el ** 3)
  let odds = cubed.filter(x => x % 2 !== 0)
  if(odds.length === 0){
    return 0
  }
  return odds.reduce((prev, curr) => prev + curr)


return 0;
}
