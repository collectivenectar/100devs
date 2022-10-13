// Parameters: Given an array of strings
// Return: Return the longest common prefix for all strings in the array.
// If no common prefix, return ""
// Examples:
// longestCommonPrefix(["abrupt", "absolutely", "abstain", "absorb"]) => "ab"
// longestCommonPrefix(["man", "cow", "table"]) => ""

// Pseudocode:

// Make a variable to store the results in. 'prefix'
// Then, loop through the array.
// For each word, see first if it's an empty string, if so just return "" right then and there

// Otherwise, if it's the first element in the array, set 'prefix' equal to the first word to begin
// comparing.

// For every other element in the array, begin checking string index by index if the characters are equal
// First determine the shortest string (the one in prefix vs the one I'm looking at) and set that as the
// loop length.
// Then, if I find a character that doesnt match, I set prefix equal to the value of slicing the
// string at the current index - 1.

// Otherwise, if I don't find anything off, I still slice the string based on if there was a shorter
// string length.

// Finally, I return what's in the variable 'prefix'



var longestCommonPrefix = function(strs) {
    let prefix = ""
    for(let word = 0; word < strs.length; word++){
        if(strs[word] === ""){
            return ""
        }else if(word === 0){
            prefix = strs[word]
        }else{
            let toCheck = strs[word].length < prefix.length? strs[word]: prefix;
            for(let letter = 0; letter < toCheck.length; letter++){
                if(prefix[letter] !== strs[word][letter]){
                    prefix = prefix.slice(0, letter)
                    break
                }
            }
            prefix = prefix.slice(0, toCheck.length)
        }
    }
    return prefix
};


// strs = ["flower","flow","flight"]
// strs = ["dog","racecar","car"]

// console.log(longestCommonPrefix(strs))