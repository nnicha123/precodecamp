class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        } else {
            var tail_old = this.tail;
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            this.length--;
            return tail_old;
        }
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        var old_head = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = old_head.next;
            this.head.prev = null;
            old_head.next = null;
        }
        this.length--;
        return old_head;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
newList = new DoublyLinkedList();
console.log(newList);
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
console.log(newList);
console.log(newList.unshift('Alaska'));