import assert from 'assert';
import linearSearch from '../lib/lineal-search';

describe('Linear Search', () => {
  it('should return the index of the item if found', () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 3;
    const expected = 2;
    const result = linearSearch(arr, item);

    assert.equal(result, expected, `Expected ${expected} but got ${result}`);
  });

  it('should return -1 if item not found', () => {
    const arr = [1, 2, 3, 4, 5];
    const item = 6;
    const expected = -1;
    const result = linearSearch(arr, item);

    assert.equal(result, expected, `Expected ${expected} but got ${result}`);
  });
});