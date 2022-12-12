// Parameters: Given two numbers as strings
// Return: Return the sum of the two numbers without directly converting to number types,
// and without using bignumber libraries.

// Example:

// addStrings("15", "312") => "327"
// addStrings("9", "1") => "10"
// addStrings("501", "9499") => "10000"
// addStrings("999999999999999999999", "1") => "1000000000000000000000"

// Pseudocode:

// Starting with four different variables:
// - 'results' which stores the final answer
// - 'carryOver' which stores any carryover values when a sum goes into the 10s
// - 'num1Ind' which stores the current index/position in the first string
// - 'num2Ind' which stores the current index/position in the second string

// Using a while loop with the condition that num1 and num2 indexes have not reached the end
// 
// Each time, summing together the Number present in string 1, with string 2, as well as adding
// the current carryOver value(could be 0, could be 1)
// Then, set carryOver to 0, and check if the sum results in a double digit.
// If so, add 1 to carryOver, subtract 10 from the sum, and add the remainder to the
// results string(but in front, not at the end!)
// Finally, decrement the string character/index value tracking variables, num1Ind and num2Ind

// After the while loop has ended, check if there is any value remaining in carryOver
// If there is, add '1' to the start of the final results string and return it, 
// otherwise just return the results.


var addStrings = function(num1, num2) {
    let results = ""
    let carryOver = 0
    let num1Ind = num1.length - 1
    let num2Ind = num2.length - 1
    while(num1Ind > -1 || num2Ind > -1){
        let sum = Number(num1.charAt(num1Ind)) + Number(num2.charAt(num2Ind)) + carryOver
        carryOver = 0
        if(sum > 9){
            carryOver = 1
            sum = sum - 10
            results = String(sum) + results
        }else{
            results = String(sum) + results
        }
        num1Ind--
        num2Ind--
    }
    return carryOver === 0? results: String(carryOver) + results;
};