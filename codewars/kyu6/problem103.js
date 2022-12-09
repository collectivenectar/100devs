// Parameters: Given an array nums
// Return: Return an array that tracks the running sum, where the running sum is calculated
// by adding the previous element value to the current element value

// Examples:

// runningSum([1, 1, 1, 1, 1]) => [1, 2, 3, 4, 5]
// runningSum([1, 2, 3, 4, 5]) => [1, 3, 6, 10, 15]
// runningSum([2, 10, 1, 6, 2]) => [2, 12, 13, 19, 21]

// Pseudocode: 

// Loop through the nums array
// Each loop:
//      Unless it's the first element in the array,
//      set the current element equal to the sum of the current element plus the previous
//      element.

// Finally, return the mutated nums array.

var runningSum = function(nums) {
    for(let each = 0; each < nums.length; each++){
        if(each > 0){
            nums[each] = nums[each] + nums[each - 1]
        }
    }
    return nums
};