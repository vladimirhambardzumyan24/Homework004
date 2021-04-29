let a = 150,
  b = 87,
  c = 42;

if (a > b && b > c) {
  console.log(c, b, a);
} else if (a > b && c > b) {
  console.log(b, c, a);
} else if (b > a && a > c) {
  console.log(c, a, b);
} else if (b > a && c > a) {
  console.log(a, c, b);
} else if (c > a && a > b) {
  console.log(b, a, c);
} else {
  console.log(a, b, c);
}
