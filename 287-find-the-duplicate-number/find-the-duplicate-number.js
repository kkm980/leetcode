/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let low = 1;
    let high = nums.length - 1;
    let answer = -1; // Will store the potential duplicate

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Count how many numbers are <= mid
        let count = 0;
        for (const num of nums) {
            if (num <= mid) count++;
        }

        if (count > mid) {
            // mid is a potential answer
            answer = mid;
            high = mid - 1; // Search left half
        } else {
            low = mid + 1; // Search right half
        }
    }

    return answer;
};

// var findDuplicate = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         let ind = Math.abs(nums[i]);
//         if(nums[ind] < 0){
//             return ind;
//         }

//         nums[ind] = - nums[ind];
//     }

//     return -1;
// };