// https://leetcode.com/problems/roman-to-integer

const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function romanToInt(s: string): number {
    let result = 0;
    for(let i=0; i < s.length; i++) {
        switch(s[i]) {
            case "I":
            case "X":
            case "C":
                if(s[i+1] !== undefined && symbols[s[i+1]] > symbols[s[i]]) {
                    result += symbols[s[i+1]] - symbols[s[i]];
                    i++;
                }else{
                 result += symbols[s[i]]   
                }
                break;
            default:
                result += symbols[s[i]];
        }
    }
    return result
};