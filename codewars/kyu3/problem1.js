//make something to solve some simple sudokus.No statistical analysis necessary.



// I must think first how to iterate over each row, column, and then sub cube
// to be able to check sums. Each row, column, and sub cube should sum to 9 in
// triangle numbers which is 45

// when I play with sudokus I usually just identify which row/column/scube does
// not have the number. I go around looking at the most obvious ones first to
// increase my odds.

// Parameters

// Being given an array of subarrays, with each subarray being a row in the
// sudoku puzzle, each element is either '0' for empty cells, or a number from
// 1-9

// Return

// A 'completed sudoku', in the same format (an array of subarrays with
// subArray.length = 9)

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
// Needs redesign, most frequently occurring number does not work as an
// algorithm for brute force placement of numbers.
// So far:
// 1) create a sudokuObject to store a mutable sudoku grid to add numbers
//      without losing reference to them. Could end up having to rewrite this if
//      I need to keep a history.
//      ** sudokuObject returns {"[0-80]":"0" || "number"}
// 2) create a nested functions to access the sudokuObject as it is and return
//      single/rows/columns/subGroups
//      ** sudokuArray(), sudokuRows(), sudokuColumns(), subGroups() - returns
//          [[][][][][][][][][]], each sub array has 9 cells w "0" || number
//          or in case of sudokuArray array of 81 elements as number[1-9] || "0"
// 3) create a nested function that displays a visual representation of the grid
//      in the console, the current version
//      ** printSudokuObj() - just try it, it prints the board using
//          console.log()
// 4) create a nested function to get the current count of all numbers placed in
//      the sudokuObject and return a sorted array - to get the least occurring
//      number or highest occuring number(not 9)
//      ** highestCount() - returns an array of objects, key value pairs
//          {number: amount}
// 5) create a nested function to get all positions of __ number in sudoku
//      ** findNumbersInAdjacent(number) - returns x positions[row, column] of
//          all known duplicates as an array with x elements
// 6) create a nested function to determine all usable cells in the sudoku for
//      that number, based on another nested function findAvailableSpots() array
//      filtered by findNumbersInAdjacent(number) to eliminate same
//      row/col/subGroup
//      ** findAvailableSpots(number)
// 7) created a nested function to begin placing numbers in cells according to
//      a logical pattern. Using highestCount()? not sure if lowest or highest
//      works. Neither have resulted in a finished puzzle, at least I haven't
//      written anything to backtrack, which might use recursion and likely kill
//      efficiency as a brute force method.
//      Maybe something that creates a new Object copy from sudokuObject, places
//      a number, and then checks if all options for any subGroup have been
//      eliminated for a subGroup that doesn't have that number. If so, try
//      again with another position, if no positions, change number.

// Needs an algorithm for choosing which number to place. Could write something
// to check ahead one or two steps?

