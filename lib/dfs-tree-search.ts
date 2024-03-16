/*
 DFS SEARCH:

 The algorithm starts at the root of a binary tree and goes as far as possible along each branch before backtracking.
 This means you explore one path fully before backing up and trying an unexplored path.
 In a binary tree, DFS would explore all the way down one side of the tree (say left or low in a binary search)
 until it can't go any further, then it will backtrack and explore the other side. (Say right or high
 in a binary search.)

*/
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