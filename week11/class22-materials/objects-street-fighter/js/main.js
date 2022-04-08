//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name, armor, speed, power, health){
  this.name = name
  this.armor = armor
  this.speed = speed
  this.power = power
  this.health = health
  this.punch = function(){
    console.log(`${this.name} threw a punch with ${this.power} power`)
  }
  this.kick = function(){
    console.log(`${this.name} threw a roundhouse kick with ${this.power} power`)
  }
  this.tookDamage = function(damage){
    this.health -= damage
    console.log(`${this.name} received a blow. ${this.name} only has ${this.health} left.`)
  }
  }
let spinningBirdKick = new StreetFighter("Chun-li", 10, 15, 7, 100)
spinningBirdKick.kick()
spinningBirdKick.punch()
spinningBirdKick.tookDamage(25)
