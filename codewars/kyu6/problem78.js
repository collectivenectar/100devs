// Parameters: Given two strings, s and t : t is just s, but with an extra letter in there, and scrambled around randomly.
// Return: Return the extra letter
// Example: findTheDifference("pirates", "satirepe") => "e"

// findTheDifference("aaaeee", "eaeeaea") => "e"
// findTheDifference("abcdefghijklmnopqrstuvwxyz", "thequickbrownfoxjmpsvlazydg") => "o"

// Pseudocode:

// Since the second string is scrambled, I'm just going to count the letters from both,
// and then check the count for any number that isn't divisible by 2. If there is an extra
// letter in t, that wasn't in s, the count will be odd.

// So, using a JS object, I concatenate s and t together, and fill in the mapSum object
// with a total count of each letter in both s and t. I loop from beginning to end of the 
// concatted string, and each time add a count to the object

// Then, using the keys of the object, loop through the keys to see the count of each letter
// in the map. If it's not divisible by 2, return the key as the results.

var findTheDifference = function(s, t) {
    let mapSum = {}
    let sumString = s + t
    for(let letter = 0; letter < sumString.length; letter++){
        if(!mapSum[sumString[letter]]){
            mapSum[sumString[letter]] = 1
        }else{
            mapSum[sumString[letter]] = mapSum[sumString[letter]] + 1
        }
    }
    let mapKeys = Object.keys(mapSum)
    for(let check = 0; check < mapKeys.length; check++){
        if(mapSum[mapKeys[check]] % 2 !== 0){
            return mapKeys[check]
        }
    }
};