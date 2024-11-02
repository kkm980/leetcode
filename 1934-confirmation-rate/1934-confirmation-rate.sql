# Write your MySQL query statement below
# SELECT Signups.user_id, SUM(IF(confirmations.action="confirmed", 1,0))/count(confirmations.action) AS confirmation_rate
# FROM Signups
# LEFT JOIN Confirmations
# ON Signups.user_id = Confirmations.user_id
# GROUP BY Signups.user_id

SELECT 
    Signups.user_id, 
    ROUND(COALESCE(SUM(IF(Confirmations.action = "confirmed", 1, 0)) / 
    COUNT(*), 0), 2) AS confirmation_rate
FROM 
    Signups
LEFT JOIN 
    Confirmations ON Signups.user_id = Confirmations.user_id
GROUP BY 
    Signups.user_id
ORDER BY 
    Signups.user_id;



