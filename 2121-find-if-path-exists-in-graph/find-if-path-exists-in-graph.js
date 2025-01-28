/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Step 1: Build the graph
    let graph = {};
    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u); // Add both directions for a bidirectional graph
    }

    // Step 2: Handle trivial case
    if (source === destination) return true;

    // Step 3: Perform DFS to check if a path exists
    const visited = new Set();

    function dfs(node) {
        if (node === destination) return true; // Found the destination
        visited.add(node); // Mark the current node as visited

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true; // Path found
            }
        }
        return false; // No path found
    }

    return dfs(source);
};
