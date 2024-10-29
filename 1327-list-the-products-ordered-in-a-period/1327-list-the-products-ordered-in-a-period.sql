# Write your MySQL query statement below
# SELECT p.product_name, 
# sum(if(O.order_date like "2020-02-%",o.unit,0)) AS UNIT
# FROM Products as p
# RIGHT JOIN Orders as o
# ON p.product_id=o.product_id
# GROUP BY o.product_id
# HAVING UNIT >= 100;

SELECT p.product_name, 
       SUM(IF(o.order_date LIKE '2020-02-%', o.unit, 0)) AS UNIT
FROM Products AS p
RIGHT JOIN Orders AS o
ON p.product_id = o.product_id
GROUP BY p.product_name
HAVING UNIT >= 100;

