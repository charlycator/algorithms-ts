export function dfs(graph: number[][], startNode: number, visited: boolean[] = []): void {
  console.log(startNode);

  visited[startNode] = true;
  const neighbors = graph[startNode];

  for(let node = 0; node < neighbors.length; node++) {
    if(!visited[node] && neighbors[node] !== 0) {
      dfs(graph, node, visited);
    }
  }
}