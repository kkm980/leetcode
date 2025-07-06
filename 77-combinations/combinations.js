/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    const result = [];
    function backtrack(n, k, comb) {
        if (k === 0) {
            result.push([...comb]);
            return;
        }
        if (n === 0) return;
        comb.push(n);
        backtrack(n - 1, k - 1, comb);
        comb.pop();
        backtrack(n - 1, k, comb);
    }
    backtrack(n, k, []);
    return result;
};