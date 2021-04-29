let number = 15;
let tiv1 = 0,
  tiv2 = 1,
  nextTerm = 0;

for (let i = 1; i <= number; i++) {
  console.log(tiv1);
  nextTerm = tiv1 + tiv2;
  tiv1 = tiv2;
  tiv2 = nextTerm;
}
