// https://leetcode.com/problems/power-of-two

function isPowerOfTwo(n: number): boolean {
    // if(n == 0) return false;
    // if(n == 1 || n == 2) return true;
    
    // return n % 2 == 0 && isPowerOfTwo(n/2);
    let i = -1; 
    let nprime = n;
    while(nprime > 0) {
        nprime = nprime >> 1;
        i++;
    }
    return (1 << i) === n;
};