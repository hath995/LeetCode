// https://leetcode.com/problems/reverse-bits

function reverseBits(n: number): number {
	let result = 0;
    for(let i = 0; i < 32; i++) {
        result = result * 2;
        if(n & 1) {
            result = result + 1;
        }
        // console.log(result, result.toString(2),n)
        n = n>>1;
    }
    return result;
};