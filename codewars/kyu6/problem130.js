// Brute force version - Needs better than an o(n) solution

// Parameters: Given an area of a rectangle
// Return: Return the dimensions of a rectangle that fits three rules:
// Length >= width
// length * width = area
// difference between length and width are the smallest out of all possible dimension combinations
// Return the dimensions as [L, W] Inside an array.

// Examples:
// constructRectangle(4) => [2, 2]
// constructRectangle(16) => [4, 4]
// constructRectangle(5) => [5, 1]
// constructRectangle(122122) => [427, 286]

// Pseudocode:
// Start with the results array, called 'minDiff'
// Then, loop from the highest value, the given area, down to 1, decrementing by one
// Each time, check if the current value in the loop is something that the area is divisible by
// that returns an integer.
// If so, treat the result of that division as the length, and the current loop value as the width,
// and see if the 'minDiff' array has values in it. If they do, see if the different between the two values
// is less than the length and width in the current loop calculations. If not, replace them with the new
// values, and move on to the next loop.
// Finally, return the 'minDiff' array with whatever values were the best.

var constructRectangle = function(area) {
    let minDiff = []
    for(let dimension = area; dimension > 0; dimension--){
        if(area % dimension === 0){
            if(area / dimension >= dimension){
                let length = area / dimension
                let width = dimension
                if(!minDiff.length){
                    minDiff[0] = length
                    minDiff[1] = width
                }else{
                    if((minDiff[0] - minDiff[1]) > (length - width)){
                        minDiff[0] = length
                        minDiff[1] = width
                    }
                }
            }
        }
    }
    return minDiff
};