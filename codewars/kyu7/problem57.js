// Parameters: Given a string of numbers
// Return: Return a new string where each digit in the original string is repeated according
// to the digits value.
// Example: explode("12334") => "1223333334444"
// Pseudocode:

// Set up a variable to store the results.
// Then loop from beginning to end of the string.
// For each digit, using repeat(), just add to the results string the repeated copies of the
// integer, passing in the value of the number as a parameter to the repeat() function.
// Finally, return the results.

function explode(s) {
    let results = ""
    for(let each = 0; each < s.length; each++){
      results = results + s[each].repeat(Number(s[each]))
    }
    return results
  }