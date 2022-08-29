// Parameters: Given two arrays, both arrays contain strings of different words.
// Return: Return which words in the first array contain words in the second array.
// Sort the return array alphabetically, and remove duplicates.

// Example: inArray(["alive", "return", "rectangle", "turning"], ["live", "turn"])
// => ["alive", "return", "turning"]

// Pseudocode:
// First create an array to store the results in. - 'isIn'
// Then create a quadratic loop, with the outer loop being the second array elements,
// and the inner loop the first array elements.
// Then, if the word in array 2 is inside the word in array 1, first check if the
// word in array 1 is already in the 'isIn' array, and if not, push the word in
// array1 to 'isIn'

// Then, sort the array alphabetically using the .sort() method just comparing
// the string value directly.

function inArray(array1,array2){
  let isIn = []
  for(let string = 0; string < array2.length; string++){
    for(let subString = 0; subString < array1.length; subString++){
      if(array2[string].includes(array1[subString])){
        if(!isIn.includes(array1[subString])){
        isIn.push(array1[subString])
      }
      }
    }
  }
  return isIn.sort((a, b) => {
    if(a < b){
      return -1
    }else if(a > b){
      return 1
    }else{
      return 0
    }
  })
}
