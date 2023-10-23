// https://leetcode.com/problems/asteroid-collision

function asteroidCollision(asteroids: number[]): number[] {

    let i = 0;
    let stack = [];
    while(i < asteroids.length) {
        if(stack.length > 0 && stack[stack.length-1] > 0 && asteroids[i] < 0) {
            if(Math.abs(stack[stack.length-1]) <= Math.abs(asteroids[i])) {
                stack.pop();
            }
        }else if (stack.length > 0 && stack[stack.length-1] < 0 && asteroids[i] > 0) {
            stack.push(asteroids[i]);
        }else {
            stack.push(asteroids[i]);
        }
        i++;
    }
    return stack
};