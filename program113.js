let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let numbers = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    numbers.push(arr[i]);
  }
}
console.log(numbers);
