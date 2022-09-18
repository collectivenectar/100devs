// Parameters: Given an array of rows of fighters, each element a string, a starting position as [x, y]
// and a set of controlling moves to move a selecting window around to choose different fighters

// Return: Return an array of all the fighters the selector hovered over.
// RULES: Just like in street fighter, the selector can loop vertically but not horizontally
// If the move takes the selector past the bounds vertically, bring the selector back to the previous spot,
// and still add to the hovered list.

// Example:

// fighters = [["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"], 
//             ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
  
// streetFighterSelection(fighters, initial_position, moves) => ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']

// Pseudocode:

// keep a variable to store the current position as an array of two elements, where index 0 is the outer
// array index, and index 1 is the inner array index. 'current'

// Then, keep an array to store all the hovered fighters in. 'hovered'

// Then create an object to store the different possible directions the controller can move,
// but also stored in the same manner as the 'current' position =>>> [outerIndexChange, innerIndexChange]

// Then nest a function to manage all the if else logic for the looping process, where I pass in any 
// 'move' as a two element array, and update the current position.

// Basically, if the selector reaches 0 or the length of the inner array, send it to the other side.
// If the selector reaches 0 of the end of the outer array, don't do anything.

// Then loop through the moves and using the current position add the player in 'fighters' to the hovered
// array.

// Then return the hovered array

function streetFighterSelection(fighters, position, moves){
    let current = position
    let hovered = []
    let directions = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    }
    let updatePosition = (move) => {
      if(Math.abs(move[0]) > 0){
        if(move[0] < 0){
          if(current[0] === 0){
          }else{
            current = [current[0] + move[0], current[1]]
          }
        }else if(move[0] > 0){
          if(current[0] === fighters.length - 1){
          }else{
            current = [current[0] + move[0], current[1]]
          }
        }
      }else{
        if(move[1] < 0){
          if(current[1] === 0){
            current = [current[0], fighters[0].length - 1]
          }else{
            current = [current[0], current[1] + move[1]]
          }
        }else if(move[1] > 0){
          if(current[1] === fighters[0].length - 1){
            current = [current[0], 0]
          }else{
            current = [current[0], current[1] + move[1]]
          }
        }
      }
    }
    for(let move = 0; move < moves.length; move++){
      let newPos = directions[moves[move]]
      updatePosition(newPos)
      hovered.push(fighters[current[0]][current[1]])
    }
    return hovered
  }