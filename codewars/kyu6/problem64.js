// Parameters: Given an array of +/- integers, sorted in ascending order, and a target integer to find
// Return: If the target exists, return it's index in the array. If not, return the index where the
// integer WOULD go if placed in sorted order in the array.
// Examples:
// searchInsert([1, 2, 3, 4, 6, 7, 9], 6) => 4
// searchInsert([1, 2, 3, 4, 6, 7, 9], 5) => 4

// Pseudocode:
// Applying the binary search algorithm, search through the array looking for the target,
// Except I need to inject some additional logic to two spots:
// 1) if the current value is less than the target value,
//    AND the next value in the array is greater OR the midpoint is at the end of the array
//    return the midpoint index plus one.
// 2) if the current value is greater than the target value,
//    AND the current midpoint index is at the beginning of the array,
//    return 0
// 
// Otherwise it's a traditional binary search. Adjust the lo and hi variables according to whether or
// not the current value is higher or lower than the target, dividing the next searching range by 2
// each cycle.

var searchInsert = function(nums, target) {
    let lo = 0
    let hi = nums.length
    while(lo < hi){
        const midpoint = Math.floor(lo + (hi - lo) / 2)
        const value = nums[midpoint]
        if(value === target){
            return midpoint
        }else if(value < target){
            if(nums[midpoint + 1] > target || midpoint + 1 > nums.length - 1){
               return midpoint + 1
               }
            else{
                lo = midpoint + 1
            }
        }else{
            if(midpoint === 0 && nums[midpoint] > target){
                return 0
            }else{
                hi = midpoint
            }
        }
    }
};