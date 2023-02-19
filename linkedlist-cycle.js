/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    var curr = head;
    if(head == null || head.next == null) return false;


    var cycleSet = new Set();

    while(curr!=null){
       if(cycleSet.has(curr)){
           return true;
       }else {
           cycleSet.add(curr);
       }
       curr = curr.next;
    }
    return false;
};



// used Set() in js like hashSet in java 