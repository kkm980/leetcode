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
var maxSumBST = function(root) {
    let maxSum = 0;

    function dfs(node) {
        if (!node) {
            // For null node, treat it as a valid BST with 0 sum
            return {
                isBST: true,
                min: Infinity,
                max: -Infinity,
                sum: 0
            };
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        // Check if current node forms a valid BST
        if (
            left.isBST && 
            right.isBST && 
            node.val > left.max && 
            node.val < right.min
        ) {
            let currSum = left.sum + right.sum + node.val;
            maxSum = Math.max(maxSum, currSum);

            return {
                isBST: true,
                min: Math.min(node.val, left.min),
                max: Math.max(node.val, right.max),
                sum: currSum
            };
        }

        // If not a BST, return invalid
        return {
            isBST: false,
            min: 0,
            max: 0,
            sum: 0
        };
    }

    dfs(root);
    return maxSum;
};
