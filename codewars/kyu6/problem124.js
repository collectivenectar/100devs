// Parameters:
// Given an array nums with length n, where each element is a 0-indexed integer
// in the inclusive range [0, n - 1]
// Return: Return a new array, where:

// results[i] = nums[nums[i]]

// Examples:

// nums = [0, 2, 1, 5, 3, 4] 
// buildArray(nums) => [0, 1, 2, 4, 5, 3]

// nums = [5, 0, 1, 2, 3, 4] 
// buildArray(nums) => [4, 5, 0, 1, 2, 3]


// Pseudocode:
// create an empty array of length equal to the given array, but don't fill it with anything
// Then, loop through the array, and each time just use the given formula from the prompt:
// results[i] = nums[nums[i]]
// This is just a trick to add another layer of complication, where you use the value at
// each index as an index again. So if in element 0 you find a 4, go to the element at index
// 4, and copy that into the new array at index 0, and so on.
// 
// Then return the results.

var buildArray = function(nums) {
    let results = new Array(nums.length)
    for(let each = 0; each < nums.length; each++){
        results[each] = nums[nums[each]]
    }
    return results
};