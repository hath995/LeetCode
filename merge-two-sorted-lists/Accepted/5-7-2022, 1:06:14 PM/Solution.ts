// https://leetcode.com/problems/merge-two-sorted-lists

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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let leftCur = list1;
    let rightCur = list2;
    let head = null;
    let curHead = null;
    while(leftCur || rightCur) {
        if(leftCur && rightCur) {
            if(leftCur.val <= rightCur.val) {
                if(head) {
                    curHead.next = leftCur;
                    curHead = curHead.next;
                }else{
                    head = leftCur;
                    curHead = head;
                }
                leftCur = leftCur.next;
            }else{
                 if(head) {
                    curHead.next = rightCur;
                    curHead = curHead.next;
                }else{
                    head = rightCur;
                    curHead = head;
                }
                rightCur = rightCur.next;
            }   
        }else if(leftCur) {
            if(head) {
                curHead.next = leftCur;
                curHead = curHead.next;
            }else{
                head = leftCur;
                curHead = head;
            }
            leftCur = leftCur.next;
        }else if(rightCur) {
            if(head) {
                curHead.next = rightCur;
                curHead = curHead.next;
            }else{
                head = rightCur;
                curHead = head;
            }
            rightCur = rightCur.next;            
        }
        
    }
    return head;
};