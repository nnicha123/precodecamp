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
    get(index){
        var count;
        var current;
        if(index<0 || index>=this.length){
            return null;
        }else if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count <= this.length/2){
                current = current.next;
                count++;
            }
            return current;
        }else{
            current = this.tail;
            count = this.length-1;
            while(count > this.length/2){
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(index,val){
        if(this.get(index)){
            this.get(index).val = val;
            return true;
        }return false;
    }
}
newList = new DoublyLinkedList();
// console.log(newList);
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
// console.log(newList);
newList.unshift('Alaska');
console.log(newList.get(3));
console.log(newList.set(3,"Hey"));
console.log(newList.get(3));