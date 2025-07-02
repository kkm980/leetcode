/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function(s) {
//     let count = {};
//     for(let char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     return Object.keys(count).sort((a , b) => count[b] - count[a]).map(char => char.repeat(count[char])).join('');
// };

var frequencySort = function(s) {
    const freqMap = new Map();

    // Step 1: Count frequency of each character
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Sort characters by frequency in descending order
    const sortedChars = Array.from(freqMap.entries())
        .sort((a, b) => b[1] - a[1]);

    // Step 3: Build the result string
    let result = '';
    for (let [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }

    return result;
};
