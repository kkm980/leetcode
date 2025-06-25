/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
     // Step 1: Calculate the sum of the first 'k' cards from the start
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += cardPoints[i];
    }

    // This is our starting best score: taking all 'k' cards from the front
    let maxScore = currentSum;

    // Step 2: Try taking some cards from the end instead of the front
    // We'll remove one card from the front and add one from the end each time
    let n = cardPoints.length;
    for (let i = 1; i <= k; i++) {
        // Remove one card from the end of the front window
        currentSum -= cardPoints[k - i];

        // Add one card from the end of the array
        currentSum += cardPoints[n - i];

        // Update the maximum score if this combination gives a better score
        if (currentSum > maxScore) {
            maxScore = currentSum;
        }
    }

    // Step 3: Return the best score found
    return maxScore;
};