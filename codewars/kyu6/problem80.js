// Two solutions for this one, the first one is not optimized but commented out

// Parameters: Given an array of integers representing possibly a multiple digit number
// Return: Return an array with the same number, BUT after adding a 1 to it. No more than
// one number per element in the array.

// Example: plusOne([1, 2, 3]) => [1, 2, 4]
// plusOne([9, 9, 9]) => [1, 0, 0, 0]
// plusOne([9]) => [1, 0]

// Pseudocode:

// The first solution below which is commented out I used reverse() to traverse the array
// from the highest decimal place to the lowest, but I did it to see if it could be done 
// without using .unshift(). Only problem is that it's adding an entire loop which might be
// unnecessary for just a few cases.

// So, instead in the second solution (at the bottom) I used unshift, which actually significantly
// improved time complexity.

// First, the non-optimized version: SKIP THIS TO SEE PSEUDOCODE BELOW

// var plusOne = function(digits) {
//     let reversed = digits.reverse()
//     let tempSum = 1
//     for(let each = 0; each < reversed.length; each++){
//         if(tempSum > 0){
//             if(tempSum + reversed[each] > 9){
//                 if(each === reversed.length - 1){
//                     reversed[each] = 0
//                     reversed.push(1)
//                     tempSum = 0
//                 }else{
//                     reversed[each] = 0
//                 }
//             }else{
//                 reversed[each] = tempSum + reversed[each]
//                 tempSum = 0
//                 console.log("and here")
//             }
//         }
//     }
//     return reversed.reverse()
// };

// Pseudocode:

// first, create a variable to store carried over decimals, and set it equal to 1 for the start. 'tempSum'
// Then, traverse the array, starting from the end of the array, and ending at the beginning.

// Each time, if the variable 'tempSum' is a positive number:
//      add that number to the current array element, and
//      see if it's more than 9.
//          If not, just add it to the current element value and move on, resetting tempSum to 0.
//          if so, check if this is the last element or the given digits is only 1 digit long
//              if the last or only 1 digit:
//                  add a 1 to the beginning of the number, after setting the current element to 0.
//                  Then set tempSum to 0 to reset the carried value.

//              otherwise, set the current element equal to 0 and leave tempSum alone.


// Finally, return the mutated array.

var plusOne = function(digits) {
    let tempSum = 1
    for(let each = digits.length - 1; each >= 0; each--){
        if(tempSum > 0){
            if(tempSum + digits[each] > 9){
                if(each === 0 || digits.length === 1){
                    digits[each] = 0
                    digits.unshift(1)
                    tempSum = 0
                }else{
                    digits[each] = 0
                }
            }else{
                digits[each] = tempSum + digits[each]
                tempSum = 0
            }
        }
    }
    return digits
};