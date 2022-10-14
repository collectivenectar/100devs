// Parameters: Given a pattern of letters, and a string of words
// Return: Return true or false if the pattern of letters is a match to the pattern in the 
// string of words

// Examples: wordPattern("acdc", "a here is here") => true
// wordPattern("abab", "beep boop boop beep") => false
// wordPattern("abcdef", "who who who who who who") => false
// Pseudocode:

// After turning the given string into an array of strings that were separated by " ",
// I make a JS object to keep all the letters that exist in the pattern.
// I then check to see if the pattern length is the same as the array of strings (if not return false)
// I then start looping from start to finish of the pattern, each time looking to see if:

// the current letter in the pattern exists as a key in the letterMap object.
//      if it doesn't, also check if:
//            the current word in the array of strings doesn't already exist as a value in the
//            letterMap object. If it already exists, return false,
//            otherwise add the current letter to the letterMap object.

//      if it does, check if the value in the letterMap object for the current pattern letter 
//            is equal to the current word in the array of strings. If it is, do nothing.
//            If it isn't, return false

// If the whole loop runs and nothings return yet, return true.

var wordPattern = function(pattern, s) {
    let results = s.split(" ")
    let letterMap = {}
    if(pattern.length !== results.length){
        return false
    }
    for(let letter = 0; letter < pattern.length; letter++){
        if(!letterMap[pattern[letter]]){
            if(Object.keys(letterMap).filter(x => letterMap[x] === results[letter]).length > 0){
                return false
            }else{
                letterMap[pattern[letter]] = results[letter]
            }
        }else if(letterMap[pattern[letter]] && letterMap[pattern[letter]] !== results[letter]){
            return false
        }
    }
    return true
};