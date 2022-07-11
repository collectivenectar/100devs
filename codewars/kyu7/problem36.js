// Parameters: Given a strng comprised of substrings separated by the characters '\n',
// where the length of each substring is equal to the number of substrings.
// k represents the scalar for each character, and n represents the scalar for the substring
// Return: return the string transformed, where each character is duplicated k times,
// and each substring is duplicated n times. If strng is "", return ""
// Examples:
// scale("plhd\nokgc\nnjfb\nmiea", 2, 2) => "ppllhhdd\nppllhhdd\nookkggcc\nookkggcc\nnnjjffbb\nnnjjffbb\nmmiieeaa\nmmiieeaa"
// Pseudocode:
// first check is the strng is ''
// otherwise split it into substrings and store in a temp array.
// then, make a results array to store results from later
// Then, loop through the substrings, creating a temp array and beginning another loop inside to loop through the
// individual characters in each substring.
// for each character, push k amount of that character to the temp array.
// after the character loop is over, loop through n times to push the temp array
// n number of times to the results array.
// Then, rejoin using join("\n") and return the results.

function scale(strng, k, n) {
  if(strng === ""){
    return ""
  }
  let split = strng.split("\n")
  let results = []
  for(let subString = 0; subString < split.length; subString++){
    let temp = []
    for(let char = 0; char < split.length; char++){
      temp.push(split[subString].split("")[char].repeat(k))
    }
    for(let vertScale = 0; vertScale < n; vertScale++){
      results.push(temp.join(""))
    }
  }
  return results.join("\n")
}
console.log(scale("plhd\nokgc\nnjfb\nmiea", 2, 2))
