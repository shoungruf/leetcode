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
    if(head == null || head.next == null) return head;
    var curr = head;
    var prev = null;
    var agla = null;
    while(curr!=null){
        agla = curr.next;
        curr.next = prev;
        prev = curr;
        curr = agla;
    }

    return prev;
};