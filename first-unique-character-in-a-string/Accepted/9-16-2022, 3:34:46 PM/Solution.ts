// https://leetcode.com/problems/first-unique-character-in-a-string

function difference<A>(setA: Set<A>, setB: Set<A>): Set<A> {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}

function firstUniqChar(s: string): number {
    let letterIndices: {[key: string]: number} = {};
    let letters: Set<string> = new Set();
    let dupes: Set<string> = new Set();
    const n = s.length;
    for(let i = 0; i < n; i++) {
        if(letters.has(s[i])) {
            dupes.add(s[i])
        }else{
            letterIndices[s[i]] = i;
        }
        letters.add(s[i]);
    }
    //console.log(letters, dupes)
    let uniques = difference(letters, dupes);
    //console.log(uniques)
    let uniqueIndex = -1;
    for(let letter of uniques) {
       if(uniqueIndex == -1 || uniqueIndex > letterIndices[letter]) {
           uniqueIndex = letterIndices[letter];
       }
    }
    return uniqueIndex;
};