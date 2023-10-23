// https://leetcode.com/problems/asteroid-collision

function asteroidCollision(asteroids: number[]): number[] {

    let i = 0;
    let stack = [];

    function stackInvalid(stack): boolean {
        for(let i=0; i < stack.length; i++) {
            if(i-1 >= 0 && stack[i-1] > 0 && stack[i] < 0) {
                if(Math.abs(stack[i-1]) == Math.abs(stack[i])) {
                    stack.splice(i-1,2);
                }else if(Math.abs(stack[i-1]) < Math.abs(stack[i])) {
                    stack.splice(i-1,1);
                }else if(Math.abs(stack[i-1]) > Math.abs(stack[i])) {
                    stack.splice(i,1);
                }
                return true;
            }
        }
        return false;
    }

    while(i < asteroids.length) {
        if(stack.length > 0 && stack[stack.length-1] > 0 && asteroids[i] < 0) {
            if(Math.abs(stack[stack.length-1]) == Math.abs(asteroids[i])) {
                stack.pop();
            }else if(Math.abs(stack[stack.length-1]) < Math.abs(asteroids[i])) {
                stack.pop();
                stack.push(asteroids[i])
            }
        }else if (stack.length > 0 && stack[stack.length-1] < 0 && asteroids[i] > 0) {
            stack.push(asteroids[i]);
        }else {
            stack.push(asteroids[i]);
        }
        i++;
        while(stackInvalid(stack)) {

        }
    }
    return stack
};