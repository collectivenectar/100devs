// Parameters : given string(str) and another string(ending)
// Return :if the second string is the ending of the first string, return true
// else return false
// Example: solution('abc', '') => true, solution('abcde', 'de') => true, solution('abcde', 'bcd') => false
// Pseudocode:

// first check if the second string is a substring
// if it is a substring, check that the last character of the second string
// is the last character of the first string. Might not work for strings where the
// characters repeat, but that could still be fixed with a loop.
// to catch empty strings, just add another line to the ending check logic to see
// if the second string is ''
// if it isn't a substring, should also return false.


function solution(str, ending){
  if(str.includes(ending)){
    if(ending[ending.length - 1] === str[str.length - 1]){
      return true
    }
    else{
      if(ending === ""){
        return true
      }
      else{
        return false
      }
    }
  }
  else{
    return false
  }
}
