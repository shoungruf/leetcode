
var twoSum = function(arr, target){
    var res = [];
    for (var i=0;i<arr.length;i++){
      let key = target-arr[i];
      if(res[key] || res[key] === 0){
     //   return [res[key], i];// for returning the index 
        return [key, arr[i]] // for returning the number 
      }
      res[arr[i]] = i;
        
    }
  }
  var arr = [2,6,7,9,11,15];
  console.log(twoSum(arr, 13));