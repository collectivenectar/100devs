// Parameters: Given an array of strings
// Return: Return an array of strings, where each original string has any
// consecutive duplicate letters removed, and placed into a new array.
// Example:

// dup(["Helllllooooo", "abracccadddabbrra"]) => ["Hello", "abracadabra"]

// Pseudocode:

// make an array to store the new words after processing, called 'words'
// Loop through the given array of strings
// first step in the loop:
// make a var 'newWord' storing an empty string to add letters to
// Nest a second loop inside this loop, going from beginning to end of each string
// Checking each letter of the string, if the 'newWord' string doesn't have the current
// letter already at the end, add the current letter to the end.
// Back outside of this loop, still inside the first, push the final string inside
// 'newWord' to the array 'words'
// After the main loop is done, return the array 'words'

function dup(s) {
  let words = []
  for(let word = 0; word < s.length; word++){
    let newWord = ""
    for(let letter = 0; letter < s[word].length; letter++){
      if(newWord[newWord.length - 1] !== s[word][letter]){
        newWord = newWord + s[word][letter]
      }
    }
    words.push(newWord)
  }
  return words
};
