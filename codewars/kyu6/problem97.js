// Parameters: Given a number n
// Return: Starting from 1, and going to n, if the number is divisible by both 3 and 5,
// return "FizzBuzz", if only divisible by 5, return "Buzz", if only divisible by 3, return "Fizz",
// and otherwise return the number - AS A STRING. Return all these elements inside an array.

// Examples:

// fizzBuzz(5) => [1, 2, Fizz, 4, Buzz]
// fizzBuzz(10) => [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz]
// fizzBuzz(15) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => 
// [1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz]

// Pseudocode:

// First create an array to store the results in -> 'results'
// Then loop from 1 to n, inclusive of n in the range.
// Each loop, determine if the number is divisible by 3, 5, or both 3 and 5.
// Due to the logic order, determine if the number is divisible by both 3 and 5 first!
// Otherwise check divisible by 3, then 5, and if divisible, push the corresponding
// string to the 'results' array.
// Finally, return the 'results' array.

var fizzBuzz = function(n) {
    let results = [];
    for(let num = 1; num <= n; num++){
        if(num % 3 === 0 && num % 5 === 0){
            results.push("FizzBuzz")
        }else if(num % 3 === 0){
            results.push("Fizz")
        }else if(num % 5 === 0){
            results.push("Buzz")
        }else{
            results.push(String(num))
        }
    }
    return results
};