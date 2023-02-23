// Parameters: Given a table DailySales with columns date_id, make_name, lead_id, and partner_id
// describing information on sales made at a car dealership.
// Return: Write a sql query that returns the number of unique leads and partners according to date and car make.
// Examples:
// Given the following table => 
// +-----------+-----------+---------+------------+
// | date_id   | make_name | lead_id | partner_id |
// +-----------+-----------+---------+------------+
// | 2020-12-8 | toyota    | 0       | 1          |
// | 2020-12-8 | toyota    | 1       | 0          |
// | 2020-12-8 | toyota    | 1       | 2          |
// | 2020-12-7 | toyota    | 0       | 2          |
// | 2020-12-7 | toyota    | 0       | 1          |
// | 2020-12-8 | honda     | 1       | 2          |
// | 2020-12-8 | honda     | 2       | 1          |
// | 2020-12-7 | honda     | 0       | 1          |
// | 2020-12-7 | honda     | 1       | 2          |
// | 2020-12-7 | honda     | 2       | 1          |
// +-----------+-----------+---------+------------+
// return the results =>
// +-----------+-----------+--------------+-----------------+
// | date_id   | make_name | unique_leads | unique_partners |
// +-----------+-----------+--------------+-----------------+
// | 2020-12-8 | toyota    | 2            | 3               |
// | 2020-12-7 | toyota    | 1            | 2               |
// | 2020-12-8 | honda     | 2            | 2               |
// | 2020-12-7 | honda     | 3            | 2               |
// +-----------+-----------+--------------+-----------------+
// Pseudocode:

// To formulate the column names, I'll need to calculate the number of distinct leads and partners
// as part of the SELECT statement first, and then in order to keep them from being mushed all together
// I also need to group them by date and car make.
// So, using the COUNT() function, I can use the DISTINCT keyword to find all unique entries in the columns
// lead_id and partner_id, and then label them using AS.
// Then, using the GROUP BY keyword, I can separate all entries by date and car make. Done!

// SELECT 
// date_id, 
// make_name, 
// COUNT(DISTINCT lead_id) AS unique_leads, 
// COUNT(DISTINCT partner_id) AS unique_partners 
// FROM DailySales GROUP BY date_id, make_name;