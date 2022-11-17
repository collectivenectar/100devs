// Parameters: Given an array of numbers
// Return: Return the third maximum number in the array. If no third, return the first max.
// Duplicate values don't affect maximum placements.

// Example:
// thirdMax([1, 2, 3, 4, 5]) => 3
// thirdMax([9, 8]) => 9
// thirdMax([1, 2, 3, 3, 4]) => 2

// Pseudocode: 

// First, sort the array into a new array, 'sort'
// Then, create a JS Set()
// Then, loop through the *sorted* array, adding each value to the Set()
// Finally, convert the Set() to a new Array(), and return either the third
// element from that array, or if no third element, return the first element.

var thirdMax = function(nums) {
    let sort = nums.sort((a, b) => b - a)
    let max = new Set()
    for(let each = 0; each < sort.length; each++){
        max.add(sort[each])
    }
    let results = Array.from(max)
    return results[2] === undefined? results[0]: results[2]
};