class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;

    }
    transverse() {
        var current = this.head;
        while (current) {
            // console.log(current.val);
            current = current.next;
        }
    }
    pop() {

        if (!this.head) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            //do nothing
            return undefined;
        }
        var temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;
    }
    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        var current = this.head;
        var count = 0;
        while(count < index){
            current = current.next;
            count++;
        }
        return current;
    }
    set(index,value){
        var current = this.get(index);
        var count = 0;
        if(!current){
            return false; 
        } 
        current.val = value;
        return true;
    }
}

var newList = new SinglyLinkedList();
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
console.log(newList.set(2,"eva"));
console.log(newList.get(2));
