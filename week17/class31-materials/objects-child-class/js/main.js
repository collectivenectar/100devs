//Create an a class and extend it - Can be anything you would like it to be!

class Animal{
  constructor(name){
    this.name = name
  }
  speak(){
    console.log(`${this.name} makes a sound`)
  }
}
class Dog extends Animal{
  constructor(name, breed){
    super(name)
    this.breed = breed
  }
}
let simba = new Dog('Simba', 'Sheperd')

class Bird extends Animal{
  constructor(name, species){
    super(name)
    this.species = species
  }
  squawk(){
    console.log(`${this.name} lets out a raspy squawk`)
  }
  bite(){
    console.log(`${this.name} bites your finger with its beak, ${this.species} has a sharp beak`)
  }
  flapWings(){
    console.log(`${this.name} practices a bit of flying in place`)
  }
}
