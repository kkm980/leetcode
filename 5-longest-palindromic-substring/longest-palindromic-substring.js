/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let start = 0, end = 0;

    // Helper to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // length of palindrome
    }

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);       // Odd-length palindrome
        const len2 = expandAroundCenter(i, i + 1);   // Even-length palindrome
        const len = Math.max(len1, len2);

        if (len > end - start) {
            // Update start and end indices
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.slice(start, end + 1);
}
