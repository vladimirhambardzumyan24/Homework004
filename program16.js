let arr = [5, 0, -9];
let minus=[]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    console.log("unsign")
    break
  } else if (arr[i] < 0) {
    minus.push(arr[i])
  }
}
if (minus.length % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}
