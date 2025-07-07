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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];
    
    function findPaths(node, path) {
        if (!node) return;
        
        path.push(node.val);
        
        if (!node.left && !node.right) {
            paths.push(path.join('->'));
        } else {
            findPaths(node.left, [...path]); 
            findPaths(node.right, [...path]); 
        }
    }
    
    findPaths(root, []);
    return paths;
};