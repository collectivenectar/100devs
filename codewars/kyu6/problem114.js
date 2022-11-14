// Parameters: Given an array of single string characters(like a word, ['h', 'e', 'l', 'l', 'o'])
// Return: Return the same array, with the elements reversed in place. Case sensitive.
// Example:

// reverseString(["h","e","l","l","o"]) => ["o", "l", "l", "e", "h"]
// reverseString(["H", "a", "n", "n", "a", "h"]) => ["h", "a", "n", "n", "a", "H"]

// Pseudocode:
// I'm just swapping element values, so I'm doing it by using the first half of the indices
// and swapping values with the second half of the indices using a single temporary variable.

// Starting a loop from the beginning of the array, and going until the midpoint(rounded up) of the
// array:
// make a temp variable to store the corresponding element from the other side of the array
// set the element at the other side of the array equal to the current element,
// and set the current element value to the temp variable value.


var reverseString = function(s) {
    for(let each = 0; each < Math.ceil((s.length - 1) / 2); each++){
        let temp = s[s.length - 1 - each]
        s[s.length - 1 - each] = s[each]
        s[each] = temp
    }
};