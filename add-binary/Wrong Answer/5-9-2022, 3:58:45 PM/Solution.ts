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

function gv(a: string, i: number): string {
    return i >= a.length ? "0" : "1";
}

function addBinary(a: string, b: string): string {
    let result = [];
    let carry = "0";
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    const length = Math.max(a.length, b.length);
    for(let i = 0; i < length; i++) {
        let sum = sxor(sxor(gv(a,i), gv(b,i) ), carry);
        carry = sor( sand(gv(a,i), gv(b,i)), sand(carry, sxor(gv(a,i), gv(b,i))));
        result.push(sum);
    }
    if(carry == "1") {
        result.push(carry)
    }
    result.reverse();
    return result.join("");
};