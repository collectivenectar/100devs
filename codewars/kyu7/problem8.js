// return the sum of a sequence starting at begin, ending at end, and adding 1 step per element

// Using a for loop to add steps to a variable storing a tally count,
// just summing up the series without an array.

const sequenceSum = (begin, end, step) => {
  if(begin > end){
    return 0
  }
  let array = 0
  for(let i = begin; i <= end; i = i + step){
    array = array + i
  }
  return array
}
console.log(sequenceSum(2, 10, 2))
