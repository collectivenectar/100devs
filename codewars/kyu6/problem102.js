// Parameters: Given an array nums with length n
// Return: Return an array of length 2 * n, where nums is concatenated with another
// array equal to nums.
// Example:
// getConcatenation([1, 2, 3]) => [1, 2, 3, 1, 2, 3]
// getConcatenation([0, 0]) => [0, 0, 0, 0]

// Pseudocode:

// Brute forcing the solution with return nums.concat(nums) works fine, but I wanted
// to solve it by adding n elements using a loop, so instead of .concat() here we go:

// set a var to the current nums.length
// Loop from the current length(the end) to twice the value of nums.length, not inclusive.
// Moving one at a time, add an element by setting it equal to the current loop count minus
// the length of nums.

// Return nums after the loop completes.

var getConcatenation = function(nums) {
    let setLength = nums.length
    for(let dupe = setLength; dupe < setLength * 2; dupe++){
        nums[dupe] = nums[dupe - setLength]
    }
    return nums
};