// Parameters: Given a string, with alphabetical letters, spaces, numbers, and other
// characters.
// Return: Return the string with all alphabetical letters converted using the rot13
// cypher.
// Examples: rot13("EBG13 rknzcyr.") -> "ROT13 example."

// Pseudocode:
// rot13 just shifts any letter up 13 points from it's position in the standard
// ordered alphabet => abcdefghijklmnopqrstuvwxyz
// I know it's not as efficient, but I wanted to see if I could just use half
// the map and just find the index of any letter that doesn't have a key by using
// both object.keys() and object.values() on the same map.

// So, first I split the string into an array of single character elements,
// then loop through it from beginning to end.
// Create a regex filter for alphabetical characters so I don't change non alphs
// Check if the character is upper or lowercase, and store that information.
// Then, if the character doesn't exist in my map, it's one of the n-z characters,
// so just look for it as a value and by finding it's index in the values array
// produce the key at that index to convert it to it's +13 point in the alphabet.
// Then using the previously stored 'lowercase' var, splice the element at that
// point and replace it with the uppercase or lowercase cyphered character.
// then return the array rejoined into a string.

function rot13(str) {
  let rot13 = {
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
  }
  let arrayString = str.split("")
  for(let char = 0; char < arrayString.length; char++){
    let alph = /[a-zA-Z]/
    if(alph.test(arrayString[char])){
      let lowercase = arrayString[char].toLowerCase() === arrayString[char]? true: false;
      let loweredChar = arrayString[char].toLowerCase()
      if(!rot13[loweredChar]){
        let rot13Index = Object.values(rot13).indexOf(loweredChar)
        let converted = Object.keys(rot13)[rot13Index]
        let result = lowercase? converted: converted.toUpperCase();
        arrayString.splice(char, 1, result)
      }else{
        let converted = rot13[loweredChar]
        let result = lowercase? converted: converted.toUpperCase()
        arrayString.splice(char, 1, result)
      }
    }
  }
  return arrayString.join("")
}
