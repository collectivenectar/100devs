// Parameters: Given an unsorted array with +/- integers
// Return: Return the relative peaks in the array, which can only be the result of an increase and then
// immediate decrease, unless the next value is the same as the start of the peak(a flat peak), and the
// flat area drops when it ends. If a flat area, the peak is considered the first index where the
// flat area begins.

// Example:
// pickPeaks([1, 1, 1, 0, 1, 0, 1, 1, 0, -1, 0, -1]) => {
//     pos: [4, 6, 10],
//     peaks: [1, 1, 0]
// }

// Pseudocode:

// First I start by creating an array that stores instead a shorter set(short by 1 only)
// containing the difference of the next element => [0, 1, 0] => [1, -1] i.e. a sort of
// slope of the change between values.

// I use this array, keeping track of three things to be able to find peaks:

// 1) changes from positive to negative or 0
// 2) A zero value that is followed by something that is not a zero
// 3) inside the case of #2), if that non-zero is negative

// This way, looping through the array, I first just look for places where
// the current element value is positive, and the next element is negative.
// This tells me there is a defined peak. Push it to the peaks array to 
// be part of the results.

// Otherwise, if there is a 0 value in the next element, I enter into a flat
// array search function, which I nested separately so it's only called when
// necessary.

// In the flatPeakCheck() function, I pass in the remaining portion of array,
// and have it look for the first non zero element that occurs in the array.
// The first element is guaranteed to be a zero.
// If the first non-zero element is negative, return true. Found a flat topped
// peak!
// Otherwise if it's positive return false, false alarm. No flat peak.

// The rest of it is just structuring the data properly for the return value.
// Place the peaks array into a key of the results object, named 'pos', and
// add the array value for each peak into an array and put that into a key
// of the results object, named 'peaks'. 
// Return the results object.

// Worst case time complexity is maybe O(n^2) or O(log n)?, since the pickPeaks function is only
// called a maximum of every 4 elements, which divides n by 4, and the beginning
// loop, which still has n times a constant.

function pickPeaks(arr){
    let subtract = []
    for(let each = 0; each < arr.length; each++){
      if(each === 0){
        
      }else{
        subtract.push(arr[each] - arr[each - 1])
      }
    }
    let flatPeakCheck = (subArray) => {
        for(let zeros = 0; zeros < subArray.length - 1; zeros++){
            if(subArray[zeros] === 0 && subArray[zeros + 1] !== 0){
                if(subArray[zeros] === 0 && subArray[zeros + 1] < 0){
                    return true
                }else{
                    return false
                }
            }
        }
        return false
    }
    let peaks = []
    for(let peak = 0; peak < subtract.length - 1; peak++){

        // if there is first a positive number, and then the number after it is lower in value,
        if(subtract[peak] > 0 && subtract[peak + 1] <= 0){
            if(subtract[peak + 1] === 0){
                let isPeak = flatPeakCheck(subtract.slice(peak + 1, subtract.length))
                if(isPeak){
                    peaks.push(peak + 1)
                }
            }else{
                peaks.push(peak + 1)
            }
        }
    }
    let results = {}
    results.pos = peaks
  results.peaks = peaks.map((element) => arr[element])
    return results
  }


console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))