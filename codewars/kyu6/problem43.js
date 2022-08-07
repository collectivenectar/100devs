// Parameter: Given a string with uppercase and lowercase letters, with no spaces
// Return: Sort the string of letters alphabetically, sorting uppercase letters
// In front of lowercase letters.
// Example: findChildren("gGfeeeFEbBbb") => "BbbbbEeeeFfGg"
// Pseudocode:

// split the string into an array using .split("")
// using the sort function, sort using the greater than operator to make sure
// characters are sorted first by letter.
// Then, in the final else fork where the letters are found to be the same,
// add another fork in the logic to compare uppercase to lowercase.
// finally, rejoin using .join("") and then return the value

function findChildren(dancingBrigade) {
	return dancingBrigade.split("").sort((a, b) => {
    if(a.toLowerCase() > b.toLowerCase()){
      return 1
    } else if(a.toLowerCase() < b.toLowerCase()){
      return -1
    } else{
      if(a.toLowerCase() === a && b.toLowerCase() === b){
        return 0
      }else if(a.toLowerCase() === a && b.toLowerCase() !== b){
        return 1
      }else{
        return -1
      }
    }
  }).join("")
}
