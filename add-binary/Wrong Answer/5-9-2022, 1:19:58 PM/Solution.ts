// https://leetcode.com/problems/add-binary

function sand(a: string, b: string): string {
    return (a === "1" && b === "1")  ? "1" : "0";
}

function sor(a: string, b: string): string {
    return (a === "1" || b === "1")  ? "1" : "0";
}

function sxor(a: string, b: string): string {
    return (a === "1" && b === "1") || (a === "0" && b === "0") ? "0" : "1";
}

function addBinary(a: string, b: string): string {
    let result = [];
    let carry = "0";
    //a = a.split("").reverse().join("")
    //b = b.split("").reverse().join("")
    const length = Math.max(a.length, b.length);
    for(let i = 0; i < length; i++) {
        if(a[length-i-1] !== undefined && b[length-i-1] !== undefined) {
            const ah = a[length-i-1];
            const be = b[length-i-1];
            let sum = sxor(sxor(ah,be), carry);
            carry = sor( sand(ah, be), sand(carry, sxor(ah,be)));
            result.push(sum);
        }else if(a[length-i-1] !== undefined || b[length-i-1] !== undefined) {
            let bit = a[length-i-1] || b[length-i-1];
            let sum = sxor(bit, carry);
            carry = sand(carry, bit);
            result.push(sum);
        }
    }
    if(carry == "1") {
        result.push(carry)
    }
    result.reverse();
    return result.join("");
};