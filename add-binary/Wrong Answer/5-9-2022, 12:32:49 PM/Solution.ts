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
    const length = Math.max(a.length,b.length);
    for(let i = 0; i < length; i++) {
        if(a[i] && b[i]) {
            let sum = sxor(sxor(a[i],b[i]), carry);
            carry = sor( sand(a[i], b[i]), sand(carry, sxor(a[i],b[i])));
            result.push(sum);
        }else if(a[i] || b[i]) {
            let bit = a[i] || b[i];
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