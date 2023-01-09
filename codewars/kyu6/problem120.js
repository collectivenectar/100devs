// Parameters: given an array of numbers between 1 and n
// Return: Return an array of all the missing numbers in the array(between 1 and n)
// Examples:
// findDisappearedNumbers([1, 1]) => [2]
// findDisappearedNumbers([1, 2, 3, 4, 5, 7, 9]) => [6, 8]
// findDisappearedNumbers([8, 5, 2, 1, 5, 2, 8, 1]) => [3, 4, 6, 7]

// Pseudocode:
// create a brand new empty array with the same size as the given array nums
// loop through the given array, and inside the newly created array, place a 0 at each
// position in the new array that is equal to the given value present in the nums array.
// This leaves an empty spot in the new array wherever there was a missing number.
// Using that new array, loop through it and add the index of each missing element in the
// array to a new array 'missing' and return it as the result after finishing.

function findDisappearedNumbers(nums) {
    let copy = new Array(nums.length);
    for (let missing = 0; missing < nums.length; missing++) {
        copy[nums[missing] - 1] = 0;
    }
    let missing = [];
    for (let check = 0; check < copy.length; check++) {
        if (isNaN(copy[check])) {
            missing.push(check + 1);
        }
    }
    return missing;
}