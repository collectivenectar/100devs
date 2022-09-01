// Parameters: Given an array and a 'win' number, each element in the array is an array with one
// string element and one number.

// Return: If any of the letters character code in the string element matches the
// one number in that array, you get a win. One win per array, and if the number of
// wins is greater or equal to the 'win' number, return 'Winner!' else return 'Loser!'

// Example:
// bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1) => "Winner!"
// bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 2) => "Loser!"

// Pseudocode:

// First set up the wins tracker variable 'wins'.
// Then, loop through the tickets.
// For each ticket, loop the string looking to see if the char code matches the number.
// If there's a match, add 1 to wins and break the current loop to skip to the next
// Element.

// After the loop is over, check if wins is greater than or equal to the given 'win'
// number. Return winner if so, loser if not.

function bingo(ticket, win){
  let wins = 0
  for(let each = 0; each < ticket.length; each++){
    for(let char = 0; char < ticket[each][0].length; char++){
      if(ticket[each][0].charCodeAt(char) === ticket[each][1]){
        wins++
        break
      }
    }
  }
  if(wins >= win){
    return `Winner!`
  }else{
    return `Loser!`
  }
}

console.log(bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1))
