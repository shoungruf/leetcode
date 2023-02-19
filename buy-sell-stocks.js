/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var i, l=prices.length;
    let temp =0;
    let min = Number.MAX_SAFE_INTEGER;
    for(i=0;i<l;i++){
        if(min > prices[i]){
            min = prices[i];
        }else if(prices[i] - min > temp){
            temp = prices[i] - min;
        }
    }   
    return temp;
};