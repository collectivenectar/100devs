// unpacking arguments

// Parameters: given a function as the first parameter, and a list of arguments as the second
// Return: return the result of calling the function with the list of arguments
// Example:

// let sum = (a, b) => {
// return a + b
// }
// spread(sum, [3, 4]) => 7

// Pseudocode:

// return the function parameter called with it's arguments, but put the spread
// operator before the arguments name.

function spread(func, args) {
  return func(...args)
}
