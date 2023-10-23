// https://leetcode.com/problems/remove-duplicates-from-sorted-list

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;
    while(current) {
        if(current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        }else if(current.next == null || current.val !== current.next.val) {
            current = current.next;
        }
    }
    
    return head;
};