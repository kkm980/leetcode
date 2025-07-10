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

let res = 0;

const helper = (node) => {
    // Base case: Null node is considered a valid BST with 0 sum
    if (node === null) {
        return {
            flag: true,
            sum: 0,
            min: Infinity,
            max: -Infinity
        };
    }

    const left = helper(node.left);
    const right = helper(node.right);

    // Check BST condition:
    // - left and right must be BSTs
    // - left.max < current node
    // - right.min > current node
    if (
        left.flag &&
        right.flag &&
        node.val > left.max &&
        node.val < right.min
    ) {
        const currSum = left.sum + right.sum + node.val;
        res = Math.max(res, currSum); // update global max

        return {
            flag: true,
            sum: currSum,
            min: Math.min(node.val, left.min),
            max: Math.max(node.val, right.max)
        };
    }

    // If not a BST, return invalid flags
    return {
        flag: false,
        sum: 0,
        min: -Infinity,
        max: Infinity
    };
};

var maxSumBST = function (root) {
    res = 0;
    helper(root);
    return res;
};

