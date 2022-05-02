//make something to solve some simple sudokus. No statistical analysis necessary.



// I must think first how to iterate over each row, column, and then sub cube
// to be able to check sums. Each row, column, and sub cube should sum to 9 in
// triangle numbers which is 45

// when I play with sudokus I usually just identify which row/column/scube does not
// have the number. I go around looking at the most obvious ones first to increase
// my odds.


function sudoku(puzzle) {
  for(let i = 0; i < puzzle.length; i++){
    console.log(puzzle[i][1], puzzle[1].filter(element => element != 0), )
  }
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
