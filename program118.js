let arr = [4, 3, 0, 9];
let newArr = Array(99).fill(undefined);
for (let i = 0; i < arr.length; i++) {
  newArr[arr[i]] = arr[i];
}

console.log(newArr);
