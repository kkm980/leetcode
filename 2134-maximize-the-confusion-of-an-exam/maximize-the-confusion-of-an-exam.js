/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let windowStart = 0;
    let maxRepeatCharCount = 0;
    let maxLength = 0;
    const charFrequency = {};

    // Loop through the string using a sliding window
    for (let windowEnd = 0; windowEnd < answerKey.length; windowEnd++) {
        const rightChar = answerKey[windowEnd];

        // Count the frequency of the current character
        if (!charFrequency[rightChar]) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar]++;

        // Update the count of the most frequent character in the current window
        maxRepeatCharCount = Math.max(maxRepeatCharCount, charFrequency[rightChar]);

        // If the remaining characters (that are not max) are more than k, shrink window
        let windowSize = windowEnd - windowStart + 1;
        if (windowSize - maxRepeatCharCount > k) {
            const leftChar = answerKey[windowStart];
            charFrequency[leftChar]--;
            windowStart++; // shrink the window from the left
        }

        // Update the maximum length found so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};