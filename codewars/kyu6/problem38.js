// Parameters: given two different sets of coordinates
// Return: Return the distance between the two as if they were city blocks, walking distance.
// Example:
// manhattanDistance([5, 17], [1, 15]) => 6
// Pseudocode:

// Well, since there could be negative or positive return value by subtracting
// the difference between a large and smaller number or vice versa, it's easier
// to just use the absolute value of the difference between the 'x' axis and
// the 'y' axis points. Adding the absolute value of the difference of BOTH
// gives me the total distance.

function manhattanDistance(pointA, pointB){
  return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
}

console.log(manhattanDistance([5, 17], [1, 15]))
