// Parameters: Given an array of operations to perform, keep score as an array of individual points gained each round

// 1) an integer => add that integer as a new score
// 2) a "+" => add the sum of the two previous scores as a new score
// 3) a "C" => clear the last score from the record
// 4) a "D" => add double the previous score as a new score

// Return: Return the sum of all scores after performing the operations
// Examples:

// calPoints(["5","2","C","D","+"]) => 30
// calPoints(["5","-2","4","C","D","9","+","+"]) => 27
// calPoints(["1","C"]) => 0

// Pseudocode:

// The main trick with this problem turned out to be just being sure I convert types
// Using an array to keep the score, I just broke the operations into separate logic, and
// use the array indices to perform the double and sum operations, and use .push() and .pop()
// for the delete and add operations.
// Finally, I return the sum of the elements in the array, unless the array has no length.

var calPoints = function(operations) {
    let score = []
    for(let each = 0; each < operations.length; each++){
        if(operations[each] === "+"){
            score.push(score[score.length - 1] + score[score.length - 2])
        }else if(operations[each] === "D"){
            score.push(score[score.length - 1] * 2)
        }else if(operations[each] === "C"){
            score.pop()
        }else{
            score.push(Number(operations[each]))
        }
    }
    if(!score.length){
        return 0
    }else{
        return score.reduce((prev, curr) => prev + curr)
    }
};