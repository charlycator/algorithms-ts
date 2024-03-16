/*
 LINEAR SEARCH:
 Find a specific value within a list or array. It works by checking each element in the list in order,
 one after the other, until it finds a match or until it has examined all elements.
 If it finds the number (or other type of data) it's looking for, it will return the position (or index)
 of that number in the list. If it doesn't find the number, then it will usually return a specific value to indicate
 that the search was unsuccessful (for instance, -1)
*/
const linearSearch = (arr: number[], item: number): number =>
  arr.findIndex(el => el === item);


export default linearSearch;