// https://leetcode.com/problems/pascals-triangle

function g(rows: number[][], i: number, k: number): number {
    //console.log("g", i, k);
    if(rows[i] == undefined) return 0;
    if(k < 0 || k >= rows[i].length) return 0;
    return rows[i][k];
}

function generate(numRows: number): number[][] {
    let results: number[][] = [[1]];
    for(let i = 1; i < numRows; i++) {
        results[i] = new Array(i+1);
        for(let k = 0; k <= i; k++) {
            //console.log("left", g(results, i-1, k));
            //console.log("right", g(results, i-1, k+1));
            results[i][k] = g(results, i-1, k-1) + g(results, i-1, k);
        }
        //console.log("results", results[i]);
    }
    return results;
};