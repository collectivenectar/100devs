// Parameters: Given an array nums
// Return: Return the length of the longest increasing contiguous subsequence 
// Examples:

// findLengthOfLCIS(1,3,5,4,7]) => 3
// findLengthOfLCIS([2, 2, 2, 2, 2]) => 1

// Pseudocode:

// starting with a variable 'longest' which is the results, and a variable 'sub' as an array.
// then I loop through the array, each time checking if the element at the end of the array 'sub'
// is less than the current element. If so, I add current element to the end of the array and continue.
// if not, I count the length of 'sub', compare it to 'longest', replace it if longest is smaller,
// and start 'sub' fresh with the current element.

var findLengthOfLCIS = function(nums) {
    let longest = 0
    let sub = []
    for(let each = 0; each < nums.length; each++){
        if(each === 0){
            sub.push(nums[each])
        }else{
            if(sub[sub.length - 1] < nums[each]){
                sub.push(nums[each])
            }else{
                longest = Math.max(longest, sub.length)
                sub = [nums[each]]
            }
        }
    }
    return Math.max(longest, sub.length)
};