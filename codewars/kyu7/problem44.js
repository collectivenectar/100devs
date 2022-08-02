// Parameters: given a positive integer represent a year
// Return: Return whether or not the year is a leap year. The rules are:
// If the year is divisible by 4, leap year.
// If divisible by 100 and not by 400, not a leap year.
// If divisible by 100 and by 400, leap year.

// Examples: isLeapYear(4) => true
// isLeapYear(401) => false
// isLeapYear(1600) => true

// Pseudocode:

// Using if / else if logic, start with the double condition first, 100 and 400
// so if the year modulus 100 equals zero and year modulus 400 equals zero,
// return true.
// Otherwise is year modulus 100 is zero return false
// finally if year modulus 4 is zero return true, and for everything else return
// false.

function isLeapYear(year) {
  if(year % 100 === 0 && year % 400 === 0){
    return true
  } else if(year % 100 === 0){
    return false
  } else if(year % 4 === 0){
    return true
  } else{
    return false
  }
}
console.log(isLeapYear(1600))
