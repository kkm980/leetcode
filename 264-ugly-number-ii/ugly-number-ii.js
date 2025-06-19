/**
 * @param {number} n
 * @return {number}
 */


var nthUglyNumber = function (n) {
    let id2 = 0
    let id3 = 0
    let id5 = 0

    let uglyNumbers = [1]

    while (uglyNumbers.length < n) {
        let val2 = uglyNumbers[id2] * 2
        let val3 = uglyNumbers[id3] * 3
        let val5 = uglyNumbers[id5] * 5

        let next = Math.min(val2, val3, val5)
        uglyNumbers.push(next)

        if (next == val2) id2++
        if (next == val3) id3++
        if (next == val5) id5++

    }
    
    return uglyNumbers[n-1]
};