# Write your MySQL query statement below
SELECT c.name AS Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.id IS NULL;


# SELECT id, name
# FROM Customers c
# WHERE NOT EXISTS (
#     SELECT 1
#     FROM Orders o
#     WHERE o.customerId = c.id
# );