/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // If s1 is longer than s2, s1 can't be a permutation of any substring of s2
    if (s1.length > s2.length) return false;

    // Create a frequency map to count how many times each character appears in s1
    const neededChar = {};
    for (let char of s1) {
        neededChar[char] = (neededChar[char] || 0) + 1;
    }

    let left = 0;                        // Start of sliding window
    let right = 0;                       // End of sliding window
    let requiredLength = s1.length;     // Number of characters we still need to match

    // Go through each character in s2 using the sliding window
    while (right < s2.length) {
        let currentChar = s2[right];

        // If current character is needed, reduce requiredLength
        if (neededChar[currentChar] > 0) {
            requiredLength--;
        }

        // Whether needed or not, decrease the count in the map
        // (If not needed, it just goes negative and we ignore it later)
        neededChar[currentChar]--;

        // Move right pointer to expand the window
        right++;

        // If all characters matched, return true
        if (requiredLength === 0) {
            return true;
        }

        // If window size exceeds s1 length, we shrink from the left
        if (right - left === s1.length) {
            let leftChar = s2[left];

            // If the left character we're removing was part of the original needed characters
            // and its count is now >= 0, it means we are "losing" a valid match
            if (neededChar[leftChar] >= 0) {
                requiredLength++;
            }

            // Restore the count of the left character in the map
            neededChar[leftChar]++;

            // Move the left pointer to shrink the window
            left++;
        }
    }

    // If we reach here, no matching permutation found
    return false;
};
