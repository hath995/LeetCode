// https://leetcode.com/problems/linked-list-cycle

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

function hasCycle(head: ListNode | null): boolean {
    let leader = head;
    let follower = head;
    while(leader !== null) {
        leader = leader.next;
        if(follower && follower.next) {
            follower = follower.next.next;
        }else if(follower && follower.next == null){
            follower=follower.next;
        }
        if(follower == leader && follower != null) return true;
    }
    return false;
};