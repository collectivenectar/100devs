// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday;
holiday = "Halloween"
console.log(holiday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let googleFu = "Manchu"
console.log(googleFu.slice(googleFu.length - 3, googleFu.length))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtractFive(n1, n2, n3, n4, n5){
  let oneHundredMinus = 100 - (n1 + n2 + n3 + n4 + n5)
  console.log(Math.abs(oneHundredMinus))
}
subtractFive(2, 6, 20, 45, 35)
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowAndHighOf(n1, n2, n3){
  let set = [n1, n2, n3]
  console.log(Math.max.apply(null, this))
}
lowAndHighOf(2, 6, 1)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
