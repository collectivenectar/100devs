// Parameters: Given a string with printable ascii characters

// Return: Return the string with all the vowels taken out, and placed back in the array in 
// reverse order

// Example: 
// For starters, just made an array with all the vowels uppercase and lowercase

// Then, create the results array to store the string letters, and the toReverse array
// to store the vowels that are filtered out of the string.

// Then, loop through the given string from 0 to the end.
// Each loop : 

// if the character is in the vowels array, it's a vowel, push it to the toReverse array,
// and pass an empty string to the results array to keep it's place in the original string.

// Otherwise, push the character to the results array.

// After the loop is over, see if there was a vowel by checking the length of the toReverse array

// If no length, return the results array rejoined as a string

// Otherwise, reverse the toReverse array, and store it in an array reversed
// and loop through the results array, looking for empty strings, ""
// if I find a "", I replace it with the first element in the reversed array
// After the loop is over, I return the results rejoined as a string.

var reverseVowels = function(s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let results = []
    let toReverse = []
    for(let letter = 0; letter < s.length; letter++){
        if(vowels.includes(s[letter])){
            toReverse.push(s[letter])
            results.push("")
        }else{
            results.push(s[letter])
        }
    }
    if(!results.length){
        return results.join("")
    }else{
        let reversed = toReverse.reverse()
        for(let fillIn = 0; fillIn < results.length; fillIn++){
            if(results[fillIn] === ""){
                results[fillIn] = reversed.shift()
            }
        }
        return results.join("")
    }
};