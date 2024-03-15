import assert from 'assert';
import binarySearch from '../lib/binary-search';

describe('binary search', () => {
  it('should return the correct index when the target is in the array', () => {
    const arr = [2, 3, 4, 10, 40];

    assert.strictEqual(binarySearch(arr, 10), 3);
    assert.strictEqual(binarySearch(arr, 40), 4);
    assert.strictEqual(binarySearch(arr, 3), 1);
  });

  it('should return -1 when the target is not in the array', () => {
    const arr = [2, 3, 4, 10, 40];

    assert.strictEqual(binarySearch(arr, 50), -1);
    assert.strictEqual(binarySearch(arr, 1), -1);
  });
});