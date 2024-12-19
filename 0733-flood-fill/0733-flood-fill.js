/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];
    
    // If the old color is the same as the new color, no need to proceed
    if (oldColor === color) {
        return image;
    }

    function changeColor(r, c) {
        // Base cases: Out of bounds or color mismatch
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== oldColor) {
            return;
        }

        // Change the color of the current pixel
        image[r][c] = color;

        // Recursively change the color of adjacent pixels
        changeColor(r - 1, c); // Up
        changeColor(r + 1, c); // Down
        changeColor(r, c - 1); // Left
        changeColor(r, c + 1); // Right
    }

    // Start the flood fill from the given starting point
    changeColor(sr, sc);
    return image;
};
