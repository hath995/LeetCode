// https://leetcode.com/problems/excel-sheet-column-title

function convertToTitle(columnNumber: number): string {
    let result = [];
    while(columnNumber > 0) {
      let char = Math.floor(columnNumber / 26);
      if(char > 0) {
        result.push(String.fromCharCode(64+char))
        columnNumber -= char*26;
      }else{
        result.push(String.fromCharCode(64+columnNumber%27))
        columnNumber -= columnNumber%27;
      }
    }
    return result.join("");
};