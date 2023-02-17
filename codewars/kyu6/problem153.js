// Parameters: Given an array representing a run-length encoded list. Every two elements should
// correlate to one set. The first value in the pair is the frequency the value appears in
// the list, and the second value in the pair is the value.
// Return: Return a decompressed version of the list.
// Examples:

// decompressRLElist([1, 2, 3, 4]) => [2, 4, 4, 4]
// decompressRLElist([1, 1, 2, 3]) => [1, 3, 3]

// Pseudocode:

// All it is is just insert x value so many times in series, so I just unpack it with
// a nested loop. The inner loop is the frequency, and the outer loop skips by two
// through the given nums array. Each time, insert value 'x' so many times.

var decompressRLElist = function(nums) {
    let runLengthList = []
    for(let each = 0; each < nums.length; each = each + 2){
        for(let freq = 0; freq < nums[each]; freq++){
            runLengthList.push(nums[each + 1])
        }
    }
    return runLengthList
};