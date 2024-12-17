/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let A=s;
    let n = A.length;
        let c = Array(n).fill(-1).map(_ => Array(n).fill(-1))
        const solver = (i, j) => {
            if (i > j) return 0
            if (i == j) return 1
            if (c[i][j] == -1) {
                if (A[i] == A[j]) {
                    c[i][j] = solver(i + 1, j - 1) + 2
                }
                else {
                    c[i][j] = Math.max(solver(i, j - 1), solver(i + 1, j))
                }
            }

            return c[i][j]
        }
        return solver(0, n - 1)
};