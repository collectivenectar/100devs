// OOP style tic tac toe.

let tictactoegrid = document.getElementById('tictactoegrid')
let row0 = document.getElementById('row0')
let row1 = document.getElementById('row1')
let row2 = document.getElementById('row2')
let form = document.getElementsByTagName('form')
let playerChosesLetter = document.getElementById('submit')
let playerChoice = document.getElementById('playerChoice')
let playerTurn = document.querySelector('#player-turn')

tictactoegrid.addEventListener('click', playerSelectSquare)
playerChosesLetter.addEventListener('click', playerSubmittedLetter)

class TicTacToeGame {
  constructor(){
    this.playerOnesTurn = true;
    this.gameState = "not yet started";
    this.rows = [row0, row1, row2]
    this.playerOnesLetter = ""
    this.playerTwosLetter = ""
  }
  takeTurn(row, column){
    if(this.gameState === "in progress"){
      if(this.playerOnesTurn === true){
        if(this.rows[row[row.length - 1]].childNodes[column * 2 + 1].innerText === ""){
          this.rows[row[row.length - 1]].childNodes[column * 2 + 1].innerText = this.playerOnesLetter
          this.checkTicTacToe()
          this.playerOnesTurn = false
          playerTurn.innerText = `player 2 turn: you are ${this.playerTwosLetter}`
          playerTurn.style.background = "red"
          playerTurn.style.color = "white"
        }
        // change html doc to update x/o, check for tictactoe, change player label to next player,
        // toggle playerOnesTurn
      }
      else{
        if(this.rows[row[row.length - 1]].childNodes[column * 2 + 1].innerText === ""){
          this.rows[row[row.length - 1]].childNodes[column * 2 + 1].innerText = this.playerTwosLetter
          this.checkTicTacToe()
          this.playerOnesTurn = true
          playerTurn.innerText = `player 1 turn: you are ${this.playerOnesLetter}`
          playerTurn.style.background = "green"
          playerTurn.style.color = "white"
        }
      }
    }
  }
  checkTicTacToe(){
    let gridArray = []
    for(let i = 0; i < this.rows.length; i++){
      let row = []
      for(let j = 0; j < this.rows[i].children.length; j++){
        row.push(this.rows[i].children[j].innerText)
      }
      gridArray.push(row)
    }
    for(let rows = 0; rows < gridArray.length; rows++){
      if(gridArray[rows].join("") === "ooo" || gridArray[rows].join("") === "xxx"){
        if(this.playerOnesTurn){
          console.log("player One wins")
        }
        else{
          console.log("player Two wins")
        }
      }
      else if(gridArray[0][rows] === gridArray[1][rows] && gridArray[1][rows] === gridArray[2][rows]){
        if(gridArray[0][rows] != ""){
          if(this.playerOnesTurn){
            console.log("player One wins")
          }
          else{
            console.log("player Two wins")
          }
        }
      }
      else if(gridArray[0][2 - rows] === gridArray[1][1 - rows] && gridArray[1][1 - rows] === gridArray[2][rows]){
        if(gridArray[0][2 - rows] != ""){
          if(this.playerOnesTurn){
            console.log("player One wins")
          }
          else{
            console.log("player Two wins")
          }
      }
      }
      else if(gridArray[2][2 - rows] === gridArray[1][1 - rows] && gridArray[1][1 - rows] === gridArray[0][rows]){
        if(gridArray[2][2 - rows] != ""){
          if(this.playerOnesTurn){
            console.log("player One wins")
          }
          else{
            console.log("player Two wins")
          }
      }
      }
    }
  }
  reset(){
    this.playerOnesTurn = true;
    this.gameState = "in progress";
    // clear all innerText values
    // need to clear the form values, too
    form[0].hidden = false
    //reset html elements
  }
}

let newGame = new TicTacToeGame;

function playerSelectSquare(event){
  let index = Array.prototype.indexOf.call(event.target.parentNode.children, event.target)
  newGame.takeTurn(event.target.parentNode.id, index)
}

function playerSubmittedLetter(){
  if(playerChoice.value.toLowerCase() === "x" || playerChoice.value.toLowerCase() === "o"){
    if(newGame.gameState === "not yet started"){
      newGame.playerOnesLetter = playerChoice.value
      if(playerChoice.value === "o"){
        newGame.playerTwosLetter = "x"
      }
      else{
        newGame.playerTwosLetter = "o"
      }
      form[0].hidden = true
      playerTurn.innerText = `player 1 turn: you are ${newGame.playerOnesLetter}`
      playerTurn.style.background = "green"
      playerTurn.style.color = "white"
      newGame.gameState = "in progress"
    }
  }
  else{
    window.alert("please choose 'x' or 'o' only")
  }
}
