// Parameters: Given a string as a pascal cased function name
// Return: Return the function name converted to snake case
// Example: toUnderscore("TestController") => "test_controller"
// Pseudocode:

// First, if given a number as the string, just return the number as a string.
// Then, create a var 'words' to store pascal case sections I parse from the loop
// Then, create a var 'last' to store the last character I just processed in the loop
// Then, create a var to store the current word I'm parsing in the loop
// Then begin the loop from beginning to end of the string.

// For each letter, if it's empty, I'm at the beginning, so set 'last' to that letter
// and put the first letter in the 'word' var to start parsing the first word.

// Otherwise, if the last letter was uppercase and the current letter is uppercase
// push what's in word to words and start the word over, and set last to the current
// letter

// Then, if the current letter is lowercase, push the letter to the word var, and
// set last to the current letter.

// Finally, if the current letter is uppercase, push whats in word to words and
// start word and last over again with the current letter.

// Once the loop is over, push the final word to words and then join it together
// with "_"

function toUnderscore(string) {
  if(Number(string)){
    return `${string}`
  }
  let words = []
  let last = ""
  let word = ""
  for(let letter = 0; letter < string.length; letter++){
    if(last === ""){
      word = word + string[letter]
      last = string[letter]
    }else if(last.toLowerCase() !== last){
      if(string[letter].toLowerCase() !== string[letter]){
        words.push(word.toLowerCase())
        word = ""
        last = string[letter]
      }else{
        word = word + string[letter]
        last = string[letter]
      }
    }else{
      if(string[letter].toLowerCase() !== string[letter]){
        words.push(word.toLowerCase())
        word = string[letter]
        last = string[letter]
      }else{
        word = word + string[letter]
        last = string[letter]
      }
    }
  }
  words.push(word.toLowerCase())
  return words.join("_")
}