function sudoku(puzzle) {
  // Make a flexible object to store the sudoku puzzle as it is solved.
  // An object with each key being the cell number(0-80) and each value
  // being the number in that cell

  // the object that will be passed around and mutated
  let sudokuObject = {}
  // then a temporary array
  let joined = []
  // to fill the object with by iterating over the puzzle converted to (elements
  // 0-80)a rray.
  puzzle.forEach(element => {
    joined.push(element.join(""))
  })
  let deepJoined = joined.join("").split("")
  deepJoined.forEach((element, index, array) => {
    sudokuObject[index] = element
  })

  //ready to use now as sudokuObject["<[0-80]>"]

  // current sudoku solution as an array of 81 individual
  // cells ordered by rows
  let sudokuArray = function(sudokuSolution){
    //the working version of the sudoku as an array, accessible by index [0-80]
    return Object.values(sudokuSolution)
  }
  let printSudokuObj = function(sudokuSolution){
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
            rowToPrint.push(`${sudokuSolution[Object.keys(sudokuSolution)[(row * 9) + column]]} |`)
          }
          else{
            rowToPrint.push(sudokuSolution[Object.keys(sudokuSolution)[(row * 9) + column]])
          }
        }
        rowToPrint.push("|")
        console.log(rowToPrint.join(" "))
      }

    }
    console.log("  - - -   - - -   - - -")
  }

  // to see the starting version
  printSudokuObj(sudokuObject)

  // returns a running version of the current sudoku solution as an array of 9
  // elements, each a column of 9 cells
  let sudokuRows = function(sudokuSolution){
    let array = [[],[],[],[],[],[],[],[],[]]
    for(let i = 0; i < Object.keys(sudokuSolution).length; i++){
      array[Math.floor(i / 9)].push(sudokuSolution[i])
    }
    return array
  }

  // returns same as above but arrays are the columns of sudokuSolution
  let sudokuColumns = function(sudokuSolution){
    let array = [[],[],[],[],[],[],[],[],[]]
    for(let row = 0; row < 9; row++){
      for(let i = 0; i < 9; i++){
        array[row].push(sudokuSolution[Object.keys(sudokuSolution)[(i * 9) + row]])
      }
    }
    return array
  }
  // Returns an array of 9 arrays, each array holding the cell contents of each
  // sudokuSolution 3x3 subSquare [0-8]
  let subGroups = function(sudokuSolution){
    let groupsArray = []
    let currentPuzzleState = sudokuRows(sudokuSolution)

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
            // push starting point, offset by the 9 different positions in 3x3
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
  let lowestCount = function(sudokuSolution){
    let subs = subGroups(sudokuSolution)
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
      if(a[Object.keys(a)[0]] > b[Object.keys(b)[0]] || a[Object.keys(a)[0]] === 9){
        return 1
      }
      else if(a[Object.keys(a)[0]] < b[Object.keys(b)[0]] && a[Object.keys(a)[0]] !== 9){
        return -1
      }
      else{
        return 0
      }
    })
  }

  // now with all these functions returning the current object, I can work with
  // data as it's change findNumbers in adjacent column or row returns array of
  // positions, each row and column in array
  let findNumbersInAdjacent = function(number, sudokuSolution){
    // get current sudokuObject as is
    let subs = subGroups(sudokuSolution)
    // create an array storing positions of number in sudokuObject [row, column]
    let found = []
    for(let subSquare = 0; subSquare < 9; subSquare++){
      if(subs[subSquare].includes(number)){
        let index = subs[subSquare].indexOf(number)
        // convert to row/column info
        found.push([Math.floor(subSquare / 3) * 3 + Math.floor(index / 3), (subSquare % 3) * 3 + index % 3])
      }
    }
    return found
  }
  let findAvailableSpots = function(number, sudokuSolution){
    // get current sudokuObject as is
    let currentPuzzleState = subGroups(sudokuSolution)

    let available = {}
    for(let subGroup = 0; subGroup < 9; subGroup++){
      available[subGroup] = []
      currentPuzzleState[subGroup].forEach((element, index, array) => {
        if(element === "0" || element === 0){
          // pushes row and column numbers, not subGroups + index
          available[subGroup].push([Math.floor(index / 3) + (Math.floor(subGroup / 3) * 3), (subGroup % 3 * 3) + index % 3])
        }
      })
    }
    // Now to look through possibles for conflicting same numbers in other rows.
    // Looking through findAvailableSpots based on the results of highestCount()
    // , using the highest occurring number looks for all possible spots to
    // place the number, looking through all empty spots in available array by
    // subGroup [0-8]

    // an array to filter out existing same numbers in adjacent rows/columns
    let availablePositionsFilter = []
    for(let possibleSubGroup = 0; possibleSubGroup < Object.keys(available).length; possibleSubGroup++){
      // walking through what I'm doing, I'm going through the list of available
      // positions by *subGroup* looking to see which adjacent rows or
      // columns(by subGroup) have the same number I'm looking to add

      // generate list of all [number]s in the sudoku currently
      let adjacentSameNumbers = findNumbersInAdjacent(number, sudokuSolution)

      // the current usable cell, I want to put [number] here, but is [number]
      // in adjacent subGroups? Looking in rows of 3 or columns of 3 using
      // findNumbersInAdjacent(number, possibleSubGroup) returns an array of
      // arrays of all the [number]s in the sudokuObject at this time by
      // subGroup
      for(let possibleSpot = 0; possibleSpot < available[possibleSubGroup].length; possibleSpot++){
        let emptyPosition = available[possibleSubGroup][possibleSpot]


        // now check to see if shares the same row or column - if they do,
        // remove the possibleSpot from available[possibleSubGroup]

        // check if these positions are in conflict with other rows/columns/subG
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
            // if in the same row or column, add to availablePositionsFilter
            availablePositionsFilter.push(emptyPosition)
            break
          }
          else{
          }
        }
      }
    }
    // create an array to iterate over to check all available spots
    let availableArray = []
    Object.values(available).forEach((element, index, array) => {
      for(let i = 0; i < element.length; i++){
        availableArray.push(array[index][i])
      }
    })
    return availableArray.filter((element, index, array) => {
      // if my filter doesn't have this position, keep it
      if(!availablePositionsFilter.includes(availableArray[index])){
        return element
      }
    })
}

  // findAvailableSpots(number) returns just a list of available places to place
  // a number based on conflicts by row/column/subGroup. I need to add another
  // layer of restrictions based on a possible solution, and whether or not I
  // have removed the only chance for another subGroup to have a full 1-9
  // it will use:
  // highestCount() to choose from, because why not prioritize on easiest
  // findAvailableSpots() to get an array of possibleSpots.
  // compare findAvailableSpots() results with different sudoku solutions to see
  // if the subGroup doesn't have that number and also doesn't have a useable
  // cell to place it in.
  // start by opening up findAvailableSpots() to accept objects. done.

  // now to begin adding numbers
  let solveSudoku = function(sudokuSolution){
    let currentCount = lowestCount(sudokuSolution)
    let number = Object.keys(currentCount[0])[0]
    let availableForNumber = findAvailableSpots(number, sudokuSolution)
    // check if the new number can be placed without removing available
    // spots for others
    let anySpotsTaken = availableForNumber.filter(x => {
      // this array is row and column of available spots
      // look through these positions to see if the array has number
      // then if it doesn't, see if it has a place to put it that
      // doesn't mess up availability for other of the same number.
    })
    if(){
      let sudokuTemp = {...sudokuSolution}
      // add the number to the cell in availableForNumber[0] => [row, column]
      let row = availableForNumber[0][0]
      let col = availableForNumber[0][1]
      sudokuTemp[(row * 9) + (col)] = number
    }
      //this gives me a new solution to test.
    else{
      // try finding a new spot? How do I do this so it travels back up when
      // no solutions are available.
      // usual recursive is what
    }

    return
  }
  // what would a recursive solution look like? Do we pass in a number or let it
  // choose numbers?
  let recursiveSudoku = (sudokuSolution, numberToTest) => {
  //   function recursive(x){
  //    if(x < 10){
  //      console.log(x)
  //      return recursive(x + 1)
  //    }
  //    else{
  //      console.log(x)
  //      return x
  //    }
  //   }
  //   recursive(5
  // }
  solveSudoku(sudokuObject)
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
