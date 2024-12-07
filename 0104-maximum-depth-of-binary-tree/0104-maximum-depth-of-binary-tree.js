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
var maxDepth = function(root) {
    function findHeight(A){
        if(A===null){
            return 0
        }
        else{
            return Math.max(findHeight(A.left), findHeight(A.right))+1
        }
    }
    return findHeight(root);
};