// https://leetcode.com/problems/zigzag-conversion

function convert(s: string, numRows: number): string {
    let result: string[][] = new Array(numRows);
    for(let i=0; i < numRows; i++) result[i] = new Array();
    if(numRows == 1) return s;
    let x = 0;
    let diag = false;
    let columns = 0, diags = 0;
    for(let i = 0; i < s.length; i++) {

        if(diag) {
            const Y = (2*numRows-2)-i%(2*numRows-2);
            // console.log("A", Y, x, s[i],i);
            result[Y][x] = s[i];
            x++;

            if((i+1) % (2*numRows-2) == 0) {
                diag = false;
            }
        }else{
            let Y=i%(2*numRows-2);
            // console.log("B",Y, x, s[i],i);
            result[Y][x] = s[i];
        }

        if(i-(numRows-1) >= 0 && (i-(numRows-1)) %(2*numRows-2) == 0) {
            diag = true;
            x++;
        }
    }
    // console.log(result);
    
    return result.map(row => row.map(x => x === undefined? " " : x)).flat().join("")
};

/*
P0 (0,0)          A4 (0,2)    H8     N12
A1 (1,0) P3 (1,1) L5 (1,2) S7 I9 I11 G13
Y2 (2,0)          I6 (2,2)    R10
numRows = 3
3+1+3=7-1 =6
3+1=4 -1 =3
[0,0]
[2,1]
(2-(2))%4


P0      I6      N12
A1   L5 S7  I11 G13
Y2 A4   H8 R10  X14
P3      I9.     X15
numRows = 4
4+2+4=10
i % (2*numRows-2) == 0 
(i-(numRows-1) % (2*numRows-2) ==0
9-3
15-3
3 9 15
*/