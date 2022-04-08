function nameNAge(){
  console.log("Jon");
  console.log("35")
}
function addSubMultDiv(){
  console.log(6 + 3)
  console.log(6 - 3)
  console.log(6 * 3)
  console.log(6 / 3)
}
//9, "4 + 5", 45

function askFullName(){
  let firstLast = input("Provide your first and last name");
  console.log(`Hey, ${firstLast} how are you?`)
}
//(2, 10, 102, 30, 40, 10, 2.5)
function vatCalc(){
  let rawPrice = input("What is the pre-VAT price?");
  let finalPrice = rawPrice + (rawPrice * (20.6/100))
  return finalPrice;
}
function celsToFahr(cels){
  return (cels * 9/5) + 32;
}

let number1 = 5;
let number2 = 3;

number2 = 5;
number1 = 3;

console.log(number1)
console.log(number2)

function followingDay(dayName){
  let dayArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  let loweredName = dayName.toLowerCase();
  if(dayArray.includes(loweredName)){
    for(let i = 0; i < dayArray.length; i++){
      if(dayArray[i] == loweredName){
        if (dayArray[i] != dayArray[dayArray.length - 1]){
          console.log(dayArray[i + 1])
        }
        else{
          console.log(dayArray[0])
        }
      }
    }
  }
}

function twoNums(num1, num2){
  if (num1 < num2){
    console.log(`${num1} is less than ${num2}`)
  }
  else if(num2 < num1){
    console.log(`${num2} is less than ${num1}`)
  }
  else{
    console.log(`${num1} and ${num2} are equal`)
  }
}
// ----------------------------------------------
function daysInAMonth(month){
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if(month < 1 || month > 12){
    return "no such month"
  }
  else{
    return months[month];
  }
}

function oneSecMore(hours, minutes, seconds){
  let newSeconds = seconds++;
  let newMinutes = minutes;
  let newHours = hours;
  if (newSeconds == 60){
    newSeconds = 1
    newMinutes++
    if(newMinutes == 60){
      newMinutes = 1
      newHours++
    }
  }
  console.log(newHours, newMinutes, newSeconds)
}

//already did chap4 earlier

function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}
// let firstName = input("Please provide your first name");
// let lastName = input("Please provide your last name");
// console.log(sayHello(firstName, lastName));

function square1(x) {
  let squares = []
  for(let i = 0; i <=10; i++){
    squares.push(i * i)
  }
  return squares
}

const square2 = x => {
  let squares = []
  for(let i=0; i<=10;i++){
    squares.push(i*i)
  }
  return squares
};

function min(num1, num2){
  if (num1 < num2){
    return num1
  }
  else if (num2 < num1){
    return num2
  }
  else{
    return "numbers are equal"
  }
}
function basicCalc(num1, operator, num2){
  if (operator == "+"){
    return num1 + num2
  }else if(operator == "-"){
    return num1 - num2
  }else if(operator == "*"){
    return num1 * num2
  }else if(operator == "/"){
    return num1 / num2
  }else{
    return "unknown operator"
  }
}
function circleAreaCircumference(radius){
  return Math.PI * (radius * 2), " ", Math.PI * (radius ** 2);
}

//eloquent JS tasks

function triangleOctothorp(num){
  let octos = ""
  for(let i=1; i <= num; i++){
    octos = octos + "#"
    console.log(octos)
  }
}

function checkerboard(width, height){
  for(let i = 0; i < height; i++){
    let row = "";
    if(i % 2 == 0){
      for(let j = 0; j < width; j++){
        if(j % 2 == 0){
          row += " "
        }
        else{
          row += "#"
        }
      }
    }
    else{
      for(let k = 0; k < width; k++){
        if(k % 2 == 0){
          row += "#"
        }
        else{
          row += " "
        }
      }
    }
    console.log(row)
  }
}

function isEven(num){
  if(num == 0){
    return "even"
  }
  else if(num == 1){
    return "odd"
  }
  else if(num < 0){
    return isEven(Math.abs(num))
  }
  else{
    return isEven(num - 2)
  }
}
function countBs(testString){
  let numOfBs = 0;
  for(let i = 0; i < testString.length; i++){
    if(testString[i] === "B"){
      numOfBs++
    }
  }
  return numOfBs
}

function countCapitalLetterX(testString, capLetter){
  let numOfCaps = 0;
  for(let i = 0; i < testString.length; i++){
    if(testString[i] === capLetter){
      numOfBs++
    }
  }
  return numOfBs
}
