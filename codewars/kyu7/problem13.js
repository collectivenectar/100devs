// P given a start and end point for an inclusive range.
// Return the number of numbers in that range if you exclude all numbers with a
//      '5' in them.
// E dontGiveMeFive(0, 5) => [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4] => 5
// Pseudocode

// create an empty array
// fill that array with numbers in the inclusive range [start, end]
// filter that array according to the rule number doesn't have any numbers === 5
// return the length of that array

function dontGiveMeFive(start, end){
  let regionArray = []
  for(let number = start; number <= end; number++){
    regionArray.push(number)
  }
  return regionArray.filter( x => !+String(x).split("").includes("5")).length
}
