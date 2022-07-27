// Parameters: given an array of elements, each element a string
// Return: Return the arrays, sorted, ignoring case
// Example:
// sortme(["Hello", "there", "I'm", "fine"]) =>  ["fine", "Hello", "I'm", "there"]
// Pseudocode:

// using the array.sort() method
// call toLowerCase() on each element before comparing if one is greater than
// the other. If a is greater than b, return 1, if a is less than b return -1
// otherwise return 0

// return the sorted array

sortme = function( names ){
  return names.sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()) {
      return 1
    } else if(a.toLowerCase() < b.toLowerCase()){
      return -1
    } else{
      return 0
    }
  })
}
