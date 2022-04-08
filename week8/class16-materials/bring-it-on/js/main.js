// *Variables*
// Create a variable and console log the value
let something = 3;
console.log(something)
// Create a variable, add 10 to it, and alert the value
let somethingElse = 2;
somethingElse += 10;
alert(somethingElse)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subDiff(a, b, c, d){
  let result = d - c - b - a
  alert(result)
}
// Create a function that divides one number by another and returns the remainder
function quotientRem(a, b){
  return a % b
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumJumanji(a, b){
  let sum = a + b;
  if (sum > 50){
    alert("JUMANJI")
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function productZebra(a, b, c){
  let product = a * b * c
  if (product % 3 == 0){
    alert("ZEBRA")
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordLoop(string, num){
  for (let i = 1; i <= num; i++){
    console.log(string)
  }
}
