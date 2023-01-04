// Given a string and an array of indices, return the string rearranged by the given indices:
// i.e. put s[0] at indices[0], etc
// Parameters: Given a string, and an array of indices
// Return: Rearrange the characters in the string according to the new pattern given in the array
// Examples:

// restoreString("Hannah", [5, 4, 3, 2, 1, 0]) => "hannaH"
// restoreString("", []) => ""
// restoreString("", []) => ""
// restoreString("", []) => ""

// Pseudocode:

// Start by converting the given string into an array of individual characters, 'stringed'
// Then create a new empty array 'results' with the same length as 'stringed' to place all
// the characters in after rearranging.
// Then loop through the array of characters, each time placing the character
// in the results array according to the value of the element in the indices array.
// Once done, join all the elements together as a string ( using .join() )
// and return the resulting string.

var restoreString = function(s, indices) {
    let stringed = s.split("")
    let results = new Array(stringed.length)
    for(let letter = 0; letter < stringed.length; letter++){
        results[indices[letter]] = stringed[letter]
    }
    return results.join("")
};