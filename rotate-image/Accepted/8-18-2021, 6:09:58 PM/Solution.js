// https://leetcode.com/problems/rotate-image

function perm(n, index) {
    return index * n  % (n*n+1);
}

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
    const nsq = n * n / 2;
    let visited = new Array(Math.ceil(nsq/32));
    visited.fill(0);
    for(let i=1; i <= nsq; i++) {
        let s = Math.floor(i/32);
        let t = i%32;
        if(visited[s] & (1 << t)) continue;
        let temp = null;
        let k = i;
        while(!(visited[s] & (1 << t))) {
            //console.log(k);
            visited[s] = visited[s] | (1 << t);
            let j = perm(n, k);
            if(j==k) continue;
            let [y,x] = pos2arr(n,k);
            let [a,b] = pos2arr(n, j);
            let localtemp = mat[a][b];

            mat[a][b] = temp === null ? mat[y][x] : temp;
            temp = localtemp;
            k = j;
            s = Math.floor(k/32);
            t = k%32;
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