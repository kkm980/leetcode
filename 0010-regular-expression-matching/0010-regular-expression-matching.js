/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;

    // Create a DP table initialized to false
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));

    // Base case: Empty string matches an empty pattern
    dp[0][0] = true;

    // Handle patterns with '*' that can match an empty string
    for (let j = 1; j <= m; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2]; // '*' matches zero occurrences of the preceding element
        }
    }

    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                // Match current characters or '.' wildcard
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' matches zero occurrences or one/more occurrences of the preceding element
                dp[i][j] = dp[i][j - 2] || 
                           (dp[i - 1][j] && (s[i - 1] === p[j - 2] || p[j - 2] === '.'));
            }
        }
    }

    // Return the result from the DP table
    return dp[n][m];
};

