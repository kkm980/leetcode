/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // Binary search for peak
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Compare current element with next one
        if (nums[mid] > nums[mid + 1]) {
            // You're in the decreasing slope,
            // so the peak is to the left (including mid)
            right = mid;
        } else {
            // You're in the increasing slope,
            // so the peak is to the right (excluding mid)
            left = mid + 1;
        }
    }

    // At the end, left === right and points to a peak
    return left;
};

