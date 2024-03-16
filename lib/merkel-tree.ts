/*
 MERKEL TREE:

 Merkle Trees, named after their inventor Ralph Merkle, are essentially a type of binary tree filled with hashes.
 Every leaf node is the hash of a data block, and every non-leaf node is the hash of its child nodes.
 In essence, the Merkle tree is a tree of hashes.
 It's used when you have a large collection of data, such as a group of files, and you want to store them,
 yet also ensure that the data hasn't been tampered with.
 Are often used when dealing with a large amount of data that needs to be verified for correctness.
 This makes them especially useful in distributed systems, like in peer-to-peer networks or blockchains.
 For instance, Bitcoin uses a Merkle Tree to store transactions in every block, allowing for quick and efficient
 verification of transactions.:

 1- Create Data Blocks: First, you would break your data into blocks.
    If you think about books in a library, each block would be like a book.

 2- Hash Each Data Block: Next, you would use a special function known as a hash function on each data block.
    This would result in a unique identifier (hash) for each of your data blocks, similar to giving each book
    in your library a unique ID number.

 3- Pair and Hash Again: Then you pair these hashes up and apply the hash function to the pairs.
    If there's an odd number of hashes, the last one is hashed with itself.
    You repeat this "pair and hash" step
    until you're left with a single hash, called the "root".
    This process forms the binary tree structure.

 The final "root" hash is unique to your entire collection of data.
*/
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