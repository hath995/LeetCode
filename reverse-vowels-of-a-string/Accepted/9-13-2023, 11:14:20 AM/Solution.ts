// https://leetcode.com/problems/reverse-vowels-of-a-string

function reverseVowels(s: string): string {
    let consonants = s.split(/[aeiouAEIOU]/);
    let vowels = s.split(/[^aeiouAEIOU]+/).join("").split("").reverse();
    // console.log(consonants, vowels)
    let result = [];
    let vowelIndex = 0;
    for(let consonant of consonants) {
        if(consonant !== "") {
            result.push(consonant);
        }
        result.push(vowels[vowelIndex++])
    }
    return result.join("")
};