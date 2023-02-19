/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var arr =[], stack = [];
    
    if(s.length === 0) return false;

    arr = Array.from(s);

    for(let i=0;i<arr.length;i++){
        if(arr[i] === '(') stack.push(')');
        else if(arr[i] === '{') stack.push('}');
        else if(arr[i] === '[') stack.push(']');
        else if(stack.length === 0 || arr[i]!==stack.pop()) return false;   
        // last condition very important removes all dup        
    }
   return (stack.length === 0); 
};