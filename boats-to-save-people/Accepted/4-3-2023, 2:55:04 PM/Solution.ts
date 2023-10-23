// https://leetcode.com/problems/boats-to-save-people

function binsort(nums: number[], limit: number) {
    let result = new Array
}

function numRescueBoats(people: number[], limit: number): number {
    people.sort((a,b) => a-b);
    let boats = 0;
    let lower = 0, upper = people.length-1; 
    while(lower <= upper) {
        if(people[upper] == limit || people[upper]+people[lower] > limit) {
            boats++
            upper--;
        }else {
            upper--;
            lower++;
            boats++;
        }
    }

    return boats;
};