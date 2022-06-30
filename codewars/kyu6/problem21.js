// Parameters : Given a string, either unencrypted or encrypted
// Return : return an encrypted version of the string, or decrypted. The pattern is
// one where the odd indexes of the string are separated from the evens, concatenated,
// and then concatenated with the evens, like so "[odds][evens]"
// For decryption, reverse the process. The parameter 'n' indicates how many times
// you must repeat the process on the same string before returning the result.

// if n is less than 0 or the 'text' parameter is empty, just return 'text' paramater as the result

// Example : encrypt("Hello World", 3) => "ooelWlHr ld",
// decrypt("ooelWlHr ld", 2) => "el olHloWrd"

// Pseudocode :

// for encrypt:
// if n is less than 0 or text is false, return text
// create a holding array for multiple encryption passes, where I'll just return
// the last element in the array as the answer.
// create a string var to store odds and evens separately
// loop through the length of the text - if even, concat to even string var,
// if odd, concat to odd string var
// concat the two string vars together and return the result

// for decrypt:
// slice the string into two separate vars to store
// create an array to push individual characters from each group one at a time
// loop through using the length of the original encrypted text
// if even, push current index divided by two,
// if odd push current index divided by two and then use math.floor to push down
// to the next integer below it
// use join to convert the array to a string, and voila! decrypted.

function encrypt(text, n) {
  if(n < 0 || !text){
    return text
  }
  let iterations = [text]
  let encryptOnce = (str) => {
    let odds = ""
    let evens = ""
    for(let char = 0; char < str.length; char++){
      if(char % 2 === 0){
        evens = evens + str.charAt(char)
      }
      else{
        odds = odds + str.charAt(char)
      }
    }
    return odds + evens
  }
  for(let times = 0; times < n; times++){
    iterations.push(encryptOnce(iterations[iterations.length - 1]))
  }
  return iterations[iterations.length - 1]
}

function decrypt(encryptedText, n) {
  if(encryptedText === ""){
    return ""
  }
  let iterations = [encryptedText]
  let decryptOnce = (str) => {
    let odds = str.slice(0, str.length / 2)
    let evens = str.slice(str.length / 2, str.length)
    let newString = []
    for(let char = 0; char < encryptedText.length; char++){
      if(char % 2 === 0){
        newString.push(evens[char / 2])
      }
      else{
        newString.push(odds[Math.floor(char / 2)])
      }
    }
    return newString.join("")
  }
  for(let times = 0; times < n; times++){
    iterations.push(decryptOnce(iterations[iterations.length - 1]))
  }
  return iterations[iterations.length - 1]
}
console.log(encrypt("Hello World", 3))
console.log(decrypt("ooelWlHr ld", 2))
