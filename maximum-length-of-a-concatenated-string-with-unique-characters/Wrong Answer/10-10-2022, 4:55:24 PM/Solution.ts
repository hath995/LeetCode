// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters

function union<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

function intersection<T>(setA: Set<T>, setB: Set<T>): Set<T> {
  const _intersection: Set<T> = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function maxLength(arr: string[]): number {
    arr = arr.filter(s => new Set(s).size == s.length);
    arr.push("");
    let maxes: Set<string>[] = []
    for(let i = 0; i < arr.length-1; i++) {
        let currentS: Set<string> = new Set(arr[i]);
        //console.log("maxes",maxes)
        if(maxes.length > 0) {
            for(let k = maxes.length - 1; k >= 0; k--) {
                //console.log(currentS, maxes[k])
                if(intersection(currentS, maxes[k]).size == 0) {
                    let currentUnion: Set<string> = union(currentS, maxes[k]);
                    if(currentUnion.size > maxes[maxes.length-1].size) {
                        maxes.push(currentUnion);
                        break;
                    }
                }else if(currentS.size > maxes[k].size && k == maxes.length-1) {
                    maxes.push(currentS);
                    break;
                }
            }
        }else{
            maxes.push(new Set(arr[i]));
        }
    }
    return maxes.length > 0 ? maxes[maxes.length-1].size : 0;
};
/*

        for(let j = i+1; j < arr.length; j++) {
            if(intersection(new Set(arr[i]), new Set(arr[j]) ).size == 0) {
                if(max < arr[i].length + arr[j].length) {
                    max = arr[i].length + arr[j].length;
                }
            }
        }
*/