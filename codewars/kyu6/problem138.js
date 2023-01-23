// SQL Query Leetcode
// Given a table 'World'
// Write a query that returns all 'big' countries. A country is 'big' if it has:
// - a population above 25000000 
// - an area above 3000000

// Examples:

// World
// | name        | continent | area    | population | gdp          |
// +-------------+-----------+---------+------------+--------------+
// | Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
// | Albania     | Europe    | 28748   | 2831741    | 12960000000  |
// | Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
// | Andorra     | Europe    | 468     | 78115      | 3712000000   |
// | Angola      | Africa    | 1246700 | 20609294   | 100990000000 |

// should return:

// | name        | population | area    |
// +-------------+------------+---------+
// | Afghanistan | 25500100   | 652230  |
// | Algeria     | 37100000   | 2381741 |

// Pseudocode:
// pull the rows name, population, and area from the world table,
// and restrict the results to only those that have a population equal or greater than 25million or an area above 3mill.

SELECT name, population, area
FROM World
WHERE population >= 25000000 OR area >= 3000000;