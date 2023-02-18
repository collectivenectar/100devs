// Parameters:
// Given two arrays, 'nums' and 'index' -> nums, is all the numbers to insert, and index is 
// the index to insert them at.

// Return:
// Using a new and empty array, return the array after inserting each num one by one at 
// each corresponding index

// Examples:

// createTargetArray([0,1,2,3,4], [0,1,2,2,1]) => [0,4,1,3,2]
// createTargetArray([1,2,3,4,0], [0,1,2,3,0]) => [0,1,2,3,4]

// Pseudocode:

// Using splice() I just insert a new element using the given index as the first parameter,
// the second parameter is 0 since I'm not replacing anything, and the third parameter is
// the number to insert.
// It's a little heavier on memory than other solutions, so if I wanted to do this differently
// I could try concatenating, or maybe converting the given index array
// into a for loop that just pulls numbers from nums and pushes them to the end
// of the array.


var createTargetArray = function(nums, index) {
    let target = []
    for(let each = 0; each < index.length; each++){
        target.splice(index[each], 0, nums[each])
    }
    return target
};