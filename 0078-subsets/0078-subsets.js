/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
       let ans = [];

    function fun(i, temp) {
        ans.push([...temp]); // Use a new copy of temp

        // Start iterating from 'i' instead of 0 to avoid redundant combinations
        for (let j = i; j < nums.length; j++) {
            temp.push(nums[j]);
            fun(j + 1, temp);
            temp.pop(); // Backtrack to remove the last added element
        }
    }

    fun(0, []);
    return ans;
};