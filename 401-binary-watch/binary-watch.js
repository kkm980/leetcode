/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if (turnedOn < 0 || turnedOn > 10) return [];
    const result = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if ((h.toString(2).split('1').length - 1 + m.toString(2).split('1').length - 1) === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }

    return result;
};