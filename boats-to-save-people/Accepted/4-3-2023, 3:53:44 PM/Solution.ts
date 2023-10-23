// https://leetcode.com/problems/boats-to-save-people

function binsort(nums: number[], limit: number) {
    let result = new Array(limit);
    result.fill(0);
    for(let i = 0; i < nums.length; i++) {
        result[nums[i]-1]++;
    }
    var k = 0;
    for(let i=0; i < result.length; i++) {
        for(let j = 0; j < result[i]; j++) {
            nums[k++] = i+1;
        }
    }
}

function numRescueBoats(people: number[], limit: number): number {
    //people.sort((a,b) => a-b);
    //console.log(people);
    binsort(people, limit);
    //console.log(people);
    let boats = 0;
    let lower = 0, upper = people.length-1; 
    while(lower <= upper) {
        if(people[upper] == limit || people[upper]+people[lower] > limit) {
            boats++
            upper--;
        }else {
            if (lower == upper) {

            }else{
                upper--;
            }
            lower++;
            boats++;
        }
    }

    return boats;
};