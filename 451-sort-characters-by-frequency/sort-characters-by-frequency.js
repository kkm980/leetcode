/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let count = {};
    for(let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    return Object.keys(count).sort((a , b) => count[b] - count[a]).map(char => char.repeat(count[char])).join('');
};
