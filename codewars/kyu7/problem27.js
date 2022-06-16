// Parameters : Given a string, either an encoded string or an unencoded String,
// one method being encode(str), and the other decode(str).
// How to encode: Take the char code for that character, multiply it by 6, then
// convert back to string.
// Example : Given encode("Hello World!") => "ưɞʈʈʚÀȊʚʬʈɘÆ"
// given decode("ʲɶɪʎɆÀɆʎʚʬÀʸɰɞʸɆÀʂɆʠʠɆÀʈɆʎɌɘɆÀʈɆʎɌɘɆÀʚʎɞɪɆ") => "sigma amor theta kappa lambda lambda omega"
// Pseudocode:
// Split the string into bits, loop over it converting each to charcode, multiplying by 6,
// and pushing to a temp array.
// Then convert from char code number back to string into another temp array,
//  and return join("") back together.
// For the reverse, roughly speaking do the same thing, expect start by converting
// to char code, then DIVIDING by 6, then the rest of the process is the same.

function encode(str) {
  let split = str.split("")
  let charCodes = []
  for(let char = 0; char < split.length; char++){
    charCodes.push(split[char].charCodeAt() * 6)
  }
  let toString = []
  for(let number = 0; number < charCodes.length; number++){
    toString.push(String.fromCharCode(charCodes[number]))
  }
  return toString.join("")
}

function decode(str) {
    let split = str.split("")
    let charCodes = []
    for(let char = 0; char < split.length; char++){
      charCodes.push(split[char].charCodeAt() / 6)
    }
  let toString = []
  for(let number = 0; number < charCodes.length; number++){
    toString.push(String.fromCharCode(charCodes[number]))
  }
  return toString.join("")
}

console.log(decode("ʲɶɪʎɆÀɆʎʚʬÀʸɰɞʸɆÀʂɆʠʠɆÀʈɆʎɌɘɆÀʈɆʎɌɘɆÀʚʎɞɪɆ"))
