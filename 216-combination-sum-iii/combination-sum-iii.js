/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var combinationSum3 = function(k, n) {
    const res = [];
    
    function dfs(start, sum, path) {
        // Prune conditions
        if (sum > n || path.length > k) return;
        
        // Valid combination
        if (sum === n && path.length === k) {
            res.push([...path]);
            return;
        }

        // Explore remaining numbers
        for (let i = start; i <= 9; i++) {
            path.push(i); 
            dfs(i + 1, sum + i, path); 
            path.pop(); 
        }
    }

    dfs(1, 0, []);
    return res;
};