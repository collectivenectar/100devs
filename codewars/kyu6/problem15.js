// Parameters: provided a string of text, real words in sentences w/o punctuation
// Return: return an encrypted version of the string, by changing the first character
// to ascii code, and switching the positions of the second and last letter.
// Examples: given "an" => "65n", "any" => "65yn"
// Pseudocode:

var encryptThis = function(text) {
  let eachWordArray = text.split(" ")
  // a nested function to pass in individual words one at a time
  let wordProcessor = (word) => {
    // define rules for words where the second letter is the last letter
    if(word.length <= 2){
      if(word.length > 1){
        //if a 2 letter word, return the ascii first, and the second letter unchanged
        return word.charCodeAt(0) + word[1]
      }
      else{
        //if just 1 letter word return ascii
        return word.charCodeAt(0)
      }
    }
    // otherwise operate normally
    else{
      // define the first letter as ascii code
      let asciiFirst = word.charCodeAt(0)
      // define the last letter value
      let lastLetter = word[word.length - 1]
      // define the second letter value
      let secondLetter = word[1]
      // define a new word to pass these values to
      let encrypted = ""
      // add asciiFirst to encrypted
      encrypted = encrypted + asciiFirst
      // add last letter value
      encrypted = encrypted + lastLetter
      // add the remaining string until the last character
      encrypted = encrypted + word.slice(2, word.length - 1)
      // add the secondLetter
      encrypted = encrypted + secondLetter
      //return the encrypted word
      return encrypted
    }
  }
  //return a string from a new array, .join(" ")-ed, adding one encrypted word
  // at a time
  let encrypted = (eachWordArray) => {
    // create a new array to store the words in.
    let arrayNew = []
    for(let word = 0; word < eachWordArray.length; word++){
      let encryptedWord = wordProcessor(eachWordArray[word])
      arrayNew.push(encryptedWord)
    }
    return arrayNew.join(" ")
  }
  return encrypted(eachWordArray)
}

console.log(encryptThis("A wise old owl lived in an oak"))
