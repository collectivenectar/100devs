// Parameters: Given an array of integers 'candies' and an integer 'extraCandies'

// Return: Return an array reflecting the same number of elements as 'candies', only
// replace the integers with a boolean true/false, based on whether or not if you added 
// the int 'extraCandies' to the element in 'candies' would it be the greatest element value
// in 'candies'?
// Examples:
// kidsWithCandies([1, 2, 3, 4, 5], 3) => [false, true, true, true, true]
// kidsWithCandies([8, 7, 1], 6) => [true, true, false]
// kidsWithCandies([1, 3, 1, 2, 1], 1) => [false, true, false, true, false]
// Pseudocode:

// Still sorting out how to optimize this one better then O(2n), even if it's still
// O(n) technically, but this is what I have so far:

// First find the maximum by looping through the array.
// Then, loop again, this time adding extraCandies to each element and comparing
// the result with the max value. If it's less,
// replace the element value with false, if more, replace with true.
// After the loop is finished, return the array candies.

var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    for(let check = 0; check < candies.length; check++){
        max = Math.max(candies[check], max)
    }
    for(let compare = 0; compare < candies.length; compare++){
        if((candies[compare] + extraCandies) < max){
            candies[compare] = false
        }else{
            candies[compare] = true
        }
    }
    return candies
};