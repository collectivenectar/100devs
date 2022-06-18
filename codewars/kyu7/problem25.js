// Parameters : Given a pin number as a string
// Return : True or false if the pin number is numerical only, either 4 or 6
// digits long
// Example: validatePIN("a361") => false, validatePIN("651742") => true
// Pseudocode:

// Set up the regex : \d for digits, + for multiple occurences, ^  and $ for beginning
// and ending.
// Check the length of the string, if not 4 or 6, return false
// else if the regex test passes, return true, and finally else return false

function validatePIN(pin){
  let numbersOnly = /^\d+$/
  if(pin.length !== 4 && pin.length !== 6){
    return false
  }
  else if(numbersOnly.test(pin)){
    return true
  }
  else{
    return false
  }
}
