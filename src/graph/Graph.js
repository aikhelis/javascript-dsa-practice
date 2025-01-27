class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    printGraph() {
        if (Object.keys(this.adjacencyList).length !== 0) {
            console.log("{");
            for (const [key, value] of Object.entries(this.adjacencyList)) {
                console.log(" ", `${key}: ${value}`);
            }
            console.log("}");
        } else {
            console.log("{}");
        }
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return false;
        this.adjacencyList[vertex] = [];
        return true;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
            return false;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
            return false;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        return true;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) 
            return undefined;
        while (this.adjacencyList[vertex].length > 0) {
            this.removeEdge(vertex, this.adjacencyList[vertex].pop());
        }
        delete this.adjacencyList[vertex];
        return this;
    }
    

}



let myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("A", "D");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "D");

myGraph.printGraph();


/*
    EXPECTED OUTPUT:
    ----------------
    {
      A: [B, C, D],
      B: [A, D],
      C: [A, D],
      D: [A, B, C]
    }

*/  

