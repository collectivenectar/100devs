// Parameters: Given two strings - a word, and the second is a scrambles mix of letters
// Return: Return true if the second string is an anagram for the given word.
// Example: isAnagram("tesla", "slate") => true
// isAnagram("aabba", "bababa") => false
// Pseudocode:

// I'm just going to map the letter frequency with a JS object {} - one map for s, and one for t
// Then I compare the length of the map key arrays, and the values for each key to see if they
// happen with the same frequency.

// For each string given, loop through the string setting equal to 1 for first occurrence and adding 1
// to currenty value for other occurrences.
// Then, compare the length of each map .keys() array - if one is shorter, return false
// Then loop through the keys array for the s string, and check that multiples of letters
// in the string match, too. If they don't, return false, otherwise after the loop is over
// return true.

var isAnagram = function(s, t) {
    let sMap = {}
    for(let sChar = 0; sChar < s.length; sChar++){
        if(sMap[s[sChar]]){
            sMap[s[sChar]] = sMap[s[sChar]] + 1
        }else{
            sMap[s[sChar]] = 1
        }
    }
    let tMap = {}
    for(let tChar = 0; tChar < t.length; tChar++){
        if(tMap[t[tChar]]){
            tMap[t[tChar]] = tMap[t[tChar]] + 1
        }else{
            tMap[t[tChar]] = 1
        }
    }
    let letters = Object.keys(sMap)
    if(Object.keys(sMap).length !== Object.keys(tMap).length){
        return false 
    }
    for(let checkChars = 0; checkChars < letters.length; checkChars++){
        if(sMap[letters[checkChars]] !== tMap[letters[checkChars]]){
            return false
        }
    }
    return true
};