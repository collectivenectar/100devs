// Parameters: Given two strings, one with a bunch of different letters in no
// particular order, and the other one is a word.
// Return true if you can make the second string with the letters of the first string.
// Remember you can't count a letter more than once.

// Example: scramble("ssterreraset", "steers") => true
// scramble("strrrerats") => false

// Pseudocode:

// This is really the problem of matching type and occurrence of a character
// So, loop through the letters of the second string.
// For each letter, take both the first string and the second string, and split
// them into their own array. Then, filter each array, matching by the
// current letter - meaning: remove all other characters that arent the same as
// the current letter
// If the length of the second filtered array is larger than the length of the first,
// Then there aren't enough letters to spell the word. Return false if this happens.
// Otherwise once the loop is over return true.

function scramble(str1, str2) {
 for(let letter = 0; letter < str2.length; letter++){
   let numOfLetters = array => {
     return array.filter( char => char === str2[letter]).length
   }
   if(numOfLetters(str1.split("")) < numOfLetters(str2.split(""))){
     return false
   }
 }
  return true
}
