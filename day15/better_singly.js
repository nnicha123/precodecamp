class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
        
    }
}

var list = new SinglyLinkedList()
list.push("Hello");
console.log(list.head,list.tail);
list.push("GoodBye");
console.log(list.head,list.tail);