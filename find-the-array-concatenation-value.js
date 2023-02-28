/**
 * @param {number[]} nums
 * @return {number}
 */

 var findTheArrayConcVal = function(nums) {
    let i=0, j=nums.length-1, value=0;
    while(i<=j){

        value += Number(i==j ? nums[i] : `${nums[i]}` + `${nums[j]}`);
        i++;j--;
           
        }
    
    return value;
};