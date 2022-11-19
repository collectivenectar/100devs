// Parameters:
// Return:
// Examples:

// smallestEvenMultiple() =>
// smallestEvenMultiple() =>
// smallestEvenMultiple() =>

// Pseudocode:

// I first just went with a while loop,
// let num = n
// while(n % 2 !== 0 || num % n !== 0){
//   num++
// }
// return num

// But it's still not as fast as:

// using a ternary operator, check if n is divisible by 2 first.
// If not divisible, return n * 2, otherwise return n.

var smallestEvenMultiple = function(n) {
    return n % 2 === 0? n: n * 2;
};
