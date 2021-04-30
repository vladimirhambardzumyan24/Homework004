let number = "0101011";
number = number.toString().split("");
let sum = 0;
let k = -1;
for (let i = number.length - 1; i >= 0; i--) {
  k++;
  if (number[i] == 1) {
    sum += Math.pow(2, k);
  }
}
console.log(sum);
