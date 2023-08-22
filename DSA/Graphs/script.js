//1. Implement a Graph using Adjacency List:


class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  getAdjacencyList() {
    return this.vertices;
  }
}
//2. Perform Breadth-First Search (BFS) Traversal:


function bfs(graph, startVertex) {
  const visited = new Set();
  const queue = [startVertex];
  visited.add(startVertex);

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    console.log(currentVertex);

    for (const neighbor of graph.get(currentVertex)) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}
//3. Find Shortest Path using Breadth-First Search (Unweighted Graph):


function shortestPathBFS(graph, startVertex, targetVertex) {
  const visited = new Set();
  const queue = [[startVertex]];
  visited.add(startVertex);

  while (queue.length > 0) {
    const path = queue.shift();
    const currentVertex = path[path.length - 1];

    if (currentVertex === targetVertex) {
      return path;
    }

    for (const neighbor of graph.get(currentVertex)) {
      if (!visited.has(neighbor)) {
        const newPath = [...path, neighbor];
        queue.push(newPath);
        visited.add(neighbor);
      }
    }
  }

  return null;
}
//4. Implement Dijkstra's Algorithm for Shortest Path (Weighted Graph):


function dijkstra(graph, startVertex) {
  const distances = new Map();
  const priorityQueue = new PriorityQueue();
  distances.set(startVertex, 0);
  priorityQueue.enqueue(startVertex, 0);

  while (!priorityQueue.isEmpty()) {
    const { element: currentVertex, priority } = priorityQueue.dequeue();

    if (priority > distances.get(currentVertex)) {
      continue;
    }

    for (const { vertex, weight } of graph.get(currentVertex)) {
      const distance = distances.get(currentVertex) + weight;
      if (distance < distances.get(vertex) || !distances.has(vertex)) {
        distances.set(vertex, distance);
        priorityQueue.enqueue(vertex, distance);
      }
    }
  }

  return distances;
}
//5. Check if a Graph Contains a Cycle using Depth-First Search (DFS):


function hasCycleDFS(graph) {
  const visited = new Set();
  const recStack = new Set();

  function isCyclic(vertex) {
    if (!visited.has(vertex)) {
      visited.add(vertex);
      recStack.add(vertex);

      for (const neighbor of graph.get(vertex)) {
        if (!visited.has(neighbor) && isCyclic(neighbor)) {
          return true;
        } else if (recStack.has(neighbor)) {
          return true;
        }
      }
    }

    recStack.delete(vertex);
    return false;
  }

  for (const vertex of graph.keys()) {
    if (isCyclic(vertex)) {
      return true;
    }
  }

  return false;
}
//6. Perform Topological Sort on a Directed Acyclic Graph (DAG):


function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(vertex) {
    visited.add(vertex);

    for (const neighbor of graph.get(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.unshift(vertex);
  }

  for (const vertex of graph.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack;
}