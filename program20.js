let num = 15;
let size = num / 3;
let result = "";
for (let i = 1; i <= size; i++) {
  for (let j = 1, m = i; j <= i; j++) {
    result += ` ${m} `;
    m += size - j;
  }
  result += "\n";
}
console.log(result);
