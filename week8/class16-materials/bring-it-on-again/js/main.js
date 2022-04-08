// *Variables*
// Declare a variable, assign it a value, and alert the value
let something = 4
console.log(something)
// Create a variable, divide it by 10, and console log the value
let somethingElse = 45
somethingElse /= 10
console.log(somethingElse)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function product(a, b, c){
  let product = a * b * c
  console.log(product)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addThenSub(a, b, c, d){
  result = a + b - c - d
  console.log(result)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function oneHundred(a, b, c){
  let result = (100 + a - b) / c
  if (result > 25){
    console.log("WE HAVE A WINNNA")
  }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayCheck(day){
  let dayCheck = day.toLowerCase()
  let dayArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  if (dayArray.includes(dayCheck)){
    for (let i = 0; i <= dayArray.length; i++){
      if (dayArray[i] == dayCheck){
        if (i == 5 || i == 6){
          console.log("weekend")
        }
        else{
          console.log("week day")
        }
      }
      else{

      }
    }
  }
  else{
    console.log("try again!")
  }
}
dayCheck("monday")
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
