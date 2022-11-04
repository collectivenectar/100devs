// Given an array of integers, each integer is either a 0, a 1, or a 2
// Sort the array IN-PLACE where 0 is before a 1, and 1 is before a 2
// Examples:

// Pseudocode:
// To sort the array in place, you have to manage how to iterate over an array while
// mutating it.

// Using .sort() returns the same array, mutated. Pretty efficient as is, but there are optimizations.


var sortColors = function(nums) {
    return nums.sort((a, b) => {
        if(a < b){
            return -1
        }else if(a > b){
            return 1
        }else{
            return 0
        }
    })
};

console.log(sortColors([0, 0, 1, 0, 2, 2, 0]))
console.log(sortColors([2, 2, 2, 0, 0, 1, 1]))
console.log(sortColors([1, 0, 1, 2, 0, 2, 1]))