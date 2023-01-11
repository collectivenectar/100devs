// This is an SQL query leetcode problem.
// The table given is called 'Products'
// And has three rows in it - product_id, low_fats, recyclable
// each with the data type of int, enum, and enum.

// Parameters: Given the table Products
// Return: Return all the products product_id that are both low fat and recyclable,
// unordered or ordered, doesn't matter
// Example: 

// Given the Products table as:
// product_id  | low_fats  |  recyclable
// 1                Y           N
// 2                N           Y
// 3                Y           Y
// 4                N           N
// 5                N           Y
// 6                Y           Y
// 7                Y           Y

// ==>> 
// product_id 
// 3 
// 6
// 7

// Pseudocode:
// So the main keywords to use for this are simple, just SELECT, FROM, WHERE, and AND
// This is because I'm only looking for the intersection of two fields and I don't
// have to calculate or compute anything else, I just have to filter out rows based
// on two fields, low_fats + recyclable

// So, here's the finished query.

SELECT product_id FROM Products WHERE low_fats = "Y" AND recyclable = "Y"