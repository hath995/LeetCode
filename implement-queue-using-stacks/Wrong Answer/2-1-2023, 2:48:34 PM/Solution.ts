// https://leetcode.com/problems/implement-queue-using-stacks

class MyQueue{
    stack: number[];
    pointer: number;
    constructor() {
        this.stack = [];
        this.pointer = 0;
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        let result = this.stack[this.pointer++];
        if(this.pointer == this.stack.length) this.stack = [];
        return result
    }

    peek(): number {
        return this.stack[this.pointer];
    }

    empty(): boolean {
        return this.stack.length == this.pointer;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */