/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 function sum(arr){
    return arr.reduce((a,b) => a+b,0);
}
var largestSumAfterKNegations = function(nums, k) {
   while(k > 0){
       var i = nums.indexOf(Math.min(...nums));
       nums[i]*=-1;
       k--;
   }
   return sum(nums);
};