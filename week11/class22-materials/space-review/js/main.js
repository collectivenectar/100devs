//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numbers = [2, 33, 16, 834, 326]
let initialValue = 0
let sum = numbers.reduce((previous, next) => previous + next, initialValue)
console.log(sum)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function squaredElements(array){
  let squaredArray = array.map((element) => {return element ** 2})
  return squaredArray
}
squaredElements(numbers)

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string){
  let split = string.split("")
  split.reverse()
  return split.join("")
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function isPalindrome(string){
  if(string === reverseString(string)){
    console.log("is a palindrome")
  }
  else{
    console.log("not a palindrome")
  }
}
isPalindrome("hannah")
