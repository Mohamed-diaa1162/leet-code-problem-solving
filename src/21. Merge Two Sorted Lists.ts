
/**
 * Merges two sorted linked lists into a single sorted linked list.
 * Problem Link: https://leetcode.com/problems/merge-two-sorted-lists/
 * Status: Solved ✅ 
 * 
 * @param {ListNode | null} list1 - The first sorted linked list.
 * @param {ListNode | null} list2 - The second sorted linked list.
 * @returns {ListNode | null} - The merged sorted linked list, or null if both lists are empty.
 *
 * @timeComplexity O(m + n), where m and n are the lengths of list1 and list2, respectively.
 *                  The while loop iterates through both lists in the worst case.
 *
 * @see {@link reversedListNode} - Helper function for reversing a linked list.
 */

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
    let result: ListNode = null;

    while (list1?.val !== undefined  || list2?.val !== undefined ) {
        if (list1?.val == list2?.val) {
            if (list1 !== null) result = new ListNode(list1?.val, result)
            if (list2 !== null) result = new ListNode(list2?.val, result)
            list1 = list1?.next;
            list2 = list2?.next;
        }

        else if (list1?.val > list2?.val) {
            if (list1 !== null) result = new ListNode(list2?.val, result)
            list2 = list2?.next;
        }

        else if (list1?.val < list2?.val) {
            if (list2 !== null) result = new ListNode(list1?.val, result)
            list1 = list1?.next;
        }


        else {
            if (Number.isInteger(list1?.val)) {
                result = new ListNode(list1?.val, result)
                list1 = list1?.next;
            }

            if (Number.isInteger(list2?.val)) {
                result = new ListNode(list2?.val, result)
                list2 = list2?.next;
            }
        }

    }

    let reversed: ListNode = reversedListNode(result)

    return reversed;
};

const reversedListNode = (list: ListNode | null): ListNode | null => {
    let reversed: ListNode = null;

    while (list != null) {
        reversed = new ListNode(list?.val, reversed)
        list = list.next
    }

    return reversed;
}