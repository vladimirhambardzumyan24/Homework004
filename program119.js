let array = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];
let arr = [];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    sum += array[i][j];
  }
  arr.push(sum);
  sum = 0;
}
console.log(arr);
