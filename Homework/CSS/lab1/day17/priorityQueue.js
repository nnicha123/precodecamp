
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val,priority) {
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;

            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    dequeue() {
        //Swap - edge case come back to this
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx + 1;
            let rightChildIdx = 2*idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",3);
ER.enqueue("gunshot wound",1);
ER.enqueue("scaring",4);
ER.enqueue("high fever",6);
ER.enqueue("car crash",2);
ER.enqueue("dog bite",5);
console.log(ER);