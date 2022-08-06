// Parameters: given a number n
// Return: return an n x n spiral, where length is an outer array of length n and depth
// is an inner array of length n. the spiral is represented by elements with value
// 1, and the space between as elements with value 0.

// Example:

// spiralize(5) => [
// [1, 1, 1, 1, 1],
// [0, 0, 0, 0, 1],
// [1, 1, 1, 0, 1],
// [1, 0, 0, 0, 1],
// [1, 1, 1, 1, 1]
// ]

// Pseudocode:

// My last attempt at a similar problem used what I called a 'sentry' function,
// where starting from array position [0][0], the sentry function manages the
// direction of navigating through the nested array and an outer function grabs
// the element at each position. This is a bit different since I'm creating the
// spiral itself, but it should still be a useful place to start.

// start by creating an n x n array and filling it with '0's

// Then create a few variables to store current position(row and column) and
// current direction. Current direction has a value range of 0 - 3, representing
// right, down, left, and up, the pattern of the spiral being clockwise.

// Then create a nested arrow function to return the calculated number of '1's I'll
// be adding to help with the for loop range.

// Then create another nested arrow function that takes the current direction(0-3)
// and uses the runtime currentRow and currentColumn variable values to calculate
// the next position in the array to check if I can place a "1" or not. Returns
// an array with two elements, the outer array and inner array indices.

// Then create another few nested functions, one for updating the runtime current
// position values in currentRow and currentColumn, one for placing a "1" at the
// current position, and one for placing a "0" at the current position.

// One more nested function to check that the next position is viable for placing
// a "1". An array that checks the boundaries against the current position will
// return 'invalid index' if the current position is negative, or larger than
// n - 1. If the current position already has a "1" there, it returns "has 1",
// and otherwise returns "can place" if it's a viable spot to place.

// Finally, prep the spiral array by placing the first "1" at spiral[0][0].

// Start the loop to begin adding "1"s, going from 0, up until the return value
// of the steps(n) function, plus n - 5 to compensate for the final core spiral
// structure.

// Inside the loop:

// Check if the next spot is viable. If it is, update the current position to that
// next spot, and place a "1" there.

// If the next spot is out of bounds of the array, change directions, and check
// the next spot again. If it's viable, update the current position to that next
// spot and place a "1" there. If not, console log an error.

// If the next spot has a 1, theeeeen it gets a little complicated. To account for
// when the spiral is almost finished, I need to check for:

// 11111111
// 00000001
// 11111101
// 10000101
// 10110101 < ---- 101(1)0101 the spiral can't have more then 2 adjacent '1's
// 10111101
// 10000001
// 11111111

// So, if I do find a 1, I need to remove the "1" where I'm at, reverse directions,
// backtrack TWO positions, and check if the adjacent element has a "1". If not,
// it's safe to continue, so reverse directions again, move ONE position, and
// THEN turn right and check for a valid spot. If after turning right I can place
// a "1", I update the position and place a one.

function spiralize (n) {
  let spiral = []
  for(let row = 0; row < n; row++){
    let rowArray = []
    for(let column = 0; column < n; column++){
      rowArray.push(0)
    }
    spiral.push(rowArray)
  }
  let currentRow = 0
  let currentColumn = 0
  let direction = 0
  let steps = (num) => {
    let total = +num
    for(let x = num - 1; x > 0; x = x - 2){
      if(x === 1){
        total = total + x
      }else{
        total = total + x + x
      }
    }
    return total
  }
  // returns a string containing comma separated coordinates, using 4 directions
  // as inputs to determing which array index is incremented - the outer, or inner?
  let sentry = (direction) => {
    switch(direction) {
      // right is 0
      // down is 1
      // left is 2
      // up is 3
      case 0:
      return [currentRow, currentColumn + 1]
      break
      case 1:
      return [currentRow + 1, currentColumn]
      break
      case 2:
      return [currentRow, currentColumn - 1]
      break
      case 3:
      return [currentRow - 1, currentColumn]
      break
      default:
      console.log("unknown direction parameter")
    }
  }
  let updateRowColumn = (newPosition) => {
    currentRow = newPosition[0]
    currentColumn = newPosition[1]
  }
  let checkNextSpot = (nextSpot) => {
    let isInArrayBounds = [nextSpot[0] >= 0, nextSpot[0] < n, nextSpot[1] >= 0, nextSpot[1] < n]
    if(isInArrayBounds.includes(false)){
      return "invalid index"
    } else if(spiral[nextSpot[0]][nextSpot[1]] === 1){
      return "has 1"
    } else{
      return "can place"
    }
  }
  let placeOne = (outerArray, innerArray) => {
    spiral[outerArray][innerArray] = 1
  }
  let placeZero = (outerArray, innerArray) => {
    spiral[outerArray][innerArray] = 0
  }
  spiral[0][0] = 1
  for(let step = 0; step < steps(n) + n - 5; step++){
    if(checkNextSpot(sentry(direction)) === "can place"){
      updateRowColumn(sentry(direction))
      placeOne(currentRow, currentColumn)
    }
    else if(checkNextSpot(sentry(direction)) === "invalid index"){
      direction = (direction + 1) % 4
      if(checkNextSpot(sentry(direction)) === "can place"){
        updateRowColumn(sentry(direction))
        placeOne(currentRow, currentColumn)
      }else{
        console.log("direction change had no effect")
      }
    }
    else if(checkNextSpot(sentry(direction)) === "has 1"){
      // remove the 1 at current position
      placeZero(currentRow, currentColumn)
      // backtrack one by reversing direction
      direction = (direction + 2) % 4
      // update position
      updateRowColumn(sentry(direction))
      updateRowColumn(sentry(direction))
      // change direction left
      direction = (direction + 3) % 4
      // check if adjacent row already has "1" to avoid turning in at the end
      if(checkNextSpot(sentry(direction)) !== "has 1"){
        // change direction again left one to finally place a "1"
        direction = (direction + 3) % 4
        updateRowColumn(sentry(direction))
        direction = (direction + 1) % 4
        if(checkNextSpot(sentry(direction)) === "can place"){
          updateRowColumn(sentry(direction))
          placeOne(currentRow, currentColumn)
        }
        else{
          console.log("turn right has no available space")
        }
      }
    }
  }
  return spiral
}
console.log(spiralize(13))
