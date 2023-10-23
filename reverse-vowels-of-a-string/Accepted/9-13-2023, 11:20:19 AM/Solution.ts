// https://leetcode.com/problems/reverse-vowels-of-a-string

function reverseVowels(s: string): string {
    let consonants = s.split(/[aeiou]/i);
    let vowels = s.split(/[^aeiou]+/i).join("").split("").reverse();
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