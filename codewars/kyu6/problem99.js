// Parameters: Given a string 'ransomNote', and 'magazine'
// Return: Return whether or not the given ransomNote string can be assembled from the 
// characters in the string 'magazine'. Letters in 'magazine' can only be used once.

// Example:
// canConstruct('bruce wayne', 'new starbucks this year') => true
// canConstruct('in a simulation', 'Macys parade missing float found') => false

// Pseudocode:
// using a map (called 'map' in this case)
// Loop through the string 'magazine', counting each character by adding a key/value pair starting
// with one, and if the key is already present just increment the value up one.

// Then, loop through the string 'ransomNote', each time:
// If the key is not present, or the value present is 0, return false.
// Otherwise, decrease the current value present -- if 3, decrement to 2, if 1, decrement to 0, etc.
// If I make it through the whole loop without returning a false, return true!

var canConstruct = function(ransomNote, magazine) {
    let map = {};
    for(let letters = 0; letters < magazine.length; letters++){
        if(!map[magazine[letters]]){
            map[magazine[letters]] = 1
        }else{
            map[magazine[letters]] = map[magazine[letters]] + 1
        }
    }
    for(let check = 0; check < ransomNote.length; check++){
        if(!map[ransomNote[check]] || map[ransomNote[check]] === 0){
            return false
        }else if(map[ransomNote[check]] > 0){
            map[ransomNote[check]]--
        }
    }
    return true
};