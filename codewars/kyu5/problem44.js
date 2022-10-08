// Parameters: Given a string, which should be numbers only, but can include non decimal characters

// Return: Return a boolean indicating whether or not the 'ticket number' is lucky, which is
// determined by comparing the sum of the digits on the left half of the number to the sum of
// the digits on the right half of the number. If odd lengthed, ignore the middle digit. If the
// sums are equal, the number is lucky. If not a decimal number, or if the string is empty, throw
// an error.

// Example:
// luckCheck('123456') => false
// luckCheck('14626124') => true
// luckCheck('1F592675') => throw new Error('example error msg')

// Pseudocode:

// Check for empty strings, and non decimal numbers first by iterating through the string and
// checking for " ", and isNaN(`${num}`)
// Then, calculate the half point for the string length, and store the first and half portions
// of the strings as variables to compare.
// Split, then reduce the given split array to calculate the sum of each half, and return
// the results of checking if the sums are equal.

function luckCheck(ticket){
    if(ticket === ""){
      throw new Error('no ticket number')
    }
    for(let digit = 0; digit < ticket.length; digit++){
      if(isNaN(ticket[digit]) || ticket[digit] === " "){
        throw new TypeError('non decimal number')
      }
    }
    let halfPoint = Math.floor(ticket.length / 2)
    let firstHalf = ticket.slice(0, halfPoint)
    let secondHalf = ticket.length % 2 !== 0? ticket.slice(halfPoint + 1, ticket.length):ticket.slice(halfPoint, ticket.length);
    let summer = (str) => {
      return str.split("").reduce((prev, curr) => Number(prev) + Number(curr))
    }
    return summer(firstHalf) === summer(secondHalf)
}