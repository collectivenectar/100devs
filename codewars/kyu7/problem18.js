// parameters : given a number(positive or negative)
// return : return the sum of its digits(without recognizing operators)
// example: given number (-266) => 14
// pseudocode:

// start with a sum to add the counts to.
// iterate through the number as a string, split into an array
// if the number is not an operator. add it's numerical value to sum
// return the sum.

function sumDigits(number) {
  let sum = 0
  for(let digit = 0; digit < String(number).split("").length; digit++){
    let num = String(number).split("")[digit]
    if(num !== "-" && num !== "+" ){
      sum = sum + Number(num)
    }
  }
  return sum
}
