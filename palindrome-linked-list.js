/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 function findReverse(curr){
    if(curr === null) return curr;
    var list = curr;
   var prev = null;
   var agla;
   
   while(list!=null){
       agla = list.next;
       list.next = prev;
       prev = list;
       list = agla;
   }
   return prev;
}

function findMid(head){
    var temp = head;
    var curr = head;
    while(curr.next!=null && curr.next.next!=null){
        temp = temp.next;
        curr = curr.next.next;
    }
    return temp;
}


var isPalindrome = function(head) {
  
  var midNode = findMid(head);
  var revNode = findReverse(midNode.next);

  var leftSide = head;
  var rightSide = revNode;
   
  while(rightSide){
      console.log(rightSide.val );
      console.log(leftSide.val);
      if(rightSide.val!== leftSide.val){
          return false;
      }
      rightSide = rightSide.next;
      leftSide = leftSide.next;
  }
 // reverseList(midNode);
  return true;
};