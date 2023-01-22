// Parameters: Given an array of integers, each integer representing a candy, where a different value represents
// a different candy type, and the length of the array represents the total number of candies the person has.
// Return: Their dentist says they have to cut their candy eating in half (n / 2), but the person wants to maximise
// their variety of candies each day. Return the max different types of candy they can have while still getting
// the maximum number of candies.

// Examples:

// distributeCandies([1, 2, 1, 1]) => 2
// distributeCandies([1, 2, 3, 4, 3, 2, 1, 1]) => 4
// distributeCandies([1, 2]) => 1

// Pseudocode:
// Using a JS Set(), I can quickly determine the number of types of candies present in the array, and simply
// return whichever number is smaller, either half the number of candies, or the total number of types.

var distributeCandies = function(candyType) {
    let types = new Set()
    for(let each = 0; each < candyType.length; each++){
        types.add(candyType[each])
    }
    return Math.min(candyType.length / 2, types.size)
};