/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let num=nums[0];
    let count=1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!=num){
            count--;
        }
        if(nums[i]===num){
            count++;
        }
        if(count===0){
            num=nums[i];
            count=1;
        }
    }
    return num;
};