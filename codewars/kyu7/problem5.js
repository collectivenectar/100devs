// receive array of elements, return whether or not the sum of these elements
// is odd or even

function oddOrEven(array) {
  let positive = 0
  let negative = 0
  for(let i = 0; i < array.length; i++){
    if(array[i] < 0){
      negative += array[i]
    }
    else{
      positive += array[i]
    }
  }
  if((positive + negative) % 2 === 0){
    return "even"
  }
  else{
    return "odd"
  }
}

console.log(oddOrEven([]))
console.log(oddOrEven([1]))
console.log(oddOrEven([0]))
