//--- Easy
//create a variable and assign it a number
let number = 3;
//minus 10 from that number
number -= 10;
//print that number to the console
console.log(number);
//--- Medium
//create a variable that holds a value from the input
let userInput = input("need input number");
//add 25 to that number
userInput += 25;
//alert that number
alert(userInput);
//--- Hard
//create a variable that holds the h1
let h1Holder = document.querySelector('h1');
//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)
function sum(){
  console.log(number + userInput);
}
