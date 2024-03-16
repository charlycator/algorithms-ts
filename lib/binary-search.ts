/*
 BINARY SEARCH:

 It is a search algorithm that finds the position of a target value within a sorted array or list.
 It compares the target value to the middle element of the array; if they are unequal, the half in
 which the target cannot lie is eliminated, and the search continues on the remaining half until it
 is successful or the remaining half is empty.

 For example, when you look for a word in a dictionary, In each step, you are effectively halving
 the part of the dictionary you need to look through.
*/
const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;  // if target not found, return -1
}

export default binarySearch;