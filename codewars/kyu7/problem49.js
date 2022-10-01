// Parameters: Given two strings, one test, and one original string, any kind of characters
// Return: Return true or false, based on if the test string is an anagram of the original.
// Example:

// isAnagram("byotaot", "toyboat") => true
// isAnagram("byotao", "toyboat") => false

// Pseudocode:

// Eliminating as much as possible in loops, I settled on this O(n) solution, since the loop
// only ever runs 3n times max, the rest is just access properties. Memory is
// two objects with each a max of n number of keys, and storing the length(an int)
// of different arrays.

// First, create two objects to store the counts of each character in the string.
// the first one countedT is for the test param, and origin is for the original param.
// Then, iterating over both test and original while add 1 to each key:value until the
// strings have been counted.

// Then, compare the length of the keys array for the object - if inequal, return false
// Then, iterate through either one of the objects, and see if the key:value matches.
// If it doesn't match, return false.

// Otherwise, if it runs to the end, return true.

var isAnagram = function(test, original) {
    let countedT = {};
    let origin = {};
    let testLength = test.length
    for(let testLetter = 0; testLetter < testLength; testLetter++){
      if(countedT[test[testLetter].toLowerCase()]){
        countedT[test[testLetter].toLowerCase()]++;
      }else{
        countedT[test[testLetter].toLowerCase()] = 1
      }
    }
    let origLength = original.length
    let countedO = {}
    for(let origLetter = 0; origLetter < origLength; origLetter++){
      if(countedO[original[origLetter].toLowerCase()]){
        countedO[original[origLetter].toLowerCase()]++;
      }else{
        countedO[original[origLetter].toLowerCase()] = 1;
      }
    }
    let testObj = Object.keys(countedT)
    if(testObj.length !== Object.keys(countedO).length){
      return false
    }
    for(let compare = 0; compare < testObj.length; compare++){
      if(countedT[testObj[compare]] !== countedO[testObj[compare]]){
        return false
      }
    }
    return true
  };