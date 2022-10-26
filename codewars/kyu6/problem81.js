// Parameters: given a number (integer)
// Return: Return the closest square root rounded down to the nearest integer.

// NOTES: Can't use sqrt or exponent operators

// Example: mySqrt(9) => 3
// mySqrt(4) => 2
// mySqrt(0) => 0
// mySqrt(1023) => 31

// Pseudocode:

// So, eliminating edge cases like input values from 0 - 3, 

// I set a variable 'closest' equal to 0,
// and loop from 1 to x.

// each time, if multiplying the current number by itself is still less than or equal to x,
// set closest equal to that number.

// if it's bigger than x,
// break from the loop, and return the value in 'closest'.

var mySqrt = function(x) {
    if(x === 0){
        return 0
    }else if(x <= 3){
        return 1
    }else{
        let closest = 0
        for(let num = 1; num < x; num++){
            if(num * num <= x){
                closest = num
            }else{
                break
            }
        }
        return closest
    }
};
console.log(mySqrt(1023))