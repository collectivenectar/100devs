// *Variables*
// Create a variable and console log the value
let something = "nothing"
console.log(something)
// Create a variable, add 10 to it, and alert the value
let smallNumber = 14;
smallNumber += 10;
alert(smallNumber);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function minusFour(n1, n2, n3, n4){
  const difference = n1 - n2 - n3 - n4;
  alert(difference)
}
// Create a function that divides one number by another and returns the remainder
function remainder(num1, num2){
  return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiSum(first, second){
  const sum = first + second;
  if (sum > 50){
    alert("Jumanji");
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebraThree(one, two, three){
  const product = one * two * three;
  if (product % 3 == 0){
    alert("ZEBRA");
  }
}
