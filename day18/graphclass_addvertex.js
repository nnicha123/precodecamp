class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Sanfransisco");
console.log(graph);