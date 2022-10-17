// Parameters: Given two strings s and t
// Return: Return true/false whether or not strings s and t are isomorphic

// Example: isIsomorphic("putput", "bambam") => true
// isIsomorphic("apple", "leers") => true
// isIsomorphic("acda", "brcd") => false

// Pseudocode:

// first check if the strings lengths are equal, just to save time. if not equal, return false

// Then, if equal, create a JS object to track assigned letters between s and l next loop from
// beginning to end of s, each time:

// if the map doesn't have the current letter in s, set the current letter in s as a key, and
// the letter in t at the same index as the value.

// However, first check if the map doesn't already have a key with a value equal to the current
// letter in t. If it does, return false automatically

// if the map already has the key, check that the value for that key matches the current letter in t.
// if it doesn't match, return false.

// Otherwise, if the loop finished without a mismatch, return true.

var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false
    }else{
        let map = {}
        for(let letter = 0; letter < s.length; letter++){
            if(!map[s[letter]]){
                if(!Object.values(map).includes(t[letter])){
                    map[s[letter]] = t[letter]
                }else{
                    return false
                }
            }else if(map[s[letter]] !== t[letter]){
                return false
            }
        }
        return true
    }
    
};