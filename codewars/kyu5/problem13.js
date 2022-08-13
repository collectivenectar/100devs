// This was a leetcode hard so I'm putting this in 5 kyu level problems.

// Parameters: Two sorted arrays of integers with a length range of 0 - 1000
// element integers themselves a range from -10 ** 6(power of 6) to 10 ** 6

// Return: Join the sorted arrays, sort them, and return the median value for
// the sorted array, to 0.00000 decimal points.

// Example:
// findMedianSortedArrays([1, 3], [2]) => 2.00000

// Pseudocode:
// concatenate the arrays
// sort the newly concatenated array, store in the variable sortedNewNums.
// if the array has an even length, then figure out the two middle elements,
// and add them together, then divide in half to get the median. Return with
// 5 floating points.

// If the array has an odd length, then grab the middle element and return it with
// 5 floating decimal points as well.

var findMedianSortedArrays = function(nums1, nums2) {
    let newNums = nums1.concat(nums2)
    let sortedNewNums = newNums.sort((a, b) => {
        if(a < b){
            return -1
        } else if(a > b){
            return 1
        }else{
            return 0
        }
    })
    if(sortedNewNums.length % 2 === 0){
        let firstMiddle = (sortedNewNums.length / 2) - 1
        let secondMiddle = sortedNewNums.length / 2
        let sum = sortedNewNums[firstMiddle] + sortedNewNums[secondMiddle]
        let median = sum / 2
        return median.toFixed(5)
    } else{
        return sortedNewNums[Math.ceil((sortedNewNums.length / 2) - 1)].toFixed(5)
    }
};

console.log(findMedianSortedArrays([1, 3], [2]))
