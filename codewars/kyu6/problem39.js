// Parameters: given a string made up of several pairs, each a number followed by a word
// Return: true if every number + word pair is matched, i.e. the number matches
// the length of the word in characters.
// Return true if the message is "", false if the message has a broken pair, like
// "2to2" or "hello8everyone"
// Example:
// isAValidMessage("5hello4code4wars") => true
// isAValidMessage("4hello")

// Pseudocode:

// first check if the message is empty, "", if so return true

// second check if the first character is not a number, or if the last character
// IS a number. Any broken pair in the middle will still return false by later
// logic

// declare an array called split to store the broken up pairings

// declare one string variable for strings and one for numbers just to separate
// logic and make it easier to read.

// Loop through the message to break it down into number / word pairs, pushing
// either a number or a string to the "split" array.

// If the current character is a number, see if the next character is also a
// number. If so, just add the number to the numholder string, and wait for the
// next loop to push it.

// If the next character is not a number, add the character to the numholder and
// push the whole numholder string to split array. Then reset numholder value to "".

// Next an else if - this is only if the current character is not a number

// if the current index in the loop is not the last, and the next character is
// a number, add the current character to the stringholder, push the whole string
// to the split array, and reset the stringholder value to "".

// Now the final else - still if the character is not a number

// If the current index in the loop is the last, add the current character to the
// stringholder and push the whole string to split.

// If the current index is not the last, then just push the current string to the
// stringholder, but don't push the whole string, leave it for the next logic loop.

// This finishes the logic for parsing. Now to checking if the number matches the
// length of the following word.

// Loop through the split array, going up 2 indexes at a time.

// If the current element(a number) doesn't match the length of the next
// element(a word) then return false.

// Otherwise when the loop is finished, and none have return false, return true.

function isAValidMessage(message){
  if(message === ""){
    return true
  }
  if(!Number(message[0]) || Number(message[message.length - 1])){
    return false
  }
  let split = []
  let stringHolder = ""
  let numHolder = ""
  for(let char = 0; char < message.length; char++){
    if(Number(message[char])){
      if(Number(message[char + 1])){
        numHolder = numHolder + message[char]
      } else{
        numHolder = numHolder + message[char]
        split.push(numHolder)
        numHolder = ""
      }
    } else if(char < message.length - 1 && Number(message[char + 1])){
      stringHolder = stringHolder + message[char]
      split.push(stringHolder)
      stringHolder = ""
    } else{
      if(char === message.length - 1){
        stringHolder = stringHolder + message[char]
        split.push(stringHolder)
      } else{
        stringHolder = stringHolder + message[char]
      }
    }
  }
  for(let pairs = 0; pairs < split.length; pairs = pairs + 2){
    if(Number(split[pairs]) !== split[pairs + 1].length){
      return false
    }
  }
  return true
}

console.log(isAValidMessage("13hellocodewars2to"))
