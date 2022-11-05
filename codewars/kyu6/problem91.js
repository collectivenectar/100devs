// Parameters: Given an array of ordered elements container integers
// Return: Return a different array, where if the integers are consecutive, they are converted to a range
// i.e. ["3->5"] if the original array had [3, 4, 5]
// Examples: see test cases below the function

// Pseudocode:
// Using two arrays, one to store the results and the other to temporarily store consecutive/single non-consecutive
// integers.

// Loop through the array, checking if the temp storage has anything in it, if the last element in the temp storage
// is consecutive with the current integer, and either adding the current number(if consecutive) or pushing what
// is in the temp storage to reset it before adding a new integer - to begin a new possible range.

// Each time I push what is in the temp storage, I'm converting it to a string, either just the integer, or using
// a string literal adding the range with the characters "->" between the first and last element of the array.

// Finally, if at the last element in the array, I push what remains in the temp storage array and return the results.

var summaryRanges = function(nums) {
    let ranges = []
    let currentRange = []
    for(let each = 0; each < nums.length; each++){
        if(!currentRange.length){
            currentRange.push(nums[each])
            if(each === nums.length - 1){
                ranges.push(`${currentRange[0]}`)
            }
        }else{
            if(currentRange[currentRange.length - 1] === nums[each] - 1){
                currentRange.push(nums[each])
            }else{
                if(currentRange.length > 1){
                    ranges.push(`${currentRange[0]}->${currentRange[currentRange.length - 1]}`)
                    currentRange.length = 0
                    currentRange.push(nums[each])
                }else{
                    ranges.push(`${currentRange[0]}`)
                    currentRange.length = 0
                    currentRange.push(nums[each])
                }
            }
        }
        if(each === nums.length - 1){
            if(currentRange.length > 1){
                ranges.push(`${currentRange[0]}->${currentRange[currentRange.length - 1]}`)
            }else{
                ranges.push(`${currentRange[0]}`)
            }
        }
    }
    return ranges
};


console.log(summaryRanges([0,1,2,4,5,7]), ["0->2","4->5","7"])

console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"])