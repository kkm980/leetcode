# Write your MySQL query statement below

# DELETE FROM Person
# WHERE id NOT IN (
#     SELECT MIN(id)
#     FROM Person
#     GROUP BY email
# );

WITH MinIds AS (
    SELECT MIN(id) AS min_id
    FROM Person
    GROUP BY email
)
DELETE FROM Person
WHERE id NOT IN (SELECT min_id FROM MinIds);
