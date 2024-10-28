# Write your MySQL query statement below
SELECT 
    employee_id,
    COALESCE(
        MAX(CASE WHEN primary_flag = 'Y' THEN department_id END),
        department_id
    ) AS department_id
FROM Employee
GROUP BY employee_id;


# NOTE->
# SELECT 
#     employee_id,
#     COALESCE(
#         CASE WHEN primary_flag = 'Y' THEN department_id END,
#         department_id
#     ) AS department_id
# FROM Employee
# GROUP BY employee_id;
# # IS ALSO CORRECT BUT IT I SHOWING ERROR FOR --->
# INPUT
# {"headers":{"Employee":["employee_id","department_id","primary_flag"]},"rows":{"Employee":[["1","1","N"],["2","1","Y"],["2","2","N"],["3","3","N"],["4","2","N"],["4","3","Y"],["4","4","N"]]}}
# Output
# {"headers": ["employee_id", "department_id"], "values": [[1, 1], [2, 1], [3, 3], [4, 2]]}
# Expected
# {"headers":["employee_id","department_id"],"values":[[1,1],[2,1],[3,3],[4,3]]}

