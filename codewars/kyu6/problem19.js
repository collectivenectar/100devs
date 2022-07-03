// Parameters: given a string
// Return: Return the same string, except with every even index character uppercase,
// and ever odd index character lowercase. Spaces between not counted.
// Example: toWeirdCase("Hello World") => 'HeLlO WoRlD'
// Pseudocode:
// split the string to words and put it in a temp array
// loop over each word letter by letter (2 nested for loops)
// if the char index is even, push uppercase version of char, otherwise lowercase
// rejoin the new words with spaces between them
// return the new string.

function toWeirdCase(string){
  let wordsOnly = string.split(" ")
  let temp = []
  for(let word = 0; word < wordsOnly.length; word++){
    let tempword = ""
    for(let char = 0; char < wordsOnly[word].length; char++){
      if(char % 2 === 0){
        tempword = tempword + wordsOnly[word][char].toUpperCase()
      }
      else{
        tempword = tempword + wordsOnly[word][char].toLowerCase()
      }
    }
    temp.push(tempword)
  }
  return temp.join(" ")
}
console.log(toWeirdCase("Hello World"))
