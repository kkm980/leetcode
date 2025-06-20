/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b); // Step 1
    let left = 0;
    let right = nums[nums.length - 1] - nums[0]; // Step 2

    while (left < right) {
        let mid = Math.floor((left + right) / 2); // Binary Search

        // Step 4: Count pairs with distance ≤ mid
        let count = 0;
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            while (j < nums.length && nums[j] - nums[i] <= mid) {
                j++;
            }
            count += j - i - 1;
        }

        // Adjust binary search range based on count
        if (count < k) {
            left = mid + 1; // Need larger distances
        } else {
            
            right = mid; // Possible answer, try smaller
        }
    }

    return left;
};
