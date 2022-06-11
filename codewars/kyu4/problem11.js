// Parameters: Given an n x n array. Could be 0x0=[[]], 1x1=[1], 2x2, etc
// Return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// if [[]] => [], if [[1]] => [1]
// Example:
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) => [1,2,3,6,9,8,7,4,5]
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// Pseudocode:
// how this works is using array index validity and already counted indexes to
// create artifical boundaries as the iterator moves through the array. When the
// snailWinder() finds a position that has already been counted or is an invalid
// index for the array, currentDirection gets changed. currentDirection changes
// whether or not the row or column is being increased or decreased. Going clockwise
// means a 4-step loop - first right, then down, then left, then up, until
// reaching the apex of the 'snail' shell. It's pretty blind and brute, but works.

// To start:
// make an array to store already counted positions
// make a var to store current row, and current column
// make a var to store the current direction(0-3 = right, down, left, up)
// make a nested function to produce a new position to test for validity
// make a nested function to change the current row and column to a validated
// position.
// make a nested function to iterate through the array one at a time, using a
// while loop based on array length x subarray length
// after filling counted array, iterate over it pushing values from each counted
// position to a new results array, which is to be finally returned

// Notes: originally tried just storing positions as strings => "${row}${column}"
// but found limitations with arrays with a length value of more than 1 digit.
// switched to using "," between row and column value, and then used .split(",")
// to access each individually

// I tested this solution for non-square length,(where length != width), and it works,
// so this doesn't need to have n  x  n length

snail = function(array) {
  if(!array[0].length){
    return array[0]
  }
  let counted = []
  let currentRow = 0
  let currentColumn = 0
  let currentDirection = 0
  let sentry = (direction) => {
    switch(direction) {
      case 0:
      return `${currentRow},${currentColumn + 1}`
      break
      case 1:
      return `${currentRow + 1},${currentColumn}`
      break
      case 2:
      return `${currentRow},${currentColumn - 1}`
      break
      case 3:
      return `${currentRow - 1},${currentColumn}`
      break
      default:
      console.log("unknown switch case")
    }
  }
  let updateRowColumn = (positionString) => {
    let row = +positionString.split(",")[0]
    let column = +positionString.split(",")[1]
    currentRow = row
    currentColumn = column
  }
  let snailWinder = () => {
    while(counted.length < array.length ** 2){
      counted.push(`${currentRow},${currentColumn}`)
      let nextPosition = sentry(currentDirection)
      if(!counted.includes(nextPosition)){
        let row = nextPosition.split(",")[0]
        let column = nextPosition.split(",")[1]
        if(row > array.length - 1 || column > array.length - 1 || row < 0 || column < 0 || nextPosition.includes("-")){
          currentDirection = (currentDirection + 1) % 4
          let recursive = sentry(currentDirection)
          if(!counted.includes(recursive)){
            let newRow = recursive.split(",")[0]
            let newColumn = recursive.split(",")[1]
            updateRowColumn(recursive)
          }
        }
        else{
          updateRowColumn(nextPosition)
        }
      }
      else{
        currentDirection = (currentDirection + 1) % 4
        let recursive = sentry(currentDirection)
        if(!counted.includes(recursive)){
          let newRow = recursive.split(",")[0]
          let newColumn = recursive.split(",")[1]
          if(array[newRow][newColumn]){
            updateRowColumn(recursive)
          }
        }
      }
    }
  }
  snailWinder()
  let results = []
  for(let position = 0; position < counted.length; position++){
    results.push(array[counted[position].split(",")[0]][counted[position].split(",")[1]])
  }
  console.log(results)
  return results
}

snail([[1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]])
