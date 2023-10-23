// https://leetcode.com/problems/minimum-path-sum

function val(grid: number[], x: number, y: number): number {
    if (x < 0 || y < 0) {
        return Infinity;
    }
    return grid[x][y];
}

function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let minCosts = new Array(grid.length);
    for(let i = 0; i < m; i++) {
        minCosts[i] = new Array(grid[i].length);
        minCosts[i].fill(0);
    }
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(k == 0 && i == 0) {
                minCosts[i][k] = grid[i][k];
            }else{
            minCosts[i][k] = Math.min(val(minCosts,i-1,k), val(minCosts,i,k-1)) + grid[i][k];
            }
        }
    }
    //console.log(minCosts);
    return minCosts[m-1][n-1];
};