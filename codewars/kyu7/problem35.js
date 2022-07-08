// Parameters : given a string, composed of several substrings separated by "\n"
// Return: if vertMirror, reverse the order of characters in the substring,
// if horMirror, reverse the order of substrings.
// Example: vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu") =>
// "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
// horMirror("lVHt\nJVhv\nCSbg\nyeCt") => "yeCt\nCSbg\nJVhv\nlVHt"
// Also, write a function that receives one of these two functions as the first
// parameter, and 's' as the string to be processed by that function.
// Pseudocode:

// for vertMirror, split the string into substrings array, then make a temp array
// for after. Then, loop through the length of the array, splitting each substring
// into an array, reversing the array order, and rejoining it. Then push the result
// to the temp array, rejoin it with "\n", and return it.
// For horMirror, just split the string into a substrings array, reverse the array,
// then rejoin it with '\n' and return it.

function vertMirror(strng) {
  let split = strng.split("\n")
  let temp = []
  for(let each = 0; each < split.length; each++){
    let splitW = split[each].split("").reverse()
    temp.push(splitW.join(""))
  }
  return temp.join("\n")
}
function horMirror(strng) {
  let split = strng.split("\n")
  return split.reverse().join("\n")
}
function oper(fct, s) {
  return fct(s)
}
