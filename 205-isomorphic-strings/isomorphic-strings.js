/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const charMap = {};

    for (let i = 0; i < s.length; i++) {
        const sc = s[i];
        const tc = t[i];

        if (charMap[sc]) {
            if (charMap[sc] !== tc) {
                return false;
            }
        } else if (Object.values(charMap).includes(tc)) {
            return false;
        }

        charMap[sc] = tc;
    }

    return true;    
};