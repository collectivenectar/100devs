// Parameters: Given an array of integers, negative or positive
// Return: Return the maximum sum possible from any subgroup of the elements of the array
// Example:
// maxContiguousSum([0, -1, 5, -2, 7, 8, 2]) => 20


// Pseudocode:
// set an variable to trigger that the first positive integer as been found to save time. - firstPositiveIntFound
// Then set a variable to track the current sum 'window' in the loop - current
// Then another variable to track the highest sum found so far - maxSoFar
// Then loop through the array from beginning to end.
// If the first positive int hasn't been found, continue the loop, otherwise set firstPositiveInt to true and
// then, set current to the max number between 0 and the last current sum plus the actual current number
// also, set the max so far to the max of current value of maxSoFar or the current sum.
// Otherwise if the first positive int has been found, do the same as above.

// What this does is it just looks to see if by adding the current number I get a smaller number or
// a bigger number. If it gets bigger, I add it to the current Sum and see if it's bigger than the max.
// if it's bigger than the max so far, set max so far to that value and move on.
// i.e. Kadanes algo

function maxContiguousSum (arr) {
  let firstPositiveIntFound = false
  let current = 0
  let maxSoFar = 0
  for(let each = 0; each < arr.length; each++){
    if(!firstPositiveIntFound){
      if(arr[each] > 0){
        firstPositiveIntFound = true
        current = Math.max(0, (current + arr[each]))
        maxSoFar = Math.max(maxSoFar, current)
      }
    }else if(firstPositiveIntFound){
      current = Math.max(0, (current + arr[each]))
      maxSoFar = Math.max(maxSoFar, current)
    }
  }
  return maxSoFar
}
console.log(maxContiguousSum([0, -1, 5, -2, 7, 8, 2]))