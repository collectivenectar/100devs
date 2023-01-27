// Parameters: Given an array of moves for a robot to make starting from the origin (0, 0)
// Return: Return if the moves take the robot back to it's origin
// Examples:

// judgeCircle("UD") => true
// judgeCircle("LL") => false
// judgeCircle("URDL") => true
// judgeCircle("UDUL") => false

// Pseudocode:

// Using a JS object, I set up a converter to interpret directions as vectors on the x and y axis.
// Then I loop through the given moves(as a string) and just set myself up with the starting position
// as a two element array, [0, 0].
// For each direction, I add the vector to the current position, and if at the end the position
// is equal to [0, 0], then I return true, and if not false.

var judgeCircle = function(moves) {
    let position = [0, 0]
    let key = {
        "U": [0, -1],
        "D": [0, 1],
        "L": [-1, 0],
        "R": [1, 0]
    }
    for(let each = 0; each < moves.length; each++){
        let x = key[moves[each]][0]
        let y = key[moves[each]][1]
        position[0] = position[0] + x
        position[1] = position[1] + y
    }
    return position[0] === 0 && position[1] === 0
};