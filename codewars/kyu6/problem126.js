// Return the difference between the product of the numbers digits and the sum of the numbers digits
// Parameters: Given a number n
// Return: calculate the difference between the product of the numbers digits (123 => 1 * 2 * 3 = 6) 
// and the sum of the numbers digits (123 => 1 + 2 + 3 = 6)
// Examples:

// subtractProductAndSum(123) => 0
// subtractProductAndSum(345) => 48
// subtractProductAndSum(111) => -2

// Pseudocode:
// First, I can't use the number type so I need to convert it to a string, split it into an
// array using .split(), and then do my calculations.
// First though, check if the array has a length of 1 or less. If so, return 0. The difference
// will always be 0.
// If the array has more than 1 element, begin calculating.
// first, create a variable 'sum', and a variable 'product', and set it equal to the first
// digit.
// Then, begin a loop from the second digit, each time:
// setting the sum variable equal to the sum variable plus the digit
// setting the product variable equal to the product variable times the digit
// After completing the loop, return the difference between the product and the sum.


var subtractProductAndSum = function(n) {
    let stringed = String(n).split("")
    if(stringed.length > 1){
        let sum = Number(stringed[0])
        let product = Number(stringed[0])
        for(let each = 1; each < stringed.length; each++){
            sum = sum + Number(stringed[each])
            product = product * Number(stringed[each])
        }
        return product - sum
    }else{
        return 0
    }
};