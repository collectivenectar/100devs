//write a program that provides the total number of button presses in a multi tap
//phone writing system.

//By having the numbers in a dict according as keys, I can pull the index and
//add 1 in order to get the number of button presses quickly.
//I make a second object storing the key as the exact string, and the value as
//the index, and just sum the index + 1 value to the variable for each phrase
//character, one at a time.

let multiTap = {
  "1": ["1"],
  "2": ["A", "B", "C", "2"],
  "3": ["D", "E", "F", "3"],
  "4": ["G", "H", "I", "4"],
  "5": ["J", "K", "L", "5"],
  "6": ["M", "N", "O", "6"],
  "7": ["P", "Q", "R", "S", "7"],
  "8": ["T", "U", "V", "8"],
  "9": ["W", "X", "Y", "Z", "9"],
  "*": ["*"],
  "0": [" ", "0"],
  "#": ["#"],
}

function presses(phrase) {
  let buttonTicker = 0
  let letterDict = {}
  for(let i = 0; i < Object.keys(multiTap).length; i++){
    for(let j = 0; j < multiTap[Object.keys(multiTap)[i]].length; j++){
      letterDict[multiTap[Object.keys(multiTap)[i]][j]] = j
    }
  }
  for(let k = 0; k < phrase.length; k++){
    buttonTicker = buttonTicker + Number(`${letterDict[phrase[k]] + 1}`)
  }
  return buttonTicker
}

console.log(presses("WHERE DO U WANT 2 MEET L8R"))
