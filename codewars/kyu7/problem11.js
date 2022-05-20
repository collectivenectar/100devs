// P receive a string, one word. determine if the word is an isogram, or if it
// has no repeating letters. disregard if the letter is lower case of upper case
// Return true or false, indicating if the word is an isogram.
// E for example, the word aba has repeated the letter 'a' once, versus the word
//    Dermatoglyphics, which has no repeat letters. 1 : false, 2 : true.
// Pseudocode ; hashmap the string to count occurence.
// if any keys in the hashmap have a count over 1, return false,
// else return true.


function isIsogram(str){
  let count = {}
  for(let letter = 0; letter < str.length; letter++){
    let lowered = str[letter].toLowerCase()
    if(!count[lowered]){
      count[lowered] = 1
    }
    else{
      count[lowered] = count[lowered] + 1
    }
  }
  for(let key = 0; key < Object.keys(count).length; key++){
    if(count[Object.keys(count)[key]] > 1){
      return false
    }
  }
  return true
}
console.log(isIsogram("aba"))
