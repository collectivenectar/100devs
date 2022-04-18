//looks like I was able to get the overall patter search, but now I'm running into
//data set issues. if arrayOfArrays = [[], [3, 2], [44, 2]] || [[null], [1, 3, 3]]
// I get a bunch of different errors

//I either need to change every step of the checking process to account for nulls and []
//Or I implement a check at the beginning.


function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays)
  if(arrayOfArrays === [] || arrayOfArrays == false || arrayOfArrays === null){
    return 0
  }
  let sorted = arrayOfArrays.sort((a, b) => {
    if(a === null || b === null){
      return -1
    }
    else if(a.length < b.length){
      return -1
    }
    else if(a.length > b.length){
      return 1
    }
    else{
      return 0
    }
  })
  let first = (sorted) => {sorted[0]? sorted[0].length: null }
  for(let i = first; i < sorted[sorted.length - 1].length; i++){
    if(sorted[i].length - 1 === first){
      first++
    }
    else{
      if(sorted[i - 1] === undefined){
        return 0
      }
      else{
        return sorted[i - 1].length + 1
      }
    }
  }
}
console.log(getLengthOfMissingArray([ [ 1, 2, 2 ], null ]))
