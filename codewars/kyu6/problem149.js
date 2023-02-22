// Parameters: Given two tables,
// Users (account, name)
// Transactions(trans_id, account, amount, transacted_on)

// Return: Write a query to that returns (name, balance) of all account
// owners that have a resulting balance over 10000 after calculating the sum
// of all transactions.

// Example:

// Users table:
// +------------+--------------+
// | account    | name         |
// +------------+--------------+
// | 900001     | Alice        |
// | 900002     | Bob          |
// | 900003     | Charlie      |
// +------------+--------------+
// Transactions table:
// +------------+------------+------------+---------------+
// | trans_id   | account    | amount     | transacted_on |
// +------------+------------+------------+---------------+
// | 1          | 900001     | 7000       |  2020-08-01   |
// | 2          | 900001     | 7000       |  2020-09-01   |
// | 3          | 900001     | -3000      |  2020-09-02   |
// | 4          | 900002     | 1000       |  2020-09-12   |
// | 5          | 900003     | 6000       |  2020-08-07   |
// | 6          | 900003     | 6000       |  2020-09-07   |
// | 7          | 900003     | -4000      |  2020-09-11   |
// +------------+------------+------------+---------------+
// Output: 
// +------------+------------+
// | name       | balance    |
// +------------+------------+
// | Alice      | 11000      |
// +------------+------------+

// Pseudocode:
// First for setting up the results table names, I use SUM() function and label the results
// as balance.
// For the rest, I need to use a join to pull all account transactions,
// then use GROUP BY to separate out unique account transactions,
// then use HAVING to filter out the results that have a resulting balance less than 10000.

// Final written query:

// SELECT 
//     Users.name AS name,
//     SUM(Transactions.amount) AS balance
// FROM Users
// LEFT JOIN Transactions ON Transactions.account = Users.account
// GROUP BY Transactions.account
// HAVING balance > 10000