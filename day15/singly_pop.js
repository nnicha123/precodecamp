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
    transverse(){
        var current = this.head;
        while(current){
            // console.log(current.val);
            current = current.next;
        }
    }
    pop(){
        var current = this.head;
        var count = 0;
        if(!current){
            return undefined;
        }
        while(current){
            count +=1;
            current = current.next;
            // console.log(count,current);
        }
        current = this.head

        while(count){
            current = current.next;
            count-=1;
        }
        // console.log(current);
        current = null;
        this.tail = current;
        this.length -=1;
        return this;
    }
}
var newList = new SinglyLinkedList();
newList.push('Betty');
newList.push('Alpha');
newList.push('Candy');
newList.push('Poop');
console.log(newList.pop());
