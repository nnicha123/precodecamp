class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        var current_first = this.first;
        if (!this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.first = newNode;
            this.first.next = current_first;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}
var stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());