/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;  // Initialize prev to null
    let curr = head;  // Start with the head node
    
    // Traverse through the list
    while (curr !== null) {
        let next = curr.next;  // Store the next node
        curr.next = prev;      // Reverse the current node's next pointer
        prev = curr;           // Move prev to the current node
        curr = next;           // Move to the next node
    }
    
    // prev will be the new head of the reversed list
    return prev;
};
