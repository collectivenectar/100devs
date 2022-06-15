// Parameters : given a string of normal written word, sometimes with whitespace
// on the ends
// Return : Return the same string with every other word reversed(it's characters)
// including any punctuation.
// Examples: given "Hey, how's it going?" => "Hey, s'woh it ?gniog"
// Pseudocode:

// trim the string first, then break it into words using split.
// using map, split each word to an array and reverse it starting at index === 2
// as long as it's divisible by 2, then join("") it again and return it.
// otherwise just return the same word without changing it.
// After map, join all the words and return the result.

function reverse(str){
  return str.trim().split(" ").map((element, index, array) => {
    if((index + 1) % 2 === 0){
      return element.split("").reverse().join("")
    }
    else{
      return element
    }
  }).join(" ")
}
