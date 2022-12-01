// Parameters: Given an n x n array filled with integers
// Return: Treat each element in each nested array as a 'building' where the value represents
// its height. Consider how viewing the grid of buildings from above is much like:
//
//  [0, 1, 2, 3]
//  [3, 2, 1, 0]
//  [2, 0, 1, 3]
//  [1, 3, 2, 0]
//
// And viewing the grid from the ground level, looking at the buildings from any one of the four sides
// would show you a composite, i.e. a 'skyline' or silhouette, where the tallest building could
// be in front or behind of other buildings, and shorter buildings may or may not be visible
// if behind taller ones.
// 
// TASK: Return the number of 'floors' i.e. increments you could add to ALL buildings in the grid
// without affecting the 'skyline' in any direction that you could view it from.

// Examples:

// maxIncreaseKeepingSkyline([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]) => 0
// maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]) => 35
// maxIncreaseKeepingSkyline([[1, 2, 3, 4, 5], [5, 4, 3, 2, 1], [4, 5, 2, 3, 1], [2, 4, 1, 5, 3], [3, 5, 1, 3, 4]]) => 39

// Pseudocode:

// calculate the maximum value for each row and column and store it in a variable,
// rowmaxima for rows, colmaxima for columns.
// loop through the entire grid, each time checking:
// What's the maximum height in both the column and row this building is in?
// Which is the smaller maximum of the two?
// Is the current building shorter than the smallest maximum for the current row and column?
// If so, add the difference to the results variable.
// If not, do nothing.
// Return the results variable after looping.

// It's a bit brute forcey, and the memory usage isn't the best, but it's my first crack at it.


var maxIncreaseKeepingSkyline = function(grid) {
    let rowmaxima = new Array(grid.length)
    let colmaxima = new Array(grid.length)
    for(let row = 0; row < grid.length; row++){
        let copy = [...grid[row]]
        rowmaxima[row] = copy.sort((a, b) => {
            if(a < b){
                return 1
            }else if(a > b){
                return -1
            }else{
                return 0
            }
        })[0]
        let localColMax = 0
        for(let column = 0; column < grid.length; column++){
            if(localColMax < grid[column][row]){
                localColMax = grid[column][row]
            }
        }
        colmaxima[row] = localColMax
    }
    let increase = 0
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid.length; col++){
            let smallestDiff = rowmaxima[row] > colmaxima[col]? colmaxima[col]: rowmaxima[row];
            if(grid[row][col] < smallestDiff){
                increase = increase + smallestDiff - grid[row][col]
            }
        }
    }
    return increase
};