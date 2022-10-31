// Parameters: Given an array of nums
// Return: Return the element that is the majority element, i.e. more than %50
// of the elements are filled with this value.

// Pseudocode: 

// Using a map, just keep track if the current count of the element you are looking at
// has reached more than %50 of the length of the array.

// Create a JS object for mapping,
// Check if the array length is less than 3, if so just return the first element.
// Otherwise, begin looping through the array, each time adding to the map object:
// if a key/value pair doesn't exist for this element, add one to the map with value
// set to 1
// Increment the value +1 if the key already exists
// Then check after incrementing if the key/value pair has a value of higher than
// half the length of the array (both numbers). If so return the element, ending
// the loop.

var majorityElement = function(nums) {
    let map = {}
    if(nums.length < 3){
        return nums[0]
    }
    for(let each = 0; each < nums.length; each++){
        if(!map[nums[each]]){
            map[nums[each]] = 1
        }else{
            map[nums[each]] = map[nums[each]] + 1
            if(map[nums[each]] >= nums.length / 2){
                return nums[each]
            }
        }
    }
    
};

console.log(majorityElement([1]) === 1)
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2)
console.log(majorityElement([0, 0, 0, 1, 1, 1, 1]) === 1)