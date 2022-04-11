//increment the final character value in a string up by one if it's a number,
//otherwise add "0" to the end of the string.

//catching the logic for numbers increasing in string length, as well as numbers
//decreasing in string length

function incrementString(strng) {
  if(`${strng.split("")[strng.length - 1] / 2}` === "NaN"){
    return strng + "1"
  }
  else{
    let numbersStartAt = []
    for(let i = strng.length - 1; i >= 0; i--){
      if(`${strng.split("")[i] / 2}` === "NaN"){
        numbersStartAt.push(i + 1)
        break
      }
    }
    let increment = strng.slice(0, numbersStartAt)
    let numberValue = Number(strng.slice(numbersStartAt)) + 1
    let stringVsIncString = strng.slice(numbersStartAt).length - String(numberValue).length
    if(stringVsIncString > 0){
      for(let i = 0; i < stringVsIncString; i++){
        increment = increment + "0"
      }
      return `${increment}${numberValue}`
    }
    else{
        return increment.concat(numberValue)
    }
  }
}
console.log(incrementString("foobar100"))
