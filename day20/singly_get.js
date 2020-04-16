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
    get(index){
        if(index<0 || index>=this.length-1){
            return undefined;
        }else{
            var current = this.head;
            var counter = 0;
            while(counter < index){
                current = current.next;
                counter++;
            }
        }
        return current;
    }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
// singlyLinkedList.get(0).val;
// singlyLinkedList.get(1).val;
// singlyLinkedList.get(2).val;
// singlyLinkedList.get(3).val;
console.log(singlyLinkedList.get(0).val);
singlyLinkedList.get(1);
singlyLinkedList.get(2);
singlyLinkedList.get(3);

