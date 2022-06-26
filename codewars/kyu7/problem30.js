// Parameters : given an array, and the number to multiply each element by
// Return : Return a new array, where each element has been multiplied by a given
// number(provided). Use currying.
// Example: multiplyAll([1, 2, 3])(4) => [4, 8, 12] OR multiplyAll([0, 1, 2])(1) => [0, 1, 2]
// Pseudocode:
// Map doesn't return the original array, but a new array, so I will use that
// currying depends on closure, so starting with the lowest function, multiplying,
// use map to return each element multiplied by 2.
// splitting the process using currying, using arrow functions, I set the first
// function to require the array, and return another function, which requires the
// multiplier, and returns a new array, mapped passing each element multiplied by
// the multiplier.


let multiplyAll = (array) => (multiply) => array.map(x => x * multiply)

console.log(multiplyAll([1, 2, 3])(4))
