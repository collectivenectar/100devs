// Parameters : Given an array of integers, only positive and negative
// Return : Return a new array, where any numbers from the original array that
// are the same AND consecutive - as in, [0, 1, 2, 3, 3, 3, 1] would be the 3s --
// are summed together, and reduced to one position in the array.
// Example : sumConsecutives([1, 4, 4, 4, 0, 3, 1, 2, 2, 5]) => [1, 12, 0, 3, 1, 4, 5]
// Pseudocode:

// set one variable to an empty array 'results' to store results

// set another variable to an array 'temp' to store consecutive same numbers when they are
// discovered in the loop.

// Begin a for loop, starting from 0 to the end of the given array (s)

// if the loop is just starting, add this first number to the 'temp' array,
// otherwise if it's not the first loop, and if the 'temp' already contains this number,
// add this number I'm looking at to the 'temp' array as well.

// if it's not the first loop, and the 'temp' array doesn't have this number
// sum together what's in the 'temp' array, and push the sum to the 'results' array
// then reset what's in the 'temp' array to only hold this current number.

// finally, if I'm at the end of the loop, push whatevers in the 'temp' array to
// the 'results' array.

// and then return the results array.

function sumConsecutives(s) {
   let results = []
   let temp = []
   for(let each = 0; each < s.length; each++){
     if(each === 0){
       temp.push(s[each])
     } else if(temp.includes(s[each])){
       temp.push(s[each])
     } else{
       let sum = temp.reduce((prev, curr) => {
         return prev + curr
       })
       results.push(sum)
       temp = [s[each]]
       if(each === s.length - 1){
         results.push(s[each])
       }
     }
   }
  return results
}
