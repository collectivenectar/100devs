// Parameters: Given a sentence (String)
// Return: Return the sentence with all the letters of each word reversed - not reversing the order of the words themselves,
// just the letters
// Example:

// reverseWords("Don't you want me baby? Don't you want me Ohhhh") => "t'noD uoy tnaw em ?ybab t'noD uoy tnaw em hhhhO"
// reverseWords("There is something rotten in the state of Denmark") => "erehT si gnihtemos nettor ni eht etats fo kramneD"
// reverseWords("Words, words, words") => ",sdroW ,sdrow sdrow"

// Pseudocode:
// To reverse just the words but not the order of the words in the sentence, first, split the string
// at points between the " " spaces, and store each word in a variable as an array of individual words
// Then, loop through the array, each time splitting each word into an array of individual letters, reversing
// the order of that array, and then rejoining them as a string and replacing the current word with the reversed word.
// Finally, once the loop is completed, return the array of reversed words rejoined as a string with " " between
// each word again.

var reverseWords = function(s) {
    let words = s.split(" ")
    for(let each = 0; each < words.length; each++){
        words[each] = words[each].split("").reverse().join("")
    }
    return words.join(" ")
};
