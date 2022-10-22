// Parameters: Given a string with parentheses
// Return: Return true if the parentheses are in order, i.e.:
// Each opening parentheses is eventually followed by its closing partner but not after the opening of
// any of the other types
// Examples:

// isValid("()[]{}") => true
// isValid("{}}") => false
// isValid("{]") => false
// isValid("[(])") => false
// isValid("(((()())))") => true

// Pseudocode:
// By using a stack style data structure (the JS Array), I just use one rule:
// If the next character is a closing type parentheses, and the top character on the stack
// is not the opening partner to that parentheses, return false.
// Otherwise, if it matches, don't add the next character, pop the top item off the stack
// because a parentheses found it's pair and doesn't need to be tracked any more.
// If I get to the end of the string and my stack is empty, return true, otherwise false.1

var isValid = function(s){
    let stack = []
    let parMap = {
        "(": "()",
        ")": "()",
        "[": "[]",
        "]": "[]",
        "{": "{}",
        "}": "{}",
    }
    for(let each = 0; each < s.length; each++){
        if(!stack.length){
            stack.push(s[each])
        }else{
            // if it's an opener
            let opener = parMap[s[each]][0]
            if(s[each] === opener){
                stack.push(s[each])
            }else{
              // if it's a closer, does the stack have an opener of the same type 
              // on the top of the stack?
                if(stack[stack.length - 1] === opener){
                    stack.pop()
                }else{
                    return false
                }
            }
        }
    }
      if(!stack.length){
          return true
      }else{
          return false
      }
  }