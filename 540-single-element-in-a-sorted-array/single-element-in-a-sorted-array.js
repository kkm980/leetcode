/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid--;
        if (nums[mid] !== nums[mid + 1]) {
            right = mid-1;
        } else {
            left = mid + 2;
        }
    }
    return nums[left];
};


