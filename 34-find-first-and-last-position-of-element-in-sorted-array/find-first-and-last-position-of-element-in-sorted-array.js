/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    
    // Find first occurrence
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] < target) {
            low = mid + 1;
        } else {
            if (nums[mid] == target) ans[0] = mid;
            high = mid - 1;
        }
    }
    
    // Find last occurrence
    low = 0; high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            if (nums[mid] == target) ans[1] = mid;
            low = mid + 1;
        }
    }
    
    return ans;
};