import * as assert from 'assert';
import { describe, it } from 'mocha';
import { Node, bfs, createNode } from '../lib/bfs-tree-search';

describe('Breadth first search', function() {

  it('should return correct BFS traversal', function() {

    let A: Node = createNode('A', [
      createNode('B'),
      createNode('C'),
      createNode('D', [
        createNode('E')
      ])
    ]);

    assert.deepStrictEqual(bfs(A), ['A', 'B', 'C', 'D', 'E']);
  });

  it('should throw an error for incorrect BFS traversal', function() {

    let A: Node = createNode('A', [
      createNode('B'),
      createNode('C'),
      createNode('D', [
        createNode('E')
      ])
    ]);

    assert.throws(
      () => { assert.deepStrictEqual(bfs(A), ['A', 'B', 'D', 'E', 'C']) },
      {
        name: 'AssertionError',
        message: 'The BFS result did not match expected output'
      }
    );
  });
});