class Graph {
  constructor() {
    this.numOfNodes = 0;
    this.adjacentList = {};
    // { 3: [1,2] }
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numOfNodes++;
  }

  addEdge(node1, node2) {
    const list1 = this.adjacentList[node1];
    const list2 = this.adjacentList[node2];
    // console.log(list1);
    // console.log(list2);
    if (!list1.includes(node2)) this.adjacentList[node1].push(node2);
    if (!list2.includes(node1)) this.adjacentList[node2].push(node1);
    // if (!list1.includes(node2)) this.adjacentList[node1] = [...list1, node2];
    // if (!list2.includes(node1)) this.adjacentList[node2] = [...list2, node1];
  }

  showConnections() {
    const list = this.adjacentList;
    const keys = Object.keys(list);

    for (let i = 0; i < this.numOfNodes; i++) {
      console.log(`${keys[i]} -> ${list[keys[i]]}`);
    }
  }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 6);

graph.showConnections();
