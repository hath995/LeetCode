// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string

function strStr(haystack: string, needle: string): number {
    const hl = haystack.length;
    const nl = needle.length;
    outer: for(let i = 0; i < hl; i++) {
        for(let k=0; k < nl; k++) {
            if(haystack[i] !== needle[k]) {
                continue outer;
            }
        }
        return i;
    }
    return -1;
};