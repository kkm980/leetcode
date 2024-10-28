# Write your MySQL query statement below
SELECT DISTINCT A.id
FROM Weather AS A
JOIN Weather AS B
WHERE B.recordDate = A.recordDate - INTERVAL 1 DAY
AND B.temperature < A.temperature;
