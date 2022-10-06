// Parameters: Given a string with numbers and letters - maybe
// Return: Return only the numbers in the string - as a Number data type
// Example:
// filterString("1f2f3g3h4h6") => 123346
// Pseudocode:

// First, split the given string into an array of single character strings
// Then, create a variable to store the results as a string
// Then, loop through the string, checking if the character is a number or letter
// If a number, push the character(still technically a string) to the numsOnly variable
// After done looping, return the numsOnly var cast as a Number data type from the string.

var filterString = function(value) {
    let characters = value.split("")
    let numsOnly = ""
    for(let char = 0; char < characters.length; char++){
     if(!isNaN(characters[char])){
        numsOnly = numsOnly + characters[char]
        }
    }
    return Number(numsOnly)
  }