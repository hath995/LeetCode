// https://leetcode.com/problems/intersection-of-two-linked-lists

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

 function len(head: ListNode | null): number {
     if(head === null) return 0;
     let length = 0;
     for(;head != null; head = head.next, length++) {
     }
     return length;
 }

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // let lengtha = len(headA), lengthb = len(headB);
    // let k = Math.abs(lengtha-lengthb);
    // if(lengtha <= lengthb) {
    //     while(k--) {
    //         headB = headB.next;
    //     }
    // }else{
    //     while(k--) {
    //         headA = headA.next;
    //     }
    // }
    // while(headA !== headB) {
    //     headA = headA.next;
    //     headB = headB.next;
    // }
    // return headA;

      let pointer1 = headA,
        pointer2 = headB
    while (pointer1 != pointer2) {
        pointer1 = pointer1 ? pointer1.next : headB
        pointer2 = pointer2 ? pointer2.next : headA 
    }
    
    return pointer1

};