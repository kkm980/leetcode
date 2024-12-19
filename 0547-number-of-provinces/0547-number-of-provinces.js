/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let adj = Array.from({length: n}, () => []); // Adjacency list
    let visited = Array(n).fill(false); // Visited array
    let count = 0;

    // Build adjacency list from isConnected matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && i !== j) {
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }

    // Perform DFS
    function dfs(node) {
        visited[node] = true; // Mark as visited
        for (let neighbor of adj[node]) { // Iterate over neighbors
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // Count provinces
    for (let i = 0; i < visited.length; i++) {
        if (!visited[i]) { // If node is not visited
            count++;
            dfs(i); // Start DFS from this node
        }
    }

    return count;
};
