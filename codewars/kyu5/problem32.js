// Parameters: Given two arrays of equal length, each element an integer
// Return: square the absolute value of the difference between elements at the
// same index, and return the average value of all squares.
// Example:
// solution([1, 2, 3], [4, 5, 6]) => 9
// 1 - 4 = -3, 2 - 5 = -3, 3 - 6 = -3, all squared returns 9 for each, average
// of 9 between all is 9.

// Pseudocode:
// create an array variable to store all the squares.
// loop from 0 to the length of the arrays
// each time, Calculating the absolute value of the difference, squaring that number,
// then pushing that value to the squares array
// Then, using the reduce() method, calculate the sum of all squares, and divide by
// the length of the array to get the average value.

var solution = function(firstArray, secondArray) {
  let squares = []
  for(let value = 0; value < firstArray.length; value++){
    let square = Math.abs(firstArray[value] - secondArray[value]) ** 2
    squares.push(square)
  }
  return squares.reduce((prev, curr) => prev + curr) / squares.length
}
