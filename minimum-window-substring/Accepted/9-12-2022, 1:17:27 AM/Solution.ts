// https://leetcode.com/problems/minimum-window-substring

function toMultiset(s: string): Map<string, number> {
    const s_mset: Map<string, number> = new Map();
    for(let char of s) {
        if(s_mset.has(char)) {
            s_mset.set(char, s_mset.get(char)+1);
        }else{
            s_mset.set(char, 1);
        }
    }
    return s_mset;
}

function isSubset(left: Map<string, number>, right: Map<string, number>) {
    for(let [lchar, lcount] of left) {
        if(!(right.has(lchar) && lcount <= right.get(lchar))) {
           return false;
        }
    }
    return true;
}

function minWindow(s: string, t: string): string {
    
    //exists x,y :: 0 <= x < y < |s| && multiset(t) <= multiset(s[x..y]) && forall i,j :: multiset(s[i..j]) <= multiset(t) ==> |s[i..j]| <= |sp[x..y]|
    const m = s.length;
    const n = t.length;
    if (m < n) {
        return "";
    }
    
    const tms = toMultiset(t);
    const window_ms = new Map<string, number>();
    
    let l = 0, r = 0;
    let finalString = "";
    while(r < m) 
    
    {
        if(window_ms.has(s[r])) {
            window_ms.set(s[r], window_ms.get(s[r])+1);
        }else{
            window_ms.set(s[r], 1);
        }
        
        //console.log(window_ms)
        if(isSubset(tms, window_ms)) {
            //console.log("ms", window_ms)
            let substr1 = s.substring(l, r+1);
            
            finalString = finalString.length > 0 && finalString.length < substr1.length ? finalString : substr1;
            
            while(l <= r) {
                //console.log(l, window_ms);
                //console.log(finalString)
                //if(window_ms.has(s[l])) {
                    window_ms.set(s[l], window_ms.get(s[l])-1);
                    //if(window_ms.get(s[l]) > 1) {
                    //window_ms.set(s[l], window_ms.get(s[l])-1);
                    //}else{
                    //    window_ms.delete(s[l])
                    //}
                //}
                if(!isSubset(tms, window_ms)) {
                    //console.log("got here?")
                    let substr2 = s.substring(l, r+1);
                    finalString = finalString.length > 0 && finalString.length < substr2.length ? finalString : substr2;
                    l++;
                    break;
                }
                l++;
            }
        }
        r++;
    }
    
    return finalString;
};