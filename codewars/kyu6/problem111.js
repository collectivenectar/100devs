// Parameters: Given a number between 1 and 30
// Return: Return the rows in pascals triangle from 1 to the number given.
// Example: 

// generate(3) => [[1], [1, 1], [1, 2, 1]]
// generate(5) => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
// generate(1) => [[1]]

// Pseudocode:
// To eliminate a bunch of funny logic generating the first 3 rows, I just started with a 
// place in memory dedicated to those three terms.
// Leetcode gave me some trouble accepting the arrays as they were though, so I had to negotiate
// a tradeoff ironically in order to get it to accept any inputs where numRows was between 1-3.

// Beyond that though, all I do if numRows is greater than 3 is:
// Using a while loop with a condition based on numRows and firstThree array length,
// use the last row present in
// the firstThree array to generate a new row by first creating an empty array, adding a 1
// to start it off with, summing the terms together, and adding a 1 at the end. This gives me
// the next row, and I push it to the firstThree array.
// Finally, to return the results, I just return the array.

var generate = function(numRows) {
    let firstThree = [[1], [1, 1], [1, 2, 1]];
    if(numRows < 4){
        if(numRows === 1){
            return [[1]]
        }else if(numRows === 2){
            return [[1], [1, 1]]
        }else{
            return [[1], [1, 1], [1, 2, 1]]
        }
    }else{
        while(firstThree.length <= numRows - 1){
            let nextRow = [1];
            let lastRow = firstThree[firstThree.length - 1];
            for(let each = 0; each < lastRow.length - 1; each++){
                nextRow.push(lastRow[each] + lastRow[each + 1])
            }
            nextRow.push(1)
            firstThree.push(nextRow);
        }
        return firstThree
    }
};