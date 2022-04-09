//given a string, return the string using the ROT13 cypher. Non alphabetical characters are left alone.

//Created an array to contain the alphabet, loop through the given string, and filter for non alphabetical characters.
//if the character is upper or lower case, return an upper or lower case cyphered version.
//using indexOf() to pull the given character at i, I return the index, plus 13, in a modulus of length
//of the array of alphabetical letters. Adding this one at a time to the cyphered string, and then
//returning it at the end.

function rot13(message){
  let cyphered = ""
  let alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  for(i = 0; i < message.length; i++){
    if(/[A-Za-z]/.test(message[i])){
      if(message[i].toUpperCase() === message[i]){
        cyphered = cyphered + alph[(alph.indexOf(message[i].toLowerCase()) + 13) % alph.length].toUpperCase()
      }
      else{
        cyphered = cyphered + alph[(alph.indexOf(message[i]) + 13) % alph.length]
      }
    }
    else{
      cyphered = cyphered + message[i]
    }
  }
  return cyphered
}

console.log(rot13("test"))
