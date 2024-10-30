# Write your MySQL query statement below

# SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank' from Scores;
SELECT s1.score,
     (SELECT count(distinct score) from scores s2 where s2.score>=s1.score) as "rank"
FROM scores s1
order by s1.score desc;