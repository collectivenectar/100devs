// Parameters: Given a number(int)
// Return: Return true/false,
// if that number is any power of 3 (3 ^ 0, 3 ^ 1, 3 ^ 2, ...3 ^ n)

// Example: isPowerOfThree(5) => false
// isPowerOfThree(81) => true

// Pseudocode:

// starting off, filter out any number that's 3 or less, returning true if it's
// 3 or 1, false if not.

// Otherwise, starting with a var 'multiple' equal to 3
// start a while loop and multiply the var multiple times 3 up until it's equal to
// n or goes over.
// If it becomes equal to n, return true, otherwise the loop will end, and I can
// just return false if that happens.


var isPowerOfThree = function(n) {
    if(n <= 3){
        if(n === 1){
            return true
        }else if(n === 3){
            return true
        }else{
            return false
        }
    }
    let multiple = 3
    while(multiple < n){
        if(multiple * 3 === n){
            return true
        }else{
            multiple *= 3
        }
    }
    return false
};
