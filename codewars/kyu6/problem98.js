// Parameters: Given a string, 's'
// Return: Return the index of the first unique character present in the string, 
// or -1 if none present

// Examples:

// firstUniqChar('abcdabcd') => -1
// firstUniqChar('bcdabcd') => 3
// firstUniqChar('abcdefghijklmnopqrstuvwxyz') => 0

// Pseudocode:
// Create a map/JS object, call it 'map'
// Loop through the string from beginning to end, placing a key/value pair for that character
// of 'character': 1, if it isn't present already, or incrementing the value up 1.
// Then, loop a second time through the string, seeing if the value for that key is 1.
// If 1, return the current index. 
// If the loop completes without finding a 1, return -1.

var firstUniqChar = function(s) {
    let map = {};
    for(let letter = 0; letter < s.length; letter++){
        if(!map[s[letter]]){
            map[s[letter]] = 1
        }else{
            map[s[letter]] = map[s[letter]] + 1
        }
    }
    for(let check = 0; check < s.length; check++){
        if(map[s[check]] === 1){
            return check
        }
    }
    return -1
};