// Write a function in JavaScript/TypeScript that
// will accept an array and return the second
// largest number
// Eg:
// secondLargest([10,290,281,32,1,0,817]) should
// return 290

function secondLargest(arr) {
  const arrSort = arr.sort((a, b) => a - b);
  console.log(arrSort[arr.length - 2]);
}
secondLargest();
