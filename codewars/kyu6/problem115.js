// Parameters: Given two arrays
// Return: Return an array (unordered or ordered) containing all intersections without duplicates.
// intersections are where both arrays contain the same value

// Examples:
// intersection([1, 2, 3, 4], [3, 4, 5, 6, 7]) => [3, 4]
// intersection([1, 2, 2], [2]) => [2]
// intersection([2, 3, 4, 5], [6, 8, 0, 1, 5]) => [5]

// Pseudocode:

// Using a JS Set(), I just loop through the first array, checking to see if 
// the second array includes that element. If it does, I add it to the Set.
// The Set prevents duplicates, so I just pull a new Array() from the Set and
// return it as the result.


var intersection = function(nums1, nums2) {
    let inter = new Set()
    for(let each = 0; each < nums1.length; each++){
        if(nums2.includes(nums1[each])){
            inter.add(nums1[each])
        }
    }
    return Array.from(inter)
};