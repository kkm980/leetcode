/**
 * Function to find the nth number that is divisible by at least one of a, b, or c
 * using binary search on the answer.
 * 
 * @param {number} n - The position of the ugly number to find
 * @param {number} a - First divisor
 * @param {number} b - Second divisor
 * @param {number} c - Third divisor
 * @return {number} - The nth ugly number
 */
var nthUglyNumber = function(n, a, b, c) {
    // Helper function to calculate GCD (Greatest Common Divisor)
    const gcd = (a, b) => a === 0 ? b : gcd(b % a, a);

    // Helper function to calculate LCM (Least Common Multiple)
    const lcm = (a, b) => (a * b) / gcd(a, b);

    // Precompute LCMs for inclusion-exclusion
    const lcmAB = lcm(a, b);
    const lcmBC = lcm(b, c);
    const lcmAC = lcm(a, c);
    const lcmABC = lcm(lcmAB, c);

    // Binary search range: answer lies between 1 and a very large number
    let low = 1;
    let high = 2 * 10 ** 9; // Safe upper limit (based on constraints)

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        // Count how many numbers ≤ mid are divisible by a, b, or c
        const countA = Math.floor(mid / a);
        const countB = Math.floor(mid / b);
        const countC = Math.floor(mid / c);

        // Subtract overcounted multiples of pairs (LCM)
        const countAB = Math.floor(mid / lcmAB);
        const countBC = Math.floor(mid / lcmBC);
        const countAC = Math.floor(mid / lcmAC);

        // Add back the triple-overcounted values (LCM of all three)
        const countABC = Math.floor(mid / lcmABC);

        // Total unique values ≤ mid that are divisible by a, b, or c
        const count = countA + countB + countC - countAB - countBC - countAC + countABC;

        // If count is less than n, we need more numbers → move right
        if (count < n) {
            low = mid + 1;
        } else {
            // mid might be the answer, try smaller values
            high = mid;
        }
    }

    // When low == high, we have found the smallest number that satisfies the condition
    return low;
};
