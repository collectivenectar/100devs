// Parameters: given an array of instructions, containing either a "0" or "1"
// Return: Return true or false
// This is a finite state machine with 3 states (though only really two used states)
// q1 is the starting state, and q2 is the accepted state that returns a true
// if all the commands have run
// q1 moves to state q2 if given a 1, and stays in q1 if given a 0
// q2 moves to state q3 if given a 0, and stays at q2 if given a 0
// q3 moves to states q2 if given either a 0 or 1

// Example:
// let auto = new Automaton()
// auto.readCommands(["1", "0", "0", "1"]) => true

// Pseudocode:

// I could add a new property for current state, but with just one property this
// still works.

// First, if the commands array is empty, return false
// Otherwise, loop through the commands, and use an if, if else, and else to determine
// steps based on this.states value.
// if still a [], change the state to q2 if command is 1, leave it if 0
// if a q2, change to q3 if a 0 and otherwise do nothing.
// if a q3, change to q2
// After the loop, return true if the state is q2 and otherwise return false.

function Automaton()
{
   this.states = [];
}

Automaton.prototype.readCommands = function(commands)
{
  if(!commands.length){
    return false
  }
  console.log(commands, this)
  for(let command = 0; command < commands.length; command++){
    if(!this.states.length){
      if(commands[command] === "0"){
        this.states = []
      }else if(commands[command] === "1"){
        this.states = "q2"
      }
    }else if(this.states === "q2"){
      if(commands[command] === "0"){
        this.states = "q3"
      }
    }else if(this.states === "q3"){
      this.states = "q2"
    }
    console.log(this.states)
  }
  if(this.states === "q2"){
    return true
  }else{
    return false
  }
}

var myAutomaton = new Automaton();
