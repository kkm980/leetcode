var isSubtree = function(root, subRoot) {
    if (!root) return false;

    // If the current tree matches, return true
    if (isSameTree(root, subRoot)) return true;

    // Else, check left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function isSameTree(s, t) {
    if (!s && !t) return true;
    if (!s || !t || s.val !== t.val) return false;

    // \U0001f501 Compare both subtrees
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}