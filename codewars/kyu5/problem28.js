// Parameters: given a string to match, and two other strings to create the string
// from
// Return: Return true if the string can be created by merging the two strings together
// Important! : the merge must proceed in order for each substring from the beginning
// Example:
// isMerge("codewars", "cdw", "oears") => true
// isMerge("codewars", "cwd", "oears") => false

// Pseudocode:
// So, a simple while loop doesn't work - this solution is best solved recursively,
// since some problems like isMerge('xcyc', 'xc', 'cy') can be solved by simply choosing
// a different merging path. first is x in part1, then cy in part2, then c from part1 again.
// This means checking all possible solutions before determining if the strings can
// be merged.

// First, eliminate edge cases :
// if part1 and part2 together are longer than 's', then merging should result in
// an incorrect match. Return false.
// If 's' is an empty string, check it part1 and part2 are an empty string as well.
// If so, return true, otherwise false.

// Then I declare a nested function, a recursive solution that:
// 1) Takes the current starting solution, "" the empty one for the first step
// Now I need to being the recursive search.
// 2) If a section of part1 can be added to the starting solution, return the
// value of calling the function again to see if another character can be added
// from this path.
// 3) If a section of part2 can be added to the starting solution, return the value
// of calling the function again to see if another character can be added from this
// path.
// 4) If BOTH sections (part1 && part2) can be added to the solution, call itself again
// for BOTH, then compare the results to 's'. Return the one that solves it.
// 5) Finally, if the solution is equal to s, return true, and if not false.

function isMerge(s, part1, part2) {
  if(part1.concat(part2).length > s.length){
    return false
  }else if(s === ""){
    if(part1 === "" && part2 ===""){
      return true
    }else{
      return false
    }
  }
  let recursive = (solution, s, part1, part2) => {
    let currentLength = solution.length
    if(part1.length > 0 && part1[0] === s[currentLength]){
      if(part2.length > 0 && part2[0] === s[currentLength]){
        // if both are available to use and match, then compared the results.
        let solution1 = solution + part1[0]
        let solution2 = solution + part2[0]
        let newPart1 = part1.length > 1? part1.slice(1, part1.length): "";
        let newPart2 = part2.length > 1? part2.slice(1, part2.length): "";
        let results1 = recursive(solution1, s, newPart1, part2)
        let results2 = recursive(solution2, s, part1, newPart2)
        if(results1 === s){
          return results1
        }else if(results2 === s){
          return results2
        }else{
          return ""
        }
      }else{
        let newSolution = solution + part1[0]
        let newPart1 = part1.length > 1? part1.slice(1, part1.length): "";
        return recursive(newSolution, s, newPart1, part2)
      }
    }else if(part2.length > 0 && part2[0] === s[currentLength]){
      let newSolution = solution + part2[0]
      let newPart2 = part2.length > 1? part2.slice(1, part2.length): "";
      return recursive(newSolution, s, part1, newPart2)
    }else{
      if(s === solution){
        return solution
      }else{
        return false
      }
    }
  }
  return recursive("", s, part1, part2) === s? true: false
}

console.log(isMerge('xcyc', 'xc', 'cy'))
