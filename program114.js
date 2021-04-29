let arr = [1, "10", "hi", 2, 3];
let countNumbers = 0;
let countString = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    countNumbers++;
  } else if (typeof arr[i] === "string") {
    countString++;
  }
}
console.log(`Numbers : ${countNumbers}, Strings : ${countString}`);
