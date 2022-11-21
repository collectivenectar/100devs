// Parameters: Given an array of strings, each string a sentence
// Return: Return the count of words in the sentence with the most words.
// Examples:

// mostWordsFound(['a big tree', 'there are two things', 'anything']) => 4
// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]) => 6
// mostWordsFound(["please wait", "continue to fight", "continue to win"]) => 3

// Pseudocode:

// First I gave it a brute force solution by using
// .sort()[0].trim().split(" ").length, but sorting and splitting
// each time is just really wasteful, so I optimized memory and speed
// for this solution.

// First, make space for a var set to 0 to track the maximum word count so far
// Then, loop through the sentences string array, each time:

// calculate the number of words in that string, using .trim(), .split(" "), and .length
// if the number is bigger than the max so far, replace it with the new max.

// Once the loop is finished, return the max found.


var mostWordsFound = function(sentences) {
    let maxWords = 0
    for(let sentence = 0; sentence < sentences.length; sentence++){
        let processed = sentences[sentence].trim().split(" ").length
        if(processed > maxWords){
            maxWords = processed
        }
    }
    return maxWords
};