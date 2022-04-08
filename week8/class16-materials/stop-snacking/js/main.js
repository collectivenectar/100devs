//Create a function that grabs the number of snacks from the input and tells you to stop that many times
let inputSnacks = document.querySelector('input')
let stop = document.querySelector('#stops')
let button = document.querySelector('#help')

button.addEventListener('click', stopSnacking)

function stopSnacking(){
  let snackCount = Number(inputSnacks.value)
  stop.innerText = ""
  for (let i = 1; i <= snackCount; i++){
    stop.innerText += " stop"
  }
}
