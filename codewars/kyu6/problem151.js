// Parameters: Given an array of numbers
// Return: Return the absolute value of the difference between two calculated values =>
//
// The Element Sum (sum of all individual elements in the array) 
// +
// The Digit Sum (sum of all digits present in the array)

// Examples:

// differenceOfSum([1,15,6,3]) => (1 + 1 + 5 + 6 + 3) - (1 + 15 + 6 + 3) => 9
// differenceOfSum([1,2,3,4]) => (1 + 2 + 3 + 4) - (1 + 2 + 3 + 4) => 0

// Pseudocode:

// Using reduce() on the array gives me elementSum,
// and converting the array to a string, and then splitting it by each character gives me 
// an array of digits as strings. Using reduce() again, I convert them back to Number types again,
// and sum them to get the digitSum.
// Then, using Math.abs() I can calculate the absolute value of the difference between them.

var differenceOfSum = function(nums) {
    let elementSum = nums.reduce((prev, curr) => prev + curr)
    let digitSum = nums.join("").split("").reduce((prev,curr) => Number(prev) + Number(curr))
    return Math.abs(elementSum - digitSum)
};