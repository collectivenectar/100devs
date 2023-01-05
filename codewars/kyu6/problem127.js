// Parameters: Given an array of numbers
// Return: Return an array that shows how many other numbers in the array are smaller than 
// the number at that position in the original given array.

// Example:
// smallerNumbersThanCurrent([1, 2, 3, 4]) => [0, 1, 2, 3]
// smallerNumbersThanCurrent([1, 2, 1, 1, 3]) => [0, 3, 0, 0, 4]
// smallerNumbersThanCurrent([8, 3, 1, 0, 6, 9]) => [4, 2, 1, 0, 3, 5]
// smallerNumbersThanCurrent([1, 1, 1]) => [0, 0, 0]

// Pseudocode:
// This is the brute force method, which I suspect might only be improved as high as nlogn,
// but this is just my first solution.

// Begin with an empty new Array with the same length as the given array.
// Then begin a nested loop, where the outer loop is each number in the given array,
// and the inner loop is for comparing all the other numbers to the number in the outer loop.

// Each time, compare if the other numbers are smaller or bigger.
// If the other number(inner loop) is bigger than the current number I'm looking at(outer loop)
// increment the value in the new Array by one.

// Once the loop is over, return the new Array with all the counts.


var smallerNumbersThanCurrent = function(nums) {
    let results = new Array(nums.length).fill(0)
    for(let each = 0; each < nums.length; each++){
        for(let check = 0; check < nums.length; check++){
            if(nums[check] > nums[each]){
                results[check] = results[check] + 1
            }
        }
    }
    return results
};