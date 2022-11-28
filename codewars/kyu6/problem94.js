// Parameters: Given an array of nums 'nums', and a value to remove, 'val'

// Return: Remove all the elements equal to 'val' in-place in the array, and
// return the number of remaining elements. The order of the elements can be changed,
// and you can leave elements at the end of the array if you can't change the length of the array,
// as long as the first part of the array contains the elements that are not equal to 'val'

// Example: 

// removeElement([2, 3, 4, 1, 0, 0, 9, 1], 1) => 6, nums = [2, 3, 4, 0, 0, 9, 1, 1]
// removeElement([1, 2, 2, 1, 2, 2], 2) => 2, nums = [1, 1, _, _, _, _]
// removeElement([0, 0, 0, 0], 0) => 0, nums = [0, 0, 0, 0]
// removeElement([9, 9, 8, 7, 6, 6, 7], 9) => 5, nums = [7, 6, 8, 7, 6]

// Pseudocode: 

// using a moving window solution, create two variables to track the last unchecked element in the array
// and the current element, which actually in the end results in the desired 'k' value, since it also
// represents all the elements that are not 'val'

// using a while loop, each time I find 'val' in the array, I swap the last unchecked element
// with the current element, and then move the last unchecked element index left one.

// If the element isn't equal to 'val', then increase 'k'.

// Once the condition for my while loop is broken (as long as 'k' isn't greater than 'end')
// Return 'k', as the nums array is mutated in place I don't return it.



var removeElement = function(nums, val) {
    let k = 0;
    let end = nums.length - 1;
    while (k <= end) {
        if (nums[k] === val) {
            nums[k] = nums[end];
            end--;
        } else {
            k++;
        }
    }
    return k;
};

