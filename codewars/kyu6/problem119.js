// Parameters: Given a number of coins n
// Return: 'Stack' the coins like a staircase in increasing size 1 at a time, like so:
// 1
// 1 1
// 1 1 1
// 1 1 1 1
// from the number of coins given. Some rows may end up incomplete, i.e. you might run
// out of coins before a step is fully built. Return the size of the last complete row.
// Examples:

// arrangeCoins(5) => 2
// arrangeCoins(10) => 4
// arrangeCoins(1) =>1

// Pseudocode:

// Using a variable to store the used coins, I just use a while loop to pass 'coins' into
// the variable until the variable is equal or greater than the given number of coins 'n'.
// I also store a value of 1 in a variable 'rowSize' to start with as the first step of
// the stairs, incrementing the size by one each time after adding a number of coins
// equal to the current value of 'rowSize'.

// After the while loop is finished, I check if the last row is incomplete. Since the while
// loop increments rowSize each time, I have to offset by 1 when returning the results for
// the given input. If the last row is incomplete, I offset by an additional value of 1.

var arrangeCoins = function(n) {
    let usedCoins = 0
    let rowSize = 1
    while(usedCoins < n){
        usedCoins = usedCoins + rowSize
        rowSize++
    }
    if((usedCoins - n) > 0){
        return rowSize - 2
    }else{
        return rowSize - 1
    }
};
