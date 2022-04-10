//return true if number is divisible by both a and b, false if not.

//modulus returning a 0 means number / a or b returns an integer

function isDivideBy(number, a, b) {
  if(number % a === 0 && number % b === 0){
    return true
  }
  else{
    return false
  }
}
