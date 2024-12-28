/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []; // Handle null root case

    const ans = [];
    const queue = [root]; // Initialize the queue with the root node

    while (queue.length > 0) {
        const size = queue.length; // Number of nodes at the current level
        const currLevel = []; // To store nodes at the current level

        for (let i = 0; i < size; i++) {
            const node = queue.shift(); // Dequeue the first node
            currLevel.push(node.val);

            // Enqueue child nodes if they exist
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans.push(currLevel); // Add current level to the answer
    }

    return ans;
};
