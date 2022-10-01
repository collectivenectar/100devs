// Parameters: Given n, an integer 1 or above
// Return: Return an array of all the rows up to row n,
// where each row has been flattened
// Example: 
// pascalsTriangle(2) => [1, 1, 1]
// pascalsTriangle(4) => [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]

// Pseudocode:
// Starting off with the result array to store the generated elements
// Then looping from 1 to n, for each number doing the following:

// adding an array variable 'toPus" to store the current pascal row, 
// starting with a 1 inside it

// A few logic gates for low number n values,

// Then otherwise looping from 1 to the current row value(because row 5 has 5 elements, 6 has 6)
// where for each slot I do the following:

// store the last element present in the variable 'toPush', which at least has a 1 in it
// inside a variable 'last'

// multiply the last number by the current difference between the length of the row and
// the current element index, and store that in a variable 'numerator'

// Then, divide numerator by the current element index, and round the number upwards to
// compensate for weird decimal point issues in JS calculations
// and push that value to the 'toPush' array

// After the elements loop finishes, push what's in toPush to results array.

// After the rows loop finishes, return the results array after flattening any
// inner arrays.


function pascalsTriangle(n) {
    let result = []
    for(let row = 1; row <= n; row++){
        let toPush = [1]
        if(row === 1){
            result.push([1])
        }else if(row === 2){
            result.push([1, 1])
        }else if(row === 3){
            result.push([1, 2, 1])
        }else{
            for(let k = 1; k < row; k++){
                let last = toPush[toPush.length - 1];
                let numerator = last * (row - k)
                toPush.push(Math.ceil(numerator / k))
            }
            result.push(toPush)
        }

    }
    return result.flat(Infinity)
  }
  console.log(pascalsTriangle(57).slice(-60, -1))