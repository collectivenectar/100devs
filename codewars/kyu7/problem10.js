// P given an array with possible duplicates. if total count for an element is over n,
// remove the later duplicates first until it is equal n
// R return a filtered array with the last duplicates removed first, without changing
// the order of the remaining elements.
// E if given arr = [20, 37, 20, 21] and n = 1, => [20, 37, 21]
// Pseudocode
// count the number of duplicates
// see if any of them are over n
// remove those extra elements from the end first
// return remaining array

function deleteNth(arr,n){
  // count up the frequency. Using a hashmap
  let count = {}
  for(let motif = 0; motif < arr.length; motif++){
    if(!count[arr[motif]]){
      count[arr[motif]] = 1
    }
    else{
      count[arr[motif]] = count[arr[motif]] + 1
    }
  }
  // create an array to store indexes of duplicates
  let dupeIndexes = []
  // go through the count and see if any count is over n.
  for(let motif = 0; motif < Object.keys(count).length; motif++){
    let motifCounts = Object.values(count)
    let motifNumbers = Object.keys(count)
    // if it is bigger than n
    if(motifCounts[motif] > n){
      // figure out how many need to be removed.
      let currentIndex = arr.indexOf(+motifNumbers[motif])
      for(let i = 1; i <= motifCounts[motif]; i++){
        // starting with the first occurrence, 1, going up to 5
        if(i > n){
          // if this occurrence needs to be removed, push it to the filter array
          dupeIndexes.push(arr.indexOf(+motifNumbers[motif], Number(currentIndex)))
          // continue on in case there are more
          // store the current index in a temp var as string
          let tempIndex = +currentIndex
          // set a new currentIndex value as the index of the number starting
          // from tempIndex
          currentIndex = arr.indexOf(+motifNumbers[motif], Number(tempIndex) + 1)
        }
        else{
          // for the first occurrence until above n
          // keep track of the current index, and store it
          let tempIndex = +currentIndex
          // store the current index as temp variable
          // set a new currentIndex as index of number starting from currentIndex + 1
          currentIndex = arr.indexOf(+motifNumbers[motif], tempIndex + 1)
        }
      }
    }
    else{
    }
  }
  return arr.filter((element, index, array) => !dupeIndexes.includes(index))
}

console.log(deleteNth([ 20, 37, 20, 21], 1))
