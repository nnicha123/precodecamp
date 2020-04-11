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
    insert(index,val){
        if(index<0 || index>this.length){
            return false;
        }
        if(index === this.length){
            this.push(val);
        }
        if(index === 0){
            this.unshift(val);
        }
        var newNode = new Node(val)
        var item_before = this.get(index-1);
        var temp = item_before.next;
        item_before.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0 || index>this.length){
            return undefined;
        }
        if(index === this.length-1){
            this.pop();
        }
        if(index === 0){
            this.shift();
        }
        var previous = this.get(index-1);
        var temp = previous.next;
        previous.next = temp.next;
        this.length--;
        return temp;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;
        var count = 0;
        while(count < this.length){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
            count++;
        }
        return this;
    }
}

var newList = new SinglyLinkedList();
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
console.log(newList.reverse());
console.log(newList);