// Parameters: given an array of 'stock prices'
// Return: return the maximum profit you can make by 'buying low, selling high'
// Example:

// see test cases below the function

// Pseudocode:

// The minimum value in the array should always be the source of calculating the
// max profit, since no matter what, between any set, that will be the cheapest
// day to buy, so all I need to do is iterate over the array and see which
// of these CURRENT values minus the CURRENT minimum is the highest, and I
// can pass over the array only once, results in O(n) time complexity,
// memory being pretty negligible but there are a few calculations in there.

// The current minimum changes as the iteration continues, so this addresses having
// a large value at the beginning of the set


var maxProfit = function(prices) {
    let max = 0
    let min = prices[0]
    for(let each = 0; each < prices.length; each++){
        max = Math.max(prices[each] - min, max)
        min = Math.min(prices[each], min)
    }
    return max
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5)