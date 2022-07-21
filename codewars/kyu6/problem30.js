// Parameters: Given an array of integers, values, and a number of beggars, n
// n could be 0, in which case return []
// Return: Return an array of the sums each beggar takes, if they each take turns
// taking from the queue - the values array - starting from index 0 for beggar 1,
// index 1 for beggar 2, etc, and starting over at the first beggar when the last
// one has taken their turn, until the entire array has been cycled through from
// beginning to end.
// Example:
// beggars([1, 2, 3, 4, 5], 2) => [9, 6]
// beggars([1, 2, 3, 4], 0) => []
// beggars([1, 2, 3, 4, 5, 6], 7) => [1, 2, 3, 4, 5, 6, 0]

// Special NOTE: don't mutate the original array

// Pseudocode:
// I'm using a for loop nested in a while loop, with a counter variable to stop
// the while loop when it reaches the length of the values array.
// first setting the counter variable
// then checking if n is equal to 0, if so return []
// Then I create an object for incrementing each beggars takehome values
// I fill it with 0s to start with
// then create a nested arrow function to represent each beggar taking a turn.
// if the counter has reached the array length, break the loop
// otherwise, if the beggar has 0, set the object key value to the value in values
// at the current counter index, and increment the counter up one, and if the beggar already
// has some, set it equal to the current value present plus the value in values at
// the current counter index, and increment the counter up one.
// Then for the while loop, while the counter is less than n, keep calling the
// nexted arrow function.
// When complete, return the values from the beggars object as an array.


function beggars(values, n){
  let counter = 0
  if(n === 0){
    return []
  }
  let takeHomes = {}
  for(let each = 0; each < n; each++){
    takeHomes[each] = 0
  }
  let queue = () => {
    for(let turn = 0; turn < n; turn++){
      if(counter === values.length){
        break
      }
      else if(takeHomes[turn] === 0){
        takeHomes[turn] = values[counter]
        counter++
      }
      else{
        takeHomes[turn] = takeHomes[turn] + values[counter]
        counter++
      }
    }
  }
  while(counter < values.length){
    queue()
  }
  return Object.values(takeHomes)
}
console.log(beggars([1, 2, 3, 4, 5, 6], 7))
