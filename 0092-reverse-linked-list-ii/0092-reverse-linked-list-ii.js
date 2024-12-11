/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
     function reverseSublist(head, start, end) {
            if (head === null || start === end) {
                return head;
            }

            let dummy = new ListNode(0); // Create a dummy node to simplify edge cases
            dummy.next = head;
            let prev = dummy;

            // Step 1: Traverse to the node just before the start position
            for (let i = 1; i < start; i++) {
                prev = prev.next;
            }

            // Step 2: Reverse the sublist from position start to end
            let current = prev.next; // Starting node of the sublist
            let next = null;
            let sublistPrev = null;

            for (let i = start; i <= end; i++) {
                next = current.next;
                current.next = sublistPrev;
                sublistPrev = current;
                current = next;
            }

            // Step 3: Connect the reversed sublist back to the main list
            prev.next.next = current; // Connect the tail of the reversed sublist
            prev.next = sublistPrev;  // Connect the head of the reversed sublist

            return dummy.next; // Return the modified list
     }
    return reverseSublist(head, left, right);
};
       