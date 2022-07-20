// Parameters: Given a string of unknown length with letters
// Return: Return a map containing the counts of each letter in the string,
// where the key is the letter, and the value is the count.
// Example: letterCount("Hello World") =>
// { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }
// Pseudocode:

// Create an object {} to store the map
// iterate over the string from 0 to length - 1
// if the key doesn't exist, create it and give it a value of 1
// if it does, set it equal to current value plus 1
// return the object

function letterCount(s){
  let obj = {}
  for(let letter = 0; letter < s.length; letter++){
    if(!obj[s[letter]]){
      obj[s[letter]] = 1
    }
    else{
      obj[s[letter]] = obj[s[letter]] + 1
    }
  }
  return obj
}

console.log(letterCount("Hello World"))
