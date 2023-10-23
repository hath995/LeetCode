// https://leetcode.com/problems/excel-sheet-column-title

function convertToTitle(columnNumber: number): string {
    let result = [];
    while(columnNumber >= 1) {
      // let char = Math.floor(columnNumber / 26);
      // if(char > 0 ) {
      //   result.push(String.fromCharCode(64+char))
      //   columnNumber -= char*26;
      // //}else if(char >= 27) {
      // }else{
      //   result.push(String.fromCharCode(64+columnNumber%27))
      //   columnNumber -= columnNumber%27;
      // }
      let char = columnNumber % 26;
      //console.log(char)
      if(char === 0) {
        result.push(String.fromCharCode(64+26))
        columnNumber = (columnNumber - 26)/26;
      }else{
        result.push(String.fromCharCode(64+char))
        columnNumber = (columnNumber - char) / 26;
      }
    }
    return result.reverse().join("");
};