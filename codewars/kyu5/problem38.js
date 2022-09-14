// Parameters: Given a tic tac toe board with some moves played. 0 is an empty spot, 1, is player X, 2 player O
// It's an 3 X 3 array i.e. [[0, 0, 0], [0, 0, 0], [0, 0, 0],]
// Return: Return if there is a winner, a draw, or if the game is incomplete.
// return 0 for a draw, -1 for incomplete, 1 for player "X" wins, and 2 for player "O" wins
// Example:
// isSolved([[0, 1, 1],
//           [2, 2, 1],
//           [2, 2, 1]])  => 1
// Pseudocode:

// Starting with a playerX array to store the board positions of any of playerX s pieces
// and the same with a playerO array
// Then a little boolean variable to track if there are any zeros on the board to determine a draw/incomplete game
// Then a map to keep track of all the winning positions for any direction
// Then I loop through the board to add all playerX spots to the playerX array, and the same for playerO,
// and if I find a zero I set hasZeros to true.
// Then I created a nested function to check for winning sets on the board.
// I have a nasty 3 level for loop, but given that the board is only ever a 3x3 it's not that bad.
// level 1 loop is the winningTrios map,
// and I create a variable to track is at least 3 positions have been found in the set(which means a win)
// Then level 2 loop is to check for each position inside the winningTrio set and see if it will match
// any of the players positions on the board.
// Then level 3 loop is the playerX or playerO array to search through all the positions and see if it
// matches any in the current winning set (3 positions each set to make tictactoe).
// If a position matches, I iterate the totalFound variable up one.
// If at the end of the loop totalFound equals 3, then I've got a complete tictactoe, and I can return true
// If not, and I've gone through all positions, then I return false.
// The rest of the logic is just to determine whether or not it's a draw or incomplete, or if playerO or playerX won.


function isSolved(board) {
    let playerX = []
    let playerO = []
    let hasZeros = false
    let winningTrios = {
      0: [[0, 0], [0, 1], [0, 2]],
      1: [[0, 0], [1, 0], [2, 0]],
      2: [[1, 0], [1, 1], [1, 2]],
      3: [[0, 1], [1, 1], [2, 1]],
      4: [[2, 0], [2, 1], [2, 2]],
      5: [[0, 2], [1, 2], [2, 2]],
      6: [[0, 0], [1, 1], [2, 2]],
      7: [[2, 0], [1, 1], [0, 2]]
    }
    for(let row = 0; row < board.length; row++){
      for(let column = 0; column < board[row].length; column++){
        if(board[row][column] === 1){
          playerX.push([row, column])
        }else if(board[row][column] === 2){
          playerO.push([row, column])
        }else{
          hasZeros = true
        }
      }
    }
    let checkWin = (playerMoves) => {
      let winningPositions = Object.values(winningTrios)
      for(let check = 0; check < winningPositions.length; check++){
        let totalFound = 0
        for(let eachPos = 0; eachPos < winningPositions[check].length; eachPos++){
          let winning = winningPositions[check][eachPos]
          for(let eachMove = 0; eachMove < playerMoves.length; eachMove++){
            let found = winning[0] === playerMoves[eachMove][0] && winning[1] === playerMoves[eachMove][1]
            if(found){
              totalFound++
            }
          }
        }
        if(totalFound === 3){
          return true
        }
      }
      return false
    }
    let playerXWon = checkWin(playerX)
    let playerOWon = checkWin(playerO)
    if(!playerXWon && !playerOWon && !hasZeros){
      return 0
    }else if(!playerXWon && !playerOWon && hasZeros){
      return -1
    }else if(playerXWon){
      return 1
    }else{
      return 2
    }
  }