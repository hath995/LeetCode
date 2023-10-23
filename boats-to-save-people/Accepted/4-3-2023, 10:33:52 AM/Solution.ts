// https://leetcode.com/problems/boats-to-save-people

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a,b) => a-b);
    let boats = 0;
    let lower = 0, upper = people.length-1; 
    //console.log(lower, upper);
    while(lower <= upper) {
        if(people[upper] == limit || people[upper]+people[lower] > limit) {
            //console.log("case 1")
            boats++
            upper--;
        }else if(people[upper]+people[lower] <= limit) {
            //console.log("case 1")
            upper--;
            lower++;
            boats++;
        }else{
            
            //console.log("got here")
        }
//console.log(lower, upper);
    }

    return boats;
};