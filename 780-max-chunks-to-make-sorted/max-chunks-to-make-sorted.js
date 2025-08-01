/**
 * @param {number[]} arr
 * @return {number}
 */
function maxChunksToSorted(arr) {
    let maxSoFar = 0;
    let chunks = 0;

    for (let i = 0; i < arr.length; i++) {
        maxSoFar = Math.max(maxSoFar, arr[i]);
        if (maxSoFar === i) {
            chunks++;
        }
    }

    return chunks;
}
