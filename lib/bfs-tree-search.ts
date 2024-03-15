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