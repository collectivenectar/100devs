// Parameters : given two strings, where each string has the characters '\n' separating
// the string into a series of mixed letters. Each time the number of substrings will
// be equal to the number of characters of those substrings - aka (n * n) or 'string squared'
// Return : return the strings in a new format, starting with 1 character from the beginning
// of s1, being added to all of s2, then 2 characters from the beginning of s1 being
// added to all but the first character of s2, so on and so forth until the last form
// is all of s1 added to the first character of s2. If starting with 2 substrings with
// length of 2, end with 2 substrings of length 3.
// Example : compose("fn\nlr", "Kz\nmO") => "fmO\nlrK"
// Pseudocode:

// 1) first, split each string into it's substrings, stuffed into a temp array for each one
// 2) then, create an array to store the new strings
// 3) then, loop from 0 to the end of each split array(since the length of the array is equal
// to the length of each starting substring)
// 4) After composing by hand each form from start to end, a pattern emerged:
// using slice, add together parts of s1 to s2, pushing the result to the array for storing
// the new strings, and return the results.
// The pattern -- since I'm using slice, the only terms that can't use the loop variable as
// an offset perfectly is the ending index argument for the slice in the first term, and 
// the substring index for s2. Took some fiddling, but eventually got it.


function compose(s1, s2) {
    let s1Split = s1.split("\n")
    let s2Split = s2.split("\n")
    let nPlus1ByN = []
    for(let stringSet = 0; stringSet < s1Split.length; stringSet++){
      let newString = s1Split[stringSet].slice(0, stringSet + 1) + s2Split[s2Split.length - (1 + stringSet)].slice(0, s2Split.length - stringSet)
      nPlus1ByN.push(newString)
    }
  return nPlus1ByN.join("\n")
}

console.log(compose("fn\nlr", "Kz\nmO"))
