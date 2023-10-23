// https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests

function busiestServers(k: number, arrival: number[], load: number[]): number[] {
  const servers = new Array(k);
  servers.fill(null);
  const serverjobs = new Array(k);
  //let jobs = new Array(k);
  for(let i=0; i < k; i++) {
    jobs[i] = [];
  }
  serverjobs.fill(0);
  const n = arrival.length;
  let time = arrival[0];
  for(let i = 0; i < n; i++) {
    let assigned = false;
    let ds = i%k;
    time = arrival[i];
    for(let j=0; j < k; j++) {
      let si = (ds+j)%k;
      if(!assigned && servers[si] == null) {
        servers[si]=i;
        //jobs[si].push(i);
        assigned = true;
        break;
      }
      if(!assigned && load[servers[si]]+arrival[servers[si]] <= time) {
        serverjobs[si]++;
        servers[si] = i;
        //jobs[si].push(i);
        assigned = true;
        break;
      }
      //if(assigned && load[servers[si]]+arrival[servers[si]] <= time) {
      //  serverjobs[si]++;
      //  servers[si] = null;
      //}
      
    }
  }
  for(let j=0; j< k; j++) {
    if(servers[j] !== null) {
      serverjobs[j]++;
    }
  }
  //console.log(serverjobs, jobs)
  let maxjobs = Math.max(...serverjobs);
  return serverjobs.map((xs, i) => xs == maxjobs ? i : null).filter(xs => xs !== null);
};