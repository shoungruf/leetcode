/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    var i =2, l=nums.length;

    if(l === 1){
        return nums[0];
    }

    var arr = new Array(l);

    arr[0] = nums[0];
    arr[1] = Math.max(nums[0], nums[1]);

    while(i<l){
        arr[i] = Math.max(arr[i-1], arr[i-2] + nums[i]);
        i++;
    }

    return arr[l-1];
};