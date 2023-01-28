// Parameters: Given an array of numbers, and a number k
// Return: Find the maximum average of all the possible contiguous subarrays of length k within the given array
// Examples:

// findMaxAverage([1,12,-5,-6,50,3], 4) => 12.75000
// findMaxAverage([5], 1) => 5.00000

// Pseudocode:

// Using a moving window strategy, where I sum up the first k elements into a variable,
// and just loop through the remaining elements in the array, each time removing the value
// at the beginning of the window from the last loop, and adding the next value in the array to
// the end of the window. I then compare that value to the max average value, and replace it if I found
// a bigger average.

var findMaxAverage = function(nums, k) {
    let kElementsSum = nums.slice(0, k).reduce((prev, curr) => prev + curr)
    let max = kElementsSum / k
    for(let each = k; each < nums.length; each++){
        kElementsSum = kElementsSum - nums[each - k] + nums[each]
        max = Math.max(kElementsSum / k, max)
    }
    return max
};