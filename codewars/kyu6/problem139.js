// Write a query that returns all the classes that have more than 5 students

// Example table 'Courses':
// Student | Class

// A       | Math     
// B       | English  
// C       | Math     
// D       | Biology  
// E       | Math     
// F       | Computer 
// G       | Math     
// H       | Math     
// I       | Math     

// Should return a table
// Class
// Math

// Pseudocode: using GROUP BY gives me all the distinct classes, then uses them to count
// how many each appears in the table. If the resulting count is equal or greater than 5,
// it gets added to the results table.


SELECT class
FROM Courses
GROUP BY class
HAVING COUNT(*) >= 5;