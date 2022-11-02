// Parameters: Given two pairs of related parameters:
// two arrays and two vars, nums1 and m, and nums2 and n
// both arrays are sorted in non-descending order, and nums1 has n number of
// elements equal to '0' to represent empty spaces for the elements in nums2
// and m represents how many non-zero elements it contains
// so you can safely assume that m + n = nums1.length

// Return: Return nums1 with all of nums2 elements included, and sorted in
// ascending order.

// Examples: See test cases below the function

// Pseudocode:
// First catch edge cases where n or m is 0
// Otherwise, create two vars to store the current position of valid non-zero elements
// in each array.
// Then, loop from the end of nums1 to the beginning, each time:

// Checking if the vars created earlier have dropped below 0
// Checking which element at those positions(stored in the vars) in nums1 and nums2
// is greater than the other. If greater, replace the value at that position
// with the greater element, and then decrement the variable that's responsible
// for the array position you're copying the element from. If it's coming from
// nums1, set that element equal to 0.

// if m or n drop below zero, then you can ignore the other array and just push
// the remaining elements into nums1 without pause, or break if nums2 is empty
// and return the nums1 array as is.

var merge = function(nums1, m, nums2, n) {
    if(n === 0){
        return nums1
    }else if(m === 0){
        for(let each = 0; each < n; each++){
            nums1[each] = nums2[each]
        }
        return nums1
    }else{
        let currentM = m - 1
        let currentN = n - 1
        for(let each = m + n - 1; each >= 0; each--){
            if(currentM >= 0 && currentN >= 0){
                if(nums1[currentM] >= nums2[currentN]){
                    nums1[each] = nums1[currentM]
                    nums1[currentM] = 0
                    currentM--
                }else{
                    nums1[each] = nums2[currentN]
                    currentN--
                }
            }else{
                if(currentM < 0){
                    nums1[each] = nums2[currentN]
                    currentN--
                }else if(currentN < 0){
                    break
                }
            }
        }
        return nums1
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([0], 0, [1], 1))
console.log(merge([1], 1, [], 0))