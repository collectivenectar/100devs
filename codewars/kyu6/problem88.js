// Parameters: Given a number n
// Return: Begin a loop, where each time you sum the squares of each of the numbers
// digits. If during the looping process you find yourself with the same number again,
// return false (not a happy number), and if you find yourself with a 1, 
// return true (happy number!)

// Examples:

// isHappy(1) => true
// isHappy(2) => false
// isHappy(7) => true
// isHappy(88) => false

// see test cases below the function

// Pseudocode:

// Using a javascript Set(), I can detect if I am in a calculation loop that is
// not going to end. If I find myself with the same number, I will always
// come back to where I am again eventually.
// So, by using a temporary variable to keep the current number in, I run the
// calculation loop each time :

// add the current number to the Set().
// 
// split the number into digits, square the digits,
// and sum them. If the sum is 1, return true.
// Otherwise set the temp variable to the new sum, and begin the loop again.
// If I reach a case where the Set() already includes the temp variables value,
// then the while loop ends, and so I return false if it does end.

var isHappy = function(n) {
    let holder = n
    let tracker = new Set()
    while(!tracker.has(holder)){
        tracker.add(holder)
        let summed = String(holder).split("").map(x => Number(x) ** 2).reduce((prev, curr) => prev + curr)
        if(summed === 1){
            return true
        }
        holder = summed
    }
    return false
};

console.log(isHappy(1) === true)
console.log(isHappy(2) === false)
console.log(isHappy(7) === true)
console.log(isHappy(88) === false)