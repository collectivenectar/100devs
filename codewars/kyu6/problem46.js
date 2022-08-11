// Parameters: Given an integer - typeof x => number
// Return: Return whether the number is a palindrome.
// Example: isPalindrome("1221") => true
// isPalindrome("0") => true
// isPalindrome("1011010") => false
// Pseudocode:

// first, convert to string
// Then split into an array
// Then begin checking the length. If less than 2, return true, because it's just
// one number. If less than 3, check if the two digits are the same, return true if so.
// Otherwise, begin to check if the length is even, or odd. Finding the middle of
// the array in an odd lengthed is different than with an even lengthed array.

// it branches into even numbered arrays first:
// calculate the halfpoint and store it in a variable
// use the halfpoint to take a slice of the array from 0 to the halfpoint and
// store that in a variable, 'firstHalf'
// use the halpoint to take a slice of the array from the halfpoint to the end
// and then store that in a variable too, 'secondHalf'. Reverse the order though.
// Then, see if the two variables are equal.

// For the odd lengthed array it's the same, just with Math.floor() on the return
// value for length / 2.

var isPalindrome = function(x) {
    console.log(x)
    let stringSplit = String(x).split("")
    if(stringSplit.length < 2){
        return true
    }
    if(stringSplit.length < 3){
        if(stringSplit[0] === stringSplit[1]){
            return true
        }else{
            return false
        }
    }
    if(stringSplit.length % 2 === 0){
        let halfWay = stringSplit.length / 2
        let firstHalf = stringSplit.slice(0, halfWay)
        let secondHalf = stringSplit.slice(halfWay, stringSplit.length).reverse()
        console.log(halfWay, firstHalf, secondHalf)
        if(firstHalf.join("") === secondHalf.join("")){
            return true
        }else{
            return false
        }
    }else{
        let halfWay = Math.floor(stringSplit.length / 2)
        let firstHalf = stringSplit.slice(0, halfWay)
        let secondHalf = stringSplit.slice(halfWay + 1, stringSplit.length).reverse()
        console.log(halfWay, firstHalf, secondHalf, halfWay + 1, stringSplit.length)
        if(firstHalf.join("") === secondHalf.join("")){
            return true
        }else{
            return false
        }
    }
