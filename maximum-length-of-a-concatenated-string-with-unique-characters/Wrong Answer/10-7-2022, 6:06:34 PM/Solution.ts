// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function maxLength(arr: string[]): number {
    arr = arr.filter(s => new Set(s).size == s.length);
    let max = 0;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(intersection(new Set(arr[i]), new Set(arr[j]) ).size == 0) {
                if(max < arr[i].length + arr[j].length) {
                    max = arr[i].length + arr[j].length;
                }
            }
        }
    }
    return max;
};