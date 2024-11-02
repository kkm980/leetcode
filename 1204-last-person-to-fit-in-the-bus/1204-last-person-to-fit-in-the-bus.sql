# Write your MySQL query statement below
WITH CumulativeQueue AS (
    SELECT
        person_name,
        weight,
        SUM(weight) OVER (ORDER BY turn) AS cumulative_weight
    FROM
        Queue
    ORDER BY
        person_name
)
SELECT
    person_name
FROM
    CumulativeQueue
WHERE
    cumulative_weight <= 1000
ORDER BY
    cumulative_weight DESC
LIMIT 1;