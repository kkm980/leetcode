/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let n = grid.length;
    let m=grid[0].length;
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]==='1'){
                count+=dfs(i,j)
            }
        }
    }
    
    function dfs(i,j){
        if(i<0||i>n-1||j<0||j>m-1||grid[i][j]==="0"){
            return 0;
        }
        grid[i][j]="0";
        dfs(i,j+1);
        dfs(i+1,j);
        dfs(i-1,j);
        dfs(i,j-1);
        return 1;
    }
    return count;
};