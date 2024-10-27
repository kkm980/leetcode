# Write your MySQL query statement below
SELECT user_id, name, mail
FROM Users
WHERE 
    mail LIKE '%@leetcode.com' AND                     -- Check if the email ends with '@leetcode.com'
    mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode.com'; -- Check if the prefix is valid
