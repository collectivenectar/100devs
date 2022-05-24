// given a string(sometimes has more than one space between words) of words, return
// the same order of words with all letters reversed. Keep spaces where they were.

// P given a string
// Return a string
// Example : given "A white hat" => "A etihw tah"
// Pseudocode

// split the string into words by using " "
// make an empty array to store reversed words in the same order
// run a loop to iterate over split, pushing the reversed words to
// reversed array.
// return the reversed array joined.

function reverseWords(str) {
  let split = str.split(" ")
  let reversed = []
  for(let i = 0; i < split.length; i++){
    reversed.push(split[i].split("").reverse().join(""))
  }
  return reversed.join(" ")
}
