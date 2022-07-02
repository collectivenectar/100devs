// Parameters: Given an array, which only in a few cases might be empty for a method
// that requires at least one element, otherwise will usually have something in it

// Return: There are six methods to extend the prototype with, and each must NOT
// mutate the original array.

// square() all values squared
// cube() all values cubed
// average() returns the average value of the elements; on an empty array must return NaN
// sum() sum of all values
// even() returns array of only the even numbers
// odd() returns an array of only the odd numbers

// Example: let ex = [0, 1, 2, 3, 4, 5]
// ex.square => [0, 1, 4, 9, 16, 25]
// ex.cube => [0, 1, 8, 27, 64, 125]
// ex.average => 2.5
// ex.sum => 15
// ex.even => [0, 2, 4]
// ex.odd => [1, 3, 5]

// Pseudocode:
// For all the methods, just declare a temp array to return results in to avoid mutating
// each also then uses a for loop, with its range from 0 to this.length, this being the array object
// for square, push to the temp array the current element squared,
// for cube, do the same but cube it
// for average, check first if the array object has a length or if the array is empty
// then otherwise use the other prototype method I wrote for 'sum' to get the sum,
// then return the sum divided by this.length
// for even, just check if the element modulus 2 returns 0, if so push it to temp array,
// and return the array when done
// for odd, add a ! to the beginning to reverse the logic and do the same thing.

Array.prototype.square = function() {
  let temp = []
  for(let element = 0; element < this.length; element++){
    temp.push(this[element] ** 2)
  }
  return temp
}
Array.prototype.cube = function() {
  let temp = []
  for(let element = 0; element < this.length; element++){
    temp.push(this[element] ** 3)
  }
  return temp
}
Array.prototype.average = function() {
  if(!this.length || this === []){
    return NaN
  }
  else{
    let sum = this.sum()
    return sum / this.length
  }
}
Array.prototype.sum = function() {
  let sum = 0
  for(let element = 0; element < this.length; element++){
    if(Number(this[element])){
      sum = sum + this[element]
    }
  }
  return sum
}
Array.prototype.even = function() {
  let evens = []
  for(let element = 0; element < this.length; element++){
    if(this[element] % 2 === 0){
      evens.push(this[element])
    }
  }
  return evens
}
Array.prototype.odd = function(){
  let odds = []
  for(let element = 0; element < this.length; element++){
    if(this[element] % 2 !== 0){
      odds.push(this[element])
    }
  }
  return odds
}
console.log([0, 1, 2, 3, 4, 5].even())
