class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority-b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    Dijkstra(start,finish){
        const nodes = new  PriorityQueue();
        const previous = {};
        const distances = {};
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){

            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    console.log(nextNode);
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.nodes;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor,candidate);
                    }
                }
            }
        }
    }
}
var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A","B",4);
graph.addEdge("A","C",2);
graph.addEdge("B","E",3);
graph.addEdge("C","D",2);
graph.addEdge("C","F",4);
graph.addEdge("D","F",1);
graph.addEdge("D","E",3);
graph.addEdge("E","F",1);