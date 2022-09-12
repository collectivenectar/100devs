// Parameters: Given a variable amount of arrays, with variable length, with variable element types
// Return: Return an array that is the result of merging all the given arrays together, where 
// [array1[0], array2[0], array3[0], array1[1], array2[1], array3[1], ...]
// NOTE: when one array runs out of elements, fill the position in the merged array 
// with a null instead of an element.
// Example: interleave([1, 2, 3], [1, 2]) => [1, 1, 2, 2, 3, null]
// Pseudocode:
// First get the longest array length to determine the loop.
// Then create an array to store the final results.
// Then calculate the total number of arguments given for the nested loop.
// Then begin the outer loop from 0 to the longest array length value
// Then begin the inner loop from 0 to the total amount of arguments given.
// Looping through the arguments object, see if the array length is less than the current
// index in the outer loop - if less, then push null to the results array
// Otherwise, use the inner loop argument key and the current index in the outer loop
// to push the value in that array to the results array.
// finally return the results array.

function interleave() {
    let interLoaved = []
    let longest = Object.values(arguments).sort((a, b) => {
      if(a.length > b.length){
        return -1
      }else if(a.length < b.length){
        return 1
      }else{
        return 0
      }
    })[0].length
    let totalArgs = Object.keys(arguments).length
    for(let mergeAt = 0; mergeAt < longest; mergeAt++){
      for(let arg = 0; arg < totalArgs; arg++){
        let whichArray = arguments[Object.keys(arguments)[arg]]
        if(whichArray.length - 1 < mergeAt){
          interLoaved.push(null)
        }else{
          interLoaved.push(whichArray[mergeAt])
        }
      }
    }
    return interLoaved
  }