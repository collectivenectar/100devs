// Parameters: Given a string, with only alphabetical characters and " " spaces
// NOTES: The " " characters will always be between words, but sometimes more than one, and
// on the ends and beginnings of the given strings.

// Return: Return the length of the last word.

// Example: 

// lengthOfLastWord("    hey    hey buddy    ") => 5
// lengthOfLastWord("and") => 3
// lengthOfLastWord("     there are     too many     birds    flying    a   ") => 1

// Pseudocode:

// So, first I just used .trim(), .split(" ") and .filter(), just to brute force it:
// let noSpacesArray = s.trim().split(" ").filter(x => x !== "")
// return noSpacesArray[noSpacesArray.length - 1].length

// But, there's a *possibly* faster and more memory efficient way.
// With just .trim(), begin searching from the end of the string until
// I find either a " " or I reach the beginning of the string.

// If I'm at the beginning, there's only one word, so I return
// the length of the trimmed string.

// If I find a " ", I return the length of the string, minus the current index,
// and then minus one since I'm on a " " not actually the beginning of the last word.

// There wouldn't be a huge improvement on eliminating trim(), but I could always
// make it even more efficient by just starting from the end, while discounting spaces
// until I've already encountered a non-" " character.

// here's an example of doing something without using trim():

// var lengthOfLastWord = function(s) {
//     let wordFound = false
//     let whiteSpaceLength = 0
//     for(let check = s.length - 1; check >= 0; check--){
//         if(!wordFound){
//             if(s[check] === " "){
//                 continue
//             }else{
//                 if(check === 0){
//                     return 1
//                 }else{
//                     wordFound = true
//                     whiteSpaceLength = s.length - check - 1
//                 }
//             }
//         }else{
//             if(s[check] === " "){
//                 return s.length - check - 1 - whiteSpaceLength
//             }else if(check === 0){
//                 return s.length - whiteSpaceLength
//         }
//         }
//     }
// };

// And here's with trim()


var lengthOfLastWord = function(s) {
    let strippedSpaces = s.trim()
    for(let check = strippedSpaces.length - 1; check >= 0; check--){
        if(strippedSpaces[check] === " "){
            return strippedSpaces.length - check - 1
        }else if(check === 0){
            return strippedSpaces.length
        }
    }
}