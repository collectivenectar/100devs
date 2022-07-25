// Parameters: two people make laps around different sized loops at the same
// speed, how many laps for each until they meet again at the starting point?
// Parameters are the two different sized loops, (x, y)
// Return: the number of laps (for each person) it takes until they meet again
// returned as ints in an array [xLoops, yLoops]
// Example:
// nbrOfLaps(3, 5) => [5, 3]

// Pseudocode:

// Starting with 1 lap in a var total
// while loop with the condition based on the value of total as the while loop
// increments it up one at a time. While the total is not divisible by either
// one or the other, keep looping, adding one to total.
// once the loop breaks, return the value of total divided by x to get x laps,
// and divided by y to get y laps.

var nbrOfLaps = function (x, y) {
  let total = 1
  while(total % x !== 0 || total % y !==0){
    total++
  }
  return [total / x, total / y]
}
console.log(nbrOfLaps(3, 5))
