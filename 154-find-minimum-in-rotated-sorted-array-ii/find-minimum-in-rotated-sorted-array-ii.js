/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0,
      end = nums.length - 1;
    while(start <= end){
        const mid = Math.floor((start + end) / 2 )
        if(nums[mid] < nums[end]){
            end = mid
        }else if(nums[mid] > nums[end]){
             start = mid + 1           
        }else{
            end -= 1;
        }
    }
    return nums[start]
};
