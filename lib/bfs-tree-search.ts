/*
 BFS SEARCH:

 BFS is used to traverse or search in data structures like a graph or a tree, but here we are considering a
 tree for simplicity. The search starts from the root (topmost) node, then it visits all the nodes at the
 present depth or 'distance' from the root before moving to nodes of the next depth level.

 It moves broadly through our tree, checking all the 'siblings' (nodes with the same parent) before it moves down
 to the next level of children.
*/
export interface Node {
  name: string;
  children: Node[];
}

export function createNode (name: string, children: Node[] = []): Node {
  return { name, children };
}

export function bfs (node: Node): string[] {
  let array: string[] = [];
  let queue: Node[] = [];

  queue.push(node);
  while (queue.length > 0) {
    let current = queue.shift();
    if (current) {
      array.push(current.name);
      for (let child of current.children) {
        queue.push(child);
      }
    }
  }

  return array;
}