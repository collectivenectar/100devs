// Parameters: Given a sorted array, with +/- integers sorted in ascending value
// Return: Return the index of the element that is equal to the target value
// O(log n) time complexity solution required
// If not found, return -1

// Example: search([-20, -1, 0, 4, 15, 23, 56, 97], 23) => 5

// Pseudocode:

// for log n complexity, I must use a binary search algorithm, where the index
// range is reduced each cycle by half if not found in the other half of the array.
// So,
// Compare the midpoint value of the array to the target, if less than, search the next
// half, if greater than, search the first half. Then continue the process applying
// the same logic by dividing the proceeding half into two, and comparing the midpoint.

// This is done by using a lo and a hi variable that's adjusted cycle by cycle
// If target is less than midpoint, hi is dropped to the midpoint, if greater than
// the midpoint, lo is raised to the midpoint + 1. 

// Once the target is found, return the index, and otherwise if lo passes or equals the hi
// value, the loop finishes, and a -1 is returned since none were found.


var search = function(nums, target) {

    let lo = 0;
    let hi = nums.length
    do{
        const mid = Math.floor(lo + (hi - lo) / 2)
        const value = nums[mid]
        if(value === target){
            return mid
        }else if(value > target){
            hi = mid
        }else{
            lo = mid + 1
        }
    }while(lo < hi);
    return -1
};

console.log(search([-20, -1, 0, 4, 15, 23, 56, 97], 23))