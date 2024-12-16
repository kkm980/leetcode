/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
        const n = word2.length;

        // Initialize memoization table
        const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1));

        // Helper function (top-down dp)
        const dp = (i, j) => {
            // Base cases
            if (i === 0) return j; // Insert all characters of word2
            if (j === 0) return i; // Delete all characters of word1

            // Check if already computed
            if (memo[i][j] !== -1) return memo[i][j];

            // Recursive cases
            if (word1[i - 1] === word2[j - 1]) {
                memo[i][j] = dp(i - 1, j - 1); // No cost if characters are equal
            } else {
                memo[i][j] = 1 + Math.min(
                    dp(i, j - 1),     // Insert
                    dp(i - 1, j),     // Delete
                    dp(i - 1, j - 1)  // Replace
                );
            }

            return memo[i][j];
        };

        // Call the helper function for the full lengths of both strings
        return dp(m, n);
};


