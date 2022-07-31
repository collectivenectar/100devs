// Parameters: Given a number(actual typeof === number)
// Return: return a string where the number has been given the standard commas
// that group a number by thousands, hundreds of thousands, etc, i.e. every
// three decimal places.

// Example: groupByCommas(1000200) => '1,000,200'

// Pseudocode:

// I'm going to work this in reverse just since it makes more sense starting from
// the first decimal place.
// Get the typeof n into a variable stored as a String
// split the string into an array of individual characters and reverse the array order
// create an array to store the modified pattern of characters
// loop through from the beginning to end(since it's in reverse it's really from
// end to beginning)
// if not at position 0 and the decimal place is at 3, add a ',' to the array
// before adding the number -- since in reverse, the ',' needs to be first.
// Otherwise just add the number.
// reverse the array element order again and then join the characters together.
// return the joined characters.

function groupByCommas(n) {
  let stringN = String(n)
  let reverseStringN = stringN.split("").reverse()
  let commasAdded = []
  for(let grouping = 0; grouping < reverseStringN.length; grouping++){
    if(grouping !== 0 && grouping % 3 === 0){
      commasAdded.push(',')
      commasAdded.push(reverseStringN[grouping])
    } else{
      commasAdded.push(reverseStringN[grouping])
    }
  }
  let reverseCommasAdded = commasAdded.reverse().join("")
  return reverseCommasAdded
}
