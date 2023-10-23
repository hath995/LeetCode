// https://leetcode.com/problems/happy-number

function isHappy(n: number): boolean {
    let seenHappy = new Set();
    let happy = n;
    while(!seenHappy.has(happy) && happy != 1) {
        seenHappy.add(happy);
        happy = happy.toString().split("").map(x => parseInt(x)).reduce((x,y)=>x+y);
    }
    return happy == 1;
};