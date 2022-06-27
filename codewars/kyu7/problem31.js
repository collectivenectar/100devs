// Parameters: given an array of strings
// Return : return the same array, but with each element sorted by string length
// Example : sortByLength(["12", "123", "1"]) => ["1", "12", "123"]
// Pseudocode :
// Using the array.sort method, use each elements .length property for the logic
// in the sort method.
// return the array.

function sortByLength (array) {
  let sorted = array.sort((a, b) => {
    if(a.length > b.length){
      return 1
    }
    else if(a.length < b.length){
      return -1
    }
    else{
      return 0
    }
  })
  return sorted
};
