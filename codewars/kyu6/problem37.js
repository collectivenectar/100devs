// Parameters: Given a string with 'rats' and the pied piper 'P', where each rat has
// a head "O" and a tail "~". a rat can face left "O~" or right "~O"
// Return: Return the number of 'deaf' rats facing away from the 'P' piper.
// Example: countDeafRaters("~O~O~O~OP~O~OO~") => 2
// Pseudocode:

// create a var 'deaf' to store the number of deaf rats

// filter the given string to remove spaces => " ", and then split("") down the
// middle of wherever the 'P' piper is. This leaves an array of two strings
// each full of only rats or maybe one empty string "" and the other being full
// of rats

// Since the "P" is the piper, the first string has to have rats facing right,
// and the second string has to have rats facing left, otherwise they're deaf.

// loop over the 2 element array

// inside that loop, loop through the strings in each array, moving 2 elements at
// a time, since each rat will be 2 characters long

// Check each rat by taking a slice of that part of the string and checking if
// the first character is a "O" or a "~"

// If the first character is a "O", this means the rat is facing left. If the
// rat is facing left and is in the first string of pFilterSplit, it's a deaf rat.
// Add 1 to the deaf array if so.

// If the second character is a "O", this means the rat is facing right. If the
// rat is facing right and is in the second string of pFilterSplit, it's a deaf rat.
// Add 1 to the deaf array if so.

// Return the value remaining in the 'deaf' variable after the loop is finished
// executing.

var countDeafRats = function(town) {
  let deaf = 0
  let pFilterSplit = town.split("").filter(x=>x!==" ").join("").split("P")
  for(let half = 0; half < 2; half++){
    for(let rat = 0; rat < pFilterSplit[half].length; rat = rat + 2){
      let ratString = pFilterSplit[half].slice(rat, rat + 2)
      if(half === 0 && ratString[0] === "O"){
        deaf++
      }else if(half === 1 && ratString[1] === "O"){
        deaf++
      }
    }
  }
  return deaf;
}
