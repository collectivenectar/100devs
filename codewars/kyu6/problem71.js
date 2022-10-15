// Parameters: Given a string with alphanumericals and other characters
// Return: determine if the string (minus non-alphanumericals and case insensitive) is a palindrome
// Example: isPalindrome("racecar") => true
// isPalindrome("A man, a plan, a canal: Panama") => true
// isPalindrome("a racecar") => false

// Pseudocode:

// Well I tried a few successful solutions, and the most optimized actually makes use of
// .split(""), .filter(), and join(""), beating out a basic for loop, even making my own
// alphanumerical dictionary to test if regex could be slower.

// So, I just loop through the string twice, which is still O(1.5n) => O(n)
// In the first loop, I remove non alphanumerical characters, and in the second, 
// I loop only halfway but check both ends of the string for palindrom...ity?
// I check in the first loop for alphanumericals just using regex,
// and I check for palindromity in the second loop by comparing the current
// character at the current index with the character at the other end of the array,
// offset backwards from the end by the current index.

var isPalindrome = function(s) {
    let solidString = ""
    for(let character = 0; character < s.length; character++){
        if(/[a-zA-Z0-9]/.test(s[character])){
            solidString = solidString + s[character].toLowerCase()
        }
    }
    for(let letter = 0; letter < solidString.length / 2; letter++){
        if(solidString[letter] !== solidString[solidString.length - 1 - letter]){
            return false
        }
    }
    return true
};