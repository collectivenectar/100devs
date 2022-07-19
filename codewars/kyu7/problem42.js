// Parameters: Given an array of elements
// Return: Return the array with it's elements reversed, without using the
// Array.prototype.reverse() method.
// Example: reverse([0, 5, 7, 2, 5]) => [ 5, 2, 7, 5, 0 ]
// Pseudocode:
// create an array to store the reversed elements
// create a for loop, but begin at the end of the array and end at 0, incrementing
// minus one each loop. inside the loop, push the element at the looped index to
// the storage array
// after the loop, return the results in the array

reverse = function(array) {
  let newA = []
  for(let each = array.length - 1; each >= 0; each--){
    newA.push(array[each])
  }
  return newA
}
