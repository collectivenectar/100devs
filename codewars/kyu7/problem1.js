var number = function(array) {
  let arrayNums = Array.from({length: array.length}, (v, i) => i)
  let newObjs = []
  for(const num in arrayNums){
    newObjs.push(`${Number(num) + 1}: ${array[num]}`)
  }
  return newObjs
}

console.log(number(["a", "b", "c"]))
