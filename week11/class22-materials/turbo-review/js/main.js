// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = "root beer"
console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = "root beer doesn't taste like apple"
let split = multipleWords.split(" ")
for(const each of split){
  if(each === "apple"){
    console.log("apple is present")
  }
}
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissorsMaker(){
  let choice = Math.floor(Math.random() * 3) + 1
  switch (choice){
    case 1:
    return "rock"
    break
    case 2:
    return "paper"
    break
    case 3:
    return "scissors"
    break
  }
}
console.log(rockPaperScissorsMaker())
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function whoWonAgainstBot(choice){
  let botChoice = rockPaperScissorsMaker()
  if(choice === "rock"){
    if(botChoice === "scissors"){
      return `"you won" + ${choice} + ${botChoice}`
    }else if(botChoice === "rock"){
      return `"it's a tie" + ${choice} + ${botChoice}`
    }else{
      return `"bot won" + ${choice} + ${botChoice}`
    }
  }else if(choice === "paper"){
    if(botChoice === "paper"){
      return `"it's a tie" + ${choice} + ${botChoice}`
    }else if(botChoice === "rock"){
      return `"you won" + ${choice} + ${botChoice}`
    }else{
      return `"bot won" + ${choice} + ${botChoice}`
    }
  }else{
    if(botChoice === "scissors"){
      return `"it's a tie" + ${choice} + ${botChoice}`
    }else if(botChoice === "paper"){
      return `"you won" + ${choice} + ${botChoice}`
    }else{
      return `"bot won" + ${choice} + ${botChoice}`
    }
  }
}
console.log(whoWonAgainstBot("scissors"))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function game(choices){
  if(typeof choices === "object" && choices.length){
    for(let i = 0; i < choices.length; i++){
      console.log(whoWonAgainstBot(choices[i]))
    }
  }

}
game(["rock", "paper", "scissors"])
