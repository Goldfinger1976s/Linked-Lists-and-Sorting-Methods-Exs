const arrList = [23, 34, 2, 3, 98, 45, 34, 21, 32, 56, 76, 38, 25];
const newSet = new Set([23, 34, 2, 3, 98, 45, 34, 21, 32, 56, 76, 38, 25]);

const sortIt = (arr) => {
  arr.sort((a, b) => a - b);
  return arr;
};

function sortArr(a, b) {
  return a - b;
}

const newArrTake = (arr) => {
  arr.sortArr;
  return arr;
};

console.log(sortIt(arrList));

console.log(newArrTake(arrList));

console.log(Array.from(newSet).sort((a, b) => a - b));
