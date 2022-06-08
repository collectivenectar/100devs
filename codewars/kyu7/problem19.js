// Parameters : given an array n with unknown elements, and limit which is an integer.
// Return : return true or false, true if every element inside the array is equal
// to or less than the limit
// Example: given ([0, 1, 2, 3, 4, 5], 4) => false
// Pseudocode:

// iterate through a, and compare if that element is greater than the limit.
// if greater, return false, if not return true.

function smallEnough(a, limit){
  for(let value = 0; value < a.length; value++){
    if(a[value] > limit){
      return false
    }
  }
  return true
}
