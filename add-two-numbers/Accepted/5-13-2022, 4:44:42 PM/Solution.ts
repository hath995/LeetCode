// https://leetcode.com/problems/add-two-numbers

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

// class ListNode {
//     val: number
//     next: ListNode | null

//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }

function getVal(l: ListNode | null): number {
    return l !== null ? l.val : 0;
}

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     let resultHead = null;
//     let result = null;
//     let currentLeft = l1;
//     let currentRight = l2;
//     let carry = 0;
//     while(currentLeft !== null || currentRight !== null) {
//         let sum = getVal(currentLeft) + getVal(currentRight) + carry;
//         carry = sum >= 10 ? 1 : 0;
//         if(result) {
//             result.next = new ListNode(sum%10);
//             result = result.next;
//         }else{
//             resultHead = new ListNode(sum%10);
//             result = resultHead;
//         }
        
//         if(currentLeft) {
//             currentLeft = currentLeft.next;
//         }
//         if(currentRight) {
//             currentRight = currentRight.next;
//         }
//     }
//     if(carry > 0) {
//         result.next = new ListNode(carry);
//     }
//     return resultHead;
// };

function getTail(l1: ListNode | null): ListNode | null {
    return l1 !== null ? l1.next : null; 
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
   if(l1 == null && l2 == null) {
       return carry > 0 ? new ListNode(carry) : null;
   }
   let sum = (getVal(l1)+getVal(l2)+carry)
   return new ListNode(sum%10, addTwoNumbers(getTail(l1),getTail(l2), sum >= 10 ? 1 : 0))
};