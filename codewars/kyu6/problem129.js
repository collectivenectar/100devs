// Parameters: Given an array of integers
// Return: Return the length of the longest set of consecutive 1 digits
// Example: 
// findMaxConsecutiveOnes([1, 0, 1, 0, 1, 1]) => 2
// findMaxConsecutiveOnes([0, 1, 0, 1, 0]) => 1
// findMaxConsecutiveOnes([1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1]) => 3

// Pseudocode:

// Start with two variables, 'max' and 'localMax'
// Loop through the given array, each time:
// If the number is a 1, increment localMax up one.
// If the number is not a 1, see if the current value for localMax is greater than max.
//      If so, set max equal to the value in localMax.
//      If not, ignore the max variable and set localMax to 0.
// Finally, return the highest of the two values, either max or localMax (this is to catch the very last value remaining
// in localMax if the final consecutive set is at the end of the array)

var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let localMax = 0
    for(let each = 0; each < nums.length; each++){
        if(nums[each] === 1){
            localMax++
        }else{
            max = Math.max(localMax, max)
            localMax = 0
        }
    }
    return Math.max(max, localMax)
};