/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
 let ans = [];
        function findSubsets(i, temp) {
            if (i === nums.length) {
                ans.push([...temp]); // Push a copy of temp when we reach the end of the array
                return;
            }

            // Exclude the current element
            findSubsets(i + 1, temp);

            // Include the current element
            temp.push(nums[i]);
            findSubsets(i + 1, temp);

            // Backtrack to remove the element for the next iteration
            temp.pop();
        }

        findSubsets(0, []); // Start with an empty array
        return ans;
};