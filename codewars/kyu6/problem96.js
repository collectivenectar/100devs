// Parameters: Given a number
// Return: If the number has two or more digits, sum those digits together. If only one digit,
// return that digit.

// Examples:

// addDigits(11) => 2
// addDigits(79) => 7
// addDigits(2468) => 2

// Pseudocode:

// First, create a variable to store the number while looping
// Then, begin a while loop with the condition that the value in holder is greater than 9
//      each time, convert the number to a string, split that string into an array of single strings,
//      and sum the digits together using .reduce()
// Once the loop has broken, return the remaining number present in the variable 'holder'

var addDigits = function(num) {
    let holder = num
    while(holder > 9){
        let str = String(holder)
        holder = str.split("").reduce((prev, curr) => Number(prev) + Number(curr))
    }
    return holder
};