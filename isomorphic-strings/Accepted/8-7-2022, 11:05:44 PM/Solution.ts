// https://leetcode.com/problems/isomorphic-strings

function isIsomorphic(s: string, t: string): boolean {

    let sMap = new Map<string, number>();
    let sTransform: number[] = [];
    let tMap = new Map<string, number>();
    let tTransform: number[] = [];
    
    let sIndex = 1;
    let tIndex = 1;
    if(s.length != t.length) return false
    
    for(let i = 0; i < s.length; i++) {
        if(!sMap.has(s[i])) {
            sMap.set(s[i], sIndex++);
        }
        sTransform.push(sMap.get(s[i])); 
    }
    
    for(let i = 0; i < t.length; i++) {
        if(!tMap.has(t[i])) {
            tMap.set(t[i], tIndex++);
        }
        tTransform.push(tMap.get(t[i])); 
    }
    
    return sTransform.every((elem, index) => elem == tTransform[index]);
};