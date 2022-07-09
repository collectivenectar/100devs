// Parameters: a string made up of substrings separated by "\n", and the number of substrings
// will always be equal to the length of the substrings
// Return : there are three different transformations, so three different functions,
// as well as a higher order function fct(s) where fct is one of the three transformation
// functions, and s is the string to be transformed.

// So, starting with : s = "abcd\nefgh\nijkl\nmnop"

// diag2Sym : using the '\n' formatting to visualize the n x n grid, flip the
// grid around the x axis, then rotate the grid 90 degrees counter clockwise.
// rot90Counter : using the '\n' formatting like above, rotate it 90 degrees
// counterclockwise.
//selfieDiag2Counterclock : combine the original string, plus the 2 previous
// transformations - with two rows of '|' between the 3 groups

// Examples:
// diag_2_sym(s) => "plhd\nokgc\nnjfb\nmiea"
// rot_90_counter(s)=> "dhlp\ncgko\nbfjn\naeim"
// selfie_diag2_counterclock(s) => "abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim"
// OR visualized by newline formatting (\n)
// abcd|plhd|dhlp
// efgh|okgc|cgko
// ijkl|njfb|bfjn
// mnop|miea|aeim

// Pseudocode:

// for diag2Sym - split the string into substrings, then create a temp array to put
// the results in. Then, nest a for loop inside another to grab the characters by
// column instead of row, and reverse the order before pushing them to results.
// rejoin the substrings with '\n' and then return the final results.
// for rot90counter:
// just use the results of diag2Sym, split them into substrings, then reverse
// the character order using a second string.split("")
// for selfieDiag2Counterclock: compose using the original string, and the results
// of the other two functions, just by adding them together with a '|' between
// the substrings of each inside a for loop iterating through the substring arrays
// of each.

function diag2Sym(strng) {
  let split = strng.split("\n")
  let results = []
  for(let column = 0; column < split.length; column++){
    let temp = []
    for(let row = 0; row < split.length; row++){
      temp.push(split[row][column])
    }
    results.push(temp.reverse().join(""))
  }
  return results.reverse().join("\n")
}
function rot90Counter(strng) {
  let firstStep = diag2Sym(strng)
  let split = firstStep.split("\n")
  let results = []
  for(let each = 0; each < split.length; each++){
    results.push(split[each].split("").reverse().join(""))
  }
  return results.join("\n")
}
function selfieDiag2Counterclock(strng) {
  let split = strng.split("\n")
  let diag = diag2Sym(strng)
  let rot90 = rot90Counter(strng)
  let results = []
  for(let each = 0; each < split.length; each++){
    results.push(split[each] + "|" + diag.split("\n")[each] + "|" + rot90.split("\n")[each])
  }
  return results.join("\n")
}
function oper(fct, s) {
  return fct(s)
}

let s = "abcd\nefgh\nijkl\nmnop"

console.log(diag2Sym(s))
console.log(rot90Counter(s))
console.log(selfieDiag2Counterclock(s))
