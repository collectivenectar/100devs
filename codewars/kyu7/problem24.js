// Parameters: given a string, with letters possible from a-z
// Return: Return a string, where the first group of characters is the count of errors,
// then there's a '/' then the last group is the total count of characters in the
// error string
// Example: printerError("aaggsssssettttw") => "10/15", printerError("abcdefghijklm") => "0/13"
// Pseudocode:

// split the string into an array
// create a counter to track number of characters outside of the printer color range
// loop over the split array, adding to the counter if it's outside the range
// after the loop, use literals to create the string - 'numerator/denominator',
// where numerator is errorCount, and denominator is the length of the split array
// return the string

function printerError(s){
  let split = s.split("")
  let errorCount = 0
  for(let color = 0; color < split.length; color++){
    if(split[color] > "m"){
      errorCount++
    }
  }
  return `${errorCount}/${split.length}`
}
console.log(printer_error("aaabbbbhaijjjm"))
