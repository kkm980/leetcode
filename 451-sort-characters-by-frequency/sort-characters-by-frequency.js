/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
    const freqMap = new Map();

    // Step 1: Count frequencies
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Bucket sort — array index represents frequency
    const buckets = Array(s.length + 1).fill().map(() => []);

    for (let [char, freq] of freqMap.entries()) {
        buckets[freq].push(char);
    }

    // Step 3: Build result from high to low frequency
    let result = '';
    for (let i = buckets.length - 1; i > 0; i--) {
        for (let char of buckets[i]) {
            result += char.repeat(i);
        }
    }

    return result;
}
