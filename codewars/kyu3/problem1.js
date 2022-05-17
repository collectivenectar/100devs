//make something to solve some simple sudokus. No statistical analysis necessary.



// I must think first how to iterate over each row, column, and then sub cube
// to be able to check sums. Each row, column, and sub cube should sum to 9 in
// triangle numbers which is 45

// when I play with sudokus I usually just identify which row/column/scube does not
// have the number. I go around looking at the most obvious ones first to increase
// my odds.


// currently got something to separate rows from columns in order to iterate
// but I'm thinking instead of creating a 1-9 object key map to check opposites

// Parameters

// Being given an array of subarrays, with each subarray being a row in the sudoku puzzle
// Each element is either '0' for empty cells, or a number from 1-9

// Return

// A 'completed sudoku', in the same format (an array of subarrays with subArray.length = 9)

// Example

// [5, 3, 0, 0, 7, 0, 0, 0, 0],
// [6, 0, 0, 1, 9, 5, 0, 0, 0],
// [0, 9, 8, 0, 0, 0, 0, 6, 0],
// [8, 0, 0, 0, 6, 0, 0, 0, 3],
// [4, 0, 0, 8, 0, 3, 0, 0, 1],
// [7, 0, 0, 0, 2, 0, 0, 0, 6],
// [0, 6, 0, 0, 0, 0, 2, 8, 0],
// [0, 0, 0, 4, 1, 9, 0, 0, 5],
// [0, 0, 0, 0, 8, 0, 0, 7, 9]]


// Pseudocode
// Look for the most frequently occurring number.
// break the sudoku into pieces - rows, columns, 3x3s
// to add a number, the number cannot be:
    // in the same row
    // in the same column
    // in the same 3x3 subgroup [][][]
                            //  [][][]
                            //  [][][]
    // of the main square
    //
    //
    // to optimize, could add logic of when two other adjacent 3x3 subgroups (vert or horiz)
    // have the same number in a different row/column to prove it's a better match.

