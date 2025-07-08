/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// var sortedArrayToBST = function(nums) {
//     const build = (start, end) => {
//         if (start === end) return null;
//         const mid = Math.floor((start + end) / 2);
//         const node = new TreeNode(nums[mid]);
//         node.left = build(start, mid-1);
//         node.right = build(mid + 1, end);
//         return node;
//     };
//     return build(0, nums.length-1);
// };

var sortedArrayToBST = function(nums) {
    return recursion(0, nums.length-1);

    function recursion(start, end) {
        if(start > end) return null;
        const mid = Math.floor((start+end)/2);
        const node = new TreeNode(nums[mid]);
        node.left = recursion(start, mid-1);
        node.right = recursion(mid+1, end);
        return node;
    }
};