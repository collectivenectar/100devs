// Parameters: Given a string
// Return: Return the string with all duplicates of any words removed
// Example: removeDuplicateWords("hey hey hey hey hey") => "hey"
// Pseudocode:

// Using a JS object, I'm just going to iterate through each word in the string by
// first splitting the string into an array of words with spaces removed.
// if the word doesn't exist in the js object, put it in there as a key, and push
// the word to a results array.
// if it does exist, do nothing, this skips the word.
// At the end, return the results array rejoined into one string with spaces injected.

function removeDuplicateWords (s) {
    let words = s.split(" ")
    let map = {}
    let results = []
    for(let word = 0; word < words.length; word++){
      if(!map[words[word]]){
        map[words[word]] = 1
        results.push(words[word])
      }
    }
    return results.join(" ")
  }