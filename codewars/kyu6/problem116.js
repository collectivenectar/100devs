// Parameters: Given a number
// Return: Return true if the number is a perfect square

// Example:
// isPerfectSquare(5) => false
// isPerfectSquare(16) => true
// isPerfectSquare(1) => true

// Pseudocode:

// Using a while loop, I store two values in two separate variables:
// 'root' starting with the value 1
// 'square' representing the result of calculating the value in 'root' multiplied by itself.

// The condition for the while loop is to just prevent the square from passing over the value
// of num.

// While the loop is running, just set the value of 'square' to the result of squaring the 
// current root value, and then increment the root value up one.

// Eventually, either the square will pass over the value of num, or become equal to it,
// so I just return a condition which will be true if the square is equal to the num,
// and false if not.

var isPerfectSquare = function(num) {
    let square = 0
    let root = 1
    while(square < num){
        square = root * root
        root++
    }
    return square === num
};