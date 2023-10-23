// https://leetcode.com/problems/richest-customer-wealth

function maximumWealth(accounts: number[][]): number {
    let richest = 0;
    for(let i = 0; i < accounts.length; i++) {
        let wealth = 0;
        for(let k = 0; k < accounts[i].length; k++ ) {
            wealth += accounts[i][k];
        }
        if(wealth > richest) {
            richest = wealth;
        }
    }
    return richest;
};