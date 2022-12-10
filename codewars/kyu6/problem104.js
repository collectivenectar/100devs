// Parameters: Given an array where each element is an operation to perform
// Return: there are only 4 types of operations, given as one of four types of strings:
// '--X', 'X--', '++X', or 'X++'. A variable 'X' starts with the value of 0.
// Return the value of X after all the operations have been executed.
// '--X' and 'X--' decrements X value by one, and
// '++X' and 'X++' increments X value by one

// Examples:
// finalValueAfterOperations(['X++', '--X', 'X--', '++X']) => 0
// finalValueAfterOperations(['--X', '++X', 'X--', 'X--']) => -1
// finalValueAfterOperations(['X++', '++X', '++X']) => 3
// finalValueAfterOperations(['--X', 'X++', 'X++', '--X', ]) => 0

// Pseudocode:

// Starting with a var 'results' set to 0
// Loop through the operations array, each time:
//  if the character at position 0 or 1 in the string is equal to '-',
//  subtract 1 from the results variable value.
//  Otherwise, add 1 to the results variable value.
//
// Finally, return the value in the variable results.

var finalValueAfterOperations = function(operations) {
    let results = 0
    for(let op = 0; op < operations.length; op++){
        if(operations[op][0] === "-" || operations[op][1] === "-"){
            results--
        }else{
            results++
        }
    }
    return results
};