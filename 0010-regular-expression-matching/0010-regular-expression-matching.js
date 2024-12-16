/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = {};

    // Recursive helper function with memoization
    const dp = (i, j) => {
        // If result is already computed, return it from the memoization table
        if (memo.hasOwnProperty(`${i}-${j}`)) {
            return memo[`${i}-${j}`];
        }

        // Base case: If both strings are exhausted
        if (i === s.length && j === p.length) {
            return true;
        }

        // If pattern is exhausted but string is not
        if (j === p.length) {
            return false;
        }

        // Check if the current characters match
        let match = i < s.length && (s[i] === p[j] || p[j] === '.');

        // If current character in pattern is '*'
        if (j + 1 < p.length && p[j + 1] === '*') {
            // Two cases for '*' in pattern:
            // 1. Ignore the '*' and its preceding character (0 occurrences)
            // 2. Use the '*' to match one or more of the preceding character (if the current character matches)
            const result = dp(i, j + 2) || (match && dp(i + 1, j));
            memo[`${i}-${j}`] = result;
            return result;
        }

        // If the characters match (or it's a '.' wildcard), move both pointers
        if (match) {
            const result = dp(i + 1, j + 1);
            memo[`${i}-${j}`] = result;
            return result;
        }

        // No match found
        memo[`${i}-${j}`] = false;
        return false;
    };

    // Start the recursion from the beginning of both strings
    return dp(0, 0);
};

