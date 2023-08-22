//1. Implement a Stack using Arrays:

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

//2. Implement a Queue using Two Stacks:

class Queue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  enqueue(item) {
    this.inputStack.push(item);
  }

  dequeue() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack.pop();
  }

  peek() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
    return this.outputStack[this.outputStack.length - 1];
  }
}

//3. Check if Parentheses in a String are Balanced using a Stack:

function areParenthesesBalanced(str) {
  const stack = [];

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" && stack.pop() !== "(") {
      return false;
    } else if (char === "}" && stack.pop() !== "{") {
      return false;
    } else if (char === "]" && stack.pop() !== "[") {
      return false;
    }
  }

  return stack.length === 0;
}

//4. Implement a Min-Stack:

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(item) {
    this.stack.push(item);
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (this.stack.length > 0) {
      if (
        this.stack[this.stack.length - 1] ===
        this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.pop();
      }
      return this.stack.pop();
    }
  }

  getMin() {
    if (this.minStack.length > 0) {
      return this.minStack[this.minStack.length - 1];
    }
  }
}

//5. Design a Queue with push, pop, front, and getMin Operations in Constant Time:

class MinQueue {
  constructor() {
    this.queue = [];
    this.minQueue = [];
  }

  push(item) {
    this.queue.push(item);
    while (
      this.minQueue.length > 0 &&
      this.minQueue[this.minQueue.length - 1] > item
    ) {
      this.minQueue.pop();
    }
    this.minQueue.push(item);
  }

  pop() {
    if (this.queue.length > 0) {
      if (this.queue[0] === this.minQueue[0]) {
        this.minQueue.shift();
      }
      return this.queue.shift();
    }
  }

  front() {
    if (this.queue.length > 0) {
      return this.queue[0];
    }
  }

  getMin() {
    if (this.minQueue.length > 0) {
      return this.minQueue[0];
    }
  }
}
