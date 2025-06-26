/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0, right = 0;
    let oddCount = 0;
    let ans = 0;
    let prefixEven = 0;

    while (right < nums.length) {
        // Step 1: Count the odd number
        if (nums[right] % 2 === 1) {
            oddCount++;
            prefixEven = 0;  // reset since new odd number
        }

        // Step 2: Shrink window if too many odds
        while (oddCount === k) {
            // Count leading even numbers: each can start a valid subarray
            prefixEven++;
            if (nums[left] % 2 === 1) {
                oddCount--;
            }
            left++;
        }

        // Step 3: Add number of valid subarrays ending at 'right'
        ans += prefixEven;

        right++;
    }

    return ans;
};
