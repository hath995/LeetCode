// https://leetcode.com/problems/rotate-image

function forwardRotationPermutation(n) {
    return function(index) {
        return index * n  % (n*n+1);
    }
}

function arr2pos(n, y,x) {
    return n*y+x+1;
};

function pos2arr(n, p) {
    return [Math.floor((p-1)/n), (p-1)%n]
}

function swapInPlace(mat) {
    const n = mat.length;
    let perm = forwardRotationPermutation(n);
    for(let i=1; i < n; i++) {
        let temp = null;
        let k = i;
        while(k !== i || temp == null) {
            //console.log(k);
            let j = perm(k);
            let [y,x] = pos2arr(n,k);
            let [a,b] = pos2arr(n, j);
            let localtemp = mat[a][b];

            mat[a][b] = temp === null ? mat[y][x] : temp;
            temp = localtemp;
            k = j;
        }
    }
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    swapInPlace(matrix);    
};