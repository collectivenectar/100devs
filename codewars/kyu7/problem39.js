// Parameters : given an array
// Return : return the sum of all the elements in the array using the reduce()
// method(the built-in one)
// Example : sum([1, 2, 3]) => 6
// Pseudocode :
// use the reduce method, with the two parameters passed in being the previous
// element and the current element, and the return value being the previous
// value PLUS the current value
// Return the result of calling that method.

function sum(array) {
  return array.reduce((prev, curr) => {
    return prev + curr
  })
}
