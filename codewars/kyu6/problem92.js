// Parameters: Given an array of integers, and an integer k
// Return: Return true if there exists two elements in the array that are equal, and also within range of
// each other by index. Range of the index is represented by integer k, and range must be less than or equal
// to k.

// Examples: 

// see test cases below the function

// Pseudocode:


// brute force solution which doesn't take into account how the further apart the indices are, the less likely
// for k to be greater than or equal to the absolute difference between other duplicates.

// This just creates a map of duplicates, then proceeds to check all possible combinations (very wasteful!) but
// it works for now.

var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for(let each = 0; each < nums.length; each++){
        if(!map[nums[each]]){
            map[nums[each]] = [each]
        }else{
            map[nums[each]].push(each)
        }
    }
    let checkCombos = array => {
        if(array.length < 3){
            return Math.abs(array[0] - array[1]) <= k
        }else{
            for(let start = 0; start < array.length - 1; start++){
                for(let end = 1; end < array.length; end++){
                    if(start !== end){
                        let absRes = Math.abs(start - end)
                        if(absRes <= k){
                            return true
                        }
                    }
                }
            }
        }
        return false
    }
    let multiples = Object.keys(map)
    for(let count = 0; count < multiples.length; count++){
        let frequency = map[multiples[count]]
        if(frequency.length > 1){
            // loop through the indices, and see if any abs(i - j) <= k
            if(checkCombos(frequency) === true){
                return true
            }
        }
    }
    return false
};

console.log(containsNearbyDuplicate([0, 1, 1, 0, 2], 3) === true)
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 1], 4) === false)