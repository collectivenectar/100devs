// Parameters: Given a string of unknown length containing words
// Return: Return the string transformed, where any upper case letter
// turned lower case, and any lower case letter is turned upper case.
// may include leading and trailing spaces. The order of the words is
// reversed also.

// Example: stringTransformer('Example string') => 'STRING eXAMPLE

// Pseudocode:
// split the string into separate words by " " into an array variable
// create an array to hold transformed words
// iterate over the split words array using a for loop
// inside the loop, create an empty string variable to store the results
// split each word string into letters, into an array variable
// nest another for loop inside, and for each letter, turn lowercased letters
// into upper, upper into lower. You can tell if it's upper if .toLowerCase()
// has an effect on it.
// one the loop has finished, push the finished string variable into the
// transformed words array.
// reverse the array order, and join it into a string with " " spaces between
// elements.
// return the results.


function stringTransformer(str) {
  let split = str.split(" ")
  let newWords = []
  for(let word = 0; word < split.length; word++){
    let transform = ""
    let letters = split[word].split("")
    for(let letter = 0; letter < letters.length; letter++){
      if(letters[letter].toLowerCase() !== letters[letter]){
        transform = transform + letters[letter].toLowerCase()
      }
      else{
        transform = transform + letters[letter].toUpperCase()
      }
    }
    newWords.push(transform)
  }
  return newWords.reverse().join(" ")
}
