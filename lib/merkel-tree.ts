import * as crypto from 'crypto';

type Hash = string;

type MerkleNode = {
  hash: Hash,
  left: MerkleNode | null,
  right: MerkleNode | null,
};

const createNode = (hash: Hash, left: MerkleNode | null, right: MerkleNode | null): MerkleNode => ({ hash, left, right });

export const hashPair = (first: Hash, second: Hash): Hash => {
  const hash = crypto.createHash('sha256');
  hash.update(first);
  hash.update(second);
  return hash.digest('hex');
};

export const fromData = (data: Buffer[]): MerkleNode | null => {
  if (data.length === 0) {
    return null;
  }

  let nodes: MerkleNode[] = data.map(d => createNode(crypto.createHash('sha256').update(d).digest('hex'), null, null));
  while (nodes.length > 1) {
    if (nodes.length % 2 === 1) {
      nodes.push(nodes[nodes.length - 1]);
    }

    const pairs: MerkleNode[] = [];
    for (let i = 0; i < nodes.length; i += 2) {
      const parent = createNode(hashPair(nodes[i].hash, nodes[i+1].hash), nodes[i], nodes[i+1]);
      pairs.push(parent);
    }

    nodes = pairs;
  }
  return nodes[0];
};