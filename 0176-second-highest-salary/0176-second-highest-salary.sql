# Write your MySQL query statement below
# SELECT 
#     (SELECT DISTINCT salary 
#      FROM Employee 
#      ORDER BY salary DESC 
#      LIMIT 1 OFFSET 1) AS SecondHighestSalary;

WITH RankedSalaries AS (
    SELECT DISTINCT salary 
    FROM Employee 
    ORDER BY salary DESC
)
SELECT 
    COALESCE(
        (SELECT salary FROM RankedSalaries LIMIT 1 OFFSET 1), 
        NULL
    ) AS SecondHighestSalary;
