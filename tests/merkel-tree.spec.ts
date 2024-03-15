import assert from 'assert';
import * as crypto from 'crypto';
import 'mocha';

import { fromData, hashPair } from '../lib/merkel-tree';

describe('MerkleTree', function() {
  it('should return correct root hash', function() {
    const data = [Buffer.from('data1'), Buffer.from('data2'), Buffer.from('data3')];
    const root = fromData(data);

    // Calculate the intermediate hashes
    const intermediateHash1 =
      crypto.createHash('sha256').
      update('data1').
      digest('hex');
    const intermediateHash2 =
      crypto.createHash('sha256').
      update('data2').
      digest('hex');
    const intermediateHash3 =
      crypto.createHash('sha256').
      update('data3').
      digest('hex');

    // Duplicate the last if odd number of nodes
    const intermediateHash4 = intermediateHash3;

    // Hash pairs of intermediate hashes
    const pairHash1 = hashPair(intermediateHash1, intermediateHash2);
    const pairHash2 = hashPair(intermediateHash3, intermediateHash4);

    // Hash the pairHashes together to get the expected root
    const expectedRootHash = hashPair(pairHash1, pairHash2);

    assert.strictEqual(root?.hash, expectedRootHash);
  });
});