/*
Sort in decreasing order
importance: 4
let arr = [5, 2, 1, -10, 8];

... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10

Link: https://javascript.info/array-methods#sort-in-decreasing-order
*/

let arr = [5, 2, 1, -10, 8];
// Used sort method with comparators to find if b is bigger than a, 
// then a will be after b, resulting in descending order
arr = arr.sort((a, b) => (b - a));
alert( arr ); // 8, 5, 2, 1, -10