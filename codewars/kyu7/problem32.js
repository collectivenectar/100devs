// Parameters : given a number n, and another number
// Return : Return a function that always adds n to any given number
// Example : let addOne = add(1)
//           addOne(3) => 4
// Pseudocode :
// have only the first parameter for the outer function,
// and just return the inner function, which returns the sum of n + the unknown number, num

function add(n){
  return function addTo(num) {
    return num + n
  }
}
