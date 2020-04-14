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
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v=> v!== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v=> v!== vertex1);
    }
    removeVertex(vertex){
       while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex,adjacentVertex);
       }
       delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Sanfrancisco");
graph.addVertex("Bangkok");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");
graph.addEdge("Dallas","Tokyo");
graph.addEdge("Dallas","Aspen");
graph.addEdge("Hong Kong","Tokyo");
graph.addEdge("Los Angeles","Hong Kong");
graph.addEdge("Sanfrancisco","Tokyo");
graph.addEdge("Bangkok","Tokyo");
graph.removeEdge("Sanfrancisco","Tokyo");
graph.removeVertex("Hong Kong");
console.log(graph);