//piece of data -val
//reference to next node -next
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");
console.log(first);
console.log(first.next);
console.log(first.next);
console.log(first.next.next);
console.log(first.next.next.next);
console.log(first.next.next.next.next);


