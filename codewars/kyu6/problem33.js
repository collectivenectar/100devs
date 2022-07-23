// Parameter: Given an n x n array representing a maze, where 0 represents an
// open path, 1 represents a wall, 2 represents the starting point, and 3 represents
// an exit. Also given an array of moves, in capital letters for the 4 cardinal
// directions.

// Return: Return "Dead" if the 'player' bumps into a wall, or leaves the confines
// of the maze. Return "Lost" if at the end of moves and player has not finished.
// Return "Finish" if the player reaches a 3 beforer running out of moves.

// Example:

// var maze = [[1,1,1,1,1,1,1],
//             [1,0,0,0,0,0,3],
//             [1,0,1,0,1,0,1],
//             [0,0,1,0,0,0,1],
//             [1,0,1,0,1,0,1],
//             [1,0,0,0,0,0,1],
//             [1,2,1,0,1,0,1]]

// mazeRunner(maze,["N","N","N","N","N","E","E","E","E","E"]) => "Finish"

// Pseudocode:

// First make a key map for the cardinal directions, using a two element array
// as a coordinate system for the maze, and the cardinal directions affecting
// either the outer array sum or the inner array sum with the starting point.

// Iterate over the 2d maze array to look for a 2, and store that value as the
// current position variable to add moving values to. Using a nested for loop.

// then, iterate over the the directions array, adding together the sum of the
// outer array value, then the sum of the inner array value, arriving at the
// next position in the maze.

// then, after calculating the next position, check if the position is a 0, a 1,
// or a 3, and filter for conditions where the move has taken the player out of
// defined maze space by checking for negative position values or greater than
// maze length values. Return the corresponding strings for "Finish", "Dead".
// Finally check if the loop is at its final term, and if so return "Lost".

// Complexity of time is linear for the directions, but quadratic for searching
// the maze for a starting point.

function mazeRunner(maze, directions) {
  let moveKeys = {
    "N": [-1, 0],
    "S": [1, 0],
    "E": [0, 1],
    "W": [0, -1]
  }
  let start
  for(let row = 0; row < maze.length; row++){
    for(let col = 0; col < maze.length; col++){
      if(maze[row][col] === 2){
        start = [row, col]
      }
    }
  }
  for(let move = 0; move < directions.length; move++){
    start[0] = start[0] + moveKeys[directions[move]][0]
    start[1] = start[1] + moveKeys[directions[move]][1]
    if(start[0] < 0 || start[0] > maze.length - 1){
      return "Dead"
    }else if(start[1] < 0 || start[1] > maze.length -1){
      return "Dead"
    }else if(maze[start[0]][start[1]] === 3){
      return "Finish"
    }else if(maze[start[0]][start[1]] === 1){
      return "Dead"
    }else if(move === directions.length - 1){
      return "Lost"
    }
  }
}
