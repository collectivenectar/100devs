// Parameters: Given an array of nested arrays, where each nested array
// represents a customer, and each element in the nested array represents
// the balance in one of their accounts.
// Return: Return the total wealth (sum of all accounts) of the richest customer
// Examples:

// maximumWealth([[1, 2, 3], [3, 2, 1], [2, 1, 3]]) => 6
// maximumWealth([40, 50, 60], [50], [60], [40, 40, 50]) => 150
// maximumWealth([1, 1, 1], [1, 1, 1, 1], [1, 1]) => 4
// maximumWealth([1234, 2345, 3456], [4321, 5432, 6543, 7643], [123, 234, 345], [1, 4102, 1], [10000, 1]) => 23939

// Pseudocode:

// Start with a var to track the max so far, maxWealth, starting with value set to 0
// Loop through the array, each time:
// total up the nested array elements using .reduce()
// compare the sum to the value in maxWealth
// if greater than maxWealth, replace the value with the new sum
//
// Once the loop finished, return maxWealth

var maximumWealth = function(accounts) {
    let maxWealth = 0
    for(let customer = 0; customer < accounts.length; customer++){
        let custWealth = accounts[customer].reduce((prev, curr) => prev + curr)
        if(maxWealth < custWealth){
            maxWealth = custWealth
        }
    }
    return maxWealth
};
