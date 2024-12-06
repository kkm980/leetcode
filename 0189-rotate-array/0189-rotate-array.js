/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % (nums.length||1);
    // if (k === 0 || nums.length <= 1) return nums;

    function reverse(arr, start, end) {
        let s=start;
        let e=end;
        while (s <= e) {
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }
    }

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    return nums;
};
