/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head; // Check edge cases only once.

    let nodeCount = 1;
    let curr = head;
    while (curr.next != null) {
        curr = curr.next;
        nodeCount++;
    }
    let tail = curr; // Assign tail correctly after the loop.

    k = k % nodeCount; // Reduce unnecessary rotations.
    if (k === 0) return head; // No rotation needed if k is 0 after modulo.

    let temp = head;
    let count = 0;
    while (count !== (nodeCount - k-1)) { // Ensure condition matches intended behavior.
        temp = temp.next;
        count++;
    }
    let newCurr = temp.next;
    temp.next = null; // Break the list at the correct point.
    tail.next = head; // Link the tail to the original head.

    return newCurr; // Return the new head of the rotated list.
};
