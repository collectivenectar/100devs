// Parameters: Given an integer n, typeof number. Inputs will always be valid
// Return: Return the number of digits in the integer
// Example: digits(0) => 1
// digits(1) => 1
// digits(10) => 2
// digits(100) => 3

// Pseudocode:
// By casting the integer to a string, the strings returned value property of 'length'
// will give me the number of characters, i.e. digits.

function digits(n) {
    let stringed = String(n)
    if(stringed){
      return stringed.length
    }
  }