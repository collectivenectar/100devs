// Parameters: Given an array of words
// Return: Determine if each word can be typed using only one row of the american 'qwerty' keyboard,
// i.e. 'qwertyuiop"
// 'asdfghjkl'
// 'zxcvbnm'
// Examples: findWords(["Alaska", "Dad", "Bait", "Line", "Lag", "Fish"]) => ["Alaska", "Dad", "Lag"]
// findWords(["a", "qwepepm"]) => "a"

// Pseudocode:
// First set up the keyboard rows as a string, one string for each row of keys, inside a JS object as key/value pairs
// Then, set up a 'results' array.
// Then, loop from beginning to end of the given words array, word by word.
// For each word, create a variable 'row' and 'broken' to track which row the first letter is found in, and
// to track whether or not the word has broken the rule of keeping the letters in the same keyboard row.
// Then loop from beginning to end of the word, letter by letter.
// The first time for each word, first find which row the first letter is in, and store it in the 'row' variable.
// Then, if not the first letter of the word, check that the row the first letter was found in contains the current
// letter. If not, break from the current loop and skip the rest of the letters for that word.
// If found, continue the loop until the rest of the letters are confirmed, and push the string value of the word
// to the 'results' array, as long as the 'broken' variable is false.
// Finally, return the results array.


var findWords = function(words) {
    let amKeyboard = {
        2: "qwertyuiop",
        3: "asdfghjkl",
        4: "zxcvbnm"
    }
    let results = []
    for(let word = 0; word < words.length; word++){
        let row = false;
        let broken = false
        for(letter = 0; letter < words[word].length; letter++){
            if(!row){
                if(!amKeyboard[2].includes(words[word][letter].toLowerCase())){
                    if(!amKeyboard[3].includes(words[word][letter].toLowerCase())){
                        row = 4
                    }else{
                        row = 3
                    }
                }else{
                    row = 2
                }
            }else{
                if(!amKeyboard[row].includes(words[word][letter].toLowerCase())){
                    broken = true
                    break
                }
            }
        }
        if(!broken){
            results.push(words[word])
        }
    }
    return results
};
