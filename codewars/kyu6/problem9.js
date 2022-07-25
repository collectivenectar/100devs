// Write a simple parser that will parse and run Deadfish.
//
// Deadfish has 4 commands, each 1 character long:
//
// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

//looks simple enough, if there is one of these four letters, do one of these four things
//

function parse( data )
{
  let array = []
  let result = 0
  for(let i = 0; i < data.length; i++){
    if(data[i] === 'i'){
      result++
    }
    else if(data[i] === 'd'){
      result--
    }
    else if(data[i] === 's'){
      result *= result
    }
    else if(data[i] === 'o'){
      array.push(result)
    }
  }
  return array
}
