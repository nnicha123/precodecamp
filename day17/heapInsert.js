class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        var index = this.values.length - 1;
        const element = this.values;
        while (index >0) {
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.values[parentIdx];
            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;

        }

    }

}
let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.values);