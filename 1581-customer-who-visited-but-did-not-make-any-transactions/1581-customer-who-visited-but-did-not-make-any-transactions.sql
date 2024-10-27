# Write your MySQL query statement below
# SELECT customer_id, COUNT(*) AS count_no_trans
# FROM (
#     SELECT v.customer_id
#     FROM Visits AS v
#     LEFT JOIN Transactions AS t ON v.visit_id = t.visit_id
#     WHERE t.visit_id IS NULL
# ) AS unique_visits
# GROUP BY customer_id;


SELECT v.customer_id, COUNT(*) AS count_no_trans
FROM Visits v
LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE t.visit_id IS NULL
GROUP BY v.customer_id;
