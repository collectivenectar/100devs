// Parameters: Given an integer
// Return: Return whether or not the sum of all the positive divisors (except for the number itself) is
// equal to the given number
// Example: 

const { check } = require("mongo-tools");

// checkPerfectNumber(3) => false
// checkPerfectNumber(7) => false
// checkPerfectNumber(14) => false
// checkPerfectNumber(28) => true

// Pseudocode:

// Start with a variable set equal to 0, to use as the starting point for summing each whole divisor.
// Then, loop from 1 to half that given number (to eliminate unnecessary calculations), and each time:
// check if the number is a divisor of that given number.
// If so, add it to the value in the 'sum' variable
// After the loop is over, return what's left in the 'sum' variable.

var checkPerfectNumber = function(num) {
    let sum = 0
    for(let each = 1; each <= Math.floor(num / 2); each++){
        if(num % each === 0){
            sum = sum + each
        }
    }
    return sum === num
};

console.log(checkPerfectNumber(2))
console.log(checkPerfectNumber(7))
console.log(checkPerfectNumber(14))
console.log(checkPerfectNumber(28))
