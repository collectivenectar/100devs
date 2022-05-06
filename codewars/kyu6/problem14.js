// Given a string(a phrase with real words) produce an array of arrays, with each
// sub array element a letter of each word, starting from 0 going to the end.

// However, if there is any word that is longer than that others, you must add
// '' after the last letters of the shorter words, so all subarrays are the same length.

// I started with checking for undefined, but I settled on checking if the current
// position of the letter in rows is higher than the given word length.

function sepStr(str) {
  let result = []
  //separate into words to see which is longest
  let split = str.split(" ")
  split.sort((a, b) => {
    if(a.length > b.length){
      return -1
    }
    else if(a.length < b.length){
      return 1
    }
    else{
      return 0
    }
  })
  let longestWord = split[0].length
  for(let row = 0; row < longestWord; row++){
    //repeat the process according to the length of the longest word(to include "")
    let horizontalSlice = []
    for(let column = 0; column < str.split(" ").length; column++){
      //repeat the process according to how many words in the phrase
      if(row > str.split(" ")[column].length - 1){
        // if this is out of bounds for the word we're looking at, add ''
        horizontalSlice.push("")
      }
      else{
        //otherwise column is the word, row is the letter
        horizontalSlice.push(str.split(" ")[column][row])
      }
    }
    result.push(horizontalSlice)
  }
  return result
}

console.log(sepStr("The Mitochondria is the powerhouse of the cell"))
