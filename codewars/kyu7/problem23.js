// Parameters : Given a number (sq) could be any Number
// Return : Return -1 if the number is not a perfect square, and return the next
// perfect square (up from) after sq if it is a perfect square
// Example: findNextSquare(49) => 64, findNextSquare(48) => -1
// Pseudocode:

// check to see if square rooting the number results in an integer
// If it doesn't return an integer, return -1
// If it does return an integer, take the square root, add 1, square that number
// and then return the result.

function findNextSquare(sq) {
  if(Number.isInteger(Math.sqrt(sq))){
    return (Math.sqrt(sq) + 1) ** 2
  }
  else{
    return -1;
  }
}
