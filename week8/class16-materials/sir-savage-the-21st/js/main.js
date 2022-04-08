//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
let h2Holder = document.querySelector('#savageSays')

function looper(){
  for (let i = 1; i<=21; i++){
    h2Holder.innerText += "21"
  }
}
looper()
