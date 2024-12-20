/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
   function nearestZero(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(Infinity)); // Initialize result matrix
    const queue = []; // Queue for BFS

    // Directions for moving up, down, left, right
    const directions = [
        [-1, 0], // Up
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1]   // Right
    ];

    // Step 1: Initialize the queue with all cells containing `0`
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                result[i][j] = 0; // Distance to itself is 0
                queue.push([i, j]); // Add to the queue
            }
        }
    }

    // Step 2: Perform BFS
    while (queue.length > 0) {
        const [x, y] = queue.shift(); // Dequeue the current cell

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the neighbor is within bounds and can be updated
            if (newX >= 0 && newX < m && newY >= 0 && newY < n) {
                if (result[newX][newY] > result[x][y] + 1) {
                    result[newX][newY] = result[x][y] + 1; // Update distance
                    queue.push([newX, newY]); // Enqueue the neighbor
                }
            }
        }
    }

    return result;
}


return nearestZero(mat);
console.log(result);

};