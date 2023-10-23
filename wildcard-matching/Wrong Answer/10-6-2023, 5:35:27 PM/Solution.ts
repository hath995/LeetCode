// https://leetcode.com/problems/wildcard-matching

function matchHelper(s: string, p: string, sindex: number, pindex: number, branch: number): boolean {
  console.log(s,p,sindex,pindex, branch, s.slice(0,sindex), p.slice(0,pindex),":");
  if(p.length == 0 && s.length == 0) return (true);
  if(pindex >= p.length && sindex < s.length || (sindex >= s.length && pindex < p.length-1)) return (false);
  if(pindex >= p.length || sindex >= s.length && pindex == p.length) return ( true);
  if(p[pindex] == "*") {
    let res =matchHelper(s, p, sindex, pindex+1,1) || matchHelper(s, p, sindex+1, pindex+1,2) || matchHelper(s, p, sindex+1, pindex,3);
    return res
  }
  
  if(p[pindex] == "?") {
    return matchHelper(s, p, sindex+1, pindex+1,4);
  }

  return sindex < s.length && pindex < p.length && s[sindex] === p[pindex] && matchHelper(s,p,sindex+1,pindex+1,5);
}

function isMatch(s: string, p: string): boolean {
  return matchHelper(s, p, 0, 0, 0);
  //return false;
};