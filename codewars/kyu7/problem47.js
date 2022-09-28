// Parameters: Given an array of positive integers
// Return: Return an array where the first element is the second highest integer, and the second
// element is the highest integer.
// Example:
// twoOldestAges([15, 98, 88, 54, 99]) => [98, 99]
// Pseudocode:
// first, create a copy of the array, sorted by value in descending order.
// Then return an array with the array index 1 element, and the array index 0 element inside it.

function twoOldestAges(ages){
    let sorted = ages.sort((a, b) => {
      if(a < b){
        return 1
      }else if(a > b){
        return -1
      }else{
        return 0
      }
    })
    return [sorted[1], sorted[0]]
  }