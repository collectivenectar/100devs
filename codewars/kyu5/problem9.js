// given two IPv4 address, return the number of addresses between them
// Parameters : two strings as (start, end) and each string is 4 numbers with a "." between
// Return : return an integer representing the total number of addresses.
// Example: ipsBetween("192.168.0.0", "192.168.0.1") => 1
// ipsBetween("192.168.0.0", "192.168.1.0") => 256
// Pseudocode:
// using array.split() with a ".", iterate through each section of the address,
// by storing the start address and end address as a split array with 4 elements
// start at 1 instead of 0 because I want to use 256 ** i to multiply the numbers
// then, add the difference between start and end multiplied by (256 ** i) to
// a tracker integer variable, and return the variable after done iterating.


function ipsBetween(start, end){
  let startSplit = start.split(".")
  let endSplit = end.split(".")
  let differences = 0
  for(let i = 1; i <= startSplit.length; i++){
    let totalCount = (endSplit[i - 1] - startSplit[i - 1]) * 256 ** (4 - i)
    differences = differences + totalCount
  }
  return differences
}
