const assert = require('assert');
const { dfs } = require('../lib/dfs-tree-search');

// A graph represented as an adjacency matrix.
const graph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

describe('dfs', function() {
  it('should visit all nodes', function() {
    const visited = new Array(graph.length).fill(false);

    dfs(graph, 0, visited);

    assert.equal(visited.every(x => x === true), true)
  });
});