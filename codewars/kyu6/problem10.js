//Return a string with dash'-'marks before and after each odd integer,
// but do not begin or end the string with a dash mark. If n is negative, remove the -
// If n is not an integer, return an empty value.

function dashatize(num) {
  if(isNaN(num)){
    return 'NaN'
  }
  let string = String(num)
  let results = ""
  for(let i = 0; i < string.length; i++){
    if(string[i] < 0 || string[i] === '-'){
      if(+string[i] % 2 === 0){
        results = results + (-string[i])
      }
      else{
        if(string[i] === '-'){

        }
        else{
          results = results + (-string[i])
        }
      }
    }
    else if(+string[i] % 2 === 0){
      results = results + (+string[i])
    }
    else{
      if(i === string.length - 1){
        if(+string[i - 1] % 2 != 0){
          results = results +`${string[i]}`
        }
        else{
          results = results + `-${string[i]}`
        }
      }
      else if(i === 0){
        if(+string[i + 1] % 2 != 0){
          results = results +`${string[i]}-`
        }
        else{
          results = results + `${string[i]}-`
        }
      }
      else{
        if(+string[i - 1] % 2 != 0){
          results = results + `${string[i]}-`
        }
        else{
          results = results + `-${string[i]}-`
        }
      }
    }
  }
  return results
}

dashatize(-1)
dashatize(5311)
dashatize(86320)
dashatize(NaN)
