// Parameters: Given a game board as an x * y nested array, and an array of attacks
// where each attack is an [x, y] position to attack on the board. The game board
// contains '0's where there are no pieces, and for where there are 'boats' there
// will be a row or column of all the same integer.
// Return: Return a score tallying sunken boats, damaged boats, untouched boats,
// and the score based on a points system.

// NOTE: The coordinates are cartesian so y starts at 1 at the last nested array,
// and x starts at 1, not 0.

// Example:
//var board = [ [0, 0, 1, 0],
//              [0, 0, 1, 0],
//              [0, 0, 1, 0] ];

//var attacks = [[3, 1], [3, 2], [3, 3]];

// damagedOrSunk(board, attacks) =>
// {
//  sunk: 1,
//  damaged: 0,
//  notTouched: 0,
//  points: 1
// }
// Pseudocode:
// First create an object to store a map of all the ships on the board.
// Then create an array to store a list of all the numbers on the board to differentiate
// between ships.
// Then create a nested function to search through the board and add all the coordinates
// for each boat to the map object
// Then create another nested function to play through all the attacks in the attack
// array, swapping out the coordinates for [null] to represent a damaged point.
// Then create another nested function to tally the points, searching through each
// boat in the map object and comparing the total hit points, subtracting how many
// have been hit, and awarding the points accordingly by adding them to an object
// called results, with the corresponding sunk, damaged, notTouched, and points
// properties.
// then return the results object.


function damagedOrSunk (board, attacks){
  let ships = {}
  let numbers = []
  let mapShips = () => {
    for(let outer = 0; outer < board.length; outer++){
      for(let inner = 0; inner < board[outer].length; inner++){
        let converted = [board.length - outer, inner + 1]
        if(board[outer][inner] !== 0){
          if(!numbers.includes(board[outer][inner])){
            numbers.push(board[outer][inner])
          }
          if(!ships[board[outer][inner]]){
            ships[board[outer][inner]] = [[inner + 1, board.length - outer]]
          }else{
            ships[board[outer][inner]].push([inner + 1, board.length - outer])
          }
        }
      }
    }
  }
  let playAttacks = () => {
    for(let attack = 0; attack < attacks.length; attack++){
      for(let boat = 0; boat < numbers.length; boat++){
        let boatPositions = ships[numbers[boat]]
        for(let coords = 0; coords < boatPositions.length; coords++){
          let xPos = boatPositions[coords][0] === attacks[attack][0]? true: false;
          let yPos = boatPositions[coords][1] === attacks[attack][1]? true: false;
          if(xPos && yPos){
            ships[numbers[boat]][coords] = [null]
          }
        }
      }
    }
  }
  let scoring = () => {
    let results = {
      sunk: 0,
      damaged: 0,
      notTouched: 0,
      points: 0
    }
    for(let ship = 0; ship < numbers.length; ship++){
      let totalPoints = ships[numbers[ship]].length
      let totalHit = 0
      for(let coord = 0; coord < ships[numbers[ship]].length; coord++){
        if(ships[numbers[ship]][coord][0] === null){
          totalHit++
        }
      }
      if(totalHit === totalPoints){
        results.sunk = results.sunk + 1
        results.points = results.points + 1
      }else if(totalHit < totalPoints && totalHit !== 0){
        results.damaged = results.damaged + 1
        results.points = results.points + 0.5
      }else if(totalHit === 0){
        results.notTouched = results.notTouched + 1
        results.points = results.points - 1
      }
    }
    return results
  }
  mapShips()
  playAttacks()
  return scoring()
}
