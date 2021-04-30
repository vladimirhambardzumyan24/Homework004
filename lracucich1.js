let num = 152;
let newArr = num.toString().split("");
let min = newArr[0];
let max = newArr[0];
if (newArr.length > 1) {
  for (let i = 1; i < newArr.length; i++) {
    if (min > newArr[i]) {
      min = newArr[i];
    }
    if (max < newArr[i]) {
      max = newArr[i];
    }
  }
  console.log(max - min);
} else {
  console.log(0);
}
