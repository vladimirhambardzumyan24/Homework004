let array = ["sdafs", "safgfdasgsda", "sd", "asdasd"];
let newArr = [];
for (let i = 0; i < array.length; i++) {
  newArr.push(array[i].length);
}
let min = newArr[0];
let max = newArr[0];

for (let i = 1; i < newArr.length; i++) {
  if (min > newArr[i]) {
    min = newArr[i];
  }
  if (max < newArr[i]) {
    max = newArr[i];
  }
}
console.log(min + max);
