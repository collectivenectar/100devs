// Parameters: Given an nXn nested array, each element is either a 1 or a 0
// Return: If there is a mine (1), return the location of the mine in the format by index # [row, column]
// Example:
// mineLocation([[0, 0, 0], [0, 0, 1], [0, 0, 0]]) => [1, 2]
// Pseudocode:
// start with a variable 'mine' to store the results
// Then set up variables to store calculated length and depth of the array (row, column)
// Then loop through the array, the outer loop as the rows, the inner loop as the columns
// For each element, if it's a 1, push the row, and then push the column, both to the
// 'mine' variable array.
// return the mine variable after the loop is finished

function mineLocation(field){
    let mine = []
    let rowLength = field.length
    let columnLength = field[0].length
    for(let row = 0; row < rowLength; row++){
      for(let column = 0; column < columnLength; column++){
        if(field[row][column] === 1){
          mine.push(row)
          mine.push(column)
        }
      }
    }
    return mine
  }