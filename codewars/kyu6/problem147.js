// Parameters: Given a table of employees with an event_day, emp_id, in_time, and out_time, 
// Return: write a query to return the sum of hours in office each day for each employee.
// Examples: 

// +--------+------------+---------+----------+
// | emp_id | event_day  | in_time | out_time |
// +--------+------------+---------+----------+
// | 1      | 2020-11-28 | 4       | 32       |
// | 1      | 2020-11-28 | 55      | 200      |
// | 1      | 2020-12-03 | 1       | 42       |
// | 2      | 2020-11-28 | 3       | 33       |
// | 2      | 2020-12-09 | 47      | 74       |
// +--------+------------+---------+----------+

// +------------+--------+------------+
// | day        | emp_id | total_time |
// +------------+--------+------------+
// | 2020-11-28 | 1      | 173        |
// | 2020-11-28 | 2      | 30         |
// | 2020-12-03 | 1      | 41         |
// | 2020-12-09 | 2      | 27         |
// +------------+--------+------------+

// Pseudocode:
// The problem wants the return values labeled as day, emp_id, and total_time for the results,
// so I'll be using AS to rename event_day, as well as the total_time calculation.
// Next, using the SUM() function, I bring together all the out_time - in_time values
// where both the event_day and emp_id is the same. This is done using the GROUP_BY statement
// passing in event_day and emp_id.

// The Query:

// SELECT event_day AS day, emp_id, SUM(out_time - in_time) AS total_time 
// FROM Employees
// GROUP BY event_day, emp_id;