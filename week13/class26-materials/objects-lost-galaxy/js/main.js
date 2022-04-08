//Create a dog object that has four properties and three methods
let dog = {}

dog.fur = "floofy";
dog.snout = "long";
dog.tail = "swishy";
dog.speed = "zoomy";
dog.speak = function(){
  console.log("woof... wraf")
}
dog.bite = function(){
  console.log("You have been bitten")
}
dog.sit = function(){
  console.log("the dog ignores your request")
}
dog.sit()
dog.bite()
dog.speak()

//Create a pizza object that has four properties and three methods

let pizza = {}
pizza.crust = "stuffed";
pizza.cheese = "mozzarella";
pizza.toppings = ["pepperoni", "mushrooms"]
pizza.sauce = "homemade"
pizza.taste = function(){
  console.log("the crust tastes good!")
}
pizza.reheat = function(){
  console.log("the pizza tastes better somehow")
}
pizza.drop = function(){
  console.log("you dropped your pizza, just dust it off quick, 5 second rule")
}
pizza.drop()
