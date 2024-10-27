# Write your MySQL query statement below
SELECT Employee.name as name, BONUS.bonus
FROM Employee
LEFT JOIN BONUS
ON Bonus.empId = Employee.empId
WHERE BONUS.bonus < 1000 OR BONUS.bonus is NULL