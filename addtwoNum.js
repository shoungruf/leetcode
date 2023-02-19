/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var arr1 = [],
    arr2 = [];

  // push numbers to an array
  while (l1 != null) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 != null) {
    arr2.push(l2.val);
    l2 = l2.next;
  }

  // personal reduce to put array to concat number
  let sum = myReduce(arr1.reverse()) * 1 + myReduce(arr2.reverse()) * 1;

  // convert the sum of reverse order back to string
  sum = sum.toString();
  var arr = [];

  // put the string to number array (*1)
  for (let i = 0; i < sum.length; i++) {
    arr[i] = sum[i] * 1;
  }

  // reverse the number
  arr = arr.reverse();

  // now make two listnodes
  var head = new ListNode(0);
  var output = head;

  // put values in listnode of another listnode 
  for (let i = 0; i < arr.length; i++) {
    output.next = new ListNode(arr[i]);
    output = output.next;
  }
  // returning output returns the index of last one 

  function myReduce(arr) {
    return arr.reduce((acc, ini) => {
      return acc + ini;
    }, []);
  }

  // has pointer to first index of same listnode 
  return head.next;
};
