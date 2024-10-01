const graphMatrix = [
    [0, 1, 2],
    [1, 0, 1],
    [0, 1, 0]
]

const graphList = [
    [1],
    [0, 1],
    [1]
]

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vextex){
        if(!this.adjacencyList[vextex]){
            this.adjacencyList[vextex] = []
        }
    }
//Graficos direcionados
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)

        this.adjacencyList[vertex2].push(vertex1)
    }

}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

console.log(graph.adjacencyList)