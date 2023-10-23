// https://leetcode.com/problems/repeated-substring-pattern



function repeatedSubstringPattern(s: string): boolean {
    let n = Math.floor(s.length/2);
    for(let i = 2; i <= n; i ++) {
        if(s.length % i !== 0) continue;
        
        let substring = s.slice(0, i);
        if(substring.repeat(s.length/i) == s) return true
        
    }
    return false;
};