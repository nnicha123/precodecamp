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
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head  = newNode;
        }   
        this.length++;
        return this;
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
console.log(newList);
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
console.log(newList);
console.log(newList.shift());