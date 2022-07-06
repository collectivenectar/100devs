// Parameters: return to the squared string series, so we are given a string,
// separated into substrings by '\n'
// Return: for rot(), reverse both the substring character order, and the substring
// order.
// for selfieAndRot(), do the same as before, except:

// start with the original string, but add an equal number of "." to the end of each substring
// add to the end of that(including an '/n' at the end of the entire string)
// the transformed substrings, with an equal number of "." to the beginning of each substring

// Example:
// selfieAndRot("xZBV\njsbS\nJcpN\nfVnP") =>
// "xZBV..../njsbS..../nJcpN..../nfVnP..../n....PnVf/n....NpcJ/n....Sbsj/n....VBZx"

// rot("xZBV\njsbS\nJcpN\nfVnP") => "PnVf/nNpcJ/nSbsj/nVBZx"

// Pseudocode:

// rot():
// split the string into an array by "/n", and reverse the array.
// create a temp array to store the transformed substrings
// loop through the length of the array, splitting each substring into individual
// characters array, reverse that array, rejoin it, and push it to the temp array
// return the array, rejoined with "/n"

// selfieAndRot():
// do the same as before, but starting with the untransformed string first, looping
// through the split array and adding an equal amount of "." to the end of each substring
// then for the transformed string, inject into the loop an added step of adding the
// equal amount of "." to the beginning of each substring.
// concatenate and return the two rejoined arrays together with a + "." + between.

// |rotation        |selfie_and_rot
// |abcd --> ponm   |abcd --> abcd....
// |efgh     lkji   |efgh     efgh....
// |ijkl     hgfe   |ijkl     ijkl....
// |mnop     dcba   |mnop     mnop....
//                            ....ponm
//                            ....lkji
//                            ....hgfe
//                            ....dcba

function rot(strng) {
  let splitRev = strng.split("\n").reverse()
  let temp = []
  for(let each = 0; each < splitRev.length; each++){
    temp.push(splitRev[each].split("").reverse().join(""))
  }
  return temp.join("\n")
}
function selfieAndRot(strng) {
  let split = strng.split("\n")
  let splitRev = strng.split("\n").reverse()
  let temp = []
  let tempRot = []
  for(let each = 0; each < split.length; each++){
    temp.push(split[each] + `${".".repeat(split.length)}`)
  }
  for(let each = 0; each < splitRev.length; each++){
    tempRot.push(`${".".repeat(splitRev.length)}`+splitRev[each].split("").reverse().join(""))
  }
  return temp.join("\n") + "\n" + tempRot.join("\n")
}
function oper(fct, s) {
    return fct(s)
}

console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"))
