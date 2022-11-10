// Parameters: Given an array of numbers in a series, with one number missing
// Return: Return the missing number
// Examples:

// missingNumber([0, 2, 1]) => 3
// missingNumber([9, 4, 2, 6, 7, 1, 8, 3]) => 5

// Pseudocode:
// create a new array with the length of the given array, but with empty elements
// loop through the given array, taking the value at that current element and placing
// an element inside the new array at the index equal to that value.

// What this does is it just duplicates the original array but leaves an empty cell
// at the index where the missing number is. Then, I loop over the new array, and 
// when I find an empty cell by checking the result of isNaN(n), I return that index.

// If I get no missing index, then the number must be at the end of the array, so I
// just return the length of the given nums array if that's the case.

var missingNumber = function(nums) {
    let len = nums.length
    let arr = new Array(len)
    for(let each = 0; each < len; each++){
        arr[nums[each]] = each
    }
    for(let check = 0; check < arr.length; check++){
        if(isNaN(arr[check])){
            return check
        }
    }
    return len
};