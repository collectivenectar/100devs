// Parameters: given n, a positive integer from 1 to a very big number
// Return: Using the API isBadVersion(versionNumber), find the first 'bad version'
// from 1 to n

// Example:
// n = 5, bad = 4
// firstBadVersion(5) => 4

// Pseudocode:

// Applying binary search, except adding a call to isBadVersion(), and looking for the point where
// the current value is not a bad version, but the next value IS a bad version.

// So, using the same lo and hi variables, searching for if the current value is bad or not.
// If bad, search before the midpoint. If not bad, and the next value is not bad either,
// search after the midpoint.
// Otherwise, return the current midpoint + 1(as the current midpoint should be not bad, next should be bad)


function isBadVersion(n) {
    let lo = 0;
    let hi = n
    while(lo < hi){
        const midpoint = Math.floor(lo + (hi - lo) / 2)
        const isBad = isBadVersion(midpoint)
        if(!isBad && isBadVersion(midpoint + 1)){
            return midpoint + 1
        }else if(!isBad){
            lo = midpoint + 1
        }else{
            hi = midpoint
        }
    }
}