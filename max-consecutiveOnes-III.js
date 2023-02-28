/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let r=0, l=0;
    while(r<nums.length){
        if(nums[r] == 0) k--; r++;
        if(k<0){
            if(nums[l] == 0) k++;
            l++;
        }
       
    }
    return r-l;
};