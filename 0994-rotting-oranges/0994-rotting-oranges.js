/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let time = 0
    const queue = []
    const m = grid.length
    const n = grid[0].length
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 2){
                queue.push([i,j])
            }
        }
    }
    while(queue.length > 0){
        const size = queue.length
        time += 1
        for(let k = 0; k < size; k++){
            const [x, y] = queue.shift()
            for(let [i,j] of [[0,1],[0,-1],[1,0],[-1,0]]){
                if(x+i < 0 || x+i >= m || y+j < 0 || y+j >= n || grid[x+i][y+j] === 0 || grid[x+i][y+j] === 2)continue
                if(grid[x+i][y+j] === 1){
                    grid[x+i][y+j] = 2
                    queue.push([x+i,y+j])
                }
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1)return -1
        }
    }
    return time === 0 ? 0 : time-1
};