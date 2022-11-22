// Parameters: Given two strings, jewels, and stones
// Return: The string jewels contains non-repeating characters that represent
// types of jewels, and the string stones represents some stones you have. Return
// the number of stones you have that are jewels. Case sensitive.

// Examples:
// numJewelsInStones('jJrTu', 'jjjRtUUuu') => 5
// numJewelsInStones('aAB', 'AAbb') => 2
// numJewelsInStones('sTo', 'tOOO') => 0

// Pseudocode:

// Create a var to count the number of jewels in the stones string, 'haveStones'

// Using a JS object, first create a map of all the unique jewel characters from the string jewels
// Then, loop through the string 'stones', each time:

// if the key for the current character in stones exists in the map jewelMap,
// add one to the haveStones variable

// After the loop is finished, return the haveStones variable count

var numJewelsInStones = function(jewels, stones) {
    let haveStones = 0
    let jewelMap = {}
    for(let jewel = 0; jewel < jewels.length; jewel++){
        jewelMap[jewels[jewel]] = 1
    }
    for(let stone = 0; stone < stones.length; stone++){
        if(jewelMap[stones[stone]]){
            haveStones++
        }
    }
    return haveStones
};