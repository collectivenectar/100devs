//Create a mouse object that has four properties and three methods
function MakeAMouse(){
  this.tail = "long";
  this.whiskers = "chemically burnt";
  this.brain = "large";
  this.motivation = "to take over the world"
  this.phrase = function(){
    console.log("Are you thinking what I'm thinking, Pinky?")
  }
  this.hitPinky = function(){
    console.log("Hit Pinky up side the head")
  }
  this.maniacalLaugh = function(){
    console.log("HAhahahah hahahAHAHAHAHahahahahahaaaha. aHaHaHAHAHAhahahahahahaha")
  }
}
let mouse = new MakeAMouse;
let test = {}
mouse.phrase()
console.log(Object.keys(test))
