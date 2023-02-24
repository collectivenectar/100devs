// Brute force method:

// Parameters: Given a rowIndex
// Return: return a specific row of numbers for pascals triangle
// Examples:

// getRow(3) => [1, 2, 1]
// getRow(1) => [1]
// getRow(15) => [1,   15,  105,  455,1365, 3003, 5005, 6435,6435, 5005, 3003, 1365,455,  105,   15,    1]

// Pseudocode:
// Using a starter array just eliminates a lot of nasty code and takes a small portion of memory.
// So, starting with the first three rows makes things much easier.
// Then, using some conditionals, I just check if the passed parameter is asking for any of those
// first three rows. If it's not, I begin adding rows dynamically, and just return the row once
// I've calculated it.
// 
// begin by figuring out how many loops I'll need to execute by taking 2 off of the given rowIndex.
// Then, begin a loop from 0 to that calculated number:
// Each time, start a new row with the number 1 - all pascal rows start and end with a 1.
// Then, begin an inner loop - each time doing the following:
// calculating the two rows above the current space(they must be summed together to find the new value)
// Sum the two values, and add it to the new array.
// At the end of the inner loop, add the new array to the 'starter' pascals array.
// At the end of the outer loop, return the last row in the starter array.

var getRow = function(rowIndex) {
    let starter = [[1], [1, 1], [1, 2, 1]];
    if(rowIndex > 2){
        let timesToLoop = rowIndex - 2
        for(let each = 0; each < timesToLoop; each++){
            let newRow = [1]
            for(let sum = 0; sum < starter[starter.length - 1].length - 1; sum++){
                let termOne = starter[rowIndex - timesToLoop + each][sum]
                let termTwo = starter[rowIndex - timesToLoop + each][sum + 1]
                let results = termOne + termTwo
                newRow.push(results)
            }
            newRow.push(1)
            starter.push(newRow)
        }
        return starter[rowIndex]
    }else{
        return starter[rowIndex]
    }
};

console.log(getRow(0))
console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(15))
