



// JS Info Objects Tasks
//
// let user = {};
// user.name = "John";
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name
//
// console.log(user)
//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0
// for(key in salaries){
//   sum += salaries[key]
// }
// console.log(sum)
//
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My Menu"
// }
// function multiplyNumeric(toMultiply){
//   for(key in toMultiply){
//     if(typeof toMultiply[key] === "number"){
//       toMultiply[key] = toMultiply[key] * 2
//     }
//   }
// }
// multiplyNumeric(menu)
// let copy = {}
// for(key in menu){
//   copy[key] = menu[key]
// }
//
// let copyAssign = {}
// Object.assign(copyAssign, menu, salaries)
// console.log(copyAssign)
//

function makeUser(){
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name)

let textAlert = document.getElementsByClassName('test')



function calculator(){
  let read = () => {
    let input = prompt("Enter two numbers, like this : '[num1, num2]'")
    alert(input)
  }
}
let calc = calculator()

calc.read()




//
//
// function Circle(radius){
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0};
//   this.getDefaultLocation = function(){
//     return defaultLocation;
//   }
//
//   this.draw = function() {
//     console.log('draw');
//   }
//
//   Object.defineProperty(this, 'defaultLocation', {
//     get: function() {
//       return defaultLocation;
//     }
//     set: function(value){
//       if(!value.x || !value.y){
//         throw new Error('Invalid location.')
//       }
//       defaultLocation = value;
//     }
//   });
// }
// const circle = new Circle(10);
// circle.defaultLocation = [1, 3]
