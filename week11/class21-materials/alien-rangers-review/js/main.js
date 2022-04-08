//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ["WestWorld", "Blade Runner 2046", "The Expanse", "Babylon 5", "Star Trek: Deep Space Nine"]
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
function checkEven(index){
  if(index % 2 === 0){
    return
  }
}
let evenShows = shows.filter((element, index, array) => {if(index % 2 ===0){return element}})
//Create a function that takes in an array of numbers
let numbers = [2, 8, 4, 1, 4, 6, 13, 25, 9]

function secondLowHigh(array){
  let endHigh = array.sort((a, b) => {return a - b})
  return endHigh[1] + endHigh[endHigh.length - 2]
  // return endHigh[endHigh.length - 2] + endLow[1]
}
console.log(secondLowHigh(numbers))
//Alert the sum of the second lowest and the second highest number
