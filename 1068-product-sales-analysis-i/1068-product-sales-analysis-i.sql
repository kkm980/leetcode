# Write your MySQL query statement below
SELECT p.product_name, s.year, s.price
FROM SALES as s
LEFT JOIN PRODUCT as p
ON s.product_id = p.PRODUCT_ID;