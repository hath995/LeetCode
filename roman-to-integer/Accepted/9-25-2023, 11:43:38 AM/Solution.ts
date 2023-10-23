// https://leetcode.com/problems/roman-to-integer


function romanToInt(s: string): number {
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    const n = s.length;
    let result = 0;
    let curVal, nextVal;
    for(let i=0; i < n; i++) {
        curVal = symbols[s[i]];
        switch(s[i]) {
            case "I":
            case "X":
            case "C":
                if((nextVal = symbols[s[i+1]], nextVal !== undefined && nextVal > curVal)) {
                    result += nextVal - curVal;
                    i++;
                    break
                }
            default:
                result += curVal;
        }
    }
    return result
};