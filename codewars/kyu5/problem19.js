// Parameters: Given a string of letters
// Return: return the length of the longest substring without repeating characters
// Examples:
// lengthOfLongestSubstring("abcabcbb") => 3 (abcabc technically has a repeating pattern)
// lengthOfLongestSubstring("bbbbb") => 1

// Pseudocode:

// Based on some suggestions, I'm using a sort of moving window solution.
// starting with a variable that will store the answer, 'answer'
// then the moving variable 'movingWindow'

// start one loop from 'start' of s to the end, one at a time.
// inside that loop, loop from 0 and move up when it can, but keeping it less than
// the current index of the outer loop variable. This 'inner' loop is just a different
// way of checking all permutations. Moving window!
// Then, checking what's inside the window, see if the first character is the same
// as the last character. If so, it's repeating, so don't do anything with it, and
// move the window along.
// Otherwise, if the length of the string that's 'in' the window right now is longer
// than what I have in answer, replace it with the new biggest length so far.

var lengthOfLongestSubstring = function(s) {
  let answer = 0
  let movingWindow = 0
  for(let start = 0; start < s.length; start++){
    for(let end = movingWindow; end < start; end++){
      if(s[start] === s[end]){
        movingWindow = end + 1
        break
      }
    }
    if(start - movingWindow + 1 > answer ){
      answer = start - movingWindow + 1
    }
  }
  return answer
};
console.log(lengthOfLongestSubstring("abcabcbb"))
