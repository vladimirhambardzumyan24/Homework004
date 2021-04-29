let number = 1233;
let tiv = number.toString().split("");
let product = 1;
let sum = 0;
for (let i = 0; i < tiv.length; i++) {
  product *= +tiv[i];
  sum += +tiv[i];
}
if (product % sum === 0) {
  console.log(`Quotient is ${product / sum}`);
} else {
  console.log(`Remaunder is ${product % sum}`);
}
