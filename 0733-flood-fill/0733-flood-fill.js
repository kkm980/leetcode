/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    let oldColor=image[sr][sc];
    image[sr][sc]=color;
    changeColor(sr-1,sc, oldColor, color);
            changeColor(sr+1,sc, oldColor, color);
            changeColor(sr,sc+1, oldColor, color);
            changeColor(sr,sc-1, oldColor, color);
    
    function changeColor(r,c,oldColor, color){
        if(r<0||r>=image.length||c<0||c>=image[0].length){
            return;
        }
        if(image[r][c] !== oldColor){
            return;
        }
         if(image[r][c] === color){
            return;
        }
        if(image[r][c]===oldColor){
            image[r][c]=color;
            changeColor(r-1,c, oldColor, color);
            changeColor(r+1,c, oldColor, color);
            changeColor(r,c+1, oldColor, color);
            changeColor(r,c-1, oldColor, color);
        }
    }

    return image;

};