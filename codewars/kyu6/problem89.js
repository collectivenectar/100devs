// Parameters: Given an array of numbers 
// Return: true if any value in the array repeats,
// Examples: See tests below the function
// Pseudocode: There's an O(n) solution just using a map, and this uses 
// the same amount of memory worst case scenario.

// Create a map, i.e. JS Object
// loop from the beginning of the given array to the end, and for each element:
// check if it's in the map.
// If it's not, added it to the map using the element value as the key, and 1 as the
// value. 1 has no significants but helps with readability.
// If it is in the map, return true.

// If the loop finishes, return false.

var containsDuplicate = function(nums) {
    let map = {}
    for(let each = 0; each < nums.length; each++){
        if(!map[nums[each]]){
            map[nums[each]] = 1
        }else{
            return true
        }
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]) === true)
console.log(containsDuplicate([1, 1]) === true)
console.log(containsDuplicate([1, 2, 3, 4, 5]) === false)
console.log(containsDuplicate([11000, 10011, 10101, 11011, 10000, 01010]) === false)