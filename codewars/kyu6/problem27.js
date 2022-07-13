// Parameters: given a 4 character string of numbers representing the year
// NOTE: will always be 4 digits
// Return: return the century ("1990" => 20th)
// Examples: whatCentury("2251") => "23rd"
// Pseudocode:
// The main stick for me was the suffixes, so I just started with an array to keep
// it simple, and set it up so the index corresponds to the matching suffix
// Then, make a variable to store just the first two digits of the year. If the
// Year goes over 19, then it follows the suffixes array pattern, otherwise just
// use 'th' across the board for a suffix.
// Quick logic to see if the last two digits are more than 0, if so bump the century
// up one.
// Then use string literals to combine the numbers and suffixes to return the correct
// century.

function whatCentury(year){
  let suffixes = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"]
  let century = +year.slice(0, 2)
  if(year.slice(2) > 0){
    century = century + 1
  }
  return century > 19? `${century}${suffixes[Number(`${century}`.slice(1))]}`:`${century}th`;
}
