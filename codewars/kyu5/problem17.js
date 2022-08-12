// Parameters: Given an integer, assume the environment doesn't allow you to store
// 64-bit integers, signed or unsigned.
// Return: return the integer with it's digits reversed(don't forget it's sign! +/-)
// If the reversed number is outside the signed 32bit integer range, then return 0.

// Example:
// reverse(123) => 321
// reverse(1200) => 21
// reverse(-442) => -244

// Pseudocode:

// first convert the number to a string, then split it into an array.
// Then create a string variable to store the reversed digits.
// Then create a boolean variable to check for zeros at the end of the number
// Once a non-zero number is found, the variable is switched to true.

// Then begin the loop:
// if the number is a 0 and zeroEnded is still false, do nothing!
// if the number is not a 0 and zeroEnded is still false, set it to true,
// and then add the character to the end of the 'reversed' string variable.
// if the number is not a 0 and zeroEnded is true, then check if it's a '-'.
// If not, add the character to the end of the reversed string variable. If it is
// a '-', add the character to the front of the reversed string variable.
// if the number is a 0 and zeroEnded is true, then it still needs to be added
// to the end. End of the loop!

// Now check the numbers size against the 32 bit signed range, return '0' if it's
// outside it, and return whats in the reversed string variable if its inside the
// range.

var reverse = function(x) {
    let split = String(x).split("")
    let reversed = ""
    let zeroEnded = false
    for(let num = split.length - 1; num >= 0; num--){
        if(split[num] === '0' && !zeroEnded){
        }else if(split[num] !== '0' && !zeroEnded){
            zeroEnded = true
            reversed = reversed + split[num]
        }else if(split[num] !== '0' && zeroEnded){
            if(split[num] === "-"){
                reversed = split[num] + reversed
            }else{
                reversed = reversed + split[num]
            }
        }else{
            reversed = reversed + split[num]
        }
    }
    let results = Number(reversed)
    if(results < -2147483648 || results > 2147483647){
        return "0"
    }else{
        return Number(reversed)
    }
};
