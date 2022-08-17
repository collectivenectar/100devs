// Parameters: Given two arrays, each with integers, and one with integers that
// COULD be squares of the elements existing in the other array.
// Return: Return true if the elements in array 2 are squares of the elements in
// array 1, AND that there are the same number of occurrences of those numbers.
// There could be duplicates. There could also be null values and [].

// Example:

// let a1 = [121, 144, 19, 161, 19, 144, 19, 11]
// let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// comp(a1, a2) => true
// comp([1, 2, 3, 4, 4, 4], [1, 4, 9, 16, 16]) => false

// Pseudocode:

// Start off by checking if either arrays are null, if so return false.
// Then check if just one of the arrays is []. If both are [], then return true,
// if just one, return false.

// Then proceed through a for loop, from beginning to end of array 2.

// For each element, calculate the square root of that element.

// Then check if that square root exists in array 1. If it does, remove that element
// From the array 1. This is destructive, so an alternative could also be done by
// filling up an empty array as I go instead and then counting occurrences that way.

// Then if array1 doesn't have that square root, return false and end the loop.

// If the whole loop executes perfectly, return true.


function comp(array1, array2){
  if(array1 === null || array2 === null){
    return false
  } else if(!array1.length || !array2.length){
    if(!array1.length && !array2.length){
      return true
    }else{
      return false
    }
  }else{
    for(let each = 0; each < array2.length; each++){
      let sqrt = Math.sqrt(array2[each])
      if(array1.includes(sqrt)){
        array1.splice(array1.indexOf(sqrt), 1)
      }else{
        return false
      }
    }
  }
  return true

}
