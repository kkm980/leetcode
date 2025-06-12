/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function (nums) {
    let start = 0, end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Edge case: when mid is at the last index
        if (mid === nums.length - 1 || nums[mid] >= nums[mid + 1]) {
            // Peak is on the left (including mid)
            end = mid - 1;
        } else {
            // Peak is on the right
            start = mid + 1;
        }
    }
    return start;
};
