// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class SoftwareEngineer{
  constructor(name, type, age, specialization){
    this.name = name;
    this.type = type;
    this.age = age;
    this.specialization = specialization;
  }
  Object.defineProperty(this, type){
    get function(){
      return this.type;
    }
  }
  Object.defineProperty(this, type){
    set function(){
      this.type = type
    }
  }
  code(){
    console.log(`${this.name} starts to think about a way to do this the ${this.type} way.`)
  }
  submitTicket(){
    console.log(`${this.name} submitted a ticket regarding a ${this.type} problem in their project`)
  }
  coWork(name, type, specialization){
    console.log(`${this.name} and ${name} worked together, with ${this.name} helping make ${this.type} solutions with ${this.specialization}, and ${name} doing ${}`)
  }
}

class AppDeveloper extends SoftwareEngineer{
  constructor(name, type, age, specialization, os){
    super(name, type, age, specialization);
    this.os = os;
  }
  code(){
    console.log(`${this.name} starts to think of an app that can do everything on ${this.os}`)
  }
  talkDown(){
    if(this.os === "Android"){
      console.log(`${this.os} is better than Apple.`)
    }
    else{
      console.log(`${this.os} lets you do more on your own.`)
    }
  }
}



//
//
//
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')
//
// let agency = [bob,simba,machi]
//
// for(person of agency){
//     person.sayHello()
// }
