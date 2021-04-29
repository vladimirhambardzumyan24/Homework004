let number = 4564605;
let num = number.toString().split("");
let num1 = num[0];
num[0] = num[num.length - 1];
num[num.length - 1] = num1;
console.log(num.join(""));
