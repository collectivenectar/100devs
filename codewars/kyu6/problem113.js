// Parameters: Given an array of numbers with some zeroes in there somewhere
// Return: Return the same array changed in-place where all zeroes are moved to the end.
// Example:
// moveZeroes([0, 0, 1]) => [1, 0, 0]
// moveZeroes([2, 5, 0, 9, 1, 23, 0, 6]) => [2, 5, 9, 1, 23, 6, 0, 0]
// 
// Pseudocode:
// make a variable to keep count of the number of zeroes I find while looping over the array.
// Then, loop over the array, each time:
//      If the number is a zero, add 1 to the variable
//      If not a zero, and I've already counted some zeroes in the array,
//          scoot the current number to the left by however many zeroes I've counted.
// 
// Once that loop is over, I should have all the non-zero elements pushed to the beginning
// of the array, so I just need to rewrite the elements at the end as zeroes. I do this
// by starting a loop at the end of the array offset by how many zeroes there are, and
// I just set each element equal to zero.

// There is no return value, since the array is changed in place and the outer function
// already has access to the array by name.

var moveZeroes = function(nums) {
    let zeroes = 0
    for(let each = 0; each < nums.length; each++){
        if(nums[each] === 0){
            zeroes++
        }else{
            nums[each - zeroes] = nums[each]
        }
    }
    for(let each = nums.length - zeroes; each < nums.length; each++){
        nums[each] = 0
    }
};