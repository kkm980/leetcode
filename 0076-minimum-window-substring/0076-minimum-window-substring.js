/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    if (!s || !t || s.length < t.length) {
        return "";
    }
    
    const frequencyMap = new Array(128).fill(0);

    // Populate the frequency map with characters from string 't'
    for (let i = 0; i < t.length; i++) {
        const charCode = t.charCodeAt(i); // Get the ASCII code of the character
        frequencyMap[charCode]++; // Increment the count of the character in the map
    }

    let counter = t.length; // Counter to track the number of characters remaining to be found
    let start = 0; // Start index of the current window
    let end = 0; // End index of the current window
    let minWindowLength = Number.MAX_SAFE_INTEGER; // Initialize the minimum window length
    let minWindowStart = 0; // Start index of the minimum window

    // Loop through the string 's'
    while (end < s.length) {
        const charCodeEnd = s.charCodeAt(end);
        // Decrease the frequency count of the current character in the map
        if (frequencyMap[charCodeEnd] > 0) {
            counter--; // Decrement the counter if the character is found in 't'
        }
        frequencyMap[charCodeEnd]--; // Decrease the frequency count of the current character

        // If all characters in 't' are found in the current window
        while (counter === 0) {
            // Update the minimum window length and start index if shorter
            if (end - start + 1 < minWindowLength) {
                minWindowLength = end - start + 1;
                minWindowStart = start;
            }

            const charCodeStart = s.charCodeAt(start);
            // Increase the frequency count of the character at the start index
            frequencyMap[charCodeStart]++;
            // If the character at the start index is one of the characters in 't', increment the counter
            if (frequencyMap[charCodeStart] > 0) {
                counter++;
            }
            // Move the start pointer to shrink the window
            start++;
        }
        // Move the end pointer to expand the window
        end++;
    }

    // If no valid window is found, return an empty string
    if (minWindowLength === Number.MAX_SAFE_INTEGER) {
        return "";
    } else {
        // Otherwise, return the substring of 's' representing the minimum window
        return s.substring(minWindowStart, minWindowStart + minWindowLength);
    }
}
