//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
let h1Holder = document.querySelector('h1')
let inputHolder = document.querySelector('#danceDanceRevolution')
let paragraph = document.querySelector('p')
h1Holder.addEventListener('click', ageResult)


function ageChecker(age){
  if (age > 30){
    return "There is nothing left to look forward to"
  }
  else{
    if (age > 25){
      return "You can't rent fancy cars affordably"
    }
    else {
      if (age > 21){
        return "You can't rent cars affordably"
      }
      else{
        if (age > 18){
          return "You can't drink"
        }
        else{
          if (age > 16){
            return "You can't hate from outside the club, because you can't even get in"
          }
          else{
            return "You can't drive"
          }
        }
      }
    }
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
function ageResult(){
  let result = ageChecker(inputHolder.value)
  paragraph.innerText = result
}
