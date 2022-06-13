// Parameters: given an array of integers, and a number
// Return: return (number) even elements from the end of the array, in the same
// order as the original array.
// Example: given array = [0, 1, 2, 3, 4, 5, 6], number = 2, => [2, 4, 6]
// Pseudocode:

// user array.prototype.filter, filter the even numbers from the array
// using reverse twice to slice from the end of the array to get the last (number)
// elements
// return that array.

function evenNumbers(array, number) {
  return array.filter(x => { return x % 2 === 0}).reverse().slice(0, number).reverse()
}
