// Parameters: Given a string
// Return: Return two versions of the string - one with all the even positions in the string capitalized,
// and one with all the odd positions capitalized. Placed in an array as two elements(strings)
// Example: capitalize("codewars") => ["CoDeWaRs", "cOdEwArS"]
// Pseudocode:

// First I'm just creating a nested function that capitalizes odds or evens of a given string based on a 
// second boolean parameter saying if the capitalization patter is odd or even.

// Inside the function, create a results array,
// loop through the str from 0 to end,
// and for each letter in the string:

// determine if I need to capitalize odds or even.
// if odds, and the letter index is odd, push to results a capitalized version of the character
// if odds and the letter index is even, push to results the unchanged letter
// if evens, etc etc.

// Then in the return value for the main function, place in an array:
// the return value of calling the nested function with a false second param,
// and the return value of calling the nested function with a true second param.

function capitalize(s){
    let pushCapsTo = (str, isOdd) => {
      let results = []
      for(let letter = 0; letter < str.length; letter++){
        if(isOdd){
          if(letter % 2 === 0){
            results.push(str[letter])
          }else{
            results.push(str[letter].toUpperCase())
          }
        }else{
          if(letter % 2 === 0){
            results.push(str[letter].toUpperCase())
          }else{
            results.push(str[letter])
          }
        }
      }
      return results.join("")
    }
   return [pushCapsTo(s, false), pushCapsTo(s, true)] 
  };