/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let r = 0, c = n - 1;

    while (r < m && c >= 0) {
        if (matrix[r][c] === target) return true;
        else if (target < matrix[r][c]) c--;
        else r++;
    }

    return false;
};