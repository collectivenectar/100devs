// Parameters: Given an n between 0 and 30
// Return: Return the nth term in the fibonacci sequence
// Example:

// fib(1) => fib(0) + fib(1) => 0 + 1 => 1
// fib(3) => fib(1) + fib(2) => 2
// fib(5) => fib(3) + fib(4) => 5

// Pseudocode:

// So there's a plain version which saves memory in exchange for a loss in speed, and then the memoized
// version which loses a little memory space in exchange for a top %93 runtime of 53ms.

// The basic rundown is to start with an array that has the first two terms of the fibonacci sequence in it:
// 0, and 1. From there, just a few logic if elses to catch if n === 0 || 1, and the rest can be done with a while
// loop:
// While the length of the fib array is less than n, add an element to the end of the array, and set it equal to 
// the sum of the previous two elements.
// Once the array length reaches the value of n, the loop stops, so I return the final element in the array as
// the results.

// PLAIN NON MEMOIZED VERSION:

// var fib = function(n) {
//     let fib = [0, 1]
//     if(n === 0){
//         return fib[0]
//     }else if(n === 1){
//         return fib[1]
//     }else{
//         while(fib.length - 1 < n){
//             fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2]
//         }
//         return fib[fib.length - 1]
//     }
// };

// MEMOIZED VERSION:

let memo = [0, 1]
var fib = function(n) {
    if(n === 0){
        return memo[0]
    }else if(n === 1){
        return memo[1]
    }else{
        if(!memo[n]){
            while(memo.length - 1 < n){
                memo[memo.length] = memo[memo.length - 1] + memo[memo.length - 2]
            }
            return memo[memo.length - 1]
        }else{
            return memo[n]
        }
    }
};

console.log(fib(3))