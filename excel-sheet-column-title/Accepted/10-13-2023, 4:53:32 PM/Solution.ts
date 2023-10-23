// https://leetcode.com/problems/excel-sheet-column-title

function convertToTitle(columnNumber: number): string {
    // let result = [];
    let result = "";
    while(columnNumber >= 1) {
      // let char = columnNumber % 26;
      // //console.log(char)
      // if(char === 0) {
      //   result.push(String.fromCharCode(64+26))
      //   columnNumber = (columnNumber - 26)/26;
      // }else{
      //   result.push(String.fromCharCode(64+char))
      //   columnNumber = (columnNumber - char) / 26;
      // }

      let char = columnNumber % 26 !== 0 ? columnNumber % 26 : 26;
      // result.push(String.fromCharCode(64+char))
      result  = (String.fromCharCode(64+char))+result;
      columnNumber = (columnNumber - char) / 26;
    }
    // return result.reverse().join("");
    return result;
};