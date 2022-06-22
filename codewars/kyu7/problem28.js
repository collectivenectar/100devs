// Parameters : given a string that could contain letters, numbers, and characters
// Return : Return the string, reversed, with any non letters removed.
// Example : reverseLetter("abbegeo12+") => "oegebba"
// Pseudocode :

// declare a var for holding string characters for the end result
// declare a var to hold a regex test for alphabetical characters only
// iterate through the string from the end, incrementing to the beginning,
// where if the character passes the alphabetical regex test, the character
// gets added to the string holder variable
// at the end, return the string.

function reverseLetter(str) {
  let reverse = ""
  let letters = /[a-zA-Z]/
  for(let end = str.length - 1; end >= 0; end--){
    if(letters.test(str.charAt(end))){
      reverse = reverse + str.charAt(end)
    }
  }
  return reverse
}
