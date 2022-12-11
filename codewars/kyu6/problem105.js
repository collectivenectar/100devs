// Parameters: Given an array of integers 'nums'
// Return: Return the number of identical pairs of elements, provided that
// the index of the first element is lower than the index of the second.

// Examples:

// numIdenticalPairs([1, 1, 1, 1, 1]) => 10
// numIdenticalPairs([1, 2, 1, 2, 1]) => 4
// numIdenticalPairs([1, 2, 3, 4, 1, 2, 1, 3, 4, 2, 4]) => 10
// numIdenticalPairs([4, 3, 2, 1, 0]) => 0

// Pseudocode:

// Starting with a var 'pairs' to store found pairs
// plus, a map (JS Object) to store the count of identical integers found
// Loop through the array, each time:

// If the map obj doesn't have that integer, add a key/value pair, key is the integer,
// value set to 1
// 
// If the map obj does have it, add the value for that key to the pairs var,
// and add 1 to that key/value value in the map obj.

// After the loop is over, return the variable pairs

// This way, it's only linear!

var numIdenticalPairs = function(nums) {
    let pairs = 0
    let map = {}
    for(let each = 0; each < nums.length; each++){
        if(!map[nums[each]]){
            map[nums[each]] = 1
        }else{
            pairs = pairs + map[nums[each]]
            map[nums[each]] = map[nums[each]] + 1
        }
    }
    return pairs
};

console.log(numIdenticalPairs([1, 2, 3, 4, 1, 2, 1, 3, 4, 2, 4]))