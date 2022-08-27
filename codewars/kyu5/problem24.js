// Parameters: given a string
// Return: return the first non-repeating letter in the string
// additionally, return the exact character, i.e.  if the character is upper or lowercase
// Examples: firstNonRepeatingLetter("srsssss") => 'r'
// firstNonRepeatingLetter("sssss") => ''

// Pseudocode:

// First catch if there's a string with only one character. return that character.
// otherwise,
// loop from the beginning of the string until the end.
// For each character, smush together the remaining parts of the string - adding
// what's before that character to what's after it. Store that in a variable 'rest'
// Don't forget to to convert it to lower case!
// Then, check the 'rest' variable value to see if it includes the current character
// I'm looking at. If it doesn't, return that character.

function firstNonRepeatingLetter(s) {
  if(s.length === 1){
    return s
  }
  for(let letter = 0; letter < s.length; letter++){
    let rest = letter === 0? s.slice(1, s.length).toLowerCase(): s.slice(0, letter).toLowerCase() + s.slice(letter + 1, s.length).toLowerCase()
    if(!rest.includes(s[letter].toLowerCase())){
      return s[letter]
    }
  }
  return ""
}
