// Parameters: Given a string 's' and the number of rows to convert with
// Return: Return the string scrambled according to the pattern:

// Example 1 ) 

// convert("imwalkinonsunshinewhoa", 3)
//
// where each letter from 's' that is passed in is then arranged like so, 
// as if the numbers from 0-10 are the character indices for 's', 'imwalkinon'
// 
// row 1 =>  0   4   8
// row 2 =>  1 3 5 7 9
// row 3 =>  2   6   10
//
// row 1 - i   l   o   n   n   o =>                             i l o n n o   
// row 2 - m a k n n u s i e h a =>        +          m a k n n u s i e h a   
// row 3 - w   i   s   h   w     =>        +                      w i s h w    
//                                  -------------------------------------------
//                                  i l o n n o m a k n n u s i e h a w i s h w
//
// returns

// ilonnomaknnusiehawishw

// Tests: 
// convert("paypalishiring", "3") => "pahnaplsiigyir"
// convert("AB", 1) => "AB"
// convert("comewithmeandyoullbeinaworldofpureimagination", 10) => 
//              "cbaolemgmliiieunenwoaraiywuttdopihnrfomaloned"

// Pseudocode:

// First take care of the edge case, 1 row - return s if numRows is 1

// Then, create an array to store the results in, 'gridArray'

// next, chunking together the loops to include both the straight down path AND
// the diagonal up and to the right path. If I count the number of rows, plus
// how many characters go in each diagonal section, I store it in a variable
// to use later.

// Then, I calculate how many repetitions I'll have of the straight + diagonal
// segment, by dividing the total string length by the segment length, i.e. the 
// previous variable

// Then, I fill the gridArray with numRows many empty arrays

// Then I store a value of 0 to store the row value as I loop through
// the converting algorithm.

// Then the loop begins:

// Outer loop => from 0 to how many repetitions I'll have of the pattern, exclusive
// InnerLoop => from 0 to how many characters in each segment, exclusive

// So, for each loop, if I'm in the first half of the characters, the 
// pattern is to move down a row until I hit numRows value.
// Do this by increasing currentRow variable by 1

// If I'm in the second half of the characters, I'm going back up and to the right,
// but I'm using an array so I don't need to worry about lateral moves.
// I just decrease currentRow variable by 1.

// this zigs and zags until either I'm at the end or s[x] returns undefined
// because I've passed the end of the string.

// Finally, I flatten the array since it's nested, and join() to make a string
// and then return the value.

var convert = function(s, numRows) {
    if(numRows === 1){
        return s
    }
    let gridArray = []
    let countPerRepeatingGroup = numRows - 2 + numRows
    let numOfRepeatingGroups = Math.ceil(s.length / countPerRepeatingGroup)
    for(let rows = 0; rows < numRows; rows++){
        gridArray.push([])
    }
    let currentRow = 0
    for(let group = 0; group < numOfRepeatingGroups; group++){
        for(let char = 0; char < countPerRepeatingGroup; char++){
            if(char < numRows - 1){
                if(group * countPerRepeatingGroup + char > s.length - 1){
                    break
                }else{
                    // range [0, length - 1]
                    // outer loop = [0, 3)
                    // inner loop = [0, 6]
                    gridArray[currentRow].push(s[(group * countPerRepeatingGroup) + char])
                    currentRow++
                }
            }else if(char >= numRows - 1){
                if(group * countPerRepeatingGroup + char > s.length - 1){
                    break
                }else{
                    gridArray[currentRow].push(s[(group * countPerRepeatingGroup) + char])
                    currentRow--
                }
            }
        }
    }
    return gridArray.flat().join("")
};

console.log(convert("comewithmeandyoullbeinaworldofpureimagination", 10))

