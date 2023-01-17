// Parameters: Given an array of competition participant scores for a group of athletes. ** Each score is guaranteed
// to be unique **
// Return: Return an array of the placements (1st, 2nd, 3rd place, etc) of each athlete
// Example: 
// findRelativeRanks([8, 4, 1, 3, 10, 9]) => ["4", "Bronze Medal", "Gold Medal", "Silver Medal", "6", "5"]
// findRelativeRanks([1, 2, 3, 4, 5]) => ["5", "4", "Bronze Medal", "Silver Medal", "Gold Medal"]

// Pseudocode:
// First set up a JS object to store key/value pairs for the strings of the different medals, called 'medals'
// Then create a JS object to store key/value pairs, where the key is unimportant so it's just set to be the
// score, and the value is a two element array, where the first element is the index of the element in the given
// score array, and the second element is the score.

// Extract a values array using the object method, and sort the array according to the score(the second element).
// Then, loop through the sorted array, replacing what's in the original scores array with the rankings.
// Then, return the scores array.

var findRelativeRanks = function(score) {
    let medals = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal"
    }
    let map = {}
    for(let each = 0; each < score.length; each++){
        map[score[each]] = [each, score[each]]
    }
    let sorted = Object.values(map).sort((a, b) => b[1] - a[1])
    for(let each = 0; each < score.length; each++){
        if(each < 3){
            score[sorted[each][0]] = medals[each]
        }else{
            score[sorted[each][0]] = String(each + 1)
        }
    }
    return score
};