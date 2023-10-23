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
    binsort(people, limit);
    let boats = 0;
    for(let lower = 0, upper = people.length-1; lower <= upper; boats++, upper--) {
        if(people[upper] != limit && people[upper]+people[lower] <= limit) {
            lower++;
        }
    }

    return boats;
};