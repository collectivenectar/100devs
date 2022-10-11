// Parameters: Given a string with some characters and some '#' mixed in
// Return: Return the results of treating the '#' as a backspace action, where
// the letter before it is removed. if more '#' than actual characters, return ""
// Example: cleanString('12#345##') => '13'
// Pseudocode:

// start with a variable 'results' to hold the answer in.
// Then, loop through the string:
// each time, if the character is a '#', and the 'results' variable has a letter in it,
// remove the last character from the results variable.
// Otherwise, if it isn't a '#', add the character to the 'results' variable.
// At the end of the loop, return the 'results' string.
 
function cleanString(s) {
    let results = ""
    for(let letter = 0; letter < s.length; letter++){
      if(s[letter] === "#"){
        if(results.length > 0){
          let removeOne = results.split("")
          removeOne.pop()
          results = removeOne.join("")
        }
      }else{
        results = results + s[letter]
      }
    }
    return results
  }