// https://leetcode.com/problems/length-of-last-word

function lengthOfLastWord(s: string): number {
    let bits = s.split(/\s+/).filter(x => x.length > 0);
    return bits[bits.length-1].length;
};