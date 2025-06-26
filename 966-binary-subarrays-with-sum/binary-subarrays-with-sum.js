/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    if (goal === 0) {
        let count = 0, zeroRun = 0;
        for (let num of nums) {
            if (num === 0) {
                zeroRun++;
                count += zeroRun; // each new 0 extends previous subarrays
            } else {
                zeroRun = 0;
            }
        }
        return count;
    }

    // General case for goal > 0
    let left = 0, right = 0;
    let oddCount = 0;
    let ans = 0;
    let prefixEven = 0;

    while (right < nums.length) {
        if (nums[right] === 1) {
            oddCount++;
            prefixEven = 0;
        }

        while (oddCount === goal) {
            prefixEven++;
            if (nums[left] === 1) {
                oddCount--;
            }
            left++;
        }

        ans += prefixEven;
        right++;
    }

    return ans;
};
