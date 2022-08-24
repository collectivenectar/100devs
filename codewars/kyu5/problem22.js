// Parameters: Given a string of numbers separated by spaces

// Return: Return the numbers, reordered by a weighting system, where the weight
// of a number is equal to the sum of its digits. Order number weights in ascending
// order, and if the weights are equal, then order by the usual string value comparison.

// Example: orderWeight("103 123 4444 99 2000") => "2000 103 123 4444 99"

// Pseudocode:

// Split the string into the individual number strings,
// then return the sorted array rejoined with spaces, with a weight calculator
// built into the sort function.

// The weight calculator just splits the strings, creates a sum var to hold the
// total. Then loop through the split string array, adding the current element
// to the sum var, and returns the sum.

// Then the sort function uses that weight to compare, and if equal just compares
// the string itself.

function orderWeight(strng) {
  let split = strng.split(" ")
  return split.sort((a, b) => {
    let weight = (weightNum) => {
      let digits = weightNum.split("")
      let sum = 0
      for(let digit = 0; digit < digits.length; digit++){
        sum = sum + Number(digits[digit])
      }
      return sum
    }
    if(weight(a) > weight(b)){
      return 1
    }else if(weight(a) < weight(b)){
      return -1
    }else{
      if(a < b){
        return -1
      }else if(a > b){
        return 1
      }else{
        return 0
      }
    }
  }).join(" ")
}

orderWeight("103 123 4444 99 2000")
