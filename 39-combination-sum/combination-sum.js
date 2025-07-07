/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    function backtrack(start, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }
        if (total > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            // i instead of i+1 because we can reuse the same number
            backtrack(i, comb, total + candidates[i]);
            comb.pop();
        }
    }

    backtrack(0, [], 0);
    return res;
};
