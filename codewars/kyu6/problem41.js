// Parameters: Given an array of strings, each string being a color of glove
// Return: Return the number of glove pairs you can make with matching colors
// Example:
numberOfPairs(["yellow", "purple", "green", "purple", "blue", "green"]) => 2
// Pseudocode:
// create a var to store the number of pairs you find
// create a var to store a map/object
// iterate through the given gloves array, adding a key/value in the map
// for "<color>": <count> where count is an integer
// With the map filled, iterate through the map, adding the count of each color
// to the pairs variable,
// but divide it by 2 first, and round it down to the nearest integer before adding.
// return the value in the pairs variable

function numberOfPairs(gloves)
{
  let pairs = 0
  let map = {}
  for(let glove = 0; glove < gloves.length; glove++){
    if(!map[gloves[glove]]){
      map[gloves[glove]] = 1
    }else{
      map[gloves[glove]] = map[gloves[glove]] + 1
    }
  }
  for(let count = 0; count < Object.keys(map).length; count++){
    pairs = pairs + Math.floor(Object.values(map)[count] / 2)
  }
  return pairs
}
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]))
