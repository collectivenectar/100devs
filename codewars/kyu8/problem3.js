// Parameter: Given an array filled with integers.
// Return: return true if the array contains a certain value, passed as a number
// or a string
// Example: given ([0, 1, 2, 3, 4, 5],  4) => true
// Pseudocode:

// Starting at 0, and ending at the length of a
// return true if the current element is equal to
// the given value x
// If by the time the loop has been run, no number is found,
// return false.

function check(a, x) {
  for(let element = 0; element < a.length; element++){
    if(a[element] === x){
      return true
    }
  }
  return false
}
