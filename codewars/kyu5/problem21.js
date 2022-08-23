// Parameters: a number n
// Return: find all pairs of numbers between 1 and n where the product
// of the pair is equal to the sum of all numbers between 1 and n, MINUS the pair.
// Return [] if none
// Example: removeNb(28) => []
// removeNb(36) => [[22, 28], [28, 22]]

// Pseudocode:

// First tried brute force, but ran into timeouts. Figured out I could solve for
// the second number of the pair and eliminate any second number that wasn't in
// the series from 1 to n, and I was able to get time to O(n).

// First, the setup:
// factor1 * factor2 = total - factor1 - factor2
// rearrange =>
// factor1 * factor2 + factor2 = total - factor1
// factor2 * (factor1 + 1) = total - factor1
// factor2 = (total - factor1) / (factor1 + 1)

// et voila!

// So, step by step, first create the pairs array to store found pairs.
// Then calculate the total sum of all numbers from 1 to n and store in var 'total'
// Then loop from 1 to n, using the formula above to find the second pair, eliminate
// any second number that's bigger than n, and any number that's not an integer.
// and see if together they equal the total minus the pair. If so, add to pairs,
// if not, continue. at the end, return the array of found pairs.

function removeNb (n) {
  let pairs = []
  let total = (n * (n + 1)) / 2
  for(let factor = 1; factor <= n; factor++){
    let second = ( total - factor ) / (factor + 1)
    if(Math.floor(second) !== second || second > n){
      continue
    }
    else if(factor * second === total - factor - second){
      pairs.push([factor, second])
    }
  }
  return pairs
}

console.log(removeNb(36))
