let arr1 = [1, 10];
let lastItem = arr1.pop();
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
arr1.push(lastItem);
console.log(arr1);
