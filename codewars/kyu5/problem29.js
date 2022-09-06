// Parameters: Given a string of parentheses
// Return: Return if the parentheses are valid, in that they are opened and closed
// in the proper order
// Example:
// validParentheses("(())((()())())") => true
// validParenthese(')(()))') => false

// Pseudocode:
// The easiest first step is to just treat an opening parenthesis as a positive number
// and a closing as a negative number, and see if by adding the numbers to a variable
// check if the resulting variable by the end is equal to zero. This solves most problems.

// However, in some cases it can still appear balanced, so I just added an array to
// store the tracker value at each step, and if the variable ever reaches a negative
// number, then the parentheses are out of order. Don't even have to complete the
// entire loop if you don't want to, can just break if 'level' ever goes negative
// but I wasn't really required to optimize so I didn't.

function validParentheses(parens) {
  let level = 0;
  let tracker = []
  for(let paren = 0; paren < parens.length; paren++){
    if(parens[paren] === "("){
      level++
      tracker.push(level)
    }else if(parens[paren] === ")"){
      level--
      tracker.push(level)
    }
  }
  let leveled = level === 0? true: false
  if(leveled && !tracker.includes(-1)){
    return true
  }else{
    return false
  }
}
