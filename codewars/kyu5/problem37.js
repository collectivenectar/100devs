// Parameters: Given an array with an unknown amount of nest arrays with unknown depth
// Return: Return the array with all nested arrays below depth of 2 flattened.
// Example:
// flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) => [1, [2, 3, 4, 5]]

// Pseudocode:

// loop through the array from beginning to end
// If an element is an array, flatten it by setting that element equal to the flattened version of that
// element --- using the flat() method with parameter as infinity so it flattens all depths.
// return the mutated array

function flattenTwoLevels(array) {
    for(let each = 0; each < array.length; each++){
      if(Array.isArray(array[each])){
        array[each] = array[each].flat(Infinity)
      }
    }
    return array
  }