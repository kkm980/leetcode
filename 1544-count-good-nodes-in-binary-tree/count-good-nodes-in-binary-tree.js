/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;

    function dfs(node, maxSoFar) {
        if (!node) return;

        // If current node is good
        if (node.val >= maxSoFar) {
            count++;
            maxSoFar = node.val; // update max for next path
        }

        dfs(node.left, maxSoFar);
        dfs(node.right, maxSoFar);
    }

    dfs(root, root.val); // root is always good
    return count;
};
