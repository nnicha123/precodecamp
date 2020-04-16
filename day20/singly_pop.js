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
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }else{
            var popped = this.tail;
            var current = this.head;
            var newTail;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;   
            this.tail.next = null;
        }
        this.length--;
        return popped;
    }
}

var newNode = new SinglyLinkedList();
newNode.push(5);
newNode.push(4);
newNode.push(6);
newNode.push(5);
newNode.push(4);
newNode.push(6);
console.log(newNode.pop());
console.log(newNode);
