class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Sanfrancisco");
graph.addVertex("Bangkok");
console.log(graph.addEdge("Sanfrancisco","Tokyo"));
console.log(graph);
console.log(graph.addEdge("Bangkok","Tokyo"));
console.log(graph);