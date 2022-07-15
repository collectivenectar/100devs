// Parameters: given an array with various arrays inside, some empty, some with
// nested arrays as well
// Return: Return a flattened version of the array, only one level deep
// Example: flatten([[[1, 3, 4]]]) => [[1, 3, 4]]
// Pseudocode:

// using an array literal, concatenate it with the spread version of the original
// array using the spread operator, and return it

var flatten = function (array){
  return [].concat(...array)
}
