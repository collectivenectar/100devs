// Parameters: Given a string containing ".", "-", or " "
// Return: Return the decoded version of the string using the method:
//      MORSE_CODE Object, which is an index of morse code to letter
//      key: values?

// Example: 
// decodeMorse("···· · −·−−   ·−−− ··− −·· ·") => "HEY JUDE"

// Pseudocode:

// split the parameter morseCode from a string to an array with character sets as an element
// and store it in 'chunks' - do this using " " as the parameter to count spaces as
// separating chunks of "." and "-" to be translated by the MORSE_CODE object key
// with those combinations of "." and "-".

// create a string variable 'words' to add each letter to from the MORSE_CODE object
// Then begin a loop from the first character of the morseCode string to the last
// For each chunk:

// see if the chunk is empty(there are still remaining extra whitespaces after 
// split(" "))

// If the next one is empty then this is the first " " so add a space to the end
// of a word.

// Otherwise translate the string using the MORSE_CODE object and add the translated
// character to the 'words' variable.

// the loop ends, so after that

// return what's in the 'words' variable, but first trim() any whitespace.

decodeMorse = function(morseCode){
    let chunks = morseCode.split(" ")
    let words = ""
    for(let eachCode = 0; eachCode < chunks.length; eachCode++){
      if(chunks[eachCode] === "" && chunks[eachCode + 1] === ""){
        words = words + " "
      }else{
        if(chunks[eachCode] !== ""){
          let letter = MORSE_CODE[chunks[eachCode]]
          words = words + letter
        }
      }
    }
    return words.trim()
  }