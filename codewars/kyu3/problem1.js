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
  let printSudokuObj = function(){
    console.log("  - - -   - - -   - - -")
    for(let row = 0; row < 9; row++){
      let rowToPrint = ["|"]
      if(row === 2 || row === 5){
        for(let column = 0; column < 9; column++){
          // if row is 2 or 5, add - - - - - - - - -
          if(column === 2 || column === 5){
            rowToPrint.push(`${sudokuObject[Object.keys(sudokuObject)[(row * 9) + column]]} |`)
          }
          else{
            rowToPrint.push(`${sudokuObject[Object.keys(sudokuObject)[(row * 9) + column]]}`)
          }
        }
        rowToPrint.push("|")
        console.log(rowToPrint.join(" "))
        console.log(`  - - -   - - -   - - -`)
      }
      else{
        for(let column = 0; column < 9; column++){
          if(column === 2 || column === 5){
            rowToPrint.push(`${sudokuObject[Object.keys(sudokuObject)[(row * 9) + column]]} |`)
          }
          else{
            rowToPrint.push(sudokuObject[Object.keys(sudokuObject)[(row * 9) + column]])
          }
        }
        rowToPrint.push("|")
        console.log(rowToPrint.join(" "))
      }

    }
    console.log("  - - -   - - -   - - -")
  }
  printSudokuObj()
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
      if(a[Object.keys(a)[0]] > 9 || b[Object.keys(b)[0]] > 9){
        console.log("sudoku has more than 9 of one number")
      }
      if(a[Object.keys(a)[0]] > b[Object.keys(b)[0]] && a[Object.keys(a)[0]] !== 9){
        return -1
      }
      else if(a[Object.keys(a)[0]] < b[Object.keys(b)[0]] || a[Object.keys(a)[0]] === 9){
        return 1
      }
      else{
        return 0
      }
    })
  }

  // now with all these functions returning the current object, I can work with data as it's changed
  // findNumbers in adjacent column or row returns array of positions, each row and column in array
  let findNumbersInAdjacent = function(number){
    let subs = subGroups()
    let found = []
    for(let subSquare = 0; subSquare < 9; subSquare++){
      if(subs[subSquare].includes(number)){
        let index = subs[subSquare].indexOf(number)
        found.push([Math.floor(subSquare / 3) * 3 + Math.floor(index / 3), (subSquare % 3) * 3 + index % 3])
      }
    }
    return found
  }
  let findAvailableSpots = function(number){
    let currentPuzzleState = subGroups()
    let available = {}
    for(let subGroup = 0; subGroup < 9; subGroup++){
      available[subGroup] = []
      currentPuzzleState[subGroup].forEach((element, index, array) => {
        if(element === "0" || element === 0){
          available[subGroup].push([Math.floor(index / 3) + (Math.floor(subGroup / 3) * 3), (subGroup % 3 * 3) + index % 3])
        }
      })
    }
    // Now to look through possibles for conflicting same numbers in other rows.
    // Looking through findAvailableSpots based on the results of highestCount(),
    // The highest occurring number looks for all possible spots to place the number
    // looking through all empty spots in available array by subGroup [0-8]

    // an array to filter out existing same numbers in adjacent rows/columns
    let availablePositionsFilter = []
    for(let possibleSubGroup = 0; possibleSubGroup < Object.keys(available).length; possibleSubGroup++){
      // walking through what I'm doing, I'm going through the list of available positions by *subGroup*
      // looking to see which adjacent rows or columns(by subGroup) have the same number I'm looking to add

      // generate list of all [number]s in the sudoku currently
      let adjacentSameNumbers = findNumbersInAdjacent(number)

      // the current position with an "0" in it, I want to put [number] here, but is [number] in adjacent subGroups?
      // Looking in rows of 3 or columns of 3 using findNumbersInAdjacent(number, possibleSubGroup)
      // returns an array of arrays of all the [number]s in the sudokuObject at this time by subGroup
      for(let possibleSpot = 0; possibleSpot < available[possibleSubGroup].length; possibleSpot++){
        let emptyPosition = available[possibleSubGroup][possibleSpot]


        // now check to see if shares the same row or column - if they do,
        // remove the possibleSpot from available[possibleSubGroup]

        // if the position shares a subGroup with the same number we're looking to add
        for(let sameNum = 0; sameNum < adjacentSameNumbers.length; sameNum++){
          let adjNum = adjacentSameNumbers[sameNum]
          let emptySubRow = Math.floor(emptyPosition[0] / 3)
          let emptySubCol = Math.floor(emptyPosition[1] / 3)
          let sameNumSubRow = Math.floor(adjNum[0] / 3)
          let sameNumSubCol = Math.floor(adjNum[1]/ 3)
          if(sameNumSubRow === emptySubRow && sameNumSubCol === emptySubCol){
            // if in the same subGroup(in the same 3x3 box)
            // add possible position to availablePositionsFilter
            availablePositionsFilter.push(emptyPosition)
            break
          }
          else if(emptyPosition[0] === adjNum[0] || emptyPosition[1] === adjNum[1]){
            // if in the same row or column
            availablePositionsFilter.push(emptyPosition)
            break
          }
          else{
          }
        }
      }
    }
    let availableArray = []
    Object.values(available).forEach((element, index, array) => {
      for(let i = 0; i < element.length; i++){
        availableArray.push(array[index][i])
      }
    })
    return availableArray.filter((element, index, array) => {
      if(!availablePositionsFilter.includes(availableArray[index])){
        return element
      }
    })
  }
  let numberToLookFor = function(){
    console.log(Object.entries(highestCount()))
    return Object.keys(highestCount()[0])[0]
  }
  // now to being adding numbers
  let solveSudoku = function(){
    let howManyZerosLeft = function(){
      return Object.values(sudokuObject).filter( element => element === '0').length
    }
    while(howManyZerosLeft() > 0){
      let numberToPlace = numberToLookFor()
      console.log(numberToPlace)
      if(findAvailableSpots(numberToPlace).length > 0){
        let availableSpot = findAvailableSpots(numberToPlace)
        sudokuObject[availableSpot[0][0] * 9 + availableSpot[0][1]] = numberToPlace
        printSudokuObj()
      }
      else{
        console.log("no available spot", numberToPlace)
        break
      }
    }
  }
  solveSudoku()
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

sudoku(puzzle)
