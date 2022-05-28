// given an array of unknown length, return the same array, with all elements
// containing a 0 (number type) to the end of the array without changing the
// order of the other elements.

// Parameters given is an array, but the elements included could be:
// "0", 0, [0], {0}, [], [[]], null, false, true, {}, and other strings and
// integers
// Return the mutated array
// Example - given array [0, 1, 2, 3, 4, 5] => [1, 2, 3, 4, 5, 0]
// Pseudocode:
// create a var to count how many 0s I've counted
// create another var to hold the non zero elements
// iterate over the array looking for zeros
// any nonzero gets pushed to the non zero var
// any zero counted adds 1 to the zeros var
// after it's all done, create an array with length of zeros var, and fill with
// zeroes, then concatenate it with the nonzeroes array, and return it.

function moveZeros(arr){
  let zeros = 0
  let nonZeroes = []
   for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      if(arr[i] === 0){
        zeros++
      }
      else{
        nonZeroes.push(arr[i])
      }
    }
    else if(typeof arr[i] === "object"){
      if(arr[i] === null){
        nonZeroes.push(arr[i])
      }
      else if(arr[i][0] === 0 || arr[i][0] === "0"){
        zeros++
      }
      else{
        nonZeroes.push(arr[i])
      }
    }
    else if(typeof arr[i] === "string"){
      nonZeroes.push(`${arr[i]}`)
    }
    else{
      nonZeroes.push(arr[i])
    }
   }
  let zerosToPush = Array(zeros).fill(0)
  return nonZeroes.concat(zerosToPush)
}
