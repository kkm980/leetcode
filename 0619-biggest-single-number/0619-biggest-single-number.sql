# Write your MySQL query statement below
SELECT Max(num) AS num FROM
(SELECT num
FROM MyNumbers
GROUP BY num
HAVING count(*) = 1) ABC