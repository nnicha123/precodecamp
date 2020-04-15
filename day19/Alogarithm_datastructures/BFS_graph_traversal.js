class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(vertex) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            results.push[vertex];
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            })

        })(start);
    }
    BFS(start){
        let queue = [start];
        let visited_arr = [];
        let visited = {};
        let currentVertex;
        visited[start] = true;
        while(queue.length){
         currentVertex = queue.shift();
         visited_arr.push(currentVertex);

         this.adjacencyList[currentVertex].forEach(neighbor => {
             if(!visited[neighbor]){
                 visited[neighbor] = true;
                 queue.push(neighbor);
             }
         })

        }
        return visited_arr;
    }
}