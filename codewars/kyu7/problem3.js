// return the sum of the two lowest numbers in the array

// Sort small to large, then splice the first two and reduce

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => {
    if(a > b){
      return 1
    }
    else if(a < b){
      return -1
    }
    else{
      return 0
    }
  }).splice(0, 2).reduce((prev, curr) => prev + curr)
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
