class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return null;
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return newTail
    }
    get(index){
        if(index<0 || index>= this.length-1){
            return undefined;
        }
        var counter = 0;
        var current = this.head;
        while(counter < index){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index,val){
        var current = this.get(index);
        if(current){
            current.val = val;
            return true;
        }
        return false;
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(1);
singlyLinkedList.push(2);
singlyLinkedList.push(3);
singlyLinkedList.push(4);
singlyLinkedList.push(5);
// singlyLinkedList.pop();
// singlyLinkedList.pop();
console.log(singlyLinkedList.get(3));
singlyLinkedList.set(3,10);
console.log(singlyLinkedList.get(3));