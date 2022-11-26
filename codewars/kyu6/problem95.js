// Parameters: Given a number of stairs to climb
// Return: Return the number of possible ways to climb the stairs, where you can either go up one
// step or two. N will never be greater than 45 or less than 1.

// Examples:
// climbStairs(2) => 2
// climbStairs(3) => 3
// 

// Pseudocode:

// Running through the first couple of combinations you can see that the numbers increase by the 
// previous number of combinations -- going up 3 stairs has 3 possible combinations, but
// going of 4 stairs has 5, which is the sum of 2 stairs combo plus 3 stairs combo.

// Fibonacci sequence!

// So, all I have to do is create a starter array for the sequence, and if n is larger
// than the length of the starter, add elements to the array until it is, and return
// the last value.

// I use a while loop to check n against the array length, and push new fibonacci
// numbers until the length is equal, and then return the nth - 1 element when the loop
// is finished.

var climbStairs = function(n) {
    let fib = [1, 2, 3, 5, 8]
    if(n > fib.length){
        while(fib.length < n){
            fib.push(fib[fib.length - 1] + fib[fib.length - 2])
        }
        return fib[n - 1]
    }else{
        return fib[n - 1]
    }

};