//looks like I was able to get the overall patter search, but now I'm running into
//data set issues. if arrayOfArrays = [[], [3, 2], [44, 2]] || [[null], [1, 3, 3]]
// I get a bunch of different errors

//I either need to change every step of the checking process to account for nulls and []
//Or I implement a check at the beginning.


// THIS I STARTED WITH, came back later to redo it
// console.log(arrayOfArrays)
// if(arrayOfArrays === [] || arrayOfArrays == false || arrayOfArrays === null){
//   return 0
// }
// let sorted = arrayOfArrays.sort((a, b) => {
//   if(a === null || b === null){
//     return -1
//   }
//   else if(a.length < b.length){
//     return -1
//   }
//   else if(a.length > b.length){
//     return 1
//   }
//   else{
//     return 0
//   }
// })
// let first = (sorted) => {sorted[0]? sorted[0].length: null }
// for(let i = first; i < sorted[sorted.length - 1].length; i++){
//   if(sorted[i].length - 1 === first){
//     first++
//   }
//   else{
//     if(sorted[i - 1] === undefined){
//       return 0
//     }
//     else{
//       return sorted[i - 1].length + 1
//     }
//   }
// }

// n(n + 1), starting from [0] in the sorted array, ending at sortedArray.length

// found out something really useful, to check for [] nested in arrays or for arrays that are
// undefined, try !array.length works great
function getLengthOfMissingArray(arrayOfArrays){
  if(arrayOfArrays === [] || arrayOfArrays === null || !arrayOfArrays.length){
    return 0
  }
  let lengths = []
  for(let i = 0; i < arrayOfArrays.length; i++){
    if(arrayOfArrays[i] === null || !arrayOfArrays[i].length){
      return 0
    }
    lengths.push(arrayOfArrays[i].length)
  }
  lengths.sort((a, b) => {
    if(a < b){
      return -1
    }
    else if(a > b){
      return 1
    }
    else{
      return 0
    }
  })
  let completeSet = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
  let missingSetSum = lengths.reduce((prev, curr) => prev + curr)
  let completeSetSum = completeSet(lengths[0], lengths[lengths.length - 1], 1).reduce((prev, curr) => prev + curr)
  return completeSetSum - missingSetSum
}
console.log(getLengthOfMissingArray([ [ 1, 2, 2 ], [4], [22, 15, 21, 66]]))
