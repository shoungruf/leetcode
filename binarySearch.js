var i = 0, j = nums.length -1, k;
    while(i <= j){
        k = i + Math.floor((j-i)/2);
        if(nums[k] < target){
            i = k +1;
        }else {
            j = k-1;
        }
    }
    return i;