function sudoku(puzzle) {
  // Make a flexible object to store the sudoku puzzle as it is solved.
  // An object with each key being the cell number(0-80) and each value
  // being the number in that cell

  // the object that will be passed around and mutated
  let sudokuObject = {}
  // then a temporary array
  let joined = []
  // to fill the object with by iterating over the puzzle converted to (elements 0-80)array.
  puzzle.forEach(element => {
    joined.push(element.join(""))
  })
  let deepJoined = joined.join("").split("")
  deepJoined.forEach((element, index, array) => {
    sudokuObject[index] = element
  })

  //ready to use now as sudokuObject["<[0-80]>"]

  // a running version of the current sudoku object as an array of 81 individual cells
  // ordered by rows
  let sudokuArray = function(){
    //the working version of the sudoku as an array, accessible by index [0-80]
    return Object.values(sudokuObject)
  }
  // returns a running version of the current sudoku objects as an array of 9 elements, each a column of 9 cells
  let sudokuRows = function(){
    let array = [[],[],[],[],[],[],[],[],[]]
    for(let i = 0; i < Object.keys(sudokuObject).length; i++){
      array[Math.floor(i / 9)].push(sudokuObject[i])
    }
    return array
  }
  // let allColumns = function(sudokuObject){
  //   for(let column = 0; column < )
  // }
  let sudokuColumns = function(){
    let array = [[],[],[],[],[],[],[],[],[]]
    for(let row = 0; row < 9; row++){
      for(let i = 0; i < 9; i++){
        array[row].push(sudokuObject[Object.keys(sudokuObject)[(i * 9) + row]])
      }
    }
    return array
  }
  //Returns an array of 9 arrays, each array holding the cell contents of each sudoku 3x3 subSquare [0-8]
  let subGroups = function(){
    let groupsArray = []
    let currentPuzzleState = sudokuRows()

    // for subgroup 0-8, add 9 elements, starting at first positions in puzzle:
    // [0][0], [0][3], [0][6]
    // [3][0], [3][3], [3][6]
    // [6][0], [6][3], [6][6]

    // from each starting point, add this to get each element of each subgroup:
    // [0][0], [0][1], [0][2]
    // [1][0], [1][1], [1][2]
    // [2][0], [2][1], [2][2]
    // to get the correct row starting point
    for(let x = 0; x < currentPuzzleState.length; x = x + 3){
      //to get the correct column starting point
      for(let y= 0; y < currentPuzzleState.length; y = y + 3){
        // console.log(puzzle[x][y]) gives me all starting points
        let subGroup = []
        // make a subArray to store each 3x3 group
        for(let subX = 0; subX < 3; subX++){
          // for horiz row of 3x3
          for(let subY = 0; subY < 3; subY++){
            //for vert col of 3x3
            subGroup.push(currentPuzzleState[x + subX][y + subY])
            // pushing the starting point, offset by the 9 different positions in 3x3
          }
        }
        groupsArray.push(subGroup)
        // to an array subGroup, then pushing this to main array subGroups.
      }
    }
    return groupsArray
  }
  // returns an ordered array of objects containing the numbers with the highest
  // occurrence in the entire grid first, and lowest last.
  let highestCount = function(){
    let subs = subGroups()
    let array = []
    for(let i = 1; i < 10; i++){
      // for each number
      let number = {}
      number[i] = 0
      // count how many arrays in subGroups have this number
      for(let group = 0; group < subs.length; group++){
        if(subs[group].includes(`${i}`)){
          number[i] = number[i] + 1
        }
      }
      array.push(number)
    }
    return array.sort((a, b) => {
      if(a[Object.keys(a)[0]] > b[Object.keys(b)[0]]){
        return -1
      }
      else if(a[Object.keys(a)[0]] < b[Object.keys(b)[0]]){
        return 1
      }
      else{
        return 0
      }
    })
  }

  // now with all these functions returning the current object, I can work with data as it's changed
  // findNumbers in adjacent column or row returns array of positions, each row and column in array
  let findNumbersInAdjacent = function(number, subSquare){
    let subs = subGroups()
    let found = []
    if(subs[subSquare].includes(number)){
      let index = subs[subSquare].indexOf(number)
      found.push([Math.floor(subSquare / 3) + Math.floor(index / 3), (subSquare % 3) * 3 + index % 3])// row, column
    }
    for(let eachSubRow = 0; eachSubRow < 3; eachSubRow++){
      let subGroupRow = Math.floor(subSquare / 3)
      let sameRow = subGroupRow + eachSubRow
      if(subs[sameRow].includes(`${number}`) && subSquare !== sameRow){
        let subGroupIndex = subs[sameRow].indexOf(`${number}`)
        let adjSameNum = [Math.floor(subGroupIndex / 3) + subGroupRow * 3, subGroupIndex % 3 + (sameRow % 3) * 3]
        found.push(adjSameNum)
      }
    }
    for(let subCol = 0; subCol < 3; subCol++){
      let sameCol = (subSquare % 3) + (subCol * 3)
      if(subs[sameCol].includes(`${number}`) && subSquare !== sameCol){
        let index = subs[sameCol].indexOf(`${number}`)
        let adjSameNum = [Math.floor(index / 3) + subCol * 3, index % 3 + (sameCol % 3) * 3]
        if(!found.includes(adjSameNum)){
          found.push(adjSameNum)
        }
      }
    }
    return found
  }
  let findAvailableSpots = function(number){
    let currentPuzzleState = subGroups()
    let available = []
    for(let subGroup = 0; subGroup < 9; subGroup++){
      let possibleSpots = []
      currentPuzzleState[subGroup].forEach((element, index, array) => {
        if(element === "0" || element === 0){
          currentPuzzleState[subGroup]
          possibleSpots.push([Math.floor(index / 3) + (Math.floor(subGroup / 3) * 3), (subGroup % 3 * 3) + index % 3])
        }
      })
      available.push(possibleSpots)
    }
    // Now to look through possibles for conflicting same numbers in other rows.
    // Looking through findAvailableSpots based on the results of highestCount(),
    // The highest occurring number looks for all possible spots to place the number
    // looking through all empty spots in available array by subGroup [0-8]
    let filtered = []
    for(let possibleSubGroup = 0; possibleSubGroup < available.length; possibleSubGroup++){
      for(let possibleSpot = 0; possibleSpot < available[possibleSubGroup].length; possibleSpot++){
        // walking through what I'm doing, I'm going through the list of available positions by *subGroup*
        // looking to see which adjacent rows or columns(by subGroup) have the same number I'm looking to add
        // the current position with an "0" in it, I want to put [number] here, is [number] in adjacent subGroups?
        // Looking in rows of 3 or columns of 3 using findNumbersInAdjacent(number, possibleSubGroup)
        // returns an array of arrays of all the [number]s in the sudokuObject at this time.
        let position = available[possibleSubGroup][possibleSpot]
        let adjacentSameNumbers = findNumbersInAdjacent(number, possibleSubGroup)
        filtered.push(available[possibleSubGroup].filter((element, index, array) => {
          for(let eachAdj = 0; eachAdj < adjacentSameNumbers.length; eachAdj++){
            // if the available spot is good to use, push it to filtered
            // position is [row, column]
            // element is [row, column]
            if(position[0] === element[0] || position[1] === element[1]){
              if(position[0] !== 0){
                console.log(position, element)
              }
            }
          }
        }))
      }
    }
    return available
  }
  console.log(Object.keys(highestCount()[0])[0])
  console.log(findAvailableSpots(Object.keys(highestCount()[0])[0])[0])
  // Now to begin looking
  // starting with highestCount, search for available spots
  // in the grid to place the number by looking through
  // findNumbersInAdjacent() using the same number but checking for
  // let sameRow = puzzle[Math.floor(index / 9)]
  // let sameCol = allColumns[index % 9]
  // let sameSubGroup = subGroups[Math.floor((index % 9) / 3) + Math.floor((Math.floor(index / 9)) / 3) * 3]
  return sudokuObject
}

var puzzle = [
      [5,3,0,0,7,0,0,0,0],
      [6,0,0,1,9,5,0,0,0],
      [0,9,8,0,0,0,0,6,0],
      [8,0,0,0,6,0,0,0,3],
      [4,0,0,8,0,3,0,0,1],
      [7,0,0,0,2,0,0,0,6],
      [0,6,0,0,0,0,2,8,0],
      [0,0,0,4,1,9,0,0,5],
      [0,0,0,0,8,0,0,7,9]]

console.log(sudoku(puzzle))
