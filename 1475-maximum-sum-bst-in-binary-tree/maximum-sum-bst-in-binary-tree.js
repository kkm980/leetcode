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
 const helper = (node)=>{
    if(node  === null)return {flag:true, sum:0, min:1e9, max:-1e9};
    let leftBST = helper(node.left)
    let rightBST = helper(node.right)
    // console.log(leftBST.flag , rightBST.flag , leftBST.max , rightBST.min, node)
    if(leftBST.flag && rightBST.flag && leftBST.max < node.val && rightBST.min > node.val )
    {
        let sum = leftBST.sum + rightBST.sum + node.val;
        res = Math.max(res, sum)
        return {flag:true, sum, min:Math.min(node.val, leftBST.min), max:Math.max(node.val, rightBST.max)}
    }
    return {flag:false, sum:0, min:-1e9, max:1e9}

 }
var maxSumBST = function(root) {
    res = 0;
    helper(root);
    return res;
};