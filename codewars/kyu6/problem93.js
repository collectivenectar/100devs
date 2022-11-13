// Parameters: Given an integer between 1 and 2 ^ 32
// Return: Return the number that is complimentary to the given numbers binary string => 0 is complement to 1, 1 to 0.
// Examples: See the tests below the function
// Pseudocode:

// Convert the given number(int) to a binary string
    // The built in method .toString takes a radix as a parameter, so using base 2
    // I can convert it.
// Change each "0" to a "1" and each "1" to a "0"
    // I could just do .map() ? Or a simple loop with a new string. Not much of a difference though.
// Convert the string back to a number(int)
    // using parseInt() I convert it back to an integer.


var findComplement = function(num) {
    let binary = num.toString(2)
    let complement = ""
    for(let each = 0; each < binary.length; each++){
        if(binary[each] === "0"){
            complement = complement + "1"
        }else{
            complement = complement + "0"
        }
    }
    return parseInt(complement, 2)
};

// TESTS

console.log(findComplement(0), 1)
console.log(findComplement(1), 0)
console.log(findComplement(2), 1)
console.log(findComplement(1000001), 48574)
console.log(findComplement(9999999), 6777216)
console.log(findComplement(1248163264), 899320383)