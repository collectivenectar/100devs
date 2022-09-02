// Parameters: given two strings, the first is supposed to be a shifted version
// of the second.

// Return: Return the number of positions to shift the first string by in order to
// match the second string. Return -1 if the string is not a match regardless.

// Examples:

// shiftedDiff("coffee", "eecoff") => 2
// shiftedDiff("eecoff", "coffee") => 4
// shiftedDiff("moose", "Moose") => -1

// Pseudocode:

// it takes one off the end, and puts it in front, so it needs to be pop() and unshift()
// Run a loop that's the length of the string - 1, and pop and unshift to see if the
// string matches. If no match, return -1, if match, return the current loop index.

// So, first step is to check if the first already matches the second, if so return 0.
// Otherwise create a variable 'holder' to hold the current state of the shifting string.

// Then begin the loop, from 0 to the end - 1.
// Each time, split the holder string into an array, store the pop() into a var,
// And then unshift the pop var into the front. Join the array back into an array,
// And then check if it's equal to the goal string. If so, return the current loop
// index + 1, and otherwise once the loop is over if nothing's matched return -1.

function shiftedDiff(first, second){
  if(first === second){
    return 0
  }
  let holder = "" + first
  for(let shift = 0; shift < second.length - 1; shift++){
    let split = holder.split("")
    let end = split.pop()
    split.unshift(end)
    holder = split.join("")
    if(holder === second){
      return shift + 1
    }
  }
  return -1
}
