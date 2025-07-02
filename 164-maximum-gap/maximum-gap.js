/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let hash = {};
    let maxGap = 0;
    for(let num of nums){
        hash[num] = true;
    }
    let sortedData = Object.keys(hash).map(Number);
    let i = 0, j = 1;
    if(sortedData.length < 2) return 0;
    while(j < sortedData.length){
        maxGap = Math.max(maxGap, Math.abs(sortedData[i] - sortedData[j]));
        i++;
        j++;
    }
    return maxGap;
};