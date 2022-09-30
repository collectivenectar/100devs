// Parameters: Given two strings, one to do TitleCase to, and a second string containing words
// that you don't capitalize, unless it's the first word in the string.
// Return: If the strings is empty, return "", if the second string is undefined, treat it as empty.
// Otherwise, return the first string with the first letter of each word capitalized, unless(again),
// the word is in the second parameter and the word is not the first word.
// Example: titleCase("THERE IS NO PLACE LIKE HOME", "is no like") => "There is no Place like Home"
// Pseudocode:
// First off, eliminate edge cases, like the undefined second parameter, or if title is an empty string
// If the case isn't an edge case, create an array to store the resulting capitalized words.
// Then, split each parameter into words with split(" "), storing in 'words' the title param, and
// in 'minors' the exceptions, but all lowercased first
// Then, begin the loop, from the beginning of the title words to the end, each time:
// seeing if the word is in the exceptions array
// if it is, and it's not the first word, push the lowercased version of the word to the results array
// if it is, and it is the first word, lowercase all letters, then uppercase the first letter

// If the word is not in the exceptions array,
// lowercase the whole word, uppercase the first letter,
// and push it to the results array

// Finally, return the results array, after joining it with .join(" ")

function titleCase(title, minorWords) {
    if(minorWords === undefined){
      minorWords = ""
    }
    if(title === ""){
      return ""
    }else{
      let results = []
      let words = title.split(" ")
      let minors = minorWords.toLowerCase().split(" ")
      for(let word = 0; word < words.length; word++){
        if(minors.includes(words[word].toLowerCase())){
          if(word !== 0){
            results.push(words[word].toLowerCase())
          }else{
            let lowerCased = words[word].toLowerCase()
            lowerCased = lowerCased[0].toUpperCase() + lowerCased.slice(1, lowerCased.length)
            results.push(lowerCased)
          }
        }else{
          let lowerCased = words[word].toLowerCase()
          lowerCased = lowerCased[0].toUpperCase() + lowerCased.slice(1, lowerCased.length)
          results.push(lowerCased)
        }
      }
      return results.join(" ")
    }
  }