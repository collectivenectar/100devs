// Parameters: given a string where substrings are separated by "\n", and the number
// of substrings is equal to the length of the substrings
//
// Return: for rot90Clock, return the string as though the entire string(when formatted
// according to it's new line structure) structure is rotated 90 degrees clockwise
// for diag1Sym, it's essential the same as rot90Clock but the substrings are reversed.
// for selfieAndDiag1, format it where the untransformed string structure is side by
// side with the transformed string structure, with a line of "|" between them, like so:
// abcd|aeim
// efgh|bfjn
// ijkl|cgko
// mnop|dhlp
// Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
// oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
// oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
// Pseudocode:

// for rot90, split the string by "\n", to form an array of the substrings
// create a temp array to store transformed substrings in
// using a for loop nested inside a for loop, reverse the column/row pattern,
// to extract the characters from the data structure by column instead of row.
// Reverse the order of the characters, and then push the results to the temp
// array, and return the temp array rejoined with the "\n"

// for diag1Sym, do the same, except without reversing the results to be pushed
// to the temp array.

// for selfieAndDiag1, at the end of the outer loop just join the original substring
// together with the transformed substring with a "|" before pushing.

function rot90Clock(strng) {
  let split = strng.split('\n')
  let temp = []
  for(let column = 0; column < split.length; column++){
    let tempCol = []
    for(let row = 0; row < split.length; row++){
      tempCol.push(split[row][column])
    }
    temp.push(tempCol.reverse().join(""))
  }
  return temp.join("\n")
}
function diag1Sym(strng) {
  let split = strng.split('\n')
  let temp = []
  for(let column = 0; column < split.length; column++){
    let tempCol = []
    for(let row = 0; row < split.length; row++){
      tempCol.push(split[row][column])
    }
    temp.push(tempCol.join(""))
  }
  return temp.join("\n")
}
function selfieAndDiag1(strng) {
  let split = strng.split('\n')
  let temp = []
  for(let column = 0; column < split.length; column++){
    let tempCol = []
    for(let row = 0; row < split.length; row++){
      tempCol.push(split[row][column])
    }
    temp.push(split[column] + "|" + tempCol.join(""))
  }
  return temp.join("\n")
}
function oper(fct, s) {
  return fct(s)
}
// console.log(rot90Clock("abcd\nefgh\nijkl\nmnop"))
// console.log(diag1Sym("abcd\nefgh\nijkl\nmnop"))
console.log(selfieAndDiag1("abcd\nefgh\nijkl\nmnop"))
