/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = new Array(128).fill(0); // Array to store character frequencies (ASCII range: 0-127)
    let counter = 0; // Counter to track the number of repeating characters
    let begin = 0; // Start index of the current substring
    let end = 0; // End index of the current substring
    let longestLength = 0; // Length of the longest substring without repeating characters
    
    // Loop through the string 's'
    while (end < s.length) {
        // Increase the frequency count of the character at the 'end' index and move 'end' pointer
        if (map[s.charCodeAt(end)]++ > 0) {
            counter++; // Increment counter if the character is already in the substring
        }
        end++; // Move 'end' pointer to the next character
        
        // While there are repeating characters in the current substring
        while (counter > 0) {
            // Decrease the frequency count of the character at the 'begin' index and move 'begin' pointer
            if (map[s.charCodeAt(begin)]-- > 1) {
                counter--; // Decrement counter if the character is no longer repeating
                
            }
            begin++;
        }
        
        // Update longestLength if the current substring is longer
        longestLength = Math.max(longestLength, end - begin);
    }
    
    return longestLength;
}
