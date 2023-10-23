// https://leetcode.com/problems/wildcard-matching

function matchHelper(s: string, p: string, sindex: number, pindex: number): boolean {
  if(p.length == 0 && s.length == 0) return true;
  if(pindex >= p.length && sindex <= s.length) return false;
  if(pindex > s.length || pindex >= p.length || sindex >= s.length) return true
  if(p[pindex] == "*") {
    return matchHelper(s, p, sindex+1, pindex+1) || matchHelper(s, p, sindex+1, pindex);
  }
  
  if(p[pindex] == "?") {
    return matchHelper(s, p, sindex+1, pindex+1);
  }

  return sindex < s.length && pindex < p.length && s[sindex] === p[pindex] && matchHelper(s,p,sindex+1,pindex+1);
}

function isMatch(s: string, p: string): boolean {
  return matchHelper(s, p, 0, 0);
  //return false;
};