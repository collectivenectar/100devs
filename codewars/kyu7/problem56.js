// Parameters: Given a string with some capitalized and uncapitalized characters
// Return: For each capitalized letter, put it's character index in an array, sorted in the ascending order.
// Example: 
// capitals("StArTcOdInG") => [0, 2, 4, 6, 8, 10]
// Pseudocode:

// First thing is to create an array to store the sorted indices.
// Then, loop from beginning to end, comparing the return value of
// calling .toLowerCase() on it, so if toLowerCase() has no effect on
// the value of the letter, then it's a lower cased letter.
// If I find an uppercased letter, then I push only the index
// into the 'capsIndex' array for the return value.
// Then, I return the array!

var capitals = function (word) {
	let capsIndex = []
  for(let letter = 0; letter < word.length; letter++){
    if(word[letter].toLowerCase() !== word[letter]){
      capsIndex.push(letter)
    }
  }
  return capsIndex
};