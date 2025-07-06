/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow=(nums, k)=> {
      const result = [];
      const deque = [];

      for (let i = 0; i < nums.length; i++) {
        // Remove out-of-bound indices
        if (deque.length && deque[0] <= i - k) {
          deque.shift();
        }

        // Remove smaller elements from the back
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
          deque.pop();
        }

        deque.push(i); // Push current index

        if (i >= k - 1) {
          result.push(nums[deque[0]]); // Max is at the front
        }
      }

      return result;
    }