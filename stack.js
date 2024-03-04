/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to start of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
      this.size++;
      return;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.size++;
      return;
    }

  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw Error("There is nothing in this list")
    }
    let returnVal = this.first.val;
    let newFirst = this.first.next;
    this.first = newFirst;
    this.size--;
    return returnVal;
    }

  

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) {
      throw Error("List is empty!")
    }
    let returnVal = this.first.val;
    return returnVal;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if(this.size === 0) {
      return true;
    } else return false;
  }
}

module.exports = Stack;
