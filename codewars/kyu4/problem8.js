// Parameters : you're given input, which is a string representing unformatted
// code, and markers, which represent the different characters that signify a
// users 'comments' character.
// Return : Return the string with the 'comments' removed
// Example : Input: "pears, apples, oranges\n and bananas" => "pears, apples, oranges\n and "
// Pseudocode :
// split the lines according to \n
// create something to store modified lines in
// create a nested function for checking if the line has any markers in the string
// iterate over the lines using the nested function and push the processed line
// to the storing array
// return the array as a joined array using \n again 

function solution(input, markers) {
  let lines = input.split("\n")
  let newLines = []
  let markerChecker = (line) => {
    for(let marker = 0; marker < markers.length; marker++){
      if(lines[line].includes(markers[marker])){
        return lines[line].split(markers[marker])[0].trim()
      }
    }
    return lines[line]
  }
  for(let line = 0; line < lines.length; line++){
    newLines.push(markerChecker(line))
  }
  return newLines.join("\n")
}
console.log(solution("pears, apples, oranges\n and %bananas", "%"))
