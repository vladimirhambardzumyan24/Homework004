let array = [5, 46, 17, -2, 89, 0, 26];
let number = 36;
let newArr = [];
let fixindex = 0;
let pop = true;
for (let i = 0; i < array.length; i++) {
  if (array[i] === number) {
    fixindex = i;
    pop = false;
  } else {
    newArr.push(Math.abs(array[i] - number));
  }
}
let min = newArr[0];
let fixindex2 = 0;
if (pop) {
  for (let i = 1; i < newArr.length; i++) {
    if (min > newArr[i]) {
      min = newArr[i];
      fixindex2 = i;
    }
  }
  console.log(fixindex2);
} else {
  console.log(fixindex);
}